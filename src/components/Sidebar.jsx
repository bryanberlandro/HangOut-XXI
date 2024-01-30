import { Link } from "react-router-dom";
import { ButtonComp } from "./ButtonComp";

/* eslint-disable react/prop-types */
export function Sidebar({onShowSidebar}){
    return (
        <nav className=
            {onShowSidebar 
                ? "w-52 h-[100vh] transition-all duration-500 fixed left-0 bottom-0 bg-neutral-100 z-10 flex flex-col justify-between pt-16 pb-6 px-2 xl:hidden" 
                : "w-52 h-[100vh] transition-all duration-500 -translate-x-96 fixed left-0 bottom-0 bg-neutral-100 z-10 flex flex-col justify-between pt-16 pb-6 px-2 xl:hidden"
            }>
            <ul>
                <li className="w-full pl-4 py-4 rounded-sm text-black hover:bg-neutral-200">
                    <a href="">Home</a>
                </li>
                <li className="w-full pl-4 py-4 rounded-sm text-black hover:bg-neutral-200">
                    <a href="">TV Show</a>
                </li>
                <li className="w-full pl-4 py-4 rounded-sm text-black hover:bg-neutral-200">
                    <a href="">Movie</a>
                </li>
                <li className="w-full pl-4 py-4 rounded-sm text-black hover:bg-neutral-200">
                    <a href="">Contact</a>
                </li>
            </ul>
            <div className="flex flex-col gap-3">
                <Link to="/login" className="w-full flex flex-col">
                <ButtonComp value={"Login"}/>
                </Link>
                <Link to="/register" className="w-full flex flex-col">
                <ButtonComp value={"Register"} bgStyle={"white"} textCol={"black"}/>
                </Link>
            </div>
        </nav>
    ) 
}