import { useParams } from "react-router-dom";
import { MoviesData } from "../utils/MoviesData";
import NotFoundPage from "./notFoundPage";
import { Header } from "../components/Fragments/Header";
import { useState } from "react";

export default function MovieDetailPage(){
    const { id } = useParams();
    const [isReadMore, setIsReadMore] = useState(false)
    const selectedMovie = MoviesData.find((movie) => movie.id.toString() === id);

    function handleReadAll(){
        setIsReadMore(!isReadMore)
    }

    if(!selectedMovie){
        return <NotFoundPage/>
    }

    return(
        <>
        <Header name={'HANGOUT'}/>
        <div className="w-full pt-4 px-4 flex gap-4 overflow-hidden">
            <div className="w-32 h-52 overflow-hidden rounded-md shadow-soft">
                <img src={selectedMovie.image} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="w-52">
                <h1 className="font-semibold text-lg uppercase">{selectedMovie.name}</h1>
                <div className="flex flex-col gap-3 mt-4 w-full">
                    <div className="flex text-sm justify-between">
                        <p className="text-neutral-500">Genre</p>
                        {selectedMovie.genre.map(g => (
                            <p key={selectedMovie.id}>{g}</p>
                        ))}
                    </div>
                    <div className="flex text-sm justify-between w-full">
                        <p className="text-neutral-500">Duration</p>
                        <p>{selectedMovie.duration}</p>
                    </div>
                    <div className="flex text-sm justify-between w-full">
                        <p className="text-neutral-500">Director</p>
                        <p>{selectedMovie.director}</p>
                    </div>
                    <div className="flex text-sm justify-between w-full">
                        <p className="text-neutral-500">Age</p>
                        <p>{selectedMovie.age}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full border-b  flex mt-3 justify-between">
            <div className="py-2 w-[50%] border-b-2 border-btn text-center">
                <h1>SINOPSIS</h1>
            </div>
            <div className="py-2 w-[50%] text-center text-neutral-500">
                <h1>JADWAL</h1>
            </div>
        </div>
        <div className="w-full px-4 pt-4">
            <div className="text-sm">
                <p className={`text-neutral-600 ${isReadMore ? '' : 'text-limit'}`}>{selectedMovie.synopsis}</p>
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
            <div className="mt-6">
                <h1 className="font-semibold text-lg">Actors</h1>
                <div className="flex gap-2 mt-4">
                    {selectedMovie.actor.map(actor => (
                        <div key={selectedMovie.id} className="text-center">
                            {
                                selectedMovie.actorProfile
                                ?   <div className="w-32 h-44 relative rounded-md   shadow-soft overflow-hidden">
                                    <img src={selectedMovie.actorProfile} alt=""    className="w-full h-full object-cover"/>
                                </div>
                                :   <div className="w-32 h-44 rounded-md border-2 shadow-soft bg-gradient-to-br from-neutral-300 via-white to-neutral-200">
                                </div>
                            }
                            <p className="mt-3 text-sm">{actor}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )

}