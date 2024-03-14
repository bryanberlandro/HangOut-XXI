/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { FaChevronRight, FaLocationPin, FaTicketSimple } from "react-icons/fa6";
import { CartList } from "../../context/CartItem";
import { ProductCard } from "../Fragments/ProductCard";
import { Header } from "../Fragments/Header";
import { ProductVoucher } from "../Fragments/ProductVoucher";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function CartLayout(){
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItem, setTotalItem] = useState(0)
    const {cart, setCart} = useContext(CartList)
    const [limit, setLimit] = useState(false)
    const [fee, setFee] = useState(0)
    const [subtotal, setSubtotal] = useState(0)
    const [showVoucher, setShowVoucher] = useState(false)

    useEffect(() => {
        if(cart){
            const totalProd = cart.reduce((acc, cur) => acc + cur.quantity, 0)
            const sum = cart.map(prod => prod).reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
            setTotalPrice(sum + fee)
            setSubtotal(sum)
            setTotalItem(totalProd)
        } else {
            setTotalItem(0)
            setSubtotal(0)
            setTotalPrice(0)
        }
    }, [cart, fee])

    useEffect(() => {
        if(cart){
            if(cart.length >= 0){
                setFee(800)
            } else if(cart.length >= 3){
                setFee(1200)
            } else if(cart.Length > 5){
                setFee(1800)
            }
        } else {
            setFee(0)
        }
    }, [cart])

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
    
    function handleClearAll(){
        localStorage.removeItem('cart')
        setCart(null)
    }

    function handleShowVoucher(){
        setShowVoucher(!showVoucher)
    }

    return(
        <>
        <Header 
        linkTo={'/food'}
        name={'Cart'}
        />
        <div className="w-full pb-28">
            <div className="w-full px-4 py-3 border-2 border-neutral-100 flex justify-between items-center bg-white">
                <div className="flex gap-2 items-center ">
                    <FaLocationPin className="text-btn"/>
                    <h1 className="text-sm">Alamat Pengiriman</h1>
                </div>
                <FaChevronRight className="text-btn"/>
            </div>
            <div className="w-full text-sm flex justify-between px-5 py-4 bg-white  mt-1">
                <h1>Total Items ( {totalItem} )</h1>
                <h1 onClick={handleClearAll} className="cursor-pointer text-btn">Clear all</h1>
            </div>
            <div className=" bg-neutral-50 border-2 border-neutral-100">
                <div className="flex flex-col gap-2 px-4">
                    {cart == null 
                    ?   (
                        <div className="mx-auto py-10 text-center">
                        <h1 className="font-medium text-base">No items here :(</h1>
                        <p className="text-sm mt-1 text-neutral-600">Lets buy some <Link to={'/food'} className="text-btn">Popcorn</Link></p>
                        </div>
                        )
                    :  cart.map(prod => (
                        <ProductCard
                        key={prod.id}
                        prod={prod}
                        minusItem={() => handleMinusItem(prod)}
                        plusItem={() => handlePlusItem(prod)}
                        removeItem={() => handleRemoveItem(prod)}
                        disable={limit}
                        />
                    ))  
                    }
                </div>
                <div className="flex justify-between px-5 py-2 bg-white">
                    <div>
                        <h1 className="text-sm font-medium">Ada lagi pesanannya?</h1>
                        <p className="text-xs text-neutral-600 mt-1">Masih bisa nambah menu lain loh</p>
                    </div>
                    <button className="text-sm border-2 border-btn text-btn font-medium rounded-full px-4">
                    <Link to={'/food'}>
                        Tambah
                    </Link>
                    </button>
                </div>
            </div>
            <div onClick={handleShowVoucher} className="py-3 px-5 border-2 border-neutral-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2 text-sm">
                    <FaTicketSimple className="text-btn"/>
                    <h1>Voucher Hangout</h1>
                </div>
                <FaChevronRight className="text-btn text-sm"/>
            </div>

            <div className="w-full px-6 py-4 border-2 border-neutral-100 bg-white">
                <div className="flex flex-col gap-2">
                    <div className="flex w-full justify-between">
                        <h1>Subtotal</h1>
                        <h1>Rp. {subtotal}</h1>
                    </div>
                    <div className="flex w-full justify-between text-sm text-neutral-600">
                        <h2>Discount</h2>
                        <h2>0</h2>
                    </div>
                    <div className="flex w-full justify-between text-xs text-neutral-500">
                        <h3>PPN</h3>
                        <h3>+ Rp. {fee}</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="fixed bottom-0 w-full border-t-2 bg-white py-4 px-4 shadow-sm rounded-t-xl">
                    <div className="font-semibold flex w-full justify-between">
                        <h1>Total</h1>
                        <h1>Rp. {totalPrice}</h1>
                    </div>
                    <div className="flex flex-col gap-1 mt-4">
                        <button className="py-3 text-white bg-btn text-sm  rounded-md">Checkout</button>
                    </div>
        </div>
        <ProductVoucher
        showVoucher={showVoucher}
        onClick={handleShowVoucher}
        />
        </>
    )
}