import React from "react";
import { forwardRef } from "react";
import DevMate from "./project/DevMate";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CloneTving from "./project/CloneTving";
import { useRef } from "react";
import EatWell from "./project/EatWell";

const Projects = forwardRef((props, ref) => {
  const divRef = useRef(null);
  return (
    <div className="bg-[#edf2fb] py-[79px] px-[50px]" ref={ref}>
      <h2 className="pl-[30px] text-[40px] border-t-[2px] border-black pt-[10px] text-center font-bold">
        Projects
      </h2>
      <div className="w-[90%] m-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          className=" bg-white rounded-3xl mt-[40px] shadow-xl"
          centeredSlides={true}
        >
          <SwiperSlide className="h-full">
            <DevMate />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <CloneTving />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <EatWell />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
});

Projects.displayName = "Projects";
export default Projects;
