import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {DELETE_TODOS_REQUEST, UPDATE_TODOS_REQUEST} from "../redux/reducers/todos";
import {ButtonSet, CompleteButton, DeleteButton, ListWrapper, TodoContainer} from "../styles";
import {Link} from "react-router-dom";

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
        <Link to={{
          pathname: `/${todo.id}`
        }}>자세하게 보기</Link>
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