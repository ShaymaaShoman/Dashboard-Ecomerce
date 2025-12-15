export function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: "📊" },
    { name: "Products", icon: "📦" },
    { name: "Categories", icon: "🗂️" },
    { name: "Orders", icon: "🛒" },
    { name: "Customers", icon: "👥" },
    { name: "Analytics", icon: "📈" },
    { name: "Settings", icon: "⚙️" },
  ];

  return (
    <aside className="h-screen w-72 rounded-xl bg-white p-5 shadow">
      {/* Brand */}
      <h2 className="mb-6 text-xl font-bold text-gray-800">
        E-Commerce
      </h2>

      {/* Menu */}
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
    </aside>
  );
}
