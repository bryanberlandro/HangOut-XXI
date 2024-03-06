import { useParams } from "react-router-dom"
import { FoodData } from "../data/FoodData"
import { Header } from "../components/Fragments/Header"
import { FaStar } from "react-icons/fa6"
import { FilterBtn } from "../components/Fragments/FilterBtn"
import { Rupiah } from "../utils/Rupiah"
import { useEffect, useState } from "react"

export default function ProductDetails(){
    const { id } = useParams()
    const isSameId = FoodData.find(food => food.id.toString() === id)
    const cartLocal = JSON.parse(localStorage.getItem('cart'))
    const [product, setProduct] = useState(cartLocal)
    
    function handleAddToCart(){
        if(product){
            setProduct([...product, isSameId])
            window.location.href = '/food'
            return
        } else {
            setProduct([isSameId])
            window.location.href = '/food'
            return
        }
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(product))
    }, [product])
    
    console.log(product)
    
    return(
        <>
        <Header 
        name={'Food Details'}
        linkTo={'/food'}
        />
        <div className="w-full h-72 overflow-hidden relative bg-gradient-to-t from-slate-700">
            <img 
            src={isSameId.image} 
            alt="" 
            className="w-full h-full object-cover"
            />
        </div>
        <div className="px-4 pt-4">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-neutral-500 text-xs">Bundle Extra</p>
                    <h1 className="font-semibold text-lg">{isSameId.name}</h1>
                </div>
                <div className="flex flex-col items-end">
                    <h1 className="text-lg font-medium">{Rupiah(isSameId.price)}</h1>
                    <div className="flex text-sm items-center gap-1">
                        <FaStar className="text-yellow-500"/>
                        <p>{isSameId.rating.rate} / {isSameId.rating.count} rates</p>
                    </div>
                </div>
            </div>
            <div className="my-6">
                <h1 className="font-medium">Product Details</h1>
                <p className="text-sm text-neutral-600">Popcorn Medium Mix + 2 Hangout Java Tea / Soft Drink Small</p>
            </div>
            <div className="">
                <h1 className="text-neutral-600 font-medium">Size Minuman</h1>
                <div className="gap-2 flex mt-3">
                    <FilterBtn name={'Small'}/>
                    <FilterBtn name={'Medium'}/>
                    <FilterBtn name={'Large'}/>
                </div>
            </div>

        </div>
        <div onClick={handleAddToCart} className="w-full py-4 flex justify-center text-white font-semibold bg-btn mt-4 fixed bottom-0">
            <h1>Add To Cart</h1>
        </div>
        </>
    )
}