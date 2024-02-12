/* eslint-disable react/prop-types */
export function PartnersFrag({image, key}){
    return(
        <div className="w-36 relative overflow-hidden">
            <img src={image} alt={key} className="w-full"/>
        </div>
    )
}