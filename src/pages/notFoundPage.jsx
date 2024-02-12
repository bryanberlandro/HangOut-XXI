import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return (
        <>
        <div className="w-full h-dvh overflow-hidden">
            <div className="text-center pt-8">
            <h1 className="text-xl font-semibold text-black contrast-125">HANGOUT.<span className="bg-gradient-to-br from-btn to-btn-focus bg-clip-text text-transparent">XXI</span></h1>
            </div>
            <div className="flex w-full  h-[80%] justify-center items-center">
                <div className="w-[80%] flex flex-col gap-14">
                    <div className="space-y-3">
                        <p className="text-btn">404</p>
                        <h1 className="text-3xl font-semibold">Page not found</h1>
                        <p className="text-neutral-500">Sorry, the page that you looking for is under development</p>
                    </div>
                    <Link to='/' className="text-btn flex items-center gap-2 hover:gap-4 transition-all duration-100 w-max">
                        <FaArrowLeft/>
                        <p>Back to home</p>
                    </Link>
                </div>
            </div>
            
        </div>
        </>
    )
}