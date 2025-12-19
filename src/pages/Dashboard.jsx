// src/pages/Dashboard.jsx
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../API/user";

export default function Dashboard() {
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [sortBy, setSortBy] = useState("name");
  const [order, setOrder] = useState("asc");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", page, sortBy, order],
    queryFn: () =>
      getUsers({ page, limit, sortBy, order }),
    keepPreviousData: true,
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError) return <p className="p-6 text-red-500">Error loading users</p>;

  const users = data?.data || [];
  const totalPages = data?.pagination?.pages || 1;

  const toggleSort = (field) => {
    if (sortBy === field) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setOrder("asc");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-pink-100 text-pink-700">
            <tr>
              <th
                className="px-4 py-3 cursor-pointer"
                onClick={() => toggleSort("name")}
              >
                Name {sortBy === "name" && (order === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="px-4 py-3 cursor-pointer"
                onClick={() => toggleSort("email")}
              >
                Email {sortBy === "email" && (order === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="px-4 py-3 cursor-pointer"
                onClick={() => toggleSort("age")}
              >
                Role {sortBy === "role" && (order === "asc" ? "↑" : "↓")}
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">
                  No users found
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id} className="border-t hover:bg-pink-50">
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.role}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 rounded bg-pink-500 text-white disabled:bg-gray-300"
        >
          Prev
        </button>

        <span className="font-medium">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 rounded bg-pink-500 text-white disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
