import Image from "next/image";
import Link from "next/link";

export default function CourseIntro() {
  return (
    <div className="w-[100vw] h-[50vh] md:h-[100vh] flex overflow-hidden flex-nowrap">
      {/* 1 */}
      <div className="hidden md:flex flex-col justify-center items-center p-[3vw]">
        <h1 className="text-[#790511] text-[6vw] flex flex-col justify-center items-center mb-[5vw]">
          <div>课</div>
          <div>程</div>
          <div>介</div>
          <div>绍</div>
        </h1>
        <Link
          href={"/enroll"}
          className="group w-[200px] h-[10px] text-[1.5vw] flex justify-center items-center bg-[#790511] p-[2vw]  whitespace-nowrap rounded-2xl cursor-pointer "
        >
          <h1 className="group-hover:glowing">立即报名</h1>
        </Link>
      </div>
      {/* 2 */}
      <Link
        href={"/courseintro/yushang"}
        className="w-[100%] h-[100%] relative hover:w-[150%] duration-300 ease-in-out"
      >
        <Image
          src={"/images/zhuanxing_banner.jpeg"}
          alt="转型班"
          layout="fill" // 这会使图片填充整个容器
          objectFit="cover" // 这会覆盖 object-contain，确保图片沾满整个容器
        />
      </Link>

      <Link
        href={"/courseintro/guoxue"}
        className="w-[100%] h-[100%] relative hover:w-[150%] duration-300 ease-in-out"
      >
        <Image
          src={"/images/guoxue_banner.jpeg"}
          alt="转型班"
          layout="fill" // 这会使图片填充整个容器
          objectFit="cover" // 这会覆盖 object-contain，确保图片沾满整个容器
        />
      </Link>

      <Link
        href={"/courseintro/juexing"}
        className="w-[100%] h-[100%] relative hover:w-[150%] duration-300 ease-in-out"
      >
        <Image
          src={"/images/jiuxing_banner.jpeg"}
          alt="转型班"
          layout="fill" // 这会使图片填充整个容器
          objectFit="cover" // 这会覆盖 object-contain，确保图片沾满整个容器
        />
      </Link>

      <Link
        href={"/courseintro/nanmei"}
        className="w-[100%] h-[100%] relative hover:w-[150%] duration-300 ease-in-out"
      >
        <Image
          src={"/images/nanmei_banner.jpeg"}
          alt="转型班"
          layout="fill" // 这会使图片填充整个容器
          objectFit="cover" // 这会覆盖 object-contain，确保图片沾满整个容器
        />
      </Link>
    </div>
  );
}
