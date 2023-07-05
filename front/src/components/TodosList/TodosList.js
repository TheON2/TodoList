import TodoCard from "../TodoCard/TodoCard";
import {ListContainer, TodoContainer} from "./style";
import {useCallback, useEffect, useState} from "react";
import useMutate from "../../hooks/useMutate";
import {getTodos, getTodosDone, getTodosDonePaging, getTodosWorking, getTodosWorkingPaging} from "../../api/todos";
import {
  changeViewMethod,
  changeViewMode, falseHaveNew,
  loadTodos, loadTodosDone,
  loadTodosPaging, loadTodosWorking,
  resetTodos, trueHaveNew,
} from "../../redux/reducers/todosSlice";
import {useDispatch, useSelector} from "react-redux";
import {debounce, throttle} from "lodash";
import Pagination from "../Pagination/Pagination";
import {useMutation, useQueryClient} from "react-query";
import {useInView} from "react-intersection-observer";

const TodosList = ({todos}) => {
  const dispatch = useDispatch()
  const { hasMoreTodos, todos: todolist, page: pageNum,viewMode,viewMethod,haveNew } = useSelector(state => state.todos);
  const [page,setPage] = useState(0)
  const [ref, inView] = useInView();

  const queryClient = useQueryClient();
  const workingTodosPage_Mutate = useMutate(getTodosWorkingPaging,'todos',loadTodosPaging)
  const doneTodosPage_Mutate = useMutate(getTodosDonePaging,'todos',loadTodosPaging)
  //const Todos_Mutate = useMutate(getTodos,'todos',loadTodos)
  const {mutate:Todos_Mutate, isLoading:todosLoading} = useMutation(getTodos, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('todos');
      dispatch(loadTodos(data))
    },
  });
  const {mutate:workingTodos_Mutate, isLoading:workingLoading} = useMutation(getTodosWorking, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('todos');
      dispatch(loadTodosWorking(data))
    },
  });
  const {mutate:doneTodos_Mutate, isLoading:doneLoading} = useMutation(getTodosDone, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('todos');
      dispatch(loadTodosDone(data))
    },
  });

  const onChangeAll = useCallback(()=>{
    setPage(0)
    dispatch(resetTodos())
    dispatch(trueHaveNew())
  },[])
  const onChangeViewMode = useCallback((num)=>{
    console.log(viewMode,num)
    if(viewMode!==num) {
      dispatch(changeViewMode(num))
      setPage(0)
    }
  },[viewMode])
  const onChangeViewMethod = useCallback((num)=>{
    console.log(viewMethod,num)
    if(viewMethod!==num) {
      dispatch(changeViewMethod(num))
      setPage(0)
    }
  },[viewMethod])

  useEffect(()=>{
    if(haveNew){
      Todos_Mutate()
      dispatch(falseHaveNew())
    }
    if(hasMoreTodos){
      if(viewMethod===1){
        if(viewMode===2){
          console.log(page)
          workingTodos_Mutate(page)
          setPage(page+1)
        }else if(viewMode===3){
          doneTodos_Mutate(page)
          setPage(page+1)
        }
      }else{
        if(viewMode===2){
          console.log(page)
          workingTodosPage_Mutate.mutate(0)
        }else if(viewMode===3){
          doneTodosPage_Mutate.mutate(0)
        }
      }
    }
  },[viewMode,viewMethod,haveNew])

  useEffect(
    () => {
      if (inView && hasMoreTodos) {
        if(viewMethod===1){
          if(viewMode===2 && !workingLoading){
            workingTodos_Mutate(page)
            setPage(page+1)
          }else if(viewMode===3 && !doneLoading){
            doneTodos_Mutate(page)
            setPage(page+1)
          }
        }
      }
    },[inView, hasMoreTodos, workingLoading, page]);

  useEffect(
    () => {
      console.log(todosLoading,todolist)
    },[todosLoading,todolist]);

  return (
    <ListContainer>
      { viewMode === 1 && !todosLoading &&
        <>
      <h2 className="list-title" onClick={()=>{onChangeViewMode(2)}}>Working.. 🔥</h2>
      <TodoContainer>
        {todolist.filter((a) => a.done === false).map((todo) =>
          <TodoCard key={todo.id} todo={todo}/>
        )}
      </TodoContainer>
      <h2 className="list-title" onClick={()=>{onChangeViewMode(3)}}>Done..! 🎉</h2>
      <TodoContainer>
        {todolist.filter((a) => a.done === true).map((todo) =>
          <TodoCard key={todo.id} todo={todo}/>
        )}
      </TodoContainer></>}
      { viewMode === 2 && viewMethod === 1 &&
      <>
        <h2 className="list-title" style={{display: 'flex'}} onClick={onChangeAll}>Working.. 🔥
          <span style={{marginLeft: 'auto'}}>
            <button onClick={(e)=>{e.stopPropagation();onChangeViewMethod(1)}}>인피</button>
            <button onClick={(e)=>{e.stopPropagation();onChangeViewMethod(2)}}>페이</button>
          </span>
        </h2>
        <TodoContainer>
          {todolist.map((todo) =>
            <TodoCard key={todo.id} todo={todo}/>
          )}
        </TodoContainer>
        <div id='bottom' style={{height:'200px'}} ref={hasMoreTodos && !workingLoading ? ref : undefined} />
       </>}
      { viewMode === 2 && viewMethod === 2 &&
      <>
        <h2 className="list-title" style={{display: 'flex'}} onClick={onChangeAll}>Working.. 🔥
          <span style={{marginLeft: 'auto'}}>
            <button onClick={(e)=>{e.stopPropagation();onChangeViewMethod(1)}}>인피</button>
            <button onClick={(e)=>{e.stopPropagation();onChangeViewMethod(2)}}>페이</button>
          </span>
        </h2>
        <Pagination page={pageNum}/>
        <TodoContainer>
          {todolist.map((todo) =>
            <TodoCard key={todo.id} todo={todo}/>
          )}
        </TodoContainer>
      </>}
      { viewMode === 3 && viewMethod === 1 &&
      <>
        <h2 className="list-title" style={{display: 'flex'}} onClick={onChangeAll}>Done..! 🎉
          <span style={{marginLeft: 'auto'}}>
            <button onClick={(e)=>{e.stopPropagation();onChangeViewMethod(1)}}>인피</button>
            <button onClick={(e)=>{e.stopPropagation();onChangeViewMethod(2)}}>페이</button>
          </span>
        </h2>
        <TodoContainer>
          {todolist.map((todo) =>
            <TodoCard key={todo.id} todo={todo}/>
          )}
        </TodoContainer>
        <div id='bottom' style={{height:'200px'}} ref={hasMoreTodos && !doneLoading ? ref : undefined} />
      </>}
      { viewMode === 3 && viewMethod === 2 &&
      <>
        <h2 className="list-title" style={{display: 'flex'}} onClick={onChangeAll}>Done..! 🎉
          <span style={{marginLeft: 'auto'}}>
            <button onClick={(e)=>{e.stopPropagation();onChangeViewMethod(1)}}>인피</button>
            <button onClick={(e)=>{e.stopPropagation();onChangeViewMethod(2)}}>페이</button>
          </span>
        </h2>
        <Pagination page={pageNum}/>
        <TodoContainer>
          {todolist.map((todo) =>
            <TodoCard key={todo.id} todo={todo}/>
          )}
        </TodoContainer></>}
    </ListContainer>
  )
}

export default TodosList