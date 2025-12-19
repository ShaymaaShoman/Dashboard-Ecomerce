import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../API/user";

export default function UsersChart() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) return <p className="p-6 text-gray-500">Loading...</p>;
  if (isError) return <p className="p-6 text-red-500">Error loading data</p>;

  const usersArray = data?.data || [];

  // Example: count users by role
  const roleCounts = {};
  usersArray.forEach(u => {
    roleCounts[u.role] = (roleCounts[u.role] || 0) + 1;
  });

  const chartData = Object.entries(roleCounts).map(([role, count]) => ({
    name: role,
    users: count,
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6 card">
      <h3 className="mb-4 font-bold">Users Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="users" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
