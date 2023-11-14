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
        <h1 className="font-formal">版权所有©xxx</h1>
        <span className="text-black/20">|</span>
        <h1 className="font-formal">地址：xxx</h1>
        <span className="text-black/20">|</span>
        <h1 className="font-formal">邮编：xxx</h1>
        <span className="text-black/20">|</span>
        <h1 className="font-formal">反馈意见：xxx</h1>
        <span className="text-black/20">|</span>
        <h1 className="font-formal">京ICP备xxx</h1>
        <span className="text-black/20">|</span>
        <h1 className="font-formal">京公网安备xxxx号</h1>
      </div>
    </div>
  );
}
