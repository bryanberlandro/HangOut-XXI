/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Rupiah } from "../../utils/Rupiah"
import { Link } from "react-router-dom"

export const TabBar = ({item, to}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItem, setTotalItem] = useState(0)

    useEffect(() => {
        if(item){
        const sum = item.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
        setTotalPrice(sum)
        } 
    }, [item])

    useEffect(() => {
        if(item){
            const itemList = item.map(item => item).reduce((acc, cur) => acc + cur.quantity, 0)
            setTotalItem(itemList)
        }
    }, [item])


    return(
        <>
        <div className={`w-full cursor-pointer fixed flex justify-center items-center bottom-0 transition duration-1000 pb-2 px-2 h-max ${item !== null ? 'translate-y-0':'translate-y-96'}`}>
            <Link to={to}>
            <div className="w-full h-12 rounded-full py-7 px-10 bg-btn relative z-50 text-white flex items-center justify-between ">
                {item !== null ? (
                <div className="flex w-full">
                    <div className="">
                        <h1 className="font-medium text-sm">{totalItem} item</h1>
                        <p className="text-neutral-300 text-xs">{item[0].name} {item.length > 0 ? `and ${item.length - 1} more item...` : ''}</p>
                    </div>
                    <div className="flex items-center">
                        <h1 className="font-medium">{Rupiah(totalPrice)}</h1>
                    </div>
                </div>
                )
                : (
                    <div><h1>No item</h1></div>
                )
            }
            </div>
            </Link>
        </div>
        </>
    )
}