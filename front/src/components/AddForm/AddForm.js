import {useCallback} from "react";
import useInput from "../../hooks/useInput";
import {v4 as uuidv4} from 'uuid'
import {addTodo} from "../../api/todos";
import useMutate from "../../hooks/useMutate";
import CustomButton from "../CustomButton/CustomButton";
import {Form, Input, InputContent, InputGroup, Label} from "./style";
import {resetTodos} from "../../redux/reducers/todosSlice";

const AddForm = () => {
  const [title,onChangeTitle,setTitle] = useInput('')
  const [content,onChangeContent,setContent] = useInput('')
  const mutation = useMutate(addTodo,'todos',resetTodos)

  const add_Todo=useCallback((e)=>{
    if(title===''){
      alert('제목을 입력하세용')
      return
    }
    if(content===''){
      alert('내용을 입력하세용')
      return
    }
    e.preventDefault()

    const newTodo = {
      title,
      content,
      done: false,
      id: uuidv4(),
    };

    mutation.mutate(newTodo)

    setTitle('')
    setContent('')
  },[title,content,mutation,setTitle,setContent])

  return (
    <Form>
      <InputGroup>
        <Label>제목</Label>
        <Input value={title} onChange={onChangeTitle} />
        <Label>내용</Label>
        <InputContent value={content} onChange={onChangeContent} />
      </InputGroup>
      <CustomButton theme={'type1'} size={'medium'} onClick={add_Todo}>추가하기</CustomButton>
    </Form>
  );
};

export default AddForm;