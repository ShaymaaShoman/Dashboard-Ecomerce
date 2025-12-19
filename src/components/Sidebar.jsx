import { NavLink } from "react-router-dom";

export function Sidebar() {
    const menu = [
    { name: "Products", icon: "📦" },
    { name: "Categories", icon: "🗂️" },
    { name: "Orders", icon: "🛒" },
    { name: "Customers", icon: "👥" },
    { name: "Settings", icon: "⚙️" },
  ];
  return (
    <aside className="w-72 rounded-xl bg-white p-5 shadow dark:bg-gray-800">
      <h2 className="mb-6 text-xl font-bold dark:text-white">E-Commerce</h2>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `block rounded-lg px-4 py-2 mb-2 ${
            isActive
              ? "bg-pink-500 text-white"
              : "text-slate-600 hover:bg-slate-100 dark:text-gray-300 dark:hover:bg-gray-700"
          }`
        }
      >
        Dashboard 📊
      </NavLink>

      <NavLink
        to="/analytics"
        className={({ isActive }) =>
          `block rounded-lg px-4 py-2 ${
            isActive
              ? "bg-pink-500 text-white"
              : "text-slate-600 hover:bg-slate-100 dark:text-gray-300 dark:hover:bg-gray-700"
          }`
        }
      >
        Analytics 📈
      </NavLink>
      
      <NavLink
        to="/"
        className={({ isActive }) =>
          `block rounded-lg px-4 py-2 ${
            isActive
              ? "bg-pink-500 text-white"
              : "text-slate-600 hover:bg-slate-100 dark:text-gray-300 dark:hover:bg-gray-700"
          }`
        }
      >
        <ul className="space-y-1 text-sm">
        {menu.map((item) => (
          <li
            key={item.name}
            className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <span>{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
      </NavLink>
    </aside>
  );
}
