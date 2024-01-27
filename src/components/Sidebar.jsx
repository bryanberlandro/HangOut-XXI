/* eslint-disable react/prop-types */
export function Sidebar({onShowSidebar}){
    return (
        <nav className=
            {onShowSidebar 
                ? "w-52 h-[100vh] transition-all duration-500 fixed left-0 bottom-0 bg-secondary z-10 flex flex-col justify-between pt-16 pb-6 px-2 md:hidden" 
                : "w-52 h-[100vh] transition-all duration-500 -translate-x-96 fixed left-0 bottom-0 bg-zinc-700 z-10 flex flex-col justify-between pt-16 pb-6 px-2 md:hidden"
            }>
            <ul>
                <li className="w-full pl-4 py-4 rounded-sm hover:bg-tertiary">
                    <a href="">Home</a>
                </li>
                <li className="w-full pl-4 py-4 rounded-sm hover:bg-tertiary">
                    <a href="">TV Show</a>
                </li>
                <li className="w-full pl-4 py-4 rounded-sm hover:bg-tertiary">
                    <a href="">Movie</a>
                </li>
                <li className="w-full pl-4 py-4 rounded-sm hover:bg-tertiary">
                    <a href="">Contact</a>
                </li>
            </ul>
            <div className="flex flex-col gap-2">
                <button className="py-3 bg-btn rounded-sm text-white font-medium transition-all duration-200 hover:bg-btn-focus hover:scale-[.98]">Login</button>
                <button className="py-3 text-white font-medium border-2 border-slate-200 rounded-sm transition-all duration-200 hover:border-slate-400 hover:scale-[.98]">Sign Up</button>
            </div>
        </nav>
    )
}