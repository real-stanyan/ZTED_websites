"use client";

import { useState } from "react";

import NewsCard from "./news_card";

export default function News() {
  return (
    <>
      <div className="flex justify-around items-center p-2 w-[80vw] md:w-[70vw] h-[30px] md:h-[50px] bg-nav-bg rounded bg-cover">
        <h1 className="text-[4vw] md:text-[2vw] cursor-pointer">新闻资讯</h1>
        <p className="text-[3vw] md:text-[1.5vw] cursor-pointer">最新</p>
        <p className="text-[3vw] md:text-[1.5vw] cursor-pointer">总览</p>
      </div>
      <div>
        <NewsCard />
        <NewsCard />
      </div>
      <div className="w-[70vw] h-[20px] leading-[20px] md:h-[50px] md:leading-[50px] my-5 text-center text-[2vw] bg-white/50 hover:bg-white text-black rounded cursor-pointer">
        更多信息
      </div>
    </>
  );
}
