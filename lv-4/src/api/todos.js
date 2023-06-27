import axios from "axios";

const addTodo = async (newTodo) => {
  await axios.post(`/todos`, newTodo);
};

const getTodos = async () => {
  const response = await axios.get(`/todos`);
  return response.data;
};

const updateDoneTodo = async (todo) => {
  await axios.patch(`/todos/${todo.id}`,{done:!(todo.done)});
};

const updateTodo = async (sendData) => {
  await axios.patch(`/todos/${sendData.id}`,{content:sendData.content});
};

const deleteTodo = async (todoId) => {
  await axios.delete(`/todos/${todoId}`);
};

export { getTodos, addTodo , updateTodo , updateDoneTodo , deleteTodo };