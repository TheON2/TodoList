import api from "../axios/api";

//user
const addUser = async (newUser) => {
  await api.post(`/user`, newUser);
};

const getUser = async (userId) => {
  const response = await api.get(`/user/${userId}`);
  return response.data;
};

const getUsers = async () => {
  const response = await api.get(`/user`);
  return response.data;
};

const updateUser = async (sendData) => {
  await api.patch(`/user/${sendData.id}/nickname`, {nickname: sendData.nickname});
};

const deleteUser = async (userEmail) => {
  await api.delete(`/user/${userEmail}`);
};

export {addUser,getUser, getUsers, updateUser, deleteUser};