/* eslint-disable react/prop-types */
import { useState } from "react"
import { Sidebar } from "../Sidebar"
import { HiMenu } from "react-icons/hi";
import { FaBell, FaUser, FaUserNinja } from "react-icons/fa6";
import { Notifications } from "../Notifications";
import { Link } from "react-router-dom";

export default function Navbar({username}) {
    const [showSidebar, setShowSidebar] = useState(false)
    const [notifications, setNotifications] = useState(2)
    const [showNotif, setShowNotif] = useState(false)

    function handleShowSidebar(){
        setShowSidebar(!showSidebar)
    }

    function handleShowNotification(){
        setShowNotif(!showNotif)
    }

    function handleReturnNotification(){
        setShowNotif(!showNotif)
    }


    return (
        <>
        <header className="w-full flex items-center justify-between px-[7%] h-14 bg-white border-b-2 z-50 fixed top-0 md:px-[8%] md:h-14 xl:px-[8%]">
            <h1 className="text-xl font-semibold text-black contrast-125">HANGOUT.<span className="bg-gradient-to-br from-btn to-btn-focus bg-clip-text text-transparent">XXI</span></h1>
            <div>
            </div>
        <nav className="gap-12 items-center hidden xl:flex xl:gap-20">
            <li className="text-zinc-700 text-sm xl:font-medium hover:text-zinc-800">
                <a href="">Home</a>
            </li>
            <li className="text-zinc-700 text-sm xl:font-medium hover:text-zinc-800">
                <a href="">TV Show</a>
            </li>
            <li className="text-zinc-700 text-sm xl:font-medium hover:text-zinc-800">
                <a href="">Movie</a>
            </li>
            <li className="text-zinc-700 text-sm xl:font-medium hover:text-zinc-800">
                <a href="">Contact</a>
            </li>
        </nav>
        <div className="flex gap-6 items-center">
            <Link to={'/profile'}>
                <div className="flex gap-2 items-center cursor-pointer">
                    {/* <h1 className="text-xs">{username}</h1> */}
                    <FaUser/>
                </div>
            </Link>
            <div onClick={handleShowNotification} className="relative">
                <FaBell className="text-black text-lg"/>
                <div className="absolute -top-2 -right-2 bg-btn rounded-full flex items-center h-4 w-4 justify-center text-white text-xs">
                    {notifications}
                </div>
            </div>
            <HiMenu className="text-black xl:hidden text-lg"  onClick={handleShowSidebar}/>
        </div>
        </header>
        <Notifications returnNotification={handleReturnNotification}  onShowNotification={showNotif}/>
        <Sidebar onShowSidebar={showSidebar}/>
        </>
    )
}