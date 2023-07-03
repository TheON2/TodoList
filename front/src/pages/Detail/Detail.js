import React, {useCallback, useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useQuery} from "react-query";
import {getTodos} from "../../api/todos";
import CustomButton from "../../components/CustomButton/CustomButton";
import ReadTodo from "../../components/ReadTodo/ReadTodo";
import UpdateTodo from "../../components/UpdateTodo/UpdateTodo";
import {Container} from "./style";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const {data} = useQuery("todos", getTodos);
  const todo = data.todos.find((todo) => todo.id === params.id)
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
    <Container>
      <div>
        <CustomButton theme={'type1'} size={'medium'} onClick={handleButtonClick}>이전으로</CustomButton>
        { !onUpdate ?
          <ReadTodo todo={todo} toggleUpdate={toggleUpdate}/>:
          <UpdateTodo todo={todo} toggleUpdate={toggleUpdate}/>}
      </div>
    </Container>
  )
}

export default Detail
