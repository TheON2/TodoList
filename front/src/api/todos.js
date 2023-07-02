import api from "../axios/api";

//todos
const addTodo = async (newTodo) => {
  await api.post(`/todos`, newTodo);
};

const getTodos = async () => {
  const response = await api.get(`/todos`);
  return response.data;
};

const getTodosWorking = async (page) => {
  console.log(page)
  const response = await api.post(`/todos/working`, {page:page});
  return response.data;
};

const getTodosDone = async (page) => {
  const response = await api.post(`/todos/done`,{page:page});
  return response.data;
};

const updateDoneTodo = async (todo) => {
  await api.patch(`/todos/${todo.id}/done`, {done: !(todo.done)});
};

const updateTodo = async (sendData) => {
  await api.patch(`/todos/${sendData.id}/content`, {content: sendData.content});
};

const deleteTodo = async (todoId) => {
  await api.delete(`/todos/${todoId}`);
};


export {getTodos, addTodo, updateTodo, updateDoneTodo, deleteTodo ,getTodosDone ,getTodosWorking};