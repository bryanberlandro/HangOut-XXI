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
    ]

    return(
        <>
        <Swiper
        pagination={{
            el: '.movie-pagination',
            clickable: true,
        }}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={15}
        effect={'coverflow'}
        coverflowEffect={{
            depth: 100,
            rotate: 30,
            stretch: 0,
            modifier: 1,
            slideShadows: true,
        }}
        loop={true}
        breakpoints={{
            768: {slidesPerView: 3},
            1280: {slidesPerView: 4}
        }}
        className="h-[350px] mt-8"
        >
            {posters.map((movie) => (
            <SwiperSlide key={movie.id}>
                    <img src={movie.image} alt=""  className="w-full h-full object-cover"/>
            </SwiperSlide>
            ))}
            
        </Swiper>
        <div className="movie-pagination flex gap-3 w-full justify-center">
        </div>
        </>
    )
}