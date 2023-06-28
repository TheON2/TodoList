import React, {useCallback, useEffect} from "react";
import useMutate from "../../hooks/useMutate";
import {updateTodo} from "../../api/todos";
import CustomButton from "../CustomButton/CustomButton";
import useInput from "../../hooks/useInput";
import {Container2, DoneContainer, TextArea, TitleContainer} from "./style";

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