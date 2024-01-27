import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import poster1 from '../assets/img/poster-1.webp'
import poster2 from '../assets/img/poster-2.jpg'
import poster3 from '../assets/img/poster-3.jpeg'
import poster4 from '../assets/img/poster-4.jpg'
import poster5 from '../assets/img/poster-5.webp'

import 'swiper/css';
import 'swiper/css/pagination';


export function Movie(){
    return(
        <>
        <Swiper
        slidesPerView={2}
        spaceBetween={60}
        centeredSlides={false}
        draggable={true}
        modules={[Pagination]}
        className="h-96 mt-4 flex gap-4"
      >
        <SwiperSlide>
            <div className="h-80 w-48 border-2 rounded-xl overflow-hidden shadow-multiple">
                <img src={poster1} alt="" className="w-full h-full object-cover" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="h-80 w-48 border-2 rounded-xl overflow-hidden shadow-multiple">
                <img src={poster2} alt="" className="w-full h-full object-cover" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="h-80 w-48 border-2 rounded-xl overflow-hidden shadow-multiple">
                <img src={poster3} alt="" className="w-full h-full object-cover" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="h-80 w-48 border-2 rounded-xl overflow-hidden shadow-multiple">
                <img src={poster4} alt="" className="w-full h-full object-cover" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="h-80 w-52 border-2 rounded-xl overflow-hidden shadow-multiple">
                <img src={poster5} alt="" className="w-full h-full object-cover" />
            </div>
        </SwiperSlide>
        
      </Swiper>
        </>
    )
}