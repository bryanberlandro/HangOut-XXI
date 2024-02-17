/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaBuilding} from "react-icons/fa6";
import { Rupiah } from "../../utils/Rupiah";

export function MovieSchedule({selectedMovie}){
    const movieSchedule = selectedMovie.schedule
    const [currentTime, setCurrentTime] = useState(new Date())

    
    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(new Date())
        }

        const interval = setInterval(updateTime, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])


    // movieSchedule.map(movie => {
    //     if(movie.cinema === 'XXI'){
    //         let cinemaColor = ''
    //         cinemaColor = 'from-yellow-700 to-yellow-400'
    //     } else if(movie.cinema === 'CGV'){
    //         cinemaColor = 'from-red-500 to-red-400'
    //     } else if (movie.cinema === 'CINEPOLIS'){
    //         cinemaColor = 'from-zinc-900 to-zinc-700'
    //     }
    // })

    return (
        <>
        <div className="w-full flex flex-col gap-2">
            {
                movieSchedule.map(movie => (
                    <div key={movie.id} className="py-4 px-4 w-full bg-white flex flex-col gap-4">
                <div className="flex justify-between w-full">
                    <div>
                        <div className="flex gap-2">
                            <FaBuilding/>
                            <h1 className="font-semibold">{movie.mall}</h1>
                        </div>
                        <p className="text-neutral-400 text-xs mt-1">{movie.location}</p>
                    </div>
                    <div 
                    className={`bg-gradient-to-l py-[2px] px-2 h-max 
                    ${movie.cinema === 'XXI' ? 'from-yellow-700 to-yellow-400' : movie.cinema === 'CGV' ? 'from-red-500 to-red-400' : 'from-zinc-800 to-zinc-600'} rounded-sm`}
                    >
                        <p className="text-xs text-white font-semibold tracking-wider ">{movie.cinema}</p>
                    </div>
                </div>
                <div className="flex justify-between w-full">
                    <h1 className="text-sky-800 text-sm">2D</h1>
                    <p className="font-medium text-sm">{Rupiah(movie.price)}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm">
                    {
                        movie.time.map(time => (
                            <button 
                            key={time} 
                            className={` border-[1px] py-1 px-5 rounded-md ${currentTime.getHours() >= parseInt(time.split(':')[0]) ? 'cursor-not-allowed bg-neutral-200 text-neutral-400' : 'bg-white text-black'}`}
                            disabled={currentTime.getHours() >= parseInt(time.split(':')[0])}
                            >
                                {time}
                            </button>
                        ))
                    }
                    
                </div>
                </div>
                )
                )
            }
        </div>
        </>
    )
}