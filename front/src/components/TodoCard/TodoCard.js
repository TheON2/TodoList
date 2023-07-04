import {useCallback} from "react";
import { deleteTodo,updateDoneTodo } from "../../api/todos";
import useMutate from "../../hooks/useMutate";
import {Link} from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import {ButtonSet, CardSet, ListWrapper, StyledLink, TodoContainer} from "./style";
import {useDispatch} from "react-redux";
import {loadTodos, TodoDelete} from "../../redux/reducers/todosSlice";

const TodoCard = ({todo}) => {
  const dispatch = useDispatch()
  const mutation_deleteTodo= useMutate(deleteTodo,'todos',loadTodos)
  const mutation_updateDoneTodo= useMutate(updateDoneTodo,'todos',loadTodos)
  const delete_Todo=useCallback(()=>{
    mutation_deleteTodo.mutate(todo.id)
    dispatch(TodoDelete(todo.id))
  },[todo,mutation_deleteTodo])
  const update_DoneTodo=useCallback(()=>{
    mutation_updateDoneTodo.mutate(todo)
    dispatch(TodoDelete(todo.id))
  },[todo,mutation_updateDoneTodo])

  return (
    <ListWrapper>
      <TodoContainer>
        <StyledLink  to={{pathname: `/${todo.id}`}}>More Detail</StyledLink >
        <div><h2 className="todo-title">{todo.title}</h2>
          <div>{todo.content}</div>
        </div>
        <ButtonSet>
          <CustomButton theme={'type2'} size={'medium'} onClick={delete_Todo}>Delete</CustomButton>
          {todo.done ? <CustomButton theme={'type1'} size={'medium'} onClick={update_DoneTodo}>Cancel</CustomButton>:
            <CustomButton theme={'type1'} size={'medium'} onClick={update_DoneTodo}>Done</CustomButton>}
        </ButtonSet>
      </TodoContainer>
    </ListWrapper>
  )
}

export default TodoCard