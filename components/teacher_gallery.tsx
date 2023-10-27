// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import TeacherImageList from "@/data/teacher_image_list.json";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/css/swiper.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

export default function TeacherGallery() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        {TeacherImageList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={`/images/teacher/${
                  typeof item === "string" ? item : item.url
                }`}
                key={index}
                alt={typeof item === "string" ? item : item.url}
                width={2000}
                height={2000}
                className="w-[15vw]"
              />
              <div className="w-full h-[100px] absolute bottom-0 bg-white/50">
                {typeof item === "string" ? item : item.name}
                <br />
                {typeof item === "string" ? item : item.des}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
