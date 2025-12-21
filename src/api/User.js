import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getUsers = async (params) => {
  const res = await axios.get(`${API}/users`, { params });
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`${API}/users/${id}`);
  return res.data;
};

export const updateStatus = async ({ id, status }) => {
  const res = await axios.patch(`${API}/users/${id}/status`, { status });
  return res.data;
};
