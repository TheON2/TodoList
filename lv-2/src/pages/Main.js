import {GlobalStyle, Layout} from "../styles";
import TodoHeader from "../components/TodoHeader";
import AddForm from "../components/AddForm";
import TodosList from "../components/TodosList";
import React from "react";
import {useSelector} from "react-redux";

const Main = ()=>{
  const {todos} = useSelector((state)=>state.todos)
  return(
    <div id='root'>
      <GlobalStyle />
      <Layout>
        <TodoHeader title={'My Todo List'} stack={'React'}/>
        <AddForm/>
        <TodosList todos={todos}/>
      </Layout>
    </div>
  )
}

export default Main