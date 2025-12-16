

 import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../API/User";
import { Card } from "../components/Card";
const Dashboard = () => {

  const { data: users, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading)
    return <p className="p-6 text-gray-500">Loading...</p>;

  if (isError)
    return <p className="p-6 text-red-500">Error loading data</p>;

  return (
    <div className="p-6 card">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 card">
        <Card title="Users" value={users.length} />
        <Card title="Active" value="8
        
        " />
        <Card title="Pending" value="2" />
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden card">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr className="card">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Dashboard;