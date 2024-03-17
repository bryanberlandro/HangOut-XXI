import { Link } from "react-router-dom";
import { ButtonComp } from "./ButtonComp";

/* eslint-disable react/prop-types */
export function Sidebar({onShowSidebar}){
    const userData = localStorage.getItem('user');

    function handleLogOut(){
        localStorage.removeItem('user')
    }

    return (
        <nav className=
            {onShowSidebar 
                ? "w-56 h-[100vh] transition-all duration-500 fixed left-0 bottom-0 bg-neutral-100 z-40 flex flex-col justify-between pt-16 pb-6 px-4 xl:hidden" 
                : "w-56 h-[100vh] transition-all duration-500 -translate-x-96 fixed left-0 bottom-0 bg-neutral-100 z-40 flex flex-col justify-between pt-16 pb-6 px-4 xl:hidden"
            }>
            <ul>
                <Link to="/">
                    <li className="w-full pl-4 py-4 rounded-sm text-black hover:bg-neutral-200">
                        Home
                    </li>
                </Link>
                <Link to="/movie">
                    <li className="w-full pl-4 py-4 rounded-sm text-black hover:bg-neutral-200">
                        Movie
                    </li>
                </Link>
                <Link to='/ticket'>
                    <li className="w-full pl-4 py-4 rounded-sm text-black hover:bg-neutral-200">
                        Ticket
                    </li>
                </Link>
                <Link to="/food">
                    <li className="w-full pl-4 py-4 rounded-sm text-black hover:bg-neutral-200">
                        Food
                    </li>
                </Link>
                <Link to="/cinema">
                    <li className="w-full pl-4 py-4 rounded-sm text-black hover:bg-neutral-200">
                        Cinema
                    </li>
                </Link>
            </ul>
            <div className="flex flex-col gap-3">
                {
                    userData
                    ? (
                        <Link to="/login" className="w-full flex flex-col">
                            <ButtonComp onClick={() => handleLogOut()} value={"Log Out"}/>
                        </Link>
                    )
                    : (
                        <>
                            <Link to="/login" className="w-full flex flex-col">
                            <ButtonComp value={"Login"}/>
                            </Link>
                            <Link to="/register" className="w-full flex flex-col">
                            <ButtonComp value={"Register"} bgStyle={"white"} textCol={"black"}/>
                            </Link>
                        </>
                    )
                }
            </div>
        </nav>
    ) 
}