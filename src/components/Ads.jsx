import { FaGift } from "react-icons/fa6";

export function Ads(){
    return (
        <>
        <div className="w-full bg-gradient-to-r from-btn items-center flex to-sky-300 mt-10 h-8 px-[5%] xl:h-12">
            <div className="text-white text-sm flex items-center gap-2 justify-center w-full xl:font-bold">
                <FaGift/>
                <h1>BAGIKAN KODE & DAPATKAN POIN !!</h1>
            </div>
        </div>
        </>
    )
}