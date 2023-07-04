import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import {getTodos} from "../../api/todos";
import Header from "../Header/Header";
import AddForm from "../../components/AddForm/AddForm";
import TodosList from "../../components/TodosList/TodosList";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {GlobalStyle, LayOut, MainContainer, TotalContainer} from "./style";
import Profile from "../../components/Profile/Profile";
import {getAuthToken} from "../../api/user";
import {authUser} from "../../redux/reducers/userSlice";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoading, isError, data} = useQuery("todos", getTodos);
  const {user} = useSelector(state => state.user)
  const { isError:tokenError, data:userData ,isSuccess:tokenSuccess} = useQuery('user',getAuthToken)

  useEffect(() => {
    if(tokenSuccess) {
      dispatch(authUser(userData));
    }else if(tokenError||user.token===undefined){
      navigate("/Login");
    }
  }, [user,tokenSuccess,tokenError, navigate]);

  useEffect(() => {
    if(tokenSuccess) {
      dispatch(authUser(userData));
    }else if(tokenError||user.token===undefined){
      navigate("/Login");
    }
  }, [user,tokenSuccess,tokenError, navigate]);

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
          <Header title={'The Todo'} stack={'React'} user={user}/>
            <AddForm/>
          <MainContainer>
            <TotalContainer>
              <Profile nickName={user.nickName} wokringCount={data.doneTodosCount} doneCount={data.notDoneTodosCount}/>
            </TotalContainer>
            <TodosList todos={data.Todos}/>
          </MainContainer>
        </LayOut>
    </div>
  );
};

export default Main;