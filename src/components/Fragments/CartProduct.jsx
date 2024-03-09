/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { FaTrash, FaXmark } from "react-icons/fa6";
import { CartList } from "../../context/CartItem";

// eslint-disable-next-line react/prop-types
export function CartProduct({products, showCart, onClick}){
    const [totalPrice, setTotalPrice] = useState(0)
    const {cart, setCart} = useContext(CartList)
    const [limit, setLimit] = useState(false)
    console.log(cart)
    
    useEffect(() => {
        if(products){
            const sum = products.map(prod => prod).reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
            setTotalPrice(sum)
        }
    }, [products])

    function handlePlusItem(prod){
        const isSameItem = cart.find(c => c.name === prod.name)
        if(isSameItem){
            if(isSameItem.quantity === 0 || isSameItem.stock === 0){
                setLimit(true)
                return
            } else {
            const updateItem = {
                ...isSameItem,
                quantity: isSameItem.quantity + 1,
                stock: isSameItem.stock - 1
            }
            const updateProductList = cart.map(item => 
                item.id === isSameItem.id ? updateItem : item    
            )
            setCart(updateProductList)
            }
        }
    }

    function handleMinusItem(prod){
        const isSameItem = cart.find(c => c.name === prod.name)
        if(isSameItem){
            if(isSameItem.quantity === 0 || isSameItem.stock === 0){
                setLimit(true)
                return
            } else{
                const updateItem = {
                    ...isSameItem,
                    quantity: isSameItem.quantity - 1,
                    stock: isSameItem.stock + 1
                }
                const updateProductList = cart.map(item => 
                    item.id === isSameItem.id ? updateItem : item    
                )
                setCart(updateProductList)
                return
            }
        }
    }

    function handleRemoveItem(prod){
        const isSameItem = cart.find(c => c.name === prod.name)
        if(isSameItem){
            const updatedCart = cart.filter((c) => c.id !== prod.id)
            setCart(updatedCart)
            const localData = localStorage.getItem('cart')
            const parsedLocalData = JSON.parse(localData)
            console.log('Before removal - parsedLocalData:', parsedLocalData);

            delete parsedLocalData[prod.id]
            console.log('After removal - parsedLocalData:', parsedLocalData);

            localStorage.setItem('cart', JSON.stringify(parsedLocalData))
        }
    }
    
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
                        <div className="max-w-32">
                            <h1 className="font-medium text-sm">{prod.name}</h1>
                            <p className="text-xs text-neutral-600">{prod.details.substring(0,25)} ...</p>
                        <div className="flex flex-col mt-4">
                            <div>
                                <p className="text-xs text-neutral-500">stock {prod.stock}</p>
                            </div>
                            <div className="h-max flex mt-1">
                                <button 
                                onClick={() => handleMinusItem(prod)} 
                                className="border-2 py-1 px-4 text-xs"
                                disabled={limit ? true : false}
                                >-</button>
                                <div className="border-2 py-1 px-2 text-xs">{prod.quantity}</div>
                                <button
                                onClick={() => handlePlusItem(prod)} 
                                disabled={limit ? true : false}
                                className="border-2 py-1 px-4 text-xs">+</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <p className="text-xs text-neutral-500">quantity: {prod.quantity}</p>
                        <div className="flex items-center gap-2">
                            <h1 className="font-semibold">Rp. {prod.price * prod.quantity}</h1>
                            <FaTrash onClick={() => handleRemoveItem(prod)} className="text-neutral-400"/>
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