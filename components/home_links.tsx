import Image from "next/image";
import Link from "next/link";

export default function HomeLinks() {
  return (
    <div className="flex justify-around items-center w-full h-[20vh] md:h-[70vh]">
      {/* 课程咨询 */}
      <div className="group flex flex-col justify-center items-center w-[25%] h-full">
        <div className="w-[90%] hidden group-hover:flex justify-center items-center shadow-2xl rounded-2xl">
          <Image
            src={"/images/qr.jpeg"}
            alt="QR"
            width={1000}
            height={1000}
            className="w-[90%]"
          />
        </div>
        <Image
          src={"/images/form_icon.png"}
          alt="form icon"
          width={1000}
          height={1000}
          className="w-[15vw] h-[15vw] md:w-[8vw] md:h-[8vw] mb-[10px] group-hover:hidden"
        />
        <h1 className="text-[3vw] md:text-[1.5vw] text-black text-center whitespace-nowrap group-hover:hidden">
          报名咨询
        </h1>
      </div>
      {/* 企业文化 */}
      <div className="group flex flex-col justify-center items-center w-[25%] h-full">
        <div className="hidden group-hover:flex font-formal text-[1vw] text-black shadow-inner">
          海南志途教育科技有限公司，专注于培养卓越领导力。我们与北京大学紧密合作，提供尖端的企业家和领导力培训课程。我们的使命是通过深入理解企业文化和领导力原则，培养出能够引领未来的创新者和领袖。我们的课程不仅注重理论知识，也强调实践和经验分享，确保每位学员都能从中获得实际可行的策略和技巧。我们致力于创造一个支持性和互动的学习环境，让每位企业家和领导者都能在这里找到成长和发展的机会。海南志途教育科技有限公司，是您成就卓越领导力之旅的最佳选择。
        </div>
        <Image
          src={"/images/company_icon.png"}
          alt="form icon"
          width={1000}
          height={1000}
          className="w-[15vw] h-[15vw] md:w-[8vw] md:h-[8vw] mb-[10px] group-hover:hidden"
        />
        <h1 className="text-[3vw] md:text-[1.5vw] text-black text-center whitespace-nowrap group-hover:hidden">
          企业文化
        </h1>
      </div>
      {/* 公司地址 */}
      <div className="group flex flex-col justify-center items-center w-[25%] h-full hover:shadow-inner">
        <div className="hidden group-hover:flex text-black flex-col justify-center items-center bg-[white]">
          <Image
            src={"/images/map.jpeg"}
            alt="map"
            width={1000}
            height={1000}
            className="w-[100%] mb-[30px] rounded-xl shadow-2xl"
          />
          <h1 className="text-[1vw] font-formal">
            北京市海淀区颐和园路2号未来科技大厦3层309室
          </h1>
        </div>
        <Image
          src={"/images/location_icon.png"}
          alt="form icon"
          width={1000}
          height={1000}
          className="w-[15vw] h-[15vw] md:w-[8vw] md:h-[8vw] mb-[10px] group-hover:hidden"
        />
        <h1 className="text-[3vw] md:text-[1.5vw] text-black text-center whitespace-nowrap group-hover:hidden">
          公司地址
        </h1>
      </div>
      {/* 友情链接 */}
      <div className="group flex flex-col justify-center items-center w-[25%] h-full hover:shadow-inner">
        <div className="hidden group-hover:flex flex-col justify-evenly items-center text-black text-center w-full h-[100%] bg-[white]">
          <div className="font-formal whitespace-nowrap text-[1vw]">
            北京大学继续教育部:
            <br />
            <Link
              href={"https://www.oce.pku.edu.cn/cms/"}
              className="font-formal"
            >
              https://www.oce.pku.edu.cn/cms/
            </Link>
          </div>
          <div className="font-formal whitespace-nowrap text-[1vw]">
            北京大学经济学院高端教育:
            <br />
            <Link
              href={"https://econ.pku.edu.cn/gdjy/edpzxjj/index.htm"}
              className="font-formal"
            >
              https://econ.pku.edu.cn/gdjy/edpzxjj/index.htm
            </Link>
          </div>
          <div className="font-formal whitespace-nowrap text-[1vw]">
            河南豫商联合会:
            <br />
            <Link href={"http://www.yushang.org.cn/"} className="font-formal">
              http://www.yushang.org.cn/
            </Link>
          </div>
        </div>
        <Image
          src={"/images/link_icon.png"}
          alt="form icon"
          width={1000}
          height={1000}
          className="w-[15vw] h-[15vw] md:w-[8vw] md:h-[8vw] mb-[10px] group-hover:hidden"
        />
        <h1 className="text-[3vw] md:text-[1.5vw] text-black text-center whitespace-nowrap group-hover:hidden">
          友情链接
        </h1>
      </div>
    </div>
  );
}
