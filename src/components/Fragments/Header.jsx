/* eslint-disable react/prop-types */
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function Header({name}){
    return (
        <>
        <div className="w-full bg-btn-focus py-3 px-[7%] text-white flex justify-center items-center sticky top-0 z-[999]">
            <Link to="/" className="text-xl cursor-pointer absolute left-6">
                <FaArrowLeft/>
            </Link>
            <h1 className="text-xl font-semibold contrast-125">{name}</h1>
        </div>
        </>
    )
}