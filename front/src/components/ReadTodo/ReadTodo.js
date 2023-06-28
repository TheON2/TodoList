import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import {Container2, DoneContainer, TitleContainer} from "./style";

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