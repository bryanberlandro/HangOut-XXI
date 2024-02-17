/* eslint-disable react/prop-types */
import { useState } from "react"

export function Synopsis({selectedMovie}){
    const [isReadMore, setIsReadMore] = useState(false)

    function handleReadAll(){
        setIsReadMore(!isReadMore)
    }

    return (
        <>
        <div className="text-sm">
                <p className={`text-neutral-600 transition-all duration-200 ${isReadMore ? 'h-max' : 'text-limit'}`}>{selectedMovie.synopsis}</p>
                <button 
                onClick={() => handleReadAll()}
                className="underline underline-offset-2 text-btn mt-2"
                >
                    {
                    isReadMore 
                    ? 'Hide' 
                    : 'View more'
                    }
                </button>
            </div>
        </>
    )
}