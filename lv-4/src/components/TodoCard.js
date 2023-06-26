import {useCallback} from "react";
import {ButtonSet, CompleteButton, DeleteButton, ListWrapper, TodoContainer} from "../redux/styles";
import { deleteTodo,updateTodo,updateDoneTodo } from "../api/todos";
import useMutate from "../hooks/useMutate";

const TodoCard = ({todo}) => {
  const mutation_deleteTodo= useMutate(deleteTodo,'todos')
  const mutation_updateTodo= useMutate(updateTodo,'todos')
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
        <div><h2 className="todo-title">{todo.title}</h2>
          <div>{todo.content}</div>
        </div>
        <ButtonSet>
          <DeleteButton onClick={delete_Todo}>삭제하기</DeleteButton>
          {todo.done ? <CompleteButton onClick={update_DoneTodo}>취소</CompleteButton>:
          <CompleteButton onClick={update_DoneTodo}>완료</CompleteButton>}
        </ButtonSet>
      </TodoContainer>
    </ListWrapper>
  )
}

export default TodoCard