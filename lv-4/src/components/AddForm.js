import {useCallback} from "react";
import useInput from "../hooks/useInput";
import {Button, Form, Input, InputGroup, Label} from "../redux/styles";
import {useMutation, useQueryClient} from "react-query";
import {v4 as uuidv4} from 'uuid'
import {addTodo} from "../api/todos";

const AddForm = () => {
  const [title,onChangeTitle,setTitle] = useInput('')
  const [content,onChangeContent,setContent] = useInput('')

  const queryClient = new useQueryClient()

  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

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
  },[title,content])

  return (
    <Form onSubmit={add_Todo}>
      <InputGroup>
        <Label>제목</Label>
        <Input value={title} onChange={onChangeTitle} />
        <Label>내용</Label>
        <Input value={content} onChange={onChangeContent} />
      </InputGroup>
      <Button>추가하기</Button>
    </Form>
  );
};

export default AddForm;