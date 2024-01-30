/* eslint-disable react/prop-types */
export function LabelEl({htmlFor, value}){
    return (
        <label htmlFor={htmlFor} className="text-neutral-500">{value}</label>
    )
}