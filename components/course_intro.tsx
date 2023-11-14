import Image from "next/image";

export default function CourseIntro() {
  return (
    <div className=" w-[100vw] h-[100vh] flex overflow-hidden flex-nowrap">
      {/* 1 */}
      <div className="flex flex-col justify-center items-center p-[3vw]">
        <h1 className="text-[#790511] text-[6vw] flex flex-col justify-center items-center mb-[5vw]">
          <div>课</div>
          <div>程</div>
          <div>介</div>
          <div>绍</div>
        </h1>
        <div className="w-[80%]  h-[10px] flex justify-center items-center bg-[#790511] p-[2vw]  whitespace-nowrap rounded-2xl">
          立即报名
        </div>
      </div>
      {/* 2 */}
      <div>
        <Image
          src={"/images/zhuanxing_banner.jpeg"}
          alt="转型班"
          width={2000}
          height={2000}
        />
      </div>
      <div>
        <Image
          src={"/images/guoxue_banner.jpeg"}
          alt="转型班"
          width={2000}
          height={2000}
        />
      </div>
      <div>
        <Image
          src={"/images/jiuxing_banner.jpeg"}
          alt="转型班"
          width={2000}
          height={2000}
        />
      </div>
      <div>
        <Image
          src={"/images/nanmei_banner.jpeg"}
          alt="转型班"
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
}
