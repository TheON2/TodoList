import TodoCard from "../TodoCard/TodoCard";
import {ListContainer, TodoContainer} from "./style";
import {useCallback, useEffect, useState} from "react";
import useMutate from "../../hooks/useMutate";
import {getTodosDone, getTodosWorking} from "../../api/todos";
import {loadTodos} from "../../redux/reducers/todosSlice";
import {useSelector} from "react-redux";
import {debounce, throttle} from "lodash";

const TodosList = ({todos}) => {
  const workingTodos_Mutate = useMutate(getTodosWorking,'todos',loadTodos)
  const doneTodos_Mutate = useMutate(getTodosDone,'todos',loadTodos)
  const hasMoreTodos = useSelector(state => state.todos.hasMoreTodos)
  const todolist = useSelector(state => state.todos.todos)
  const [view,setView] = useState(1)
  const [viewSwitch,setViewSwitch] = useState(2)
  const [page,setPage] = useState(0)
  const onChangeAll = useCallback(()=>{
    setView(1)
  },[view])
  const onChangeWorking = useCallback(()=>{
    setView(2)
  },[view])
  const onChangeDone = useCallback(()=>{
    setView(3)
  },[view])

  useEffect(()=>{
    console.log(hasMoreTodos,viewSwitch,view,page)
    if(hasMoreTodos){
      if(viewSwitch===2){
        if(view===2){
          console.log(page)
          workingTodos_Mutate.mutate(page)
          setPage(page+1)
        }else if(view===3){
          doneTodos_Mutate.mutate(page)
          setPage(page+1)
        }
      }
    }
  },[view])

  const handleScroll = debounce(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollHeight - scrollTop === clientHeight) {
      if(hasMoreTodos){
        if(viewSwitch===2){
          if(view===2){
            workingTodos_Mutate.mutate(page)
            setPage(page+1)
          }else if(view===3){
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
      { view ===1 &&
        <>
      <h2 className="list-title" onClick={onChangeWorking}>Working.. 🔥</h2>
      <TodoContainer>
        {todos.filter((a) => a.done === false).slice(0, 4).map((todo) =>
          <TodoCard key={todo.id} todo={todo}/>
        )}
      </TodoContainer>
      <h2 className="list-title" onClick={onChangeDone}>Done..! 🎉</h2>
      <TodoContainer>
        {todos.filter((a) => a.done === true).slice(0, 4).map((todo) =>
          <TodoCard key={todo.id} todo={todo}/>
        )}
      </TodoContainer></>}
      { view === 2 &&
      <>
        <h2 className="list-title" onClick={onChangeAll}>Working.. 🔥</h2>
        <TodoContainer>
          {todolist.map((todo) =>
            <TodoCard key={todo.id} todo={todo}/>
          )}
        </TodoContainer>
       </>}
      { view === 3 &&
      <>
        <h2 className="list-title" onClick={onChangeAll}>Done..! 🎉</h2>
        <TodoContainer>
          {todolist.map((todo) =>
            <TodoCard key={todo.id} todo={todo}/>
          )}
        </TodoContainer></>}
    </ListContainer>
  )
}

export default TodosList