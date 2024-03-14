/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
import { ProdImage } from "./ProdImage";
import { ProdName } from "./ProdName";
import { ProdPrice } from "./ProdPrice";
import { Link } from "react-router-dom";

export function ProdCard({image, alt, productName, cinema, price, id, rating}){
    return(
        <>
        <Link to={`/food/${id}`} className="rounded-md overflow-hidden shadow-xl w-full h-28 p-2 bg-white hover:scale-[.98] transition-all duration-200">
            <div className="w-full h-full flex relative">
                <div className="absolute right-0 top-0 text-[10px] bg-gradient-to-r from-btn to-btn-focus text-white px-3 py-1 rounded-l-full">
                    <p>Recommended</p>
                </div>
                    <div className="w-[30%] overflow-hidden relative h-full rounded-md">
                        <ProdImage
                        image={image}
                        alt={alt}
                        />
                    </div>
                    <div className="w-full h-full pl-2 pt-2 flex flex-col justify-between">
                        <div>
                            <ProdName
                            productName={productName}
                            cinema={cinema}
                            />
                        </div>
                        <div className="text-sm flex justify-between items-center">
                            <div className="flex text-xs items-center gap-1">
                            <FaStar className="text-yellow-400"/>
                            <p>{rating.rate} / <span className="text-neutral-500">{rating.count} rates </span></p>
                            </div>
                            <ProdPrice
                            price={price}
                            />
                        </div>
                    </div>
            </div>
        </Link>
        </>
    )
}