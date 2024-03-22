/* eslint-disable react/prop-types */
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function WhiteHeader({onClick, linkTo, name, time, location}){
    return(
        <>
        <div onClick={onClick} className="w-full py-2 border-b-2 flex gap-5 px-[5%] items-center">
            <Link to={linkTo}>
                <FaArrowLeft className="text-md text-btn"/>
            </Link>
            <div>
                <h1 className="font-medium">{name}</h1>
                <p className="text-xs text-neutral-600">{time} | {location}</p>
            </div>
        </div>
        </>
    )
}