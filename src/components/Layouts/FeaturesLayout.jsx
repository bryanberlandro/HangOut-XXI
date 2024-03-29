
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

export function FeaturesLayout(){
    const features = [
        {
            id: 1,
            image: '/img/feature-1.webp'
        },
        {
            id: 2,
            image: '/img/feature-2.webp'
        },
        {
            id: 3,
            image: '/img/feature-3.webp'
        },
        {
            id: 4,
            image: '/img/feature-4.webp'
        },
    ]

    return(
        <div className="mt-14 px-[5%] relative overflow-hidden">
            <div className="absolute w-24 rotate-[20deg] -z-10 rounded-[4rem] bg-gradient-to-b from-sky-50 right-0 h-96"></div>
            <div className="absolute w-24 rotate-[20deg] -z-10 rounded-[4rem] bg-gradient-to-b from-sky-100 top-5 right-16 h-96"></div>
            <h1 className="font-semibold text-xl">Our Features</h1>
            <Swiper
            modules={[Pagination, Scrollbar, A11y, Autoplay, Navigation]}
            spaceBetween={50}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={{
                prevEl: ".swiper-button-prevs",
                nextEl: ".swiper-button-nexts",
            }}
            breakpoints={{
                360: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
            loop={true}
            pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            className='w-full mt-8 shadow-multiple border-2 rounded-lg overflow-hidden'
            >
                {features.map((feature) => (
                <SwiperSlide key={feature.id} className="after:content-[''] after:bg-none ">
                    <div className='h-52 w-full relative overflow-hidden md:h-64 xl:h-[500px]'>
                        <img src={feature.image} alt="" className='w-full h-full object-cover'/>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
                <div className="flex justify-between mt-5 px-10 md:mt-7">
                    <div className="swiper-button-prevs z-10 text-black border-2 border-sky-300 hover:border-btn-focus hover:scale-[.98] transition-all duration-200 focus:scale-95 rounded-full flex justify-center items-center w-10 h-10 md:w-12 md:h-12">
                        <FaChevronLeft className="text-btn"/>
                    </div>
                    <div className="swiper-button-nexts z-10 text-black border-2 border-sky-300 hover:border-btn-focus hover:scale-[.98] transition-all duration-200 focus:scale-95 rounded-full flex justify-center items-center w-10 h-10 md:w-12 md:h-12">
                        <FaChevronRight className="text-btn"/>
                    </div>
                </div>
        </div>
    )
}