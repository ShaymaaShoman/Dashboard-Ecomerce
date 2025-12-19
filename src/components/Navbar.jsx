import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b shadow-sm dark:bg-gray-900">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Left */}
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">
            E-Commerce Dashboard
          </h1>
        </div>

        {/* Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search products, orders..."
            className="w-64 rounded-lg border px-3 py-2 text-sm outline-none focus:ring dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Dark Mode */}
          <button
            onClick={() =>
              document.documentElement.classList.toggle("dark")
            }
            className="rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-white"
          >
            🌙
          </button>

          {/* Admin */}
          <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1 dark:bg-gray-800">
            <span className="text-sm font-medium text-gray-700 dark:text-white">
              Admin
            </span>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-4 py-1 text-sm text-white hover:bg-red-600 transition"
          >
            Logout
          </button>

          {/* Mobile Menu */}
          <button className="md:hidden rounded-lg bg-gray-200 px-3 py-2 dark:bg-gray-700">
            ☰
          </button>

        </div>
      </div>
    </header>
  );
}
export default Navbar;
