import Image from "next/image";

export default function NewsCard() {
  return (
    <div className="flex flex-col justify-evenly text-black w-[70vw] h-[70px] md:h-[300px] border-b-2 border-black/10 rounded overflow-hidden">
      <h1 className="p-1 text-[2vw]">新闻标题</h1>
      <div className="flex items-center">
        <Image
          src={"/images/zted_icon.png"}
          alt="icon"
          width={200}
          height={200}
          className="flex-4 p-1 md:p-3 w-[50px] h-[50px] md:w-[200px] md:h-[200px]"
        />
        <p className="flex-4 p-1 md:p-3 text-[1.2vw] font-mono">
          首個國家級賽事、由國家體育總局網球運動管理中心及中國網球協會直接領導的中國網球巡迴賽正式落戶香港，將於2023年11月19日至26日一連八日假維多利亞公園網球場進行，超過150位來自全國各地的頂尖網球好手雲集香港，展開連場精彩大戰。希望透過今次的國家級賽事，凝聚市民對國家體育發展及運動員的關注和支持，提升市民大眾投入運動的氣氛，並提升香港的運動水平；同時希望透過今次網球賽事，能助力內地與香港在體育發展上的交流融合，並為香港及大灣區其他城市鞏固體育文化，貢獻國家體育發展新氣象。
        </p>
      </div>
    </div>
  );
}
