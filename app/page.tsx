"use client";

import SimpleSlider from "@/components/swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-main-bg bg-cover min-w-full min-h-[350vh] relative">
      <Header />
      <div>{/* <SimpleSlider /> */}</div>
      <Footer />
    </main>
  );
}
