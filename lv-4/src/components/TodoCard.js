import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {DELETE_TODOS_REQUEST, UPDATE_TODOS_REQUEST} from "../reducers/todos";
import {ButtonSet, CompleteButton, DeleteButton, ListWrapper, TodoContainer} from "../redux/styles";

const TodoCard = ({todo}) => {
  const dispatch = useDispatch();
  const deleteTodo=useCallback(()=>{
    dispatch({
      type:DELETE_TODOS_REQUEST,
      data:todo.id
    })
  },[todo])
  const updateTodo=useCallback(()=>{
    dispatch({
      type:UPDATE_TODOS_REQUEST,
      data:todo.id
    })
  },[todo])

  return (
    <ListWrapper>
      <TodoContainer>
        <div><h2 className="todo-title">{todo.title}</h2>
          <div>{todo.content}</div>
        </div>
        <ButtonSet>
          <DeleteButton onClick={deleteTodo}>삭제하기</DeleteButton>
          {todo.done ? <CompleteButton onClick={updateTodo}>취소</CompleteButton>:
          <CompleteButton onClick={updateTodo}>완료</CompleteButton>}
        </ButtonSet>
      </TodoContainer>
    </ListWrapper>
  )
}

export default TodoCard