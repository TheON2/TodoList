import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import {getTodos} from "../api/todos";
import {GlobalStyle, Layout} from "../redux/styles";
import TodoHeader from "../components/TodoHeader";
import AddForm from "../components/AddForm";
import TodosList from "../components/TodosList";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const {isLoading, isError, data} = useQuery("todos", getTodos);
  const {user} = useSelector(state => state.user)

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  if (!user.isLogged) {
    navigate("/Login");
  }

  return (
    <div id='root'>
      <GlobalStyle/>
      <Layout>
        <TodoHeader title={'My Todo List'} stack={'React'}/>
        <AddForm/>
        <TodosList todos={data}/>
      </Layout>
    </div>
  );
};

export default Main;