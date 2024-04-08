import { Swiper } from "../utils/Swiper";
import { SwiperSlide } from "../utils/SwiperSlide";

import 'swiper/css';
import 'swiper/css/pagination';
import { MoviesData } from "../data/MoviesData";
import { Suspense, lazy} from "react";
const MovieFrag = lazy(() => import("./Fragments/MovieFrag"));


export function Movie(){
    function loadComp(){
        return(
            <>
            <div className="w-full h-full bg-neutral-300 animate-pulse object-cover">

            </div>
            </>
        )
    }


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
                    <Suspense fallback={loadComp()}>
                        <MovieFrag movie={movie}/>
                    </Suspense>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className="movie-pagination flex w-full justify-center xl:mt-5">
        </div>
        </>
    )
}