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
      {/* <Image
        src={"/images/swiper_btn.svg"}
        alt="swiper_btn"
        width={100}
        height={100}
        className="w-[15vw] h-[15vw] absolute right-[-8vw] top-[30vh] z-10"
      />
      <div className="flex flex-col justify-center h-[5vw] absolute right-[10px] top-[39vh] text-black z-20 text-[1.8vw] cursor-pointer">
        <h1>探</h1>
        <h1>索</h1>
        <h1>更</h1>
        <h1>多</h1>
      </div> */}
      <Swiper
        style={{ width: "100vw", height: "calc(100vh - 4vw)" }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
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
                className="object-top"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
