import { Swiper } from "../utils/Swiper";
import { SwiperSlide } from "../utils/SwiperSlide";
import { FaFire } from "react-icons/fa6";

export function UpcomingMovie(){
    const upcomingMovies = [
        {
            id: 1,
            image: '/img/upcoming-1.jpg',
        },
        {
            id: 2,
            image: '/img/upcoming-2.png',
        },
        {
            id: 3,
            image: '/img/upcoming-3.jpg',
        },
        {
            id: 4,
            image: '/img/upcoming-4.jpg',
        },
        {
            id: 5,
            image: '/img/upcoming-5.jpg',
        },
    ]

    return(
        <>
        <div className="flex items-center gap-2 mt-20 mb-8 px-[5%]">
            <h1 className="font-semibold text-lg">Upcoming Movies</h1>
            <FaFire className="text-red-400 animate-bounce"/>
        </div>
        <Swiper
        pagination={{
            el: '.custom-pagination',
            clickable: true,
        }}
        centeredSlides={true}
        effect={'coverflow'}
        coverflowEffect={{
            depth: 150,
            rotate: 30,
            stretch: 0,
            modifier: 1,
            slideShadows: true,
        }}
        loop={true}
        breakpoints={{
            360: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        }}
        className="h-[350px] w-full mt-8 md:h-[470px] md:mt-14 xl:h-[500px]"
        >
            {upcomingMovies.map((movie) => (
            <SwiperSlide key={movie.id} className='swiper-slide-upcoming'>
                    <img src={movie.image} alt=""  className="w-full h-full object-cover"/>

            </SwiperSlide>
            ))}
            
        </Swiper>
        <div className="custom-pagination flex gap-2 w-full justify-center xl:mt-5">
        </div>
        </>
    )
}