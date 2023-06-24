const TodoCard = ({todo,deleteHandler,doneHandler}) => {
  return (
    <div className="list-wrapper">
      <div className="todo-container">
        <div><h2 className="todo-title">{todo.title}</h2>
          <div>{todo.content}</div>
        </div>
        <div className="button-set">
          <button className="todo-delete-button button" onClick={()=>deleteHandler(todo.id)}>삭제하기</button>
          {todo.done ? <button className="todo-complete-button button" onClick={()=>doneHandler(todo.id)}>취소</button>:
            <button className="todo-complete-button button" onClick={()=>doneHandler(todo.id)}>완료</button>}
        </div>
      </div>
    </div>
  )
}

export default TodoCard