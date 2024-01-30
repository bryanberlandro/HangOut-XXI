// eslint-disable-next-line react/prop-types
export function ButtonEl({value}){
    return(
        <>
        <button className="py-3 bg-btn rounded-md text-white font-medium transition-all duration-200 shadow-soft btn-component">
            {value}
        </button>
        </>
    )
}