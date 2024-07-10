import React from "react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ImgSwiper({ imageSrcs }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      centeredSlides={true}
      loop={false}
      allowTouchMove={false}
      navigation={true}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imageSrcs.map((src, index) => {
        return (
          <SwiperSlide key={index}>
            <img className="w-full h-full" src={src} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ImgSwiper;
