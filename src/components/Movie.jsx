import { Swiper } from "../utils/Swiper";
import { SwiperSlide } from "../utils/SwiperSlide";

import poster1 from '../assets/img/poster-1.webp'
import poster2 from '../assets/img/poster-2.jpg'
import poster3 from '../assets/img/poster-3.jpeg'
import poster4 from '../assets/img/poster-4.jpg'
import poster5 from '../assets/img/poster-5.webp'

import 'swiper/css';
import 'swiper/css/pagination';


export function Movie(){
    const posters = [
        {
            'image': poster1,
            'id': 1,
        },
        {
            'image': poster2,
            'id': 2,
        },
        {
            'image': poster3,
            'id': 3,
        },
        {
            'image': poster4,
            'id': 4,
        },
        {
            'image': poster5,
            'id': 5,
        },
        {
            'image': poster5,
            'id': 6,
        },
        {
            'image': poster5,
            'id': 7,
        },
        {
            'image': poster5,
            'id': 8,
        },
    ]

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
            {posters.map((movie) => (
            <SwiperSlide key={movie.id}>
                    <img src={movie.image} alt=""  className="w-full h-full object-cover"/>
            </SwiperSlide>
            ))}
            
        </Swiper>
        <div className="movie-pagination flex w-full justify-center xl:mt-5">
        </div>
        </>
    )
}