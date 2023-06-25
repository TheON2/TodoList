import React from 'react';
import AddForm from "./components/AddForm";
import TodoHeader from "./components/TodoHeader";
import TodosList from "./components/TodosList";
import {useSelector} from "react-redux";
import {GlobalStyle, Layout} from "./redux/styles";

const App = () => {
  const {todos} = useSelector((state)=>state.todos)
  return (
    <div id='root'>
    <GlobalStyle />
      <Layout>
        <TodoHeader title={'My Todo List'} stack={'React'}/>
        <AddForm/>
        <TodosList todos={todos}/>
      </Layout>
    </div>
  );
};

export default App;