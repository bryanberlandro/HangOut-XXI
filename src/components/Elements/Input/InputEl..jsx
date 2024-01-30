/* eslint-disable react/prop-types */
export function InputEl({type, name, id, placeholder}){
    return (
        <input type={type} name={name} id={id} placeholder={placeholder} className="border-2 border-neutral-100 px-4 transition-all duration-150 py-2 rounded-md focus:border-btn-focus hover:border-btn focus:scale-105 outline-none"/>
    )
}