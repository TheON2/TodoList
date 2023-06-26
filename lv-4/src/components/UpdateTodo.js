import React, {useCallback, useEffect} from "react";
import styled from "styled-components";
import useMutate from "../hooks/useMutate";
import {updateTodo} from "../api/todos";
import CustomButton from "./CustomButton";
import useInput from "../hooks/useInput";

const Container2 = styled.div`
  background-color: white;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  gap: 20px;
  width: 400%;
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

export const TextArea = styled.textarea`
  align-items: center;
  border: 1px #ddd;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 300%;
  resize: none;
`;

const UpdateTodo = ({todo,toggleUpdate}) => {
  const mutation_updateTodo= useMutate(updateTodo,'todos')
  const [content,onChangeContent,setContent] = useInput('')

  const update_Todo=useCallback(()=>{
    const sendData ={id:todo.id,content}
    mutation_updateTodo.mutate(sendData)
    toggleUpdate()
  },[todo,mutation_updateTodo,content,setContent])

  useEffect(()=>{
    setContent(todo.content)
  },[])

  return (
    <>
      <div>
        <TitleContainer>
          <DoneContainer done={todo?.done}>{todo?.done ? "완료" : "미완료"}</DoneContainer>
          <h1>{todo?.title}</h1>
        </TitleContainer>
      </div>
      <Container2>
        <TextArea name="body" rows="20" maxLength="200" value={content} onChange={onChangeContent}></TextArea>
      </Container2>
      <div>
        <CustomButton theme={'type1'} size={'medium'} onClick={update_Todo}>수정완료</CustomButton>
      </div>
    </>
  )
}

export default UpdateTodo