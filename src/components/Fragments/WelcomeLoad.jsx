import { useEffect, useState } from "react"

/* eslint-disable react/prop-types */
export function WelcomeLoad({username}){
    const [showHello, setShowHello] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() =>{
            setShowHello(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
        <div className="fixed w-full h-dvh bg-gradient-to-br from-btn-focus to-sky-300 z-[999] inset-0 flex justify-center items-center outEffect">
            <img src="/img/welcome-load.jpg" alt="" className="w-full h-full object-cover mix-blend-multiply absolute"/>
            <div className="z-10 relative text-center">
                {showHello 
                    ? (
                        <h1 className="text-white uppercase text-3xl font-semibold tracking-wide inEffect">HELLO {username}</h1>
                    )
                    : (
                        <div className="inEffect">
                        <p className="text-white tracking-wider text-sm mb-1">Welcome To</p>
                        <h1 className="text-3xl font-semibold text-white contrast-125">HANGOUT.<span className="bg-gradient-to-br from-btn to-btn-focus bg-clip-text text-transparent">XXI</span></h1>
                        </div>
                    )
                }
            </div>
        </div>
        </>
    )
}