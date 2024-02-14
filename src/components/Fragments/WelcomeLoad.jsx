/* eslint-disable react/prop-types */
export function WelcomeLoad({username}){
    return (
        <>
        <div className="fixed w-full h-dvh bg-btn z-[999] inset-0">
            <h1>HELLO {username}</h1>
        </div>
        </>
    )
}