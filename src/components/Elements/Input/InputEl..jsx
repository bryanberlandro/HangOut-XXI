/* eslint-disable react/prop-types */
export function InputEl({type, name, id, placeholder, isLogin}){
    return (
        <input 
        type={type} 
        name={name} 
        id={id} 
        placeholder={placeholder} 
        className={`border-2 ${isLogin ? "border-neutral-200" : "border-red-400" } px-4 transition-all duration-150 py-2 rounded-md bg-neutral-100 text-sm focus:border-btn-focus hover:border-btn focus:scale-105 outline-none`}
        />
    )
}