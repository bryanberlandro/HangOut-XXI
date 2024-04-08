/* eslint-disable react/prop-types */
// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Suspense, lazy } from 'react';
const Banner = lazy(() => import('./Fragments/Banner'));

export function Carousel({showNotif}){

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

    function compLoad(){
        return(
            <>
            <div className='h-44 bg-neutral-300 animate-pulse md:h-64 rounded-lg w-full relative overflow-hidden xl:h-[500px]'>

            </div>
            </>
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
                <Suspense fallback={compLoad()}>
                    <Banner banner={banner}/>
                </Suspense>
            </SwiperSlide>
            ))}
        </Swiper>
    )
}