/* eslint-disable react/prop-types */
export function BuyTicket({children, onClick}){
    return (
        <>
        <button onClick={onClick} className="fixed right-0 left-0 bottom-0 gap-2 bg-btn-focus flex items-center justify-center text-white py-3 text-base font-medium">
            {children}
        </button>   
        </>
    )
}