/* eslint-disable react/prop-types */
export function ButtonComp({value, bgStyle, textCol, onClick}){
    return(
        <button onClick={onClick} className={`py-3 bg-${bgStyle ? bgStyle : 'btn'} rounded-sm text-${textCol ? textCol : 'white'} font-medium transition-all duration-200 shadow-soft hover:bg-${bgStyle} hover:scale-[.98]`}>{value}</button>
    )
}