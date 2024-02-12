/* eslint-disable react/prop-types */
export function VoucherCard({image, promo, date}){
    return(
        <>
        <div className="w-full rounded-md overflow-hidden shadow-multiple">
            <div className="w-full h-32">
                <img src={image} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="pl-2 py-2">
                <h1 className="font-semibold">{promo}</h1>
                <h2 className="text-neutral-500 mt-2">{date}</h2>
            </div>
        </div>
        </>
    )
}