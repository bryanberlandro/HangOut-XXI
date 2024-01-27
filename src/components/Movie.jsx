import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        draggable={true}
        navigation={false}
        loop={true}
        modules={[Pagination,Navigation]}
        className="h-[450px] flex gap-10 py-6 my-2"
    >
        {posters.map((poster) => (
            <SwiperSlide key={poster.id} className="h-96 w-96 border-2 rounded-xl overflow-hidden shadow-soft">
                <img src={poster.image} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
        ))}

        
    </Swiper>
    </>
    )
}