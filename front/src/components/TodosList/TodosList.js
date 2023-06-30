import TodoCard from "../TodoCard/TodoCard";
import {ListContainer, TodoContainer} from "./style";

const TodosList = ({todos}) => {
  return (
    <ListContainer>
      <h2 className="list-title">Working.. 🔥</h2>
      <TodoContainer>
        {todos.filter((a) => a.done === false).map((todo) =>
          <TodoCard key={todo.id} todo={todo}/>
        )}
      </TodoContainer>
      <h2 className="list-title">Done..! 🎉</h2>
    <TodoContainer>
      {todos.filter((a) => a.done === true).map((todo) =>
        <TodoCard key={todo.id} todo={todo}/>
      )}
    </TodoContainer>
    </ListContainer>
  )
}

export default TodosList