import { api } from "./api";

/* =======================
   GET USERS (pagination + search + sort)
======================= */
export const getUsers = async ({
  page = 1,
  limit = 10,
  search = "",
  sortBy = "name",
  order = "asc",
}) => {
  const { data } = await api.get("/users", {
    params: { page, limit, search, sortBy, order },
  });
  return data;
};

/* =======================
   ADD USER
======================= */
export const addUser = async (user) => {
  const { data } = await api.post("/users", user);
  return data;
};

/* =======================
   UPDATE USER
======================= */
export const updateUser = async (id, updates) => {
  const { data } = await api.put(`/users/${id}`, updates);
  return data;
};

/* =======================
   DELETE USER
======================= */
export const deleteUser = async (id) => {
  const { data } = await api.delete(`/users/${id}`);
  return data;
};
