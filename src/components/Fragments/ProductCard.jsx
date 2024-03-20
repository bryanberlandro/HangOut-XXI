import { FaTrash } from "react-icons/fa6";

/* eslint-disable react/prop-types */
export function ProductCard({prod, limit, minusItem, removeItem, plusItem, disable}){
    return(
        <>
        <div key={prod.id} className="w-full flex border-b-2 border-neutral-100 py-3 justify-between focus:scale-95">
                    <div className="flex gap-4">
                        <div className="rounded-md overflow-hidden w-20 h-full">
                            <img 
                            src={prod.image} 
                            alt="" 
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="max-w-32">
                            <h1 className="font-medium text-sm">{prod.name}</h1>
                            <p className="text-xs text-neutral-600">{prod.details.substring(0,25)} ...</p>
                        <div className="flex flex-col mt-4">
                            <div>
                                <p className="text-xs text-neutral-500">stock {prod.stock}</p>
                            </div>
                            <div className="h-max flex mt-1">
                                <button 
                                onClick={minusItem} 
                                className="border-[1px] py-1 px-4 text-xs"
                                disabled={disable ? true : false}
                                >-</button>
                                <div className="border-[1px] py-1 px-2 text-xs">{prod.quantity}</div>
                                <button
                                onClick={plusItem} 
                                disabled={limit ? true : false}
                                className="border-[1px] py-1 px-4 text-xs">+</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <p className="text-xs text-neutral-500">quantity: {prod.quantity}</p>
                        <div className="flex items-center gap-2">
                            <h1 className="font-semibold">Rp. {prod.price * prod.quantity}</h1>
                            <FaTrash onClick={removeItem} className="text-btn"/>
                        </div>
                    </div>
                </div>
        </>
    )
}