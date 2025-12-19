import { useState } from "react";
import { useUsers, useDeleteUser } from "../hooks/useUsers";

export default function Users() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");

  const { data, isLoading } = useUsers({
    page,
    limit: 10,
    search,
    sort,
  });

  const deleteUser = useDeleteUser();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Users</h2>

      {/* Search & Sort */}
      <div className="flex gap-4 mb-4">
        <input
          placeholder="Search user..."
          className="border px-3 py-2 rounded"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          onChange={(e) => setSort(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="name">Name</option>
          <option value="-createdAt">Newest</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((user) => (
            <tr key={user._id} className="border-t">
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  onClick={() => deleteUser.mutate(user._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex gap-2 mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </button>
        <span>{page}</span>
        <button
          disabled={page === data.pagination.pages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
