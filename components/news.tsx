import Image from "next/image";

export default function News() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <h1 className="text-[#A92428] text-[4vw] mb-[2vw] text-center">
        志途·要闻
      </h1>
      <div className="grid gap-4 grid-cols-2 h-[70vh]">
        {/* 行1 */}
        <div className="h-full">
          {/* 行1轮播图 */}
          <div className="text-black w-[50vw] overflow-hidden h-[50%] flex justify-center items-center">
            <Image
              src={"/images/swiper/1.jpg"}
              alt={"asd"}
              width={2000}
              height={2000}
              className="object-top object-cover max-w-[90%] max-h-[90%] shadow-xl"
            />
          </div>
          {/* 行1新闻 */}
          <div className="grid gap-4 grid-cols-2 text-black w-[50vw] p-[1vw] h-[50%]">
            <div className="border-b-4 border-[#A92428] bg-white shadow-lg">
              新闻1
            </div>
            <div className="border-b-4 border-[#A92428] bg-white shadow-lg">
              新闻
            </div>
            <div className="border-b-4 border-[#A92428] bg-white shadow-lg">
              新闻
            </div>
            <div className="border-b-4 border-[#A92428] bg-white shadow-lg">
              新闻
            </div>
          </div>
        </div>
        {/* 行2 */}
        <div className="h-full">
          {/* 行2新闻 */}
          <div className="grid gap-4 grid-cols-2 text-black w-[50vw]  p-[1vw] h-[50%]">
            <div className="border-b-4 border-[#A92428] shadow-lg">新闻1</div>
            <div className="border-b-4 border-[#A92428] shadow-lg">新闻</div>
            <div className="border-b-4 border-[#A92428] shadow-lg">新闻</div>
            <div className="border-b-4 border-[#A92428] shadow-lg">新闻</div>
          </div>
          {/* 行2轮播图 */}
          <div className="text-black w-[50vw] overflow-hidden h-[50%] flex justify-center items-center">
            <Image
              src={"/images/swiper/1.jpg"}
              alt={"asd"}
              width={2000}
              height={2000}
              className="object-top object-cover max-w-[90%] max-h-[90%] shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
