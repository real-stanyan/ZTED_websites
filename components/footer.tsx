import React from "react";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col my-[10vw] items-center w-screen">
      <Image
        src={"/images/footer_qr_code.jpg"}
        alt="QR Code"
        width={100}
        height={100}
        className="m-2"
      />
      <p>
        <span className="font-sans">Copyright© 2023</span>
        海南志途教育科技有限公司
      </p>
    </div>
  );
}
