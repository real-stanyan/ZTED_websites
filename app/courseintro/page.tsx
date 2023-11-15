"use client";

import TeacherGallery from "@/components/teacher_gallery";

import data from "@/data/course_detail_data.json";

const CourseDetailData: CourseInfo[] = data;

import CourseIntroInter from "@/components/course_intro";

export default function CourseIntro() {
  return (
    <CourseIntroInter />
    // <>
    //   <div className="px-[6vw] py-[3vw] min-w-full h-auto text-black">
    //     <div>
    //       <h1 className="text-center text-[2vw] font-bold text-[#9d0806]">
    //         大学(豫商)企业转型升级领导力提升高级研修班
    //       </h1>
    //       <h2 className="text-[1.8vw] text-[#9d0806]">研修背景</h2>
    //       <p className="text-[1.2vw]">
    //         段商在加烂的华叉
    //         文明中子有面生：立足中原．影响道及中国和世界，在新时代积浆奋发向上的磅博力
    //         量，成为中原吸起的先锋军，为中国经济的高质量发展注入了生机和活力。
    //         北京大学经济学院秉承百年学府经邦济世的人
    //         文情怀、深蓬的学术思想与深厚的文化底蕴汇染中原商业粘英，引领全球前沿思想，染焦企业优化升级，多维度培券中四豫商企业领袖的国际视野与战略格局，弘扬德商精神，凝染像商力量，助力豫商在中国经济高质量发展的征程中开職拓士，行稳致远，永续辉煌！
    //       </p>
    //       <h2 className="text-[1.8vw] text-[#9d0806]">课程价值</h2>
    //       <p className="text-[1.2vw]">
    //         百年名校，权成师货。廷请苦名給济学家、知名学者、中央国家机关政策专家、回家智市力量，以及产业领袖京临课光投业解感，能设员新政饭，死判最新形盐，探号企业发點新路径。
    //         学术殿微，酸货中西。培训课程依托北京大学无与伦比的綜合学科优势与师资力最，进行高层次、多元化、开放式的教学活动，培育新时代党商企业家的人文情怀、财商秦养与战路决策能力。
    //         參访互动，数学相长。学习期向組织学员赴国内外标杆企业、上市公司参访学习交流，拓宽国际祝
    //         野，创新管理恩維。校友智库，卓越前行。加入北京大学校友会，同15000+优秀校友谈商论道，共羸未来，为学员捉供地值、持久、广泛的高湯人胁交流平台。
    //       </p>
    //       <div>
    //         <h2 className="inline-block text-[1.8vw] text-[#9d0806]">
    //           招生对象
    //         </h2>
    //         <span className="text-[1.2vw] ml-[10px]">
    //           企业董事长、总经理、核心高管事
    //         </span>
    //       </div>
    //       <div>
    //         <h2 className="inline-block text-[1.8vw] text-[#9d0806]">
    //           学习时间
    //         </h2>
    //         <span className="text-[1.2vw] ml-[10px]">
    //           学制一年，每个月上深一次，每次然中投课2天，培训学期共24天
    //         </span>
    //       </div>
    //       <div>
    //         <h2 className="inline-block text-[1.8vw] text-[#9d0806]">
    //           开班时间
    //         </h2>
    //         <span className="text-[1.2vw] ml-[10px]">2022年4月</span>
    //       </div>
    //       <div>
    //         <h2 className="inline-block text-[1.8vw] text-[#9d0806]">
    //           证书管理
    //         </h2>
    //         <span className="text-[1.2vw] ml-[10px]">
    //           学完全部课程并考核合格后，由北京大学预发学校统一编号的培训结业证书，
    //           证书编号可登陆北大网站查询。并特别为本班学员申请办理永久北大校友卡
    //         </span>
    //       </div>
    //     </div>
    //     <TeacherGallery />
    //     {/* 课程细节表 */}
    //     <div className="flex flex-wrap">
    //       {CourseDetailData.map((item, i) => {
    //         return (
    //           <div
    //             className="w-1/4 h-[400px] border-2 border-[#9d0806]"
    //             key={i}
    //           >
    //             <h1 className="text-[1.5vw] h-[10%] leading-[40px] text-white bg-[#9d0806] text-center">
    //               {item.title}
    //             </h1>
    //             <ul className="h-[90%] flex flex-col justify-around p-2 text-[1.5vw]">
    //               {item.items.map((item, i) => {
    //                 return <li key={i}>{item}</li>;
    //               })}
    //             </ul>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </>
  );
}
