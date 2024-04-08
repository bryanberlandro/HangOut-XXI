/* eslint-disable react/prop-types */
// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';

export function Carousel({showNotif}){
    const [loading, setLoading] = useState(true);
    const banners = [
        {
            id: 1,
            image: '/img/banner-1.jpg'
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

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)

        
        return () => {
            clearTimeout()
        }
    }, [])

    if(loading){
        return (
            <div className='h-44 md:h-64 w-full bg-neutral-400 animate-pulse rounded-lg relative overflow-hidden xl:h-[500px]'>
                
            </div>
        )
    }

    return (
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
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        className='w-full shadow-multiple border-2 rounded-lg overflow-hidden'
        >
            {banners.map((banner) => (
            <SwiperSlide onClick={showNotif} key={banner.id} className="after:content-[''] after:bg-none cursor-pointer">
                <div className='h-44 md:h-64 w-full relative overflow-hidden xl:h-[500px]'>
                    <img src={banner.image} alt="" className='w-full h-full object-cover'/>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    )
}