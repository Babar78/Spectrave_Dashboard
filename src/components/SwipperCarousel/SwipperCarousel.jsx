import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";


const SwipperCarousel = ({ slideItems }) => {
    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
            {slideItems.map((slideItem) => (
                <SwiperSlide key={slideItem.id}>{slideItem.content}</SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SwipperCarousel