import React from "react";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#80716E] p-[2vw]">
      <Image
        src={"/images/zted_icon.png"}
        alt={"footer_icon"}
        width={2000}
        height={2000}
        className="w-[10vw] mb-[2vw]"
      />
      <div className="flex justify-evenly w-full">
        <h1 className="font-formal">版权所有©海南志途教育科技有限公司</h1>
        <span className="text-black/20">|</span>
        <h1 className="font-formal">
          地址: 北京市海淀区颐和园路2号未来科技大厦3层309室
        </h1>
        <span className="text-black/20">|</span>
        <h1 className="font-formal">邮编: 100080</h1>
        <span className="text-black/20">|</span>
        <h1 className="font-formal">反馈意见: archiezhang97@gmail.com</h1>
        <span className="text-black/20">|</span>
        <h1 className="font-formal">琼ICP备2023011210号</h1>
      </div>
    </div>
  );
}
