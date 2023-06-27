import api from "../axios/api";

const addTodo = async (newTodo) => {
  await api.post(`/todos`, newTodo);
};

const getTodos = async () => {
  const response = await api.get(`/todos`);
  return response.data;
};

const updateDoneTodo = async (todo) => {
  await api.patch(`/todos/${todo.id}/done`,{done:!(todo.done)});
};

const updateTodo = async (sendData) => {
  await api.patch(`/todos/${sendData.id}/content`,{content:sendData.content});
};

const deleteTodo = async (todoId) => {
  await api.delete(`/todos/${todoId}`);
};

export { getTodos, addTodo , updateTodo , updateDoneTodo , deleteTodo };