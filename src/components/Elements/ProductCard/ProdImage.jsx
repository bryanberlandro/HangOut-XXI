/* eslint-disable react/prop-types */
export const ProdImage = ({image, alt}) => {
    return <img 
            src={image} 
            alt={alt} 
            className="w-full h-full object-cover"
            />
}