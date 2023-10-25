// import Image from "next/image";

// import SwiperImageList from "@/data/swiper_image_list.json";

// export default function Swiper() {
//   const renderSwiperSlides = () => {
//     return SwiperImageList.map((item, index) => (
//       <Image
//         src={`/images/swiper/${item}`}
//         key={index}
//         alt={item}
//         width={200}
//         height={200}
//         className="w-[15vw]"
//       />
//     ));
//   };

//   return (
//     <div className="h-[40vw] w-[200vw] flex flex-wrap justify-center my-[4vw] rounded relative top-0 left-[10vw] animate-swiper">
//       {renderSwiperSlides()}
//     </div>
//   );
// }
import React, { useRef, useState } from "react";
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
        }}
        navigation={true}
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
