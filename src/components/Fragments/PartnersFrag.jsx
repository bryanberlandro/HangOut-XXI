/* eslint-disable react/prop-types */
export function PartnersFrag({image, key}){
    return(
        <div className="w-48 h-16 relative overflow-hidden">
            <img src={image} alt={key} className="absolute  w-full"/>
        </div>
    )
}