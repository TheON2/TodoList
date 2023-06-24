import React, {useState} from 'react';
import 'App.css'
import useInput from "./hooks/useInput";
import AddForm from "./components/AddForm";
import TodoHeader from "./components/TodoHeader";
import TodosList from "./components/TodosList";

const App = () => {
  const [todos, setTodos] = useState([
    { id:1,title: 1, content: '송중기' ,done:false},
    { id:2,title: 1, content: '송중기',done:false },
    { id:3,title: 1, content: '송중기' ,done:true},
    { id:4,title: 1, content: '송중기',done:false },
  ]);
  const [title,onChangeTitle,setTitle] = useInput('')
  const [content,onChangeContent,setContent] = useInput('')

  const addTodoHandler = (title,content) => {
    const newTodos = {
      id: todos.length + 1,
      title: title,
      content: content,
      done:false,
    };

    setTodos([...todos, newTodos]);
    setTitle('')
    setContent('')
  };

  const deleteTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const doneTodoHandler = (id) => {
    const newTodoList = todos.map((todo) => {
      if(todo.id === id) return { ...todo, done: !(todo.done) };
      return todo;
    });
    setTodos(newTodoList);
  }

  return (
    <div id='root'>
      <div className='layout'>
        <TodoHeader title={'My Todo List'} stack={'React'}/>
        <AddForm title={title}
                 content={content}
                 onChangeTitle={onChangeTitle}
                 onChangeContent={onChangeContent}
                 addTodoHandler={addTodoHandler}
        />
        <TodosList todos={todos}
                   deleteHandler={deleteTodoHandler}
                   doneHandler={doneTodoHandler}/>
      </div>
    </div>
  );
};

export default App;