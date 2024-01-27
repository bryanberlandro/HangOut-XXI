import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false)

    function handleShowSidebar(){
        setShowSidebar(!showSidebar)
    }

    return (
        <>
        <header className="w-full flex items-center justify-between px-[7%] h-14 bg-zinc-900 z-50 fixed top-0 md:px-[10%] md:h-14 xl:px-[8%]">
            <h1 className="text-xl font-semibold text-white contrast-125">HANGOUT.<span className="text-btn font-semibold">XXI</span></h1>
            <div>
            </div>
        <nav className="gap-12 items-center hidden md:flex xl:gap-20">
            <li className="text-neutral-300 text-sm xl:font-medium hover:text-white">
                <a href="">Home</a>
            </li>
            <li className="text-neutral-300 text-sm xl:font-medium hover:text-white">
                <a href="">TV Show</a>
            </li>
            <li className="text-neutral-300 text-sm xl:font-medium hover:text-white">
                <a href="">Movie</a>
            </li>
            <li className="text-neutral-300 text-sm xl:font-medium hover:text-white">
                <a href="">Contact</a>
            </li>
        </nav>
        <div className="items-center gap-6 hidden md:block">
            <div className="text-neutral-300 text-sm flex gap-4">
                <a href="">Login</a> | <a href="">Register ?</a>
            </div>
        </div>
            <HiMenu className="text-white md:hidden text-lg"  onClick={handleShowSidebar}/>
        </header>
        <Sidebar onShowSidebar={showSidebar}/>
        </>
    )
}