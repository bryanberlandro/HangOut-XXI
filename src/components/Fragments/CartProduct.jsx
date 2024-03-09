/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaTrash, FaXmark } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
export function CartProduct({products, showCart, onClick}){
    const [totalPrice, setTotalPrice] = useState(0)
    
    useEffect(() => {
        if(products){
            const sum = products.map(prod => prod).reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
            setTotalPrice(sum)
        }
    }, [products])

    if(products == null){
        return(<><h1>No Found</h1></>)
    } 
    return(
        <>
        <div className={`fixed bottom-0 w-full bg-white rounded-t-xl shadow-multiple z-50 transition-all duration-500 ease-in-out ${showCart ? "translate-y-0" : "translate-y-[800px]"}`}>
            <div className="px-6 py-4 border-b-2 border-neutral-200 flex justify-between items-center">
                <h1 className="font-medium text-lg">Cart</h1>
                <FaXmark onClick={onClick}/>
            </div>
            <div className="px-4 py-4 flex flex-col gap-2 max-h-72 overflow-y-scroll scroll-hidden">
                {products.map(prod => (
                <div key={prod.id} className="w-full flex border-b-2 border-neutral-100 py-3 justify-between">
                    <div className="flex gap-4">
                        <div className="rounded-md overflow-hidden w-20 h-full">
                            <img 
                            src={prod.image} 
                            alt="" 
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="max-w-52">
                            <h1 className="font-medium text-sm">{prod.name}</h1>
                            <p className="text-xs text-neutral-600">{prod.details}</p>
                        <div className="flex flex-col mt-4">
                            <div>
                                <p className="text-xs text-neutral-500">stock {prod.stock}</p>
                            </div>
                            <div className="h-max flex mt-1">
                                <button className="border-2 py-1 px-4 text-xs">-</button>
                                <div className="border-2 py-1 px-2 text-xs">{prod.quantity}</div>
                                <button 
                                className="border-2 py-1 px-4 text-xs">+</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <p className="text-xs text-neutral-500">quantity: {prod.quantity}</p>
                        <div className="flex items-center gap-2">
                            <h1 className="font-semibold">Rp. {prod.price * prod.quantity}</h1>
                            <FaTrash className="text-neutral-400"/>
                        </div>
                    </div>
                </div>
                ))
                }
            </div>
            <div className="rounded-t-md w-full px-6 shadow-soft py-4">
                <div className="flex flex-col gap-2">
                    <div className="flex w-full justify-between">
                        <h1>Subtotal</h1>
                        <h1>Rp. {totalPrice}</h1>
                    </div>
                    {/* <div className="flex w-full justify-between text-sm text-neutral-600">
                        <h2>Discount</h2>
                        <h2>( 20% ) - Rp. 120.000</h2>
                    </div>
                    <div className="flex w-full justify-between text-xs text-neutral-500">
                        <h3>PPN</h3>
                        <h3>+ Rp. 1.500</h3>
                    </div> */}
                </div>
                <div className="w-full mt-4 border-t-2 border-dotted pt-4">
                    <div className="font-semibold flex w-full justify-between">
                        <h1>Total</h1>
                        <h1>Rp. {totalPrice}</h1>
                    </div>
                    <div className="flex flex-col gap-1 mt-6">
                        <button className="py-2 text-white bg-btn text-sm  rounded-md">Proceed to checkout</button>
                        <button className="py-2 text-btn text-sm rounded-md border-2 border-sky-400">Continue shopping</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}