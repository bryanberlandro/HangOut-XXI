import { useParams } from "react-router-dom"
import { FoodData } from "../utils/FoodData"
import { Header } from "../components/Fragments/Header"
import { FaStar } from "react-icons/fa6"
import { FilterBtn } from "../components/Fragments/FilterBtn"

export default function ProductDetails(){
    const { id } = useParams()
    const isSameId = FoodData.find(food => food.id.toString() === id)
    
    
    return(
        <>
        <Header name={'Food Details'}/>
        <div className="w-full h-96 overflow-hidden relative">
            <img 
            src={isSameId.image} 
            alt="" 
            className="w-full h-full object-cover"
            />
        </div>
        <div className="px-4 py-2">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-neutral-500 text-xs">Bundle Extra</p>
                    <h1 className="font-semibold text-lg">{isSameId.name}</h1>
                </div>
                <div className="flex text-sm items-center gap-1">
                    <FaStar className="text-yellow-500"/>
                    <p>4.5</p>
                </div>
            </div>
            <div className="my-6">
                <h1 className="font-medium">Product Details</h1>
                <p className="text-sm text-neutral-600">Popcorn Medium Mix + 2 Hangout Java Tea / Soft Drink Small</p>
            </div>
            <div className="">
                <h1 className="text-neutral-600 font-medium">Size Minuman</h1>
                <div className="gap-2 flex mt-2">
                    <FilterBtn name={'Small'}/>
                    <FilterBtn name={'Medium'}/>
                    <FilterBtn name={'Large'}/>
                </div>
            </div>
        </div>
        </>
    )
}