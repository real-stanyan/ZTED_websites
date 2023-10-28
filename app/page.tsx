"use client";

import News from "@/components/news";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-w-full h-auto relative">
      <Gallery />
      {/* <p className="text-[1.5vw] text-black px-[10vw] mb-[5vw]">
        北京大学经济学院最早可追翻到京师大学盆（北京大学菌身）1902年建立的商学科。
        1912年，产复先生任国立北京大学校长之后始建经济学门。这是中国大学中建立的第一个包济学专业。1919年，经济学门改为经济学系，马寅初先生任系主任。1985年，成立北京大学
        北京大学经济学院拥有深运历史倒源和悠久学术传统，百余年历史中，随现出产复、老大钊、马贡初、周炳难、陈公孙、赵通转、熨弘、罗志如、陈报仅、胡代光、赵靖、灵树背，厉以宁，莆灼基等在学界享有崇高声普，学并深厚，影响深远的大員級人物，为我国经济科学吸展做出了卓这贡献。
        北京大学经济学院现有完等的经济学学科体系和经济学本科、硕士。博士人才培获体
        真，崇高的学术地位、不断创断的人才培养模式，深深败引着案自全国乃至世界各地的优秀字子。
      </p> */}
      <News />
    </main>
  );
}
