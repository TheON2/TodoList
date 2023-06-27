import React, {useCallback, useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import styled from "styled-components";
import {useQuery} from "react-query";
import {getTodos} from "../api/todos";
import CustomButton from "../components/CustomButton";
import ReadTodo from "../components/ReadTodo";
import UpdateTodo from "../components/UpdateTodo";

const Container1 = styled.div`
  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  gap: 20px;
  height: 500px;
`;

const Container2 = styled.div`
  background-color: white;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  gap: 20px;
  width: 700%;
  height: 50%;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: darkslategray;
  color: white;
  font-weight: 700;
  font-size: 17px;
  border: 0;
  border-radius: 13px;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
`;

export const DoneContainer = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background-color: ${props => props.done ? 'green' : 'red'};
`;

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const {data} = useQuery("todos", getTodos);
  const todo = data.find((todo) => todo.id === params.id)
  const [onUpdate,setOnUpdate]=useState(false)

  useEffect(() => {
    if (!todo) {
      alert("Invalid access. Redirecting to main page.");
      navigate("/");
    }
  }, [todo, navigate]);

  const handleButtonClick = () => {
    navigate("/");
  };

  const toggleUpdate = useCallback(()=>{
    setOnUpdate(prev => !prev)
  },[])

  return (
    <Container1>
      <div>
        <CustomButton theme={'type1'} size={'medium'} onClick={handleButtonClick}>이전으로</CustomButton>
        { !onUpdate ?
          <ReadTodo todo={todo} toggleUpdate={toggleUpdate}/>:
          <UpdateTodo todo={todo} toggleUpdate={toggleUpdate}/>}
      </div>
    </Container1>
  )
}

export default Detail
