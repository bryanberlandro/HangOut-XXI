/* eslint-disable react/prop-types */

export const ProductLayout = ({children}) => {
    return(
    <>
    <div className="w-full flex flex-wrap justify-between mt-4 gap-y-4">
        {children}
    </div>
    </>
    )
}