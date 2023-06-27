import {useCallback} from "react";
import {ButtonSet, CompleteButton, DeleteButton, ListWrapper, TodoContainer} from "../redux/styles";
import { deleteTodo,updateDoneTodo } from "../api/todos";
import useMutate from "../hooks/useMutate";
import {Link} from "react-router-dom";
import CustomButton from "./CustomButton";

const TodoCard = ({todo}) => {
  const mutation_deleteTodo= useMutate(deleteTodo,'todos')
  const mutation_updateDoneTodo= useMutate(updateDoneTodo,'todos')

  const delete_Todo=useCallback(()=>{
    mutation_deleteTodo.mutate(todo.id)
  },[todo,mutation_deleteTodo])

  const update_DoneTodo=useCallback(()=>{
    mutation_updateDoneTodo.mutate(todo)
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