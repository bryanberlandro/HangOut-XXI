/* eslint-disable react/prop-types */
export const ProdName = ({productName, cinema}) => {
    return(
        <>
        <h1 className="font-semibold text-sm text-primary">{productName}</h1>
        <p className="text-xs text-neutral-500">{cinema}</p>
        </>
    )
}