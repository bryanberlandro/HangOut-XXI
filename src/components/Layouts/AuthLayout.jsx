/* eslint-disable react/prop-types */

export function AuthLayout({title, children}){
    return (
        <div className="rounded-lg shadow-soft w-full py-6 px-7 border-2 border-neutral-100 bg-white">
            <div>
            <h1 className="text-btn text-3xl font-bold">{title}</h1>
            <p className="text-neutral-600 text-sm mt-1">Welcome, please enter your details</p>
            </div>
            {children}
        </div>
    )
}