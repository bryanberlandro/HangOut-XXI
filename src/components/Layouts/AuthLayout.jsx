/* eslint-disable react/prop-types */

import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function AuthLayout({title, children, type}){

    return (
        <div className="w-full px-7 h-[100dhv]">
            <div className="text-center mb-8 flex items-center justify-center pt-[5%]">
            <Link to='/'>
            <FaArrowLeft className="absolute top-[3%] left-[5%] text-xl"/>
            </Link>
            <h1 className="text-2xl font-bold text-black contrast-125">HANGOUT.<span className="bg-gradient-to-br from-btn to-btn-focus bg-clip-text text-transparent">XXI</span></h1>
            </div>
            <div>
            <h1 className="text-btn text-2xl font-bold">{title}</h1>
            <p className="text-neutral-500 text-sm mt-1">please enter your details</p>
            </div>

            <div className="flex flex-col gap-2">
            {children}
            </div>

            <div className="text-center mt-4">
            {type === "login"
                ? <h1 className="font-light text-sm">Do not have an account? <Link to={"/register"} className="text-btn font-semibold">Register</Link></h1>
                : <h1 className="font-light text-sm">Already have an account? <Link to={"/login"} className="text-btn font-semibold">Login</Link></h1>
            }
            </div>
        </div>
    )
}