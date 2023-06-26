import axios from "axios";

const addTodo = async (newTodo) => {
  await axios.post(`${process.env.REACT_APP_LOCAL_SERVER}/todos`, newTodo);
};

const getTodos = async () => {
  const response = await axios.get(`${process.env.REACT_APP_LOCAL_SERVER}/todos`);
  return response.data;
};

const updateDoneTodo = async (todo) => {
  console.log(todo)
  await axios.patch(`${process.env.REACT_APP_LOCAL_SERVER}/todos/${todo.id}`,{done:!(todo.done)});
};

const updateTodo = async (todo) => {
  console.log(todo)
  await axios.patch(`${process.env.REACT_APP_LOCAL_SERVER}/todos/${todo.id}`,todo);
};

const deleteTodo = async (todoId) => {
  await axios.delete(`${process.env.REACT_APP_LOCAL_SERVER}/todos/${todoId}`);
};

export { getTodos, addTodo , updateTodo , updateDoneTodo , deleteTodo };