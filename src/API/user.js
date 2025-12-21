import axios from "axios";

// This creates the connection using your .env file
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
});

/* GET USERS */
export const getUsers = async (params) => {
  // We use 'api' (the instance), not 'axios'
  const res = await api.get("/users", { params });
  return res.data;
};

/* DELETE USER */
export const deleteUser = async (id) => {
  const res = await api.delete(`/users/${id}`);
  return res.data;
};

/* UPDATE STATUS */
export const updateStatus = async ({ id, status }) => {
  const res = await api.patch(`/users/${id}/status`, { status });
  return res.data;
};