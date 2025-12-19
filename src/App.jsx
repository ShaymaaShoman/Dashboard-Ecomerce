import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import UsersChart from "./components/UsersChart";
import Dashboard from './pages/Dashboard';
import { useAuth } from "./auth/auth.jsx";
import Login from "./pages/Login.jsx"; 
import Users from "./pages/Users.jsx"
export default function App() {
  const { user, loading } = useAuth();
  
  if (loading) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to /dashboard أو /login حسب حالة المستخدم */}
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />

        {/* Login page */}
        <Route 
          path="/login" 
          element={!user ? <Login /> : <Navigate to="/dashboard" />} 
        />

        {/* Protected Layout */}
        <Route element={user ? <DashboardLayout /> : <Navigate to="/login" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<UsersChart />} />
        </Route>
        <Route path="/users" element={<Users />} />

      </Routes>
    </BrowserRouter>
  );
}
