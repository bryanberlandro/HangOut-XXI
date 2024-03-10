/* eslint-disable react/prop-types */
import { FaXmark } from "react-icons/fa6";

export function ProductVoucher({showVoucher, onClick}){
    return(
        <>
        <div className={`fixed bottom-0 bg-white rounded-t-xl w-full py-4 px-4 z-50 border-t-2 transition duration-500 ${showVoucher? 'translate-y-0' : 'translate-y-96'}`}>
            <div className="flex w-full justify-between">
                <h1 className="font-semibold">Voucher</h1>
                <FaXmark onClick={onClick} className="text-btn"/>
            </div>
            <div className="w-full mt-4">
                <h1 className="text-sm font-medium">Diskon / Cashback</h1>
                <p className="text-xs text-neutral-500">1 voucher dapat dipilih</p>
                <div className="w-full flex flex-col my-3">
                    <div className="w-full border-b-2 flex h-24 overflow-hidden items-center">
                        <div className="w-[30%] h-full overflow-hidden">
                            <img 
                            src="/img/undraw_discount.svg" 
                            alt="" 
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col pl-2 h-full w-[60%]">
                            <h1 className="text-sm font-medium">Diskon 20% s/d Rp 25RB</h1>
                            <p className="text-xs">Min. Belanja Rp.0</p>
                            <p className="text-xs text-neutral-500 mt-2">Hingga 20.04.2024 <span className="text-btn">S&K</span></p>
                        </div>
                        <div className="w-[10%] h-full flex items-center">
                            <button className="focus:bg-btn-focus w-5 h-5 rounded-full border-2 border-btn">

                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="w-full mt-4 bg-btn text-white py-3 rounded-md text-center">
                <p>Gunakan Voucher</p>
            </button>
        </div>
        </>
    )
}