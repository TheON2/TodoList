import TodoCard from "../TodoCard/TodoCard";
import {ListContainer, TodoContainer} from "./style";
import {useCallback, useState} from "react";

const TodosList = ({todos}) => {
  const [view,setView] = useState(1)
  const onChangeAll = useCallback(()=>{
    setView(1)
  },[view])
  const onChangeWorking = useCallback(()=>{
    setView(2)
  },[view])
  const onChangeDone = useCallback(()=>{
    setView(3)
  },[view])
  return (
    <ListContainer>
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
          {todos.filter((a) => a.done === false).map((todo) =>
            <TodoCard key={todo.id} todo={todo}/>
          )}
        </TodoContainer>
       </>}
      { view === 3 &&
      <>
        <h2 className="list-title" onClick={onChangeAll}>Done..! 🎉</h2>
        <TodoContainer>
          {todos.filter((a) => a.done === true).map((todo) =>
            <TodoCard key={todo.id} todo={todo}/>
          )}
        </TodoContainer></>}
    </ListContainer>
  )
}

export default TodosList