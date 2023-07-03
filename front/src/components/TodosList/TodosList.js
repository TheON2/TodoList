import TodoCard from "../TodoCard/TodoCard";
import {ListContainer, TodoContainer} from "./style";
import {useCallback, useEffect, useState} from "react";
import useMutate from "../../hooks/useMutate";
import {getTodosDone, getTodosDonePaging, getTodosWorking, getTodosWorkingPaging} from "../../api/todos";
import {
  changeViewMethod,
  changeViewMode,
  loadTodos,
  loadTodosPaging,
  resetTodos
} from "../../redux/reducers/todosSlice";
import {useDispatch, useSelector} from "react-redux";
import {debounce, throttle} from "lodash";
import Pagination from "../Pagination/Pagination";

const TodosList = ({todos}) => {
  const workingTodos_Mutate = useMutate(getTodosWorking,'todos',loadTodos)
  const doneTodos_Mutate = useMutate(getTodosDone,'todos',loadTodos)
  const workingTodosPage_Mutate = useMutate(getTodosWorkingPaging,'todos',loadTodosPaging)
  const doneTodosPage_Mutate = useMutate(getTodosDonePaging,'todos',loadTodosPaging)
  const dispatch = useDispatch()
  const { hasMoreTodos, todos: todolist, page: pageNum,viewMode,viewMethod } = useSelector(state => state.todos);
  const [page,setPage] = useState(0)

  const onChangeAll = useCallback(()=>{
    setPage(0)
    dispatch(resetTodos())
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
    if(hasMoreTodos){
      if(viewMethod===1){
        if(viewMode===2){
          console.log(page)
          workingTodos_Mutate.mutate(page)
          setPage(page+1)
        }else if(viewMode===3){
          doneTodos_Mutate.mutate(page)
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
  },[viewMode,viewMethod])

  const handleScroll = debounce(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollHeight - scrollTop === clientHeight) {
      if(hasMoreTodos){
        if(viewMethod===1){
          if(viewMode===2){
            workingTodos_Mutate.mutate(page)
            setPage(page+1)
          }else if(viewMode===3){
            doneTodos_Mutate.mutate(page)
            setPage(page+1)
          }
        }
      }
    }
  }, 300);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <ListContainer onScroll={handleScroll}>
      { viewMode === 1 &&
        <>
      <h2 className="list-title" onClick={()=>{onChangeViewMode(2)}}>Working.. 🔥</h2>
      <TodoContainer>
        {todos.filter((a) => a.done === false).slice(0, 4).map((todo) =>
          <TodoCard key={todo.id} todo={todo}/>
        )}
      </TodoContainer>
      <h2 className="list-title" onClick={()=>{onChangeViewMode(3)}}>Done..! 🎉</h2>
      <TodoContainer>
        {todos.filter((a) => a.done === true).slice(0, 4).map((todo) =>
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
        </TodoContainer></>}
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