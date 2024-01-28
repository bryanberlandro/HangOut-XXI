import { Carousel } from "./Carousel";
import { Movie } from "./Movie";
import { FaLocationDot, FaTicket } from "react-icons/fa6";
import { Promo } from "./Promo";
import { UpcomingMovie } from "./UpcomingMovie";

export function Hero(){
    return (
        <main className="pt-14">
            <div className="w-full py-5 flex justify-between px-[5%]">
                <div className="flex gap-1 items-center">
                    <FaLocationDot className="text-btn"/>
                    <h1 className="font-medium">DEPOK</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <FaTicket className="text-btn"/>
                    <h1 className="text-sm">Voucher</h1>
                </div>
            </div>
            <div className="px-[5%]">
            <Carousel/>
            </div>
            <div className="mt-5 ">
                <div className="w-full px-[7%] flex justify-between items-center">
                    <h1 className="font-semibold">Sedang Tayang</h1>
                    <a href="" className="text-sm text-tertiary underline underline-offset-2">Semua</a>
                </div>
                <div className="mt-3 overflow-hidden">
                    <div className="scroll-hidden flex gap-2 w-max overflow-scroll px-[5%]">
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
            <UpcomingMovie/>
        </main>
    )
}