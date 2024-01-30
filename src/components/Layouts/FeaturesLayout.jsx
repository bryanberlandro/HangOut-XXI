
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules"

import featureImg1 from "../../assets/img/feature-1.webp"
import featureImg2 from "../../assets/img/feature-2.webp"
import featureImg3 from "../../assets/img/feature-3.webp"
import featureImg4 from "../../assets/img/feature-4.webp"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

export function FeaturesLayout(){
    const features = [
        {
            id: 1,
            image: featureImg1
        },
        {
            id: 2,
            image: featureImg2
        },
        {
            id: 3,
            image: featureImg3
        },
        {
            id: 4,
            image: featureImg4
        },
    ]

    return(
        <div className="mt-14 px-[5%] relative">
            <div className="absolute w-24 rotate-[20deg] -z-10 rounded-[4rem] bg-gradient-to-b from-sky-50 right-0 h-96"></div>
            <div className="absolute w-24 rotate-[20deg] -z-10 rounded-[4rem] bg-gradient-to-b from-sky-100 top-5 right-16 h-96"></div>
            <h1 className="font-semibold text-xl">Our Features</h1>
            <Swiper
            modules={[Pagination, Scrollbar, A11y, Autoplay, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={{
                prevEl: ".swiper-button-prevs",
                nextEl: ".swiper-button-nexts",
            }}
            loop={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='w-full mt-8 shadow-multiple border-2 rounded-lg overflow-hidden'
            >
                {features.map((feature) => (
                <SwiperSlide key={feature.id} className="after:content-[''] after:bg-none">
                    <div className='h-52 md:h-64 w-full relative overflow-hidden xl:h-[500px]'>
                        <img src={feature.image} alt="" className='w-full h-full object-cover'/>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
                <div className="flex justify-between mt-5 px-10">
                    <div className="swiper-button-prevs z-10 text-black border-2 border-sky-300 hover:border-btn-focus hover:scale-[.98] transition-all duration-200 focus:scale-95 rounded-full flex justify-center items-center w-10 h-10">
                        <FaChevronLeft className="text-btn"/>
                    </div>
                    <div className="swiper-button-nexts z-10 text-black border-2 border-sky-300 hover:border-btn-focus hover:scale-[.98] transition-all duration-200 focus:scale-95 rounded-full flex justify-center items-center w-10 h-10">
                        <FaChevronRight className="text-btn"/>
                    </div>
                </div>
        </div>
    )
}