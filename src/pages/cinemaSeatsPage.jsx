import { Link, useParams } from "react-router-dom"
import { MoviesData } from "../data/MoviesData"
import { FaArrowLeft, FaCircleExclamation, FaXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { MovieSeatsData } from "../data/MovieSeatsData";
import { Rupiah } from "../utils/Rupiah";

export default function CinemaSeatsPage(){
    const { id } = useParams()
    const selectedMovie = MoviesData.find(movie => movie.id.toString() === id);
    const movieSchedule = JSON.parse(localStorage.getItem('movie_schedule'));
    const [ watchTime, setWatchTime ] = useState(movieSchedule);
    const [ showInfo, setShowInfo ] = useState(false)
    const [ selectedSeats, setSelectedSeats ] = useState(null);
    const [ totalPrice, setTotalPrice ] = useState(0);

    useEffect(() => {
        if(selectedSeats == null){
            setTotalPrice(0)
        } else {
            const moviePrice = movieSchedule.map(movie => movie.price)
            setTotalPrice(moviePrice * selectedSeats.length)
        }
    }, [selectedSeats, movieSchedule])

    function handleCloseInfo(){
        setShowInfo(true)
    }
    
    if(watchTime === 0){
        return <h1>Kosong</h1>
    }

    function handleChooseSeat(seat){
        const updateSeats = {id: seat.id, isSeatChosen: true};
        if(selectedSeats == null){
            setSelectedSeats([updateSeats])
        } else {
            const isSameSeat = selectedSeats.find(select => select.id === seat.id);
            if(isSameSeat || selectedSeats.length >= 8){
                return
            }
            setSelectedSeats([...selectedSeats, updateSeats])
        }
    }


    return(
        <>
            {watchTime.map(watch => (
            <div key={watch.id} className="w-full h-dvh">
                <div className="h-[20%]">
                    <div className="w-full py-2 border-b-2 flex gap-5 px-[5%] items-center">
                        <Link to={`/movie/${id}`}>
                        <FaArrowLeft className="text-md"/>
                        </Link>
                        <div>
                            <h1 className="font-medium">{watch.name}</h1>
                            <p className="text-xs text-neutral-600">{watch.time} | {watch.location}</p>
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
                </div>
                <div className="w-full h-[60%] flex flex-col justify-between overflow-hidden">
                    <div className="px-[10%] py-8 flex gap-2 flex-wrap justify-center">
                        {MovieSeatsData.map(seat => 
                            (
                                <button 
                                onClick={() => handleChooseSeat(seat)}
                                key={seat.id} 
                                className={`${seat.isAvailable ? 'bg-btn' : 'bg-neutral-300'}
                                w-9 h-9 focus:bg-sky-700 text-sm text-white rounded-md`}>
                                    <h1>{seat.id}</h1>
                                </button>
                            )
                        )}
                    </div>
                    <div className=" mb-1 h-[50px] relative text-center text-sky-800 overflow-hidden">
                        <div className="border-2 border-sky-700 rounded-b-full -translate-y-20 mx-auto absolute w-full h-[120px]">
                        </div>
                            <h1>LAYAR BIOSKOP</h1>
                    </div>
                </div>
                <div className="w-full h-[20%] border-2">
                    <div className="flex divide-x-2 h-[60%] divide-neutral-300 py-2">
                        <div className="w-[50%] text-center h-full flex flex-col items-center justify-center ">
                            <h1 className="text-sm">Total Harga</h1>
                            <h1 className="text-btn font-medium text-lg">{Rupiah(totalPrice)}</h1>
                        </div>
                        <div className="w-[50%] text-center h-full flex flex-col items-center justify-center ">
                            <h1 className="text-sm">Tempat Duduk</h1>
                            <div className="flex gap-1 flex-wrap max-w-32 justify-center mt-1">
                                {selectedSeats == null 
                                ? <h1 className="text-xs mt-1 text-neutral-400">Kamu belum pilih</h1>
                                : selectedSeats.map(seat => 
                                <button 
                                key={seat.id}
                                className="w-5 h-5 text-[10px] bg-btn text-white rounded-md"
                                >{seat.id}</button>)
                                }
                            </div>
                        </div>
                    </div>
                    <button className={`py-4 h-[40%] ${selectedSeats == null ? "bg-neutral-200 text-neutral-400" : "bg-sky-700 text-white"} w-full`}>
                        Ringkasan Order ( {selectedSeats == null ? 0 : selectedSeats.length} )
                    </button>
                </div>
            </div>
            )
            )}
        </>
    )
}