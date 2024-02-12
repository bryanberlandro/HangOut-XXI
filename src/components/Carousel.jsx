/* eslint-disable react/prop-types */
// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../assets/img/banner-1.jpg'
import banner2 from '../assets/img/banner-2.jpg'
import banner3 from '../assets/img/promo-2.jpg'
import banner4 from '../assets/img/promo-1.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Carousel({showNotif}){
    const banners = [
        {
            id: 1,
            image: banner1
        },
        {
            id: 2,
            image: banner4
        },
        {
            id: 3,
            image: banner3
        },
        {
            id: 4,
            image: banner2
        },
    ]

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