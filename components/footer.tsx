import React from "react";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#80716E] p-[2vw]">
      {/* footer image */}
      <Image
        src={"/images/zted_icon.png"}
        alt={"footer_icon"}
        width={2000}
        height={2000}
        className="w-[20vw] mb-[4vw] md:w-[10vw] md:mb-[2vw]"
      />

      <div className="flex justify-evenly w-full text-center flex-col md:flex-row">
        {/* 版权 */}
        <h1 className="font-formal md:text-[1vw]">
          版权所有©海南志途教育科技有限公司
        </h1>
        <span className="text-black/20 hidden md:block">|</span>
        {/* 地址 */}
        <h1 className="font-formal md:text-[1vw]">
          地址: 北京市海淀区颐和园路2号未来科技大厦3层309室
        </h1>
        <span className="text-black/20 hidden md:block">|</span>
        {/* 邮编 */}
        <h1 className="font-formal md:text-[1vw]">邮编: 100080</h1>
        <span className="text-black/20 hidden md:block">|</span>
        {/* 邮箱 */}
        <h1 className="font-formal md:text-[1vw]">
          反馈意见: archiezhang97@gmail.com
        </h1>
        <span className="text-black/20 hidden md:block">|</span>
        {/* 备案号 */}
        <h1 className="font-formal md:text-[1vw]">琼ICP备2023011210号</h1>
      </div>
    </div>
  );
}
