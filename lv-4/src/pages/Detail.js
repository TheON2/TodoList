import React, {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import styled from "styled-components";
import {useQuery} from "react-query";
import {getTodos} from "../api/todos";

const Container = styled.div`
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


const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data } = useQuery("todos", getTodos);
  const todo = data.find((todo) => todo.id === params.id)

  useEffect(() => {
    if (!todo) {
      alert("Invalid access. Redirecting to main page.");
      navigate("/");
    }
  }, [todo, navigate]);

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <div>
        <div className="sc-dkzDqf gIyIMD">
          <StyledButton className="sc-jSMfEi dcERit" onClick={handleButtonClick}>이전으로</StyledButton>
          <h1>{todo?.title}</h1>
        </div>
        <Container2>{todo?.content}</Container2>
      </div>
    </Container>
  )
}

export default Detail
