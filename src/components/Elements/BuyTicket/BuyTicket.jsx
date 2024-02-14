/* eslint-disable react/prop-types */
export function BuyTicket({children}){
    return (
        <>
        <button className="fixed right-0 left-0 bottom-0 gap-2 bg-btn-focus flex items-center justify-center text-white py-2 text-base font-medium">
            {children}
        </button>   
        </>
    )
}