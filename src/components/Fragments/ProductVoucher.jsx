export function ProductVoucher(){
    return(
        <>
        <div className="fixed bottom-0 bg-white rounded-t-xl w-full py-4 px-4 z-50">
            <div className="w-full">
                <h1 className="text-sm font-medium">Diskon / Cashback</h1>
                <p className="text-xs text-neutral-500">1 voucher dapat dipilih</p>
                <div className="w-full flex flex-col">
                    <div className="w-full border-b-2 flex h-24 overflow-hidden">
                        <div className="w-[30%] h-full overflow-hidden">
                            <img 
                            src="/img/undraw_discount.svg" 
                            alt="" 
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-medium">Diskon 20% s/d Rp 25RB</h1>
                            <p className="text-xs">Min. Belanja Rp.0</p>
                            <p className="text-xs text-neutral-500">Hingga 20.04.2024 <span className="text-btn">S&K</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}