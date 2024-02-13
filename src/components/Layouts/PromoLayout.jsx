import { useState } from "react"
import { VoucherCard } from "../Fragments/VoucherCard"


export function PromoLayout(){
    const [total, setTotal] = useState(1)

    return (
        <>
        <div className="px-[7%] flex justify-between my-5">
        <h1 className="font-semibold text-lg">Voucher</h1>
        <p>( {total} )</p>
        </div>
        <div className="w-full px-[7%] flex flex-col gap-4">
            {total == 0 
            ? <div className="text-neutral-300 text-center mt-10">No Vouchers Found</div>
            : <VoucherCard 
                image={'/img/banner-2.jpg'} 
                promo={'Gampang Cuan - Buy 1 Get 1 Free'} 
                date={'Valid until 14-02-2024'}
                />
            }
        </div>
        </>
    )
}