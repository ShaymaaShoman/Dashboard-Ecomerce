
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
     <Navbar/>
      {/* Page Layout */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
         
          <Sidebar/>
         <Dashboard/>
        </div>
      </div>
    <Footer/>
     
    </div>
  );
}
