/* eslint-disable react/prop-types */
import { FaArrowLeft } from "react-icons/fa6";
import notif1 from "../assets/img/poster-2.jpg"
import notif2 from "../assets/img/poster-3.jpeg"
import { useState } from "react";

export function Notifications({onShowNotification}){
    const [state, setState] = useState(true)
    
    // function handleHideNotif(){
    //     !onShowNotification
    // }

    return(
        <>
        <div 
        className=
        {onShowNotification
            ? "w-full fixed z-[999] bg-white h-[100dvh] inset-0 transition-all duration-300 translate-x-0"
            : "w-full fixed z-[999] bg-white h-[100dvh] inset-0 transition-all duration-300 translate-x-[500px]"
        }
        
        >
            <div className="w-full relative flex items-center bg-white border-b-2 py-3 justify-center ">
            <FaArrowLeft className="absolute left-[5%] text-lg"/>
            <h1 className="text-xl font-semibold text-black contrast-125">HANGOUT.
                <span 
                className="bg-gradient-to-br from-btn to-btn-focus bg-clip-text text-transparent">XXI
                </span>
            </h1>

            </div>
            <div className="px-[5%] pt-4 "> 
                <h1 className="font-medium">Notifications ( 2 )</h1>
                <div className="flex flex-col gap-3 mt-4">
                    <div className="w-full rounded-md h-36 overflow-hidden flex shadow-multiple">
                        <div className="w-52 h-full">
                            <img src={notif1} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div className="pl-2">
                            <h2 className="text-neutral-500">29 Jan 2024</h2>
                            <h1 className="font-semibold">Agak Laen - Buy 1 Get 1 Free</h1>
                            <p className="text-neutral-600 mt-4 text-sm">Special Ticket Sales Film Agak Laen, Beli 2 Tiket, Bayar 1 Tiket</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-4">
                    <div className="w-full rounded-md h-36 overflow-hidden flex shadow-multiple">
                        <div className="w-52 h-full">
                            <img src={notif2} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div className="pl-2">
                            <h2 className="text-neutral-500">20 Jan 2024</h2>
                            <h1 className="font-semibold">Pre - Order Kraven</h1>
                            <p className="text-neutral-600 mt-4 text-sm">Pre order sekarang dan dapatkan Cashback 15% - Film Kraven</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}