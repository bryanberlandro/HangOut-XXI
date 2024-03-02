/* eslint-disable react/prop-types */

import { useState } from "react"

export const FilterBtn = ({name}) => {
    const [isActive, setIsActive] = useState(false)


    return(
        <>
        <button 
        onClick={() => setIsActive(!isActive)} className={`w-max px-4 py-1 text-sm 
        ${isActive ? 'bg-btn text-white':'bg-white text-black'} border-2 rounded-full`}>
            {name}
        </button>
        </>
    )
}