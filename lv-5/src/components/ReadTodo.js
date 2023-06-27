import React from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";

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

const ReadTodo = ({todo,toggleUpdate}) =>{
  return(
    <>
      <div>
        <TitleContainer>
          <DoneContainer done={todo?.done}>{todo?.done ? "완료" : "미완료"}</DoneContainer>
          <h1>{todo?.title}</h1>
        </TitleContainer>
      </div>
      <Container2>{todo?.content}</Container2>
      <div>
          <CustomButton theme={'type1'} size={'medium'} onClick={toggleUpdate}>수정하기</CustomButton>
      </div>
    </>
  )
}

export default ReadTodo