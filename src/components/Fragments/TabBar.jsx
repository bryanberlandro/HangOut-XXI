/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Rupiah } from "../../utils/Rupiah"

export const TabBar = ({item, onClick}) => {
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



    if(item == null){
        return <h1>No item</h1>
    }
    return(
        <>
        <div onClick={onClick} className="w-full cursor-pointer fixed flex justify-center items-center bottom-0 pb-2 px-4 h-max">
            <div className="w-full h-12 rounded-full py-7 px-10 bg-btn relative z-50 text-white flex items-center justify-between ">
                <div>
                    <h1 className="font-medium text-sm">{totalItem} item</h1>
                    <p className="text-neutral-300 text-xs">{item[0].name} and {item.length > 0 ? `${item.length - 1} more item...` : ''}</p>
                </div>
                <div className="flex items-center">
                    <h1 className="font-medium">{Rupiah(totalPrice)}</h1>
                </div>
            </div>
        </div>
        </>
    )
}