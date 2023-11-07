import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center text-[5vw] text-black">
      <Image
        src={`/images/404.png`}
        alt="404_icon"
        width={400}
        height={400}
        className="w-[30vw] md:w-[20vw]"
      />
      <h1 className="text-center">
        404
        <br />
        未找到页面
      </h1>
    </div>
  );
}
