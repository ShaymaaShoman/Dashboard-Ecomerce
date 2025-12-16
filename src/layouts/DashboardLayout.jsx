import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900">

      <Navbar />

      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col gap-6 lg:flex-row">

          <Sidebar />

          {/* Page Content */}
          <main className="flex-1">
            <Outlet />
          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
}
