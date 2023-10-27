// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperImageList from "@/data/swiper_image_list.json";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/css/swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Gallery() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type:
            typeof window !== "undefined" && window.innerWidth <= 768
              ? "fraction"
              : "bullets",
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {SwiperImageList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={`/images/swiper/${item}`}
                key={index}
                alt={item}
                width={2000}
                height={2000}
                className="w-[15vw]"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
