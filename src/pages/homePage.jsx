import { Carousel } from "../components/Carousel";
import { Movie } from "../components/Movie";
import { FaLocationDot, FaTicket } from "react-icons/fa6";
import { Promo } from "../components/Promo";
import { UpcomingMovie } from "../components/UpcomingMovie";
import Navbar from "../components/Navbar";
import { FeaturesLayout } from "../components/Layouts/FeaturesLayout";
import { useState } from "react";
import { Notifications } from "../components/Notifications";
import { PartnersLayout } from "../components/Layouts/PartnersLayout";
import { FooterLayout } from "../components/Layouts/FooterLayout";

export default function Home(){
    const [showNotification, setShowNotification] = useState(false)

    function handleNotification(){
        setShowNotification(!showNotification)
    }
    
    function handleReturnNotification(){
        setShowNotification(!showNotification)
    }


    return (
        <>
        <Navbar/>
        <main className="pt-14">
            <div className="w-full py-5 flex justify-between px-[5%] md:px-[8%]">
                <div className="flex gap-1 items-center cursor-pointer">
                    <FaLocationDot className="text-btn xl:text-lg"/>
                    <h1 className="font-medium xl:text-lg xl:font-bold">DEPOK</h1>
                </div>
                <div onClick={() => handleNotification()} className="flex gap-2 items-center cursor-pointer">
                    <FaTicket className="text-btn"/>
                    <h1 className="text-sm xl:font-semibold">Voucher</h1>
                </div>
            </div>
            <div className="px-[5%] md:px-[8%]">
            <Carousel showNotif={() => handleNotification()}/>
            </div>
            <div className="mt-10 md:my-20">
                <div className="w-full px-[7%] flex justify-between items-center md:px-[8%]">
                    <h1 className="font-semibold ">Sedang Tayang</h1>
                    <a href="" className="text-sm text-btn underline underline-offset-2">Semua</a>
                </div>
                <div className="mt-3 overflow-hidden ">
                    <div className="scroll-hidden flex gap-2 w-max overflow-scroll px-[5%] md:px-[8%]">
                        <button value={'all'} className="border-btn border-[1px] rounded-2xl text-sm py-1 px-3 text-btn">Semua Film</button>
                        <button value={'all'} className="border-zinc-300 bg-white border-[1px] rounded-2xl text-sm py-1 px-3 text-black">XXI</button>
                        <button value={'all'} className="border-zinc-300 bg-white border-[1px] rounded-2xl text-sm py-1 px-3 text-black">CGV</button>
                        <button value={'all'} className="border-zinc-300 bg-white border-[1px] rounded-2xl text-sm py-1 px-3 text-black">Cinepolis</button>
                        <button value={'all'} className="border-zinc-300 bg-white border-[1px] rounded-2xl text-sm py-1 px-3 text-black">Watchlist</button>
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
        <FooterLayout/>
        </>
    )
}