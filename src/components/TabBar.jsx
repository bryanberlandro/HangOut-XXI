import { HiHome } from "react-icons/hi";
import { FaBuilding, FaTicket, FaUser } from "react-icons/fa6";

export function TabBar(){
    return (
        <>
        <div className="fixed bg-btn z-50 rounded-t-3xl bottom-0 w-full px-[7%] flex justify-between py-3 text-white ">
            <div className="flex flex-col items-center gap-1">
                <HiHome className="text-xl"/>
                <h1 className="text-sm">Beranda</h1>
            </div>
            <div className="flex flex-col items-center gap-1">
                <FaBuilding className="text-xl"/>
                <h1 className="text-sm">Bioskop</h1>
            </div>
            <div className="flex flex-col items-center gap-1">
                <FaTicket className="text-xl"/>
                <h1 className="text-sm">Voucher</h1>
            </div>
            <div className="flex flex-col items-center gap-1">
                <FaUser className="text-xl"/>
                <h1 className="text-sm">Profil</h1>
            </div>
        </div>
        </>
    )
}