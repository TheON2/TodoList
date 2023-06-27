import React from 'react';
import {useQuery} from "react-query";
import {getTodos} from "../api/todos";
import {GlobalStyle, Layout} from "../redux/styles";
import TodoHeader from "../components/TodoHeader";
import AddForm from "../components/AddForm";
import TodosList from "../components/TodosList";

const Main = () => {
  const { isLoading, isError, data } = useQuery("todos", getTodos);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  return (
      <div id='root'>
        <GlobalStyle />
        <Layout>
          <TodoHeader title={'My Todo List'} stack={'React'}/>
          <AddForm/>
          <TodosList todos={data}/>
        </Layout>
      </div>
  );
};

export default Main;