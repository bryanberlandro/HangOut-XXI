import { Carousel } from "../components/Carousel";
import { Movie } from "../components/Movie";
import { FaLocationDot, FaTicket } from "react-icons/fa6";
import { Promo } from "../components/Promo";
import { UpcomingMovie } from "../components/UpcomingMovie";
import Navbar from "../components/Fragments/Navbar";
import { FeaturesLayout } from "../components/Layouts/FeaturesLayout";
import { useEffect, useState } from "react";
import { Notifications } from "../components/Notifications";
import { PartnersLayout } from "../components/Layouts/PartnersLayout";
import { FooterLayout } from "../components/Layouts/FooterLayout";
import { Link } from "react-router-dom";
import { Notification } from "../components/Elements/Notification/Notification";

export default function Home(){
    const [showNotification, setShowNotification] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const userIsLogin = localStorage.getItem('user')

    useEffect(() => {
        if(userIsLogin){
            setIsLogin(true)
        }
    }, [userIsLogin])

    function handleNotification(){
        setShowNotification(!showNotification)
    }
    
    function handleReturnNotification(){
        setShowNotification(!showNotification)
    }

    return (
        <>
            <Navbar username={userIsLogin}/>
            {isLogin 
            ? <Notification display={'hidden'}/>
            : <Notification display={'flex'}/>
            }
            <div className="max-w-7xl mx-auto">
                <main className="pt-14">
                    <div className="w-full py-5 flex justify-between px-[5%] relative md:px-[8%]">
                        <div className="flex gap-1 items-center cursor-pointer">
                            <FaLocationDot className="text-btn xl:text-lg"/>
                            <h1 className="font-medium xl:text-lg xl:font-bold">DEPOK</h1>
                        </div>
                        <Link to="/voucher">
                        <div className="flex gap-2 items-center cursor-pointer">
                            <FaTicket className="text-btn"/>
                            <h1 className="text-sm xl:font-semibold">Voucher</h1>
                        </div>
                        </Link>
                    </div>
                    <div className="px-[5%] md:px-[8%]">
                    <Carousel showNotif={() => handleNotification()}/>
                    </div>
                    <div className="mt-10 md:my-20">
                        <div className="w-full px-[7%] flex justify-between items-center md:px-[8%]">
                            <h1 className="font-semibold ">Sedang Tayang</h1>
                            <Link to={'/movies'}>
                            <a href="" className="text-sm text-btn underline underline-offset-2">Semua</a>
                            </Link>
                        </div>
                        <div className="mt-3 overflow-hidden ">
                            <div className="scroll-hidden flex gap-2 w-max overflow-scroll px-[5%] md:px-[8%]">
                                <button value={'all'} className="border-btn border-[1px] rounded-2xl text-sm py-1 px-3 text-btn">Semua Film</button>
                                <button value={'all'} className="border-zinc-300 border-[1px] rounded-2xl text-sm py-1 px-3 text-black">XXI</button>
                                <button value={'all'} className="border-zinc-300 border-[1px] rounded-2xl text-sm py-1 px-3 text-black">CGV</button>
                                <button value={'all'} className="border-zinc-300 border-[1px] rounded-2xl text-sm py-1 px-3 text-black">Cinepolis</button>
                                <button value={'all'} className="border-zinc-300 border-[1px] rounded-2xl text-sm py-1 px-3 text-black">Watchlist</button>
                            </div>
                            <Movie/>
                        </div>
                    </div>
                    <Promo/>
                    <Notifications onShowNotification={showNotification} returnNotification={() => handleReturnNotification()}/>
                    <UpcomingMovie/>
                    <FeaturesLayout/>
                    <div className="my-20">
                    <PartnersLayout/>
                    </div>
                </main>
            </div>
            <FooterLayout/>
        </>
    )
}