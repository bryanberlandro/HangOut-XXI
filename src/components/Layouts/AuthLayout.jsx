/* eslint-disable react/prop-types */

import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function AuthLayout({title, children, type}){

    return (
        <div className="w-full px-7">
            <Link to='/'>
            <FaArrowLeft className="absolute top-[3%] left-[5%] text-xl"/>
            </Link>
            <div className="text-center mb-6">
            <h1 className="text-btn text-3xl font-bold">{title}</h1>
            </div>

            <div className="flex flex-col gap-3">
            {children}
            </div>

            <div className="text-center mt-4">
            {type === "login"
                ? <h1 className="font-light text-sm">Do not have an account?{""} 
                <Link to="/register" className="text-btn font-semibold cursor-pointer"> Register</Link>
                </h1>
                : <h1 className="font-light text-sm">Already have an account?{""} <Link to="/login"  className="text-btn font-semibold cursor-pointer"> Login</Link></h1>
            }
            </div>
        </div>
    )
}