import TodoCard from "./TodoCard";
import {ListContainer} from "../styles";
import styled from "styled-components";

export const TodoContainer = styled.div`
  gap: 20px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const TodosList = ({todos}) => {
  return (
    <ListContainer>
      <h2 className="list-title">Working.. 🔥</h2>
      <TodoContainer>
      {todos.filter((a)=>a.done===false).map((todo)=>
        <TodoCard key={todo.id} todo={todo}/>
      )}
    </TodoContainer>
      <h2 className="list-title">Done..! 🎉</h2>
      {todos.filter((a)=>a.done===true).map((todo)=>
        <TodoCard key={todo.id} todo={todo}/>
      )}
    </ListContainer>
  )
}

export default TodosList