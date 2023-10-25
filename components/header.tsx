"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { RiSearchLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const router = useRouter();
  const [MobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 获取视口高度的50%
      const triggerHeight = window.innerHeight * 0.2;

      if (window.scrollY >= triggerHeight) {
        console.log("User scrolled more than 50vh!");
        setMobileNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 当组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`py-[5vw] fixed flex flex-col items-center md:hidden left-0 w-screen h-[50vh] bg-nav-bg bg-cover z-[0] ${
          MobileNav ? "top-0" : "-top-[50vh]"
        } transition-all duration-500 ease-in-out z-20 rounded`}
      >
        <input
          type="text"
          className="w-[80vw] h-[7vw] px-4 rounded bg-transparent border-white border font-sans focus:outline-none"
        />
        <ul className="px-3 w-full flex flex-wrap text-center leading-[70px]">
          <li className="w-[50%] h-[40px] text-[5vw] invert">
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg ">
              首
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              页
            </span>
          </li>
          <li className="w-[50%] h-[40px] text-[5vw]">
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              关
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              于
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              我
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              们
            </span>
          </li>
          <li className="w-[50%] h-[40px] text-[5vw]">
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              河
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              南
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              文
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              化
            </span>
          </li>
          <li className="w-[50%] h-[40px] text-[5vw]">
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              课
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              程
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              介
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              绍
            </span>
          </li>
          <li className="w-[50%] h-[40px] text-[5vw]">
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              新
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              闻
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              与
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              活
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              动
            </span>
          </li>
          <li className="w-[50%] h-[40px] text-[5vw]">
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              课
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              程
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              报
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              名
            </span>
          </li>
          <li className="w-[50%] h-[40px] text-[5vw]">
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              联
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              系
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              我
            </span>
            <span className="p-2 bg-moblie-nav-bg bg-cover drop-shadow-lg">
              们
            </span>
          </li>
        </ul>
      </div>
      {/* header */}
      <div
        className={`w-full ${
          MobileNav ? "h-[60vw] bg-nav-bg" : "h-[10vw]"
        } md:h-[4vw] px-2 flex justify-between bg-header-bg bg-cover truncate transition-all duration-500 ease-in-out`}
      >
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
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
        <Link href="/">
          <div className="cursor-pointer text-[1.2vw]">首页</div>
        </Link>
        <Link href="/aboutus">
          <div className="cursor-pointer text-[1.2vw]">关于我们</div>
        </Link>
        <div className="cursor-pointer text-[1.2vw]">课程介绍</div>
        <div className="cursor-pointer text-[1.2vw]">新闻与活动</div>
        <div className="cursor-pointer text-[1.2vw]">课程报名</div>
        <div className="cursor-pointer text-[1.2vw]">联系我们</div>
      </div>
    </>
  );
}
