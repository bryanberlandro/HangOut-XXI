/* eslint-disable react/prop-types */
export function VoucherCard({image, promo, date}){
    return(
        <>
        <div className="w-full rounded-md overflow-hidden shadow-multiple hover:scale-[.98] focus:scale-[.96] transition duration-150">
            <div className="w-full h-32">
                <img src={image} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="pl-2 py-2">
                <h1 className="font-semibold text-sm">{promo}</h1>
                <h2 className="text-neutral-500 mt-2 text-xs">{date}</h2>
            </div>
        </div>
        </>
    )
}