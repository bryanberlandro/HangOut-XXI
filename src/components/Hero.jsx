import { Carousel } from "./Carousel";
import { Movie } from "./Movie";

export function Hero(){
    return (
        <main className="pt-20 px-[7%]">
            <Carousel/>
            <div className="mt-5">
                <div className="w-full flex justify-between items-center">
                    <h1 className="font-semibold">Sedang Tayang</h1>
                    <a href="" className="text-sm text-tertiary underline underline-offset-2">Semua</a>
                </div>
                <div className="mt-3 overflow-hidden">
                    <div className="scroll-hidden flex gap-2 w-max overflow-scroll">
                        <button value={'all'} className="border-btn border-[1px] rounded-2xl text-sm py-1 px-3 text-btn">Semua Film</button>
                        <button value={'all'} className="border-tertiary border-[1px] rounded-2xl text-sm py-1 px-3 text-black">XXI</button>
                        <button value={'all'} className="border-tertiary border-[1px] rounded-2xl text-sm py-1 px-3 text-black">CGV</button>
                        <button value={'all'} className="border-tertiary border-[1px] rounded-2xl text-sm py-1 px-3 text-black">Cinepolis</button>
                        <button value={'all'} className="border-tertiary border-[1px] rounded-2xl text-sm py-1 px-3 text-black">Watchlist</button>
                    </div>
                    <Movie/>
                </div>
            </div>
        </main>
    )
}