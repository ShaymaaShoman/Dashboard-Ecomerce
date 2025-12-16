export function Card({title,value}){
    return(
        <>
        {/* Main Content */}
          <main className="flex-1 rounded-xl bg-white p-2 shadow card">
            {/* Cards Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
<div className="bg-white p-4 w-48 rounded-lg shadow card ml-4">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
            </div>
          </main>
        </>
    )
}