import { Header } from "../components/Fragments/Header";
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ProdCard } from "../components/Elements/ProductCard/ProdCard";
import { FilterBtnLayout } from "../components/Layouts/FilterBtnLayout";
import { useEffect, useState } from "react";
import { FoodData } from "../utils/FoodData";

export default function FoodPage(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(FoodData)
    }, [])
    console.log(products)

    const banners = [
        {
            id: 1,
            image: '/img/food-hero.jpg'
        },
        {
            id: 2,
            image: '/img/banner-2.jpg'
        },
        {
            id: 3,
            image: '/img/promo-2.jpg'
        },
        {
            id: 4,
            image: '/img/promo-1.jpg'
        },
    ]

    return(
        <>
        <Header
        name={'Hangout Food'}
        />
        <div className="pt-4 px-[5%]">
            <Swiper
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            className='w-full shadow-multiple border-2 rounded-lg overflow-hidden'
            >
                {banners.map(banner => (
                <SwiperSlide 
                key={banner.id} 
                className="after:content-[''] after:bg-none cursor-pointer"
                >
                    <div className='h-44 md:h-64 w-full relative overflow-hidden xl:h-[500px]'>
                        <img 
                        src={banner.image} 
                        alt="" 
                        className='w-full h-full object-cover'
                        />
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            <div className="w-full overflow-hidden mt-2">
                <FilterBtnLayout/>
            </div>
            <div className="w-full flex flex-wrap justify-between mt-4 gap-y-4">
                {products.map(product => (
                    <ProdCard
                    key={product.id}
                    image={product.image}
                    alt={product.name}
                    productName={product.name}
                    cinema={product.cinema}
                    size={product.size}
                    price={product.price}
                    id={product.id}
                    />
                ))}
            </div>
        </div>
        </>
    )
}