/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { Rupiah } from "../../utils/Rupiah"

export const TabBar = ({item}) => {
    

    if(item == null){
        return <h1>No item</h1>
    }
    return(
        <>
        <div className="w-full fixed flex justify-center items-center bottom-0 pb-2 px-4 h-max">
            <div className="w-full h-12 rounded-full py-7 px-10 bg-btn relative z-50 text-white flex items-center justify-between ">
                <div>
                    <h1 className="font-medium text-sm">{item.length} item</h1>
                    <p className="text-neutral-300 text-xs">{item[0].name} and {item.length > 0 ? `${item.length - 2} more item...` : ''}</p>
                </div>
                <div className="flex items-center">
                    <h1 className="font-medium">{Rupiah(item[0].price)}</h1>
                </div>
            </div>
        </div>
        </>
    )
}