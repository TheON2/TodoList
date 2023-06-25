import {useCallback} from "react";
import {ButtonSet, CompleteButton, DeleteButton, ListWrapper, TodoContainer} from "../redux/styles";
import {useMutation, useQueryClient} from "react-query";
import { deleteTodo,updateTodo,updateDoneTodo } from "../api/todos";

const TodoCard = ({todo}) => {
  const queryClient = new useQueryClient()

  const mutation_deleteTodo= useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const mutation_updateTodo= useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const mutation_updateDoneTodo= useMutation(updateDoneTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const delete_Todo=useCallback(()=>{
    mutation_deleteTodo.mutate(todo.id)
  },[todo])

  const update_DoneTodo=useCallback(()=>{
    mutation_updateDoneTodo.mutate(todo)
  },[todo])

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