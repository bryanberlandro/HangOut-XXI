/* eslint-disable react/prop-types */

export function AuthLayout({title, children}){
    return (
        <div className="rounded-lg w-full py-6 px-7 ">
            <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-black contrast-125">HANGOUT.<span className="bg-gradient-to-br from-btn to-btn-focus bg-clip-text text-transparent">XXI</span></h1>
            </div>
            <div>
            <h1 className="text-btn text-2xl font-bold">{title}</h1>
            <p className="text-neutral-600 text-sm mt-1">Welcome, please enter your details</p>
            </div>
            {children}
        </div>
    )
}