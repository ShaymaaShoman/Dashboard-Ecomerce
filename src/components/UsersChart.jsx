import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getUsers } from "../API/user";
 import { useQuery } from "@tanstack/react-query";
export default function UsersChart() {
  const { data: users, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading)
    return <p className="p-6 text-gray-500">Loading...</p>;

  if (isError)
    return <p className="p-6 text-red-500">Error loading data</p>;
  // 🛑 FIX: Guard Clause to check if 'users' is a valid array
  if (!users || !Array.isArray(users)) {
    // Return a loading state or a null value until the data arrives
    return (
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h3 className="mb-4 font-bold">Users Chart</h3>
        <p className="text-center text-gray-500">Loading user data...</p>
      </div>
    );
  }

  // This line is now safe because 'users' is guaranteed to be an array
  const chartData = users.map(u => ({
    name: u.username,
    users: u.id,
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6 card">
      <h3 className="mb-4 font-bold">Users Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        {/* NOTE: You should use 'data' prop, not 'users' prop for Recharts BarChart */}
        <BarChart data={chartData}> 
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="users" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}