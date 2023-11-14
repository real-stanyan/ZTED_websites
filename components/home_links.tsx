import Image from "next/image";

export default function HomeLinks() {
  return (
    <div className="flex justify-around items-center w-full h-[70vh]">
      <div>
        <Image
          src={"/images/form_icon.png"}
          alt="form icon"
          width={1000}
          height={1000}
          className="w-[8vw] h-[8vw] mb-[10px]"
        />
        <h1 className="text-[1.5vw] text-black text-center whitespace-nowrap">
          报名咨询
        </h1>
      </div>
      <div>
        <Image
          src={"/images/company_icon.png"}
          alt="form icon"
          width={1000}
          height={1000}
          className="w-[8vw] h-[8vw] mb-[10px]"
        />
        <h1 className="text-[1.5vw] text-black text-center whitespace-nowrap">
          企业文化
        </h1>
      </div>
      <div>
        <Image
          src={"/images/location_icon.png"}
          alt="form icon"
          width={1000}
          height={1000}
          className="w-[8vw] h-[8vw] mb-[10px]"
        />
        <h1 className="text-[1.5vw] text-black text-center whitespace-nowrap">
          公司地址
        </h1>
      </div>
      <div>
        <Image
          src={"/images/link_icon.png"}
          alt="form icon"
          width={1000}
          height={1000}
          className="w-[8vw] h-[8vw] mb-[10px]"
        />
        <h1 className="text-[1.5vw] text-black text-center whitespace-nowrap">
          友情链接
        </h1>
      </div>
    </div>
  );
}
