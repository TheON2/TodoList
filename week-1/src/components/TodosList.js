import TodoCard from "./TodoCard";

const TodosList = ({todos,deleteHandler,doneHandler}) => {

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      {todos.filter((a)=>a.done===false).map((todo)=>
        <TodoCard key={todo.id} todo={todo}
                  deleteHandler={deleteHandler} doneHandler={doneHandler}/>
      )}
      <h2 className="list-title">Done..! 🎉</h2>
      {todos.filter((a)=>a.done===true).map((todo)=>
        <TodoCard key={todo.id} todo={todo}
                  deleteHandler={deleteHandler} doneHandler={doneHandler}/>
      )}
    </div>
  )
}

export default TodosList