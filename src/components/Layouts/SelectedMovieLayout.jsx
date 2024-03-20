import { useState } from "react";
import { SynopsisLayout } from "./SynopsisLayout";
import { MovieSchedule } from "./MovieSchedule";
import { BuyTicket } from "../Elements/BuyTicket/BuyTicket";
import { FaTicketSimple } from "react-icons/fa6";

/* eslint-disable react/prop-types */
export function SelectedMovieLayout({selectedMovie, schedule, onClick, chooseSeat}){
    const {image, name, id, genre, actor, duration, director, age, actorProfile} = selectedMovie

    const [isActive, setIsActive] = useState(false)

    function handleShowSynopsis(){
        setIsActive(!isActive)
    }

    function handleShowSchedule(){
        setIsActive(!isActive)
    }

    return(
        <>
            <div className="w-full py-4 px-4 flex gap-4 overflow-hidden bg-white">
            <div className="w-[35%] h-52 overflow-hidden rounded-md shadow-soft">
                <img src={image} alt={name} className="w-full h-full object-cover"/>
            </div>
            <div className="w-[65%]">
                <h1 className="font-semibold text-lg uppercase">{name}</h1>
                <div className="flex flex-col gap-3 mt-4 w-full">
                    <div className="flex text-sm justify-between">
                        <p className="text-neutral-500">Genre</p>
                        {genre.map(g => (
                            <p key={id}>{g}</p>
                        ))}
                    </div>
                    <div className="flex text-sm justify-between w-full">
                        <p className="text-neutral-500">Duration</p>
                        <p>{duration}</p>
                    </div>
                    <div className="flex text-sm justify-between w-full">
                        <p className="text-neutral-500">Director</p>
                        <p>{director}</p>
                    </div>
                    <div className="flex text-sm justify-between w-full">
                        <p className="text-neutral-500">Age</p>
                        <p>{age}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full border-b sticky top-12  flex mt-3 justify-between bg-white">
            <div 
            onClick={() => handleShowSynopsis()} 
            className={`py-3 w-[50%] transition-all duration-150 border-b-2 ${isActive ? 'border-btn' : 'text-neutral-500'} text-center cursor-pointer`}
            >
                <h1>SINOPSIS</h1>
            </div>
            <div 
            onClick={() => handleShowSchedule()}
            className={`py-3 w-[50%] transition-all duration-150 text-center border-b-2 ${isActive ? 'text-neutral-500' : 'border-btn'} cursor-pointer`}
            >
                <h1>JADWAL</h1>
            </div>
        </div>
        <div className="w-full overflow-hidden mb-16">
            {
                isActive 
                ? <SynopsisLayout
                selectedMovie={selectedMovie}
                actor={actor}
                actorProfile={actorProfile}
                />
                : <MovieSchedule
                selectedMovie={selectedMovie}
                schedule={schedule}
                onClick={onClick}
                />
            }
        </div>
        {
            isActive
            ? <BuyTicket>Watch Now !</BuyTicket>
                
            :
                <BuyTicket onClick={chooseSeat}>
                    <FaTicketSimple/>
                    Buy Ticket
                </BuyTicket>
        }
        </>
    )
}