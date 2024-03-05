import { Swiper } from "../utils/Swiper";
import { SwiperSlide } from "../utils/SwiperSlide";

import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";
import { MoviesData } from "../data/MoviesData";


export function Movie(){
    return(
        <>
        <Swiper
        pagination={{
            el: '.movie-pagination',
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
            {MoviesData.map((movie) => (
                <SwiperSlide key={movie.id} className="relative">
                    {/* {schedule.map(s => (
                        <div key={s.id} className="absolute w-10 h-5 bg-red-300">{s.cinema}</div>
                    ))} */}
                    <Link to={`/movie/${movie.id}`}  className="w-full h-full object-cover">
                        <img src={movie.image} alt=""  className="w-full h-full object-cover"/>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className="movie-pagination flex w-full justify-center xl:mt-5">
        </div>
        </>
    )
}