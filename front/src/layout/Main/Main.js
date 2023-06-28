import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import {getTodos} from "../../api/todos";
import Header from "../Header/Header";
import AddForm from "../../components/AddForm/AddForm";
import TodosList from "../../components/TodosList/TodosList";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {GlobalStyle, LayOut} from "./style";

const Main = () => {
  const navigate = useNavigate();
  const {isLoading, isError, data} = useQuery("todos", getTodos);
  const {user} = useSelector(state => state.user)

  useEffect(() => {
    if (!user.isLogged) {
      navigate("/Login");
    }
  }, [user, navigate]);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  return (
    <div id='root'>
      <GlobalStyle/>
      <LayOut>
        <Header title={'My Todo List'} stack={'React'}/>
        <AddForm/>
        <TodosList todos={data}/>
      </LayOut>
    </div>
  );
};

export default Main;