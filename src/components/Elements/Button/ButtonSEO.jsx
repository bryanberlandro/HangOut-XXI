/* eslint-disable react/prop-types */

export function ButtonSEO({name, image, bgColor, color}){
    return (
        <button className={`rounded-md shadow-soft ${bgColor ? bgColor : "bg-white"} flex justify-center items-center w-full py-3 gap-3 font-normal text-${color ? color : "black"}`}>
            <div className='relative w-6 h-6'>
                <img src={image} alt="" className='absolute w-full h-full object-cover'/>
            </div>
            Continue with {name}
        </button>
    )
}