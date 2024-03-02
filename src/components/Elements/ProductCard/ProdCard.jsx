/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
import { ProdImage } from "./ProdImage";
import { ProdName } from "./ProdName";
import { ProdPrice } from "./ProdPrice";
import { Link } from "react-router-dom";

export function ProdCard({image, alt, productName, cinema, price, id}){
    return(
        <>
        <Link to={`/food/${id}`} className="rounded-md overflow-hidden shadow-soft w-[48%] max-h-[270px] p-2 bg-white">
            <div className="w-full h-full">
                    <div className="w-full overflow-hidden relative h-[65%] rounded-md">
                        <ProdImage
                        image={image}
                        alt={alt}
                        />
                    </div>
                    <div className="w-full h-[35%] pt-2 flex flex-col justify-between">
                        <div>
                            <ProdName
                            productName={productName}
                            cinema={cinema}
                            />
                        </div>
                        <div className="text-sm flex justify-between items-center">
                            <ProdPrice
                            price={price}
                            />
                            <div className="flex text-xs items-center gap-1">
                            <FaStar className="text-yellow-500"/>
                            <p>4.5</p>
                            </div>
                        </div>
                    </div>
            </div>
        </Link>
        </>
    )
}