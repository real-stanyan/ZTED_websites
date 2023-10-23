"use client";

import { useState } from "react";
import Image from "next/image";

import { RiSearchLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const [MobileNav, setMobileNav] = useState(false);

  return (
    <>
      {/* header */}
      <div className="relative w-full h-[10vw] md:h-[4vw] px-2 flex justify-between bg-header-bg bg-cover truncate z-[10]">
        <div className="flex items-center">
          <Image
            src={"/images/zted_icon.png"}
            alt="ZTED ICON"
            width={50}
            height={50}
            className="mx-2 h-[80%] w-[auto]"
          />
          <h1 className="text-black text-[4vw] md:text-[2vw]">
            海南志途教育科技有限公司
          </h1>
        </div>
        {/* search bar */}
        <div className="relative hidden md:flex items-center">
          <RiSearchLine color="black" className="absolute left-2" />
          <input
            type="text"
            className="w-[10vw] bg-white/50 rounded-lg text-black pl-8 focus:outline-none"
          />
        </div>
        {/* nav bar for mobile */}
        <div
          className="flex md:hidden items-center cursor-pointer"
          onClick={() => {
            setMobileNav(!MobileNav);
          }}
        >
          <HiMenu color="#c12221" size="20" />
        </div>
      </div>
      {/* nav bar */}
      <div className="hidden md:flex justify-between items-center px-[20vw] h-[3vw] bg-nav-bg bg-cover">
        <div className="cursor-pointer text-[1.2vw]">首页</div>
        <div className="cursor-pointer text-[1.2vw]">关于我们</div>
        <div className="cursor-pointer text-[1.2vw]">河南文化</div>
        <div className="cursor-pointer text-[1.2vw]">课程介绍</div>
        <div className="cursor-pointer text-[1.2vw]">新闻与活动</div>
        <div className="cursor-pointer text-[1.2vw]">课程报名</div>
        <div className="cursor-pointer text-[1.2vw]">联系我们</div>
      </div>
      <div
        className={`flex md:hidden absolute w-screen h-[50vh] bg-nav-bg bg-cover z-[0] ${
          MobileNav ? "top-0" : "-top-[50vh]"
        } transition-all duration-500 ease-in-out`}
      >
        <ul className="mt-[10vw] px-3 w-full flex flex-col justify-evenly">
          <li>首页</li>
          <li>关于我们</li>
          <li>河南文化</li>
          <li>课程介绍</li>
          <li>新闻与活动</li>
          <li>课程报名</li>
          <li>联系我们</li>
        </ul>
      </div>
    </>
  );
}
