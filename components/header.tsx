import React from "react";
import Image from "next/image";

import { RiSearchLine } from "react-icons/ri";

import "../css/header.css";

export default function Header() {
  return (
    <div className="header w-full h-[4vw] px-2 flex justify-between">
      <div className="flex items-center">
        <Image
          src={"/images/zted_icon.png"}
          alt="ZTED ICON"
          width={50}
          height={50}
          className="mx-2"
        />
        <h1 className="text-black">海南志途教育科技有限公司</h1>
      </div>
      <div className="relative flex items-center">
        <RiSearchLine color="black" className="absolute left-2" />
        <input type="text" className="w-[10vw] bg-white/50 rounded-lg" />
      </div>
    </div>
  );
}
