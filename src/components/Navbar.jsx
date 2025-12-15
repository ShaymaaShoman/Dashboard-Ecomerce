export function Navbar(){
    return (
        <>
         {/* Navbar */}
      <header className="bg-slate-400 shadow text-white">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-bold"> <h1 className="text-xl font-bold">Overview</h1>
      <span className="text-gray-600">Admin</span></div>


          {/* Desktop links */}
          <nav className="hidden md:flex gap-6 text-sm text-slate-200">
            <a className="hover:text-red" href="#">Home</a>
            <a className="hover:text-red" href="#">About</a>
            <a className="hover:text-red" href="#">Contact</a>
          </nav>

          {/* Mobile button (شكل فقط) */}
          <button className="md:hidden rounded-lg bg-slate-700 px-3 py-2 text-sm">
            Menu
          </button>
        </div>
      </header>
        
        </>
    )
}