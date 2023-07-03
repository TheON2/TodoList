import {useCallback} from "react";
import { deleteTodo,updateDoneTodo } from "../../api/todos";
import useMutate from "../../hooks/useMutate";
import {Link} from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import {ButtonSet, CardSet, ListWrapper, TodoContainer} from "./style";
import {useDispatch} from "react-redux";
import {TodoDelete} from "../../redux/reducers/todosSlice";

const TodoCard = ({todo}) => {
  const dispatch = useDispatch()
  const mutation_deleteTodo= useMutate(deleteTodo,'todos')
  const mutation_updateDoneTodo= useMutate(updateDoneTodo,'todos')
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
          <Link to={{
            pathname: `/${todo.id}`
          }}>자세하게 보기</Link>
        <div><h2 className="todo-title">{todo.title}</h2>
          <div>{todo.content}</div>
        </div>
        <ButtonSet>
          <CustomButton theme={'type2'} size={'medium'} onClick={delete_Todo}>삭제하기</CustomButton>
          {todo.done ? <CustomButton theme={'type1'} size={'medium'} onClick={update_DoneTodo}>취소</CustomButton>:
            <CustomButton theme={'type1'} size={'medium'} onClick={update_DoneTodo}>완료</CustomButton>}
        </ButtonSet>
      </TodoContainer>
    </ListWrapper>
  )
}

export default TodoCard