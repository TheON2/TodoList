import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {ADD_TODOS_REQUEST} from "../redux/reducers/todos";
import useInput from "../hooks/useInput";
import {Button, Form, Input, InputGroup, Label} from "../styles";

const AddForm = () => {
  const [title,onChangeTitle,setTitle] = useInput('')
  const [content,onChangeContent,setContent] = useInput('')

  const dispatch = useDispatch();
  const addTodo=useCallback((e)=>{
    if(title===''){
      alert('제목을 입력하세용')
      return
    }
    if(content===''){
      alert('내용을 입력하세용')
      return
    }
    e.preventDefault()
    dispatch({
      type:ADD_TODOS_REQUEST,
      data: {title:title,content:content}
    })
    setTitle('')
    setContent('')
  },[title,content])

  return (
    <Form onSubmit={addTodo}>
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