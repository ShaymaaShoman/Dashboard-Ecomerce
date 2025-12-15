export function Sidebar (){
    return(
        <>
         {/* Sidebar */}
          <aside className="rounded-xl bg-white p-4 shadow lg:w-72">
            <h2 className="font-semibold">Sidebar</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="rounded-lg px-3 py-2 hover:bg-slate-100">Dashboard</li>
              <li className="rounded-lg px-3 py-2 hover:bg-slate-100">Orders</li>
              <li className="rounded-lg px-3 py-2 hover:bg-slate-100">Settings</li>
            </ul>
          </aside>
        </>
    )
}