import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../API";

/* GET USERS */
export const useUsers = ({ page, limit, search, sort }) => {
  return useQuery({
    queryKey: ["users", page, search, sort],
    queryFn: async () => {
      const { data } = await api.get("/users", {
        params: { page, limit, search, sort },
      });
      return data;
    },
    keepPreviousData: true,
  });
};

/* ADD USER */
export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user) => api.post("/users", user),
    onSuccess: () => queryClient.invalidateQueries(["users"]),
  });
};

/* UPDATE USER */
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => api.put(`/users/${id}`, data),
    onSuccess: () => queryClient.invalidateQueries(["users"]),
  });
};

/* DELETE USER */
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => api.delete(`/users/${id}`),
    onSuccess: () => queryClient.invalidateQueries(["users"]),
  });
};

/* CHECK USER */
export const checkUser = async (email) => {
  const { data } = await api.get(`/users/check/${email}`);
  return data.exists;
};
