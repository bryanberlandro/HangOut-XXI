import { useParams } from "react-router-dom"
import { MoviesData } from "../data/MoviesData"
import { FaArrowLeft, FaChevronLeft, FaCircleExclamation, FaExclamation, FaXmark } from "react-icons/fa6";
import { useState } from "react";

export default function CinemaSeatsPage(){
    const { id } = useParams()
    const selectedMovie = MoviesData.find(movie => movie.id.toString() === id);
    const movieSchedule = JSON.parse(localStorage.getItem('movie_schedule'));
    const [ watchTime, setWatchTime ] = useState(movieSchedule);
    const [ showInfo, setShowInfo ] = useState(false)

    function handleCloseInfo(){
        setShowInfo(true)
    }
    
    if(watchTime === 0){
        return <h1>Kosong</h1>
    }

    return(
        <>
            {watchTime.map(watch => (
            <div key={watch.id} className="w-full h-dvh">
                <div className="w-full py-2 border-b-2 flex gap-5 px-[5%] items-center">
                    <FaArrowLeft className="text-md"/>
                    <div>
                        <h1 className="font-medium">{watch.name}</h1>
                        <p className="text-xs text-neutral-600">{watch.time} | Hangout.XXI</p>
                    </div>
                </div>
                <div className={`${showInfo ? 'hidden' : 'flex'} w-full px-[5%] bg-sky-100 py-2  items-center text-xs justify-between`}>
                    <div className="flex gap-2 items-center">
                        <FaCircleExclamation className="text-red-400"/>
                        <p className="text-sky-800">Anak usia 2 tahun ke atas wajib membeli tiket.</p>
                    </div>
                    <FaXmark onClick={handleCloseInfo}/>
                </div>
                <div className="flex py-4 px-[5%] w-full justify-between items-center border-b-2">
                    <div className="flex h-full gap-1 text-sm items-center text-neutral-600">
                        <div className="bg-btn rounded-md w-5 h-5"></div>
                        <p>Tersedia</p>
                    </div>
                    <div className="flex h-full gap-1 text-sm items-center text-neutral-600">
                        <div className="bg-neutral-400 rounded-md w-5 h-5"></div>
                        <p>Tidak Tersedia</p>
                    </div>
                    <div className="flex h-full gap-1 text-sm items-center text-neutral-600">
                        <div className="bg-sky-800 rounded-md w-5 h-5"></div>
                        <p>Pilihanmu</p>
                    </div>
                </div>
                <div className="w-full border-2 h-[59%] flex flex-col justify-between overflow-hidden">
                    <div className="px-[10%] py-8 flex gap-2 flex-wrap justify-center">
                        <button className="bg-btn py-1 px-2 text-sm text-white rounded-md">
                            <h1>A1</h1>
                        </button>
                        <button className="bg-sky-800 py-1 px-2 text-sm text-white rounded-md">
                            <h1>A2</h1>
                        </button>
                        <button className="bg-neutral-300 py-1 px-2 text-sm text-neutral-400 rounded-md">
                            <h1>A3</h1>
                        </button>
                    </div>
                    <div className=" mb-1 h-[50px] relative text-center text-sky-800 overflow-hidden">
                        <div className="border-2 border-sky-700 rounded-b-full -translate-y-20 mx-auto absolute w-full h-[120px]">
                        </div>
                            <h1>LAYAR BIOSKOP</h1>
                    </div>
                </div>
                <div className="w-full h-[20%] border-2">
                    <div className="flex px-[10%] divide-x-2 divide-neutral-500 py-2">
                        <div className="w-[50%] text-center py-1">
                            <h1>Total Harga</h1>
                            <h1>Rp. 0</h1>
                        </div>
                        <div className="w-[50%] text-center py-1">
                            <h1>Tempat Duduk</h1>
                            <h1 className="text-xs mt-1 text-neutral-400">Kamu belum pilih</h1>
                        </div>
                    </div>
                    <button className="py-4 bg-neutral-200 text-neutral-400 w-full ">
                        Ringkasan Order
                    </button>
                </div>
            </div>
            )
            )}
        </>
    )
}