import Image from "next/image";

import NewSwiper from "@/components/news_swiper1";

export default function News() {
  return (
    <>
      {/* 电脑适配 */}
      <div className="w-[100vw] h-[150vh] hidden md:block">
        <h1 className="text-[#A92428] text-[7vw] md:text-[4vw] mb-[2vw] text-center">
          志途·要闻
        </h1>
        <div className="grid gap-4 grid-cols-2 h-[70vh]">
          {/* 行1 */}
          <div className="h-full">
            {/* 行1轮播图 */}
            <div className="text-black w-[50vw] overflow-hidden h-[50%] flex justify-center items-center rounded-2xl">
              <NewSwiper />
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
              <div className="border-b-4 border-[#A92428] shadow-lg flex justify-center items-center p-[1vw] relative font-formal">
                北京大学（豫商）企业转型升级领导力提升高级研修班西柏坡、塔元庄村和正定古城党课研学活动成功举办
                <span className="absolute bottom-1 right-1 font-formal">
                  2023-10-09
                </span>
              </div>
              <div className="border-b-4 border-[#A92428] shadow-lg flex justify-center items-center p-[1vw] relative font-formal">
                凝聚力量
                再创辉煌——北京大学（豫商）企业转型升级领导力提升高级研修班研学活动在北京大学经济学院石家庄教科研基地成功举办
                <span className="absolute bottom-1 right-1 font-formal">
                  2023-10-28
                </span>
              </div>
              <div className="border-b-4 border-[#A92428] shadow-lg">新闻</div>
              <div className="border-b-4 border-[#A92428] shadow-lg">新闻</div>
            </div>
            {/* 行2轮播图 */}
            <div className="text-black w-[50vw] overflow-hidden h-[50%] flex justify-center items-center">
              <Image
                src={"/images/news_img.jpg"}
                alt={"asd"}
                width={2000}
                height={2000}
                className="object-bottom object-cover max-w-[90%] max-h-[90%] shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 手机适配 */}
      <div className="block md:hidden">
        <h1 className="text-[#A92428] text-[7vw] md:text-[4vw] mb-[2vw] text-center">
          志途·要闻
        </h1>
        <div className="text-white w-[90vw] h-[30vh] overflow-hidden flex justify-center items-center rounded-2xl">
          <NewSwiper />
        </div>
        {/* 新闻 */}
        <div className="text-black w-[90vw]">
          <div className="w-full h-[10vh] mb-[2vh] border-b-4 border-[#A92428] bg-white shadow-lg relative">
            北京大学（豫商）企业转型升级领导力提升高级研修班西柏坡、塔元庄村和正定古城党课研学活动成功举办
            <span className="absolute bottom-1 right-1 font-formal">
              2023-10-09
            </span>
          </div>
          <div className=" w-full h-[10vh] mb-[2vh] border-b-4 border-[#A92428] bg-white shadow-lg relative">
            北京大学（豫商）企业转型升级领导力提升高级研修班西柏坡、塔元庄村和正定古城党课研学活动成功举办
            <span className="absolute bottom-1 right-1 font-formal">
              2023-10-09
            </span>
          </div>
          <div className="w-full h-[10vh] mb-[2vh] border-b-4 border-[#A92428] bg-white shadow-lg relative">
            北京大学（豫商）企业转型升级领导力提升高级研修班西柏坡、塔元庄村和正定古城党课研学活动成功举办
            <span className="absolute bottom-1 right-1 font-formal">
              2023-10-09
            </span>
          </div>
          <div className="w-full h-[10vh] mb-[2vh] border-b-4 border-[#A92428] bg-white shadow-lg relative">
            北京大学（豫商）企业转型升级领导力提升高级研修班西柏坡、塔元庄村和正定古城党课研学活动成功举办
            <span className="absolute bottom-1 right-1 font-formal">
              2023-10-09
            </span>
          </div>
          <div className=" w-full h-[10vh] mb-[2vh] border-b-4 border-[#A92428] bg-white shadow-lg relative">
            北京大学（豫商）企业转型升级领导力提升高级研修班西柏坡、塔元庄村和正定古城党课研学活动成功举办
            <span className="absolute bottom-1 right-1 font-formal">
              2023-10-09
            </span>
          </div>
          <div className="w-full h-[10vh] mb-[2vh] border-b-4 border-[#A92428] bg-white shadow-lg relative">
            北京大学（豫商）企业转型升级领导力提升高级研修班西柏坡、塔元庄村和正定古城党课研学活动成功举办
            <span className="absolute bottom-1 right-1 font-formal">
              2023-10-09
            </span>
          </div>
          <div className="w-full h-[10vh] mb-[2vh] border-b-4 border-[#A92428] bg-white shadow-lg relative">
            北京大学（豫商）企业转型升级领导力提升高级研修班西柏坡、塔元庄村和正定古城党课研学活动成功举办
            <span className="absolute bottom-1 right-1 font-formal">
              2023-10-09
            </span>
          </div>
          <div className="w-full h-[10vh] mb-[2vh] border-b-4 border-[#A92428] bg-white shadow-lg relative">
            北京大学（豫商）企业转型升级领导力提升高级研修班西柏坡、塔元庄村和正定古城党课研学活动成功举办
            <span className="absolute bottom-1 right-1 font-formal">
              2023-10-09
            </span>
          </div>
        </div>
        <div className="text-black w-[90vw] overflow-hidden h-[50%] flex justify-center items-center">
          <Image
            src={"/images/news_img.jpg"}
            alt={"asd"}
            width={2000}
            height={2000}
            className="object-bottom object-cover max-w-[90%] max-h-[90%] shadow-xl mb-[2vh]"
          />
        </div>
      </div>
    </>
  );
}
