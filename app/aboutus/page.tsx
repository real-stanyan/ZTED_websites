"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Culture() {
  const [shown, setShown] = useState("");

  const geoRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const hometownRef = useRef<HTMLDivElement>(null);
  const hometown2Ref = useRef<HTMLDivElement>(null);
  const zhiyongRef = useRef<HTMLDivElement>(null);
  const houdaoRef = useRef<HTMLDivElement>(null);
  const fendouRef = useRef<HTMLDivElement>(null);
  const hongseRef = useRef<HTMLDivElement>(null);
  const dameiRef = useRef<HTMLDivElement>(null);
  const chucaiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (geoRef.current) {
        const rect = geoRef.current.getBoundingClientRect();
        const distanceFromTopOfViewport = rect.top;
        // console.log(distanceFromTopOfViewport);
        if (distanceFromTopOfViewport < 50) {
          setShown(geoRef.current.title);
        }
      }
      if (historyRef.current) {
        const rect = historyRef.current.getBoundingClientRect();
        const distanceFromTopOfViewport = rect.top;
        // console.log(distanceFromTopOfViewport);
        if (distanceFromTopOfViewport < 50) {
          setShown(historyRef.current.title);
        }
      }
      if (spotRef.current) {
        const rect = spotRef.current.getBoundingClientRect();
        const distanceFromTopOfViewport = rect.top;
        // console.log(distanceFromTopOfViewport);
        if (distanceFromTopOfViewport < 50) {
          setShown(spotRef.current.title);
        }
      }
      if (hometownRef.current) {
        const rect = hometownRef.current.getBoundingClientRect();
        const distanceFromTopOfViewport = rect.top;
        // console.log(distanceFromTopOfViewport);
        if (distanceFromTopOfViewport < 50) {
          setShown(hometownRef.current.title);
        }
      }
      if (hometown2Ref.current) {
        const rect = hometown2Ref.current.getBoundingClientRect();
        const distanceFromTopOfViewport = rect.top;
        // console.log(distanceFromTopOfViewport);
        if (distanceFromTopOfViewport < 50) {
          setShown(hometown2Ref.current.title);
        }
      }
      if (zhiyongRef.current) {
        const rect = zhiyongRef.current.getBoundingClientRect();
        const distanceFromTopOfViewport = rect.top;
        // console.log(distanceFromTopOfViewport);
        if (distanceFromTopOfViewport < 50) {
          setShown(zhiyongRef.current.title);
        }
      }
      if (houdaoRef.current) {
        const rect = houdaoRef.current.getBoundingClientRect();
        const distanceFromTopOfViewport = rect.top;
        // console.log(distanceFromTopOfViewport);
        if (distanceFromTopOfViewport < 50) {
          setShown(houdaoRef.current.title);
        }
      }
      if (fendouRef.current) {
        const rect = fendouRef.current.getBoundingClientRect();
        const distanceFromTopOfViewport = rect.top;
        // console.log(distanceFromTopOfViewport);
        if (distanceFromTopOfViewport < 50) {
          setShown(fendouRef.current.title);
        }
      }
      if (hongseRef.current) {
        const rect = hongseRef.current.getBoundingClientRect();
        const distanceFromTopOfViewport = rect.top;
        // console.log(distanceFromTopOfViewport);
        if (distanceFromTopOfViewport < 50) {
          setShown(hongseRef.current.title);
        }
      }
      if (dameiRef.current) {
        const rect = dameiRef.current.getBoundingClientRect();
        const distanceFromTopOfViewport = rect.top;
        // console.log(distanceFromTopOfViewport);
        if (distanceFromTopOfViewport < 50) {
          setShown(dameiRef.current.title);
        }
      }
      if (chucaiRef.current) {
        const rect = chucaiRef.current.getBoundingClientRect();
        const distanceFromTopOfViewport = rect.top;
        // console.log(distanceFromTopOfViewport);
        if (distanceFromTopOfViewport < 50) {
          setShown(chucaiRef.current.title);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 清除监听器，避免内存泄漏
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="min-w-full text-black bg-aboutus-title bg-no-repeat bg-fixed bg-left bg-[length:300px_600px]">
        <div className="fixed text-[1vw] text-white left-[10px] top-[45vh] transition duration-500 ease-in">
          {shown}
        </div>
        {/* 河南地理位置 */}
        <div
          className="h-[90vh] pl-[300px] overflow-hidden"
          ref={geoRef}
          title="河南地理位置"
        >
          <p className="text-[1vw]">
            河南处于黄河中下游，居于中国中东部。河南之得名与黄河有莫大的关系...
            // 余下的内容...
          </p>
          <Image
            src="/images/aboutus/1.png"
            alt="aboutus_1"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            从地理位置上看，豫州居于九州的中心地带，所以河南又被称为“中州”... //
            余下的内容...
          </p>
        </div>
        {/* 河南历史渊源 */}
        <div
          className="pl-[300px] overflow-hidden"
          ref={historyRef}
          title="河南历史渊源"
        >
          <h1 className="text-[2.5vw]">河南历史渊源</h1>
          <p className="text-[1vw]">
            河南是中华民族和华夏文明的重要发祥地。中华民族的人文始祖黄帝诞生在今河南新郑，中华文明的起源、文字的发明、城市的形成和统一国家的建立，都与河南有着密不可分的关系。在5000年中华文明史中，河南作为国家的政治、经济、文化中心长达3000多年，先后有20多个朝代在此建都、200多个皇帝在此执政。中国八大古都河南就有4个，即九朝古都洛阳、七朝古都开封、殷商古都安阳、商都郑州。中国古代四大发明均源自河南。文物古迹众多，有记载着祖先在中原大地繁衍生息的裴李岗文化遗址、仰韶文化遗址、龙山文化遗址；有“人祖”伏羲太昊陵、黄帝故里和轩辕丘；有最古老的天文台周公测景台；有历史上最早的关隘函谷关、最早的佛教寺院白马寺；有“天下第一名刹”嵩山少林寺和闻名中外的大相国寺，等等。洛阳、开封、商丘、安阳、南阳、郑州、浚县、濮阳是全国历史文化名城。
          </p>
          <Image
            src="/images/aboutus/2.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            中原大地孕育的风流人物灿若群星，如古代哲学家、思想家老子、庄子、墨子、韩非、程颐、程颢，政治家、军事家姜子牙、商鞅、苏秦、李斯、刘秀、张良、司马懿、岳飞，文学家、艺术家杜甫、韩愈、白居易、李贺、李商隐、司马光、褚遂良、吴道子，科学家张衡、僧一行，医学家张仲景，佛学家玄奘等，还有现当代史上的抗日英雄吉鸿昌、杨靖宇，革命先辈邓颖超、彭雪枫、吴焕先、许世友，“县委书记的榜样”焦裕禄等。
            　“万姓同根，万宗同源”。河南是中华姓氏的重要发源地，当今的300个大姓中根在河南的有171个，依人口数量多少而排列的100个大姓中有78个姓氏的源头或部分源头在河南，有“陈林半天下，黄郑排满街”之称的海外四大姓氏均起源于河南。
          </p>
        </div>
        {/* 河南山水胜景 */}
        <div
          className="pl-[300px] overflow-hidden"
          ref={spotRef}
          title="河南山水胜景"
        >
          <h1 className="text-[2.5vw]">河南山水胜景</h1>
          <p className="text-[1vw]">
            河南既是历史文化资源大省，也是自然景观荟萃之地，犹如一座浩瀚如烟的历史长廊、一幅风光旖旎的天然画卷，山川融南秀北雄于一体。全省共有云台山、嵩山、王屋山—黛眉山、伏牛山等世界地质公园4个，黄河、嵖岈山等国家地质公园15个，永城芒砀山等省级地质公园17个，南阳独山玉、新乡凤凰山、焦作缝山国家矿山公园3个，南阳恐龙蛋化石群等国家级自然保护区13个。
          </p>
          <Image
            src="/images/aboutus/3.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            全省共有A级景区580家，其中5A级景区14家，4A级以上景区189家。星级酒店383家，其中五星级酒店21家；云台山景区、尧山大佛景区、嵖岈山景区、淇河生态旅游区为国家生态旅游示范区。嵩山、白云山、鸡公山、王屋山、尧山、太行大峡谷、宝天曼、老界岭、云梦山、南湾湖、丹江口等均属山水奇观。龙门石窟是首批国家旅游示范单位，被评为“中国人文旅游示范基地”。黄河自西向东流经河南七百余公里，郑州至开封段由于泥沙淤积，河床平均高出两岸地面3—5米，形成“地上悬河”的独特自然景观，可谓“河从屋顶过，船在空中行”。“人工天河”红旗渠被誉为世界第八大奇迹，是国家首批“全国研学旅游示范基地”。
          </p>
        </div>
        {/* 为什么河南会被视为中国人的老家 */}
        <div
          className="pl-[300px] overflow-hidden"
          ref={hometownRef}
          title="为什么河南会被视为中国人的老家"
        >
          <h1 className="text-[2.5vw]">为什么河南会被视为中国人的老家?</h1>
          <p className="text-[1vw]">
            这是一个文化上的概念。因为，河南是中国古代文明的发祥地之一，是华夏、中国、中华、中原、神州等名词的来源。正是上古时代聚居在河南及其周边地区的中国人，点燃了中国文明的火焰，开创了中国文化的先河，从文化文明这个角度，他们的确是中华民族的先祖。
            今天我们就来回溯那段历史吧。
            在1万多年前的远古时代，有一个叫伏羲氏的人，在河南周口淮阳“以龙师而龙名”，创造了龙图腾。后来，伏羲氏团结统一了华夏各个部落，实现了远古时期中原地区多个部落的第一次大融合。
          </p>
          <Image
            src="/images/aboutus/4.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            中国人自称为“炎黄子孙”。这里的“炎黄”，指的是炎帝和黄帝两人。炎帝和黄帝都是5000年——6000多年前的部落首领。
            炎帝又叫神农氏。他是上古时期姜姓部落的首领，因为懂得用火而得到王位，因此被尊称为“炎帝”。炎帝亲尝百草，用草药为部落人民治病。他发明刀耕火种，教导部落人民垦荒种植粮食作物。在炎帝的带领下，姜姓部落人民制造出了饮食用的陶器和炊具，得以改善自己的生活条件。
          </p>
          <Image
            src="/images/aboutus/5.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            黄帝又叫轩辕氏，是上古时期华夏部落的首领。在炎帝统治后期，中原各部落互相攻击，战乱频发。黄帝趁势而起，打败了其余部落首领，形成与炎帝、蚩尤人鼎足而立的局面。当时，黄帝统治的领域就在中原地带。后来，黄帝先后打败了炎帝和蚩尤人，统一了中原各部落，建立了中国第一个大一统的华夏国家。都城位于有熊——即今天的河南省新郑市境内。
          </p>
          <Image
            src="/images/aboutus/6.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            黄帝建立的华夏国家，是华夏部落和姜姓部落的融合，因此，中华民族不但被称为“华夏子孙”，又被称为“炎黄子孙”。
            根据《史记》的记载，黄帝统一中原后，按照国家的职能，制定了职官制度，任命了官员。当年，炎帝神农氏仅能种植黍、稷两种农作物，而黄帝却能种植“黍、稷、菽、麦、稻”5种农作物，这意味着农业生产的进步。“黍、稷、菽、麦、稻”是中国最早的农作物，被称为“五谷”。孔子说“四体不勤，五谷不分”，出处就在这里。
          </p>
          <Image
            src="/images/aboutus/7.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            黄帝的子孙，在中原黄河流域繁衍生息，点燃了中国文明的火焰，开创了中国文化的先河。他们的后代，先后建立了夏朝、商朝、周朝等世袭制朝代。夏朝、商朝、周朝的历代帝王，都被认为是皇帝的直系子孙。甚至连接受了华夏文化的一些少数民族，比如匈奴、鲜卑、契丹等，都声称自己是黄帝子孙、炎黄子孙。
            在夏朝、商朝、周朝之后，以河南为代表的中原地区，依然是全国政治、经济、文化的中心。
            那时候，中国被分为九州，即：冀州、兖州、青州、徐州、扬州、荆州、豫州、梁州和雍州。豫州因位于九州之中，被称为“中州”。豫州，就包含了今天河南省的大部分地区。后来，这一片土地，被称为“国中之地”，由此而产生了“中国”“中华”等概念。
          </p>
        </div>
        {/* 老家河南 华夏儿女的心灵故乡 */}
        <div
          className="pl-[300px] overflow-hidden"
          ref={hometown2Ref}
          title="老家河南 华夏儿女的心灵故乡"
        >
          <h1 className="text-[2.5vw]">老家河南 华夏儿女的心灵故乡</h1>
          <p className="text-[1vw]">
            河南的“中”，是我国历史缘起之“中”，是地理方位之“中”，是恰到好处之“中”，是和而不同之“中”，是肯定赞赏之“中”，是语言习惯之“中”，是性格气质之“中”，是干事创业之“中”，是追求美好、创造幸福之“中”。
          </p>
          <Image
            src="/images/aboutus/8.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            老家河南是华夏儿女生生不息的历史源头，是我们共同的心灵故乡和精神家园。这里是华夏民族的主要发祥地。上古时期，华夏民族的先祖就在河南活动，炎黄部落的先民在这里繁衍生息，经夏商周三代融合形成了华夏族，我们习惯且自豪地称自己为“华夏儿女”“炎黄子孙”。散布在中原大地的裴李岗文化、仰韶文化、龙山文化、二里头文化等众多文化遗址，都是华夏民族早期在河南生存繁衍的历史印记。从夏商周开始到北宋的3000多年里，河南一直是政治、经济、文化的中心区域。这里是文化习俗的源头。文化以润物无声的力量，影响着人们的生活。现在我们日常使用的汉字，耳熟能详的诗词歌赋，影响广泛的思想观念、风俗习惯，许多都带有这里的印记。
            当今社会中被人们广为接受的道德标准和价值观念，许多都产生在中原，如礼义廉耻、忠信仁爱的价值认同以及天下大同的文化气概、天人合一的思想境界、循道立德的理性品质、自强不息的奋斗精神、中庸辩证的思维理念等，至今仍是中国传统思想文化的主干。
            在中原大地形成的婚仪、饮食、起居、节令等风俗习惯，很多延续至今。周公在洛阳制纳采、问名、纳吉、纳征、请期、亲迎等“六礼”，经过演进成为提亲、定礼、迎娶等习俗，仍是当今主要婚俗习惯。现在生产生活中使用的“二十四节气”，也形成于中原地区。许多流传至今的文学作品，都是在河南或由河南籍作者创作完成。
            这里是中华姓氏的发端。河南是中华姓氏的摇篮，相传伏羲统一九大部落，中华姓氏由此产生。《中华姓氏大典》中记载4820个姓氏中，1834个起源于河南；当今300个大姓中，171个根在河南；依人口数量多少排列的100个大姓中，78个源头或部分源头在河南；有“陈林半天下，黄郑排满街”之称的中国海外四大姓氏均源自河南。这些姓氏历经数千年，薪火相传，血缘相续，成为中华民族团结的血脉和纽带。
          </p>
          <Image
            src="/images/aboutus/9.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            这里是华夏儿女的心灵故乡。历史上曾发生多次中原人口外迁，带去了先进的文化思想、生产技术和生活方式，他们“筚路蓝缕，以启山林”，与当地住民一道，为社会发展作出了贡献。如今遍布世界各地的1亿多客家人始终称自己为“河洛郎”。每年的农历三月初三，在新郑举行黄帝故里拜祖大典，成千上万的华夏儿女都会齐聚轩辕丘寻根拜祖，追思华夏儿女共同的血脉根源。
          </p>
        </div>
        {/* 忠勇河南 民族大义的担当奉献 */}
        <div
          className="pl-[300px] overflow-hidden"
          ref={zhiyongRef}
          title="忠勇河南 民族大义的担当奉献"
        >
          <h1 className="text-[2.5vw]">忠勇河南 民族大义的担当奉献</h1>
          <p className="text-[1vw]">
            河南在民族大义面前从未缺席。从古至今，在外敌入侵、民族存亡和人民群众生命财产安全处于危难时刻，总有河南人挺身而出、舍生取义，留下了许多可歌可泣的历史壮举。
            回望历史，安阳汤阴人岳飞，以精忠报国的英雄气概激励着一代又一代华夏儿女。木兰替父从军的故事，展示了巾帼不让须眉的河南女性的刚毅孝顺。开封人史可法，守护孤城，力抗清军，实现了与扬州共存亡的诺言，谱写了守护家园、抵御侵略的慷慨悲歌。
          </p>
          <Image
            src="/images/aboutus/10.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            近代以来，周口扶沟人吉鸿昌，在民族危难的关头，为拯救国家和民族奔走呼号，奋勇抗日，却被国民党反动派污蔑叛国而杀害。在行刑时，吉鸿昌将军不畏死亡，留下了“恨不抗日死，留作今日羞。国破尚如此，我何惜此头”的豪言壮语。驻马店确山人、东北抗日联军领导人杨靖宇，在弹尽粮绝、只剩孤身一人的恶劣环境下，与敌人周旋几昼夜，最终英勇就义。他牺牲后，日军在他的胃里只发现了树皮、草根和棉絮，却没有发现一粒粮食。习近平总书记评价杨靖宇将军有“腹中满是草根而宁死不屈的气节”。
          </p>
          <Image
            src="/images/aboutus/11.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            新中国成立后，郑州巩义人、德艺双馨的人民艺术家、豫剧大师常香玉，在抗美援朝期间义演180余场，筹款15.2亿元（旧币），向中国人民志愿军捐献了一架战斗机，带动全国人民掀起积极捐献钱物、支援抗美援朝的热潮。“自古忠孝难两全”，信阳新县人、开国上将许世友，自21岁投身革命后，南征北战、戎马一生，新中国成立后3次回乡探母，只有两次成行，每次见到老母亲，将军都要跪在母亲面前以表达心中的愧疚、自责之情，传下“将军三跪母亲”的佳话。许世友将军逝世后，中央特批他回老家土葬（这是新中国成立后我党唯一经中央批准土葬的党和国家领导人），实现了“死后陪伴母亲”的夙愿。
          </p>
          <Image
            src="/images/aboutus/12.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            河南人、著名科学家施一公心系祖国、胸怀故土，放弃国外优厚待遇，毅然回国尽忠。2016年，在我国赴马里的维和行动中，焦作温县人、29岁的维和战士申亮亮，面对装有500公斤炸药的自杀汽车，把生的希望留给战友，把死的选择留给自己，用生命中最后的37秒，挽救了全营地战友的生命。还有人民教师李芳为保护学生飞身挡车，舍己救人；空降兵李道洲在武汉某小区突发火灾时，先后3次冲入火场救出两位老人，最后因体力不支英勇牺牲。这些都是对河南人忠孝仁义和刚毅勇敢的生动诠释。
          </p>
          <Image
            src="/images/aboutus/13.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
        </div>
        {/* 厚道河南 绵延亘久的性格密码 */}
        <div
          className="pl-[300px] overflow-hidden"
          ref={houdaoRef}
          title="厚道河南 绵延亘久的性格密码"
        >
          <h1 className="text-[2.5vw]">厚道河南 绵延亘久的性格密码</h1>
          <p className="text-[1vw]">
            河南自古土地肥沃、农业发达。“凿井而饮，耕田而食”和“一分耕耘、一分收获”的生活经验，使河南人对“实干”有一种朴素的信仰和追求，崇尚脚踏实地做事、真诚厚道做人。
            河南有厚道的历史基因。河南“居天下之中”，自古以来就是多种思想文化交流融合之地，造就了中原文化兼容并蓄、海纳百川的特点，塑造了河南人包容大气、宽容大度的品质。历史上河南深受黄河水患和频繁战乱之害，在灾难面前人们团结协作、相互帮扶，形成了河南人古道热肠、守望相助的品格。祖籍云南大姚，出生在河南郑州的西湖大学校长施一公院士，两岁半时曾跟父母下放到驻马店农村，受到当地村民无微不至的关心照顾，使他真切感受到了什么是邻里乡亲。在后来的多次演讲中，他都自豪地称自己是河南驻马店人，小时候幸福的概念就是从驻马店来的，“河南人特别厚道”。
          </p>
          <Image
            src="/images/aboutus/14.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            河南有厚道的传统习俗。河南人老子写的《道德经》有云：“大丈夫居其厚，不居其薄；居其实，不居其华”，倡导人们为人厚道，舍弃浅薄虚华而秉持朴实敦厚。河南人待客厚道，家里来了客人常常是杀鸡宰羊，倾其所有。家里做了什么好吃的，都要先送一盘给邻居。过去的“端酒为敬”“把客人喝倒才是喝好”等酒文化，恰恰体现了河南人在物质匮乏的年代里好酒好菜要先让客人享用的厚道理念，体现了河南人的直爽与真诚。
            河南有厚道的一贯行动。从古到今，河南人所作所为始终体现着中原儿女骨子里的厚道。洛阳偃师人玄奘，一人西行5万里，历经千辛万苦到达印度求取真经，前后17年学遍了当时的大小乘各种学说，被誉为中外文化交流的杰出使者。以其为原型创作的《西游记》中的唐僧，是人人皆知的厚道之人，取经路上明知千难万险，仍毅然决然前行，碰到的明明是妖魔鬼怪，却总以一颗虔诚之心劝解教化其改邪归正、不再为害人间。
            躬耕于南阳、走出茅庐的诸葛亮，深受中原传统文化忠厚仁义思想影响，不仅谋略超人，而且忠诚厚道。明知刘禅是扶不起的“阿斗”，亦有刘备“子若不才，君可自取”的遗言，仍旧夙兴夜寐、事必躬亲，一心辅佐蜀国，决不有负先主托孤之重，以致“出师未捷身先死”，鞠躬尽瘁，死而后已。
          </p>
          <Image
            src="/images/aboutus/15.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            到了当代，河南村官李连成用自己的吃亏换来了濮阳西辛庄村全体父老乡亲的幸福生活，被乡亲们称为“吃亏书记”。南阳淅川县自1950年代修建丹江口水库起，先后有20.2万移民历时20年、分6批迁往青海、湖北、河南其他地方；2003年以后，随着南水北调中线工程开建，淅川县再次搬迁16.5万移民；为了实现“一泓清水送京津”，广大移民舍弃故土，泣别亲友，举家搬迁。
            今年新冠肺炎疫情发生后，河南作为与湖北山水相连的人口大省、劳务输出大省，不仅在自身防疫中被誉为“硬核河南”，而且在医疗资源紧缺的情况下，秉承“先人后己”“无私奉献”的厚道理念，先后派出15批医疗队、1281名白衣战士，携带紧缺物资驰援湖北。社会各界纷纷捐款捐物，洛阳嵩县竹园沟村300多名贫困群众3天时间从自家地里拔了10万斤大葱，第一时间捐往武汉。全省企业加班加点，尽全力保障各类物资供应。河南虽然是卫材大省，为了倾力支援全国抗疫，本省信阳、南阳等防疫重点市的医疗防护物资紧缺，多次告急。每一个河南人都在用自己的行动书写着河南人的淳朴和善良，充分体现了河南人的厚道品质。
          </p>
        </div>
        {/* 奋斗河南 人杰地灵的淳风沃土 */}
        <div
          className="pl-[300px] overflow-hidden"
          ref={fendouRef}
          title="奋斗河南 人杰地灵的淳风沃土"
        >
          <h1 className="text-[2.5vw]">奋斗河南 人杰地灵的淳风沃土</h1>
          <p className="text-[1vw]">
            “梅花香自苦寒来”，一方水土养育一方人。我国自古就有得中原者得天下之说，河南历来都是兵家必争之地，无数的战争使这里的人民流离失所。旧社会的河南，黄河泛滥，天灾不断，历经磨难的中原儿女在困苦中拼搏，锤炼了栉风沐雨、薪火相传，筚路蓝缕、玉汝于成的奋斗精神，在战天斗地中创造了无数奇迹，使之成为人文荟萃、英雄辈出的一方沃土。愚公移山的故事就发生在河南济源，而发出“王侯将相宁有种乎”历史拷问、“揭竿而起”的农民起义领袖陈胜、吴广，就出生在河南平舆和太康。
          </p>
          <Image
            src="/images/aboutus/16.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[30vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            从古至今，这片土地上哲思和智慧流淌、勇武和风雅交融、奋斗和梦想并存，这里产生的风流人物灿若群星，他们在这片土地上开宗立派、著书立说、建功立业，留下了众多彪炳史册、光耀未来的贡献和成就。
          </p>
          <Image
            src="/images/aboutus/17.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[40vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            二十四史记载的5700多位历史人物中，河南籍的历史名人有900余人。这里汇聚了学说学派的创始先贤，濮阳南乐人、文字创造者仓颉；周口鹿邑人、道家始祖老子；商丘民权人、道家集大成者庄子；平顶山鲁山人、墨家始祖墨子；鹤壁淇县人、纵横家鼻祖鬼谷子；郑州新郑人、法家代表韩非子；洛阳伊川人、宋明理学开创者程颢、程颐等等。这里诞生了纵横捭阖的政治人物，有编著最早兵书《六韬》、兴周灭商的姜子牙；因谏而死、为国守忠的“国神”比干；推动秦王变法奠定一统六国基础的商鞅；“一怒而天下惧，安居而天下熄”的纵横家苏秦；“运筹帷幄之中，决胜千里之外”的军事家张良；“开言崇圣典，用武若通神”的司马懿。这里孕育了引领风骚的文人墨客，以“斯是陋室，惟吾德馨”彰显文人风骨的刘禹锡；唐宋八大家之一、被誉为“文起八代之衰”的韩愈；悲天悯人、心系苍生、胸怀国事的“诗圣”杜甫；“新乐府运动”倡导者、“诗王”白居易；“诗鬼”李贺，“小李杜”中的李商隐，“中国四大才女”之蔡文姬；北宋名相、《资治通鉴》编撰者司马光；楷书鼻祖、三国时期书法大家钟繇；“穷丹青之妙”被后世尊为“画圣”的吴道子；首部汉字字典《说文解字》编撰者“字圣”许慎。这里涌现了开创时代的科学先驱，发明造纸术的蔡伦，发明活字印刷术的毕昇，奠定临床诊断理论基础的“医圣”张仲景，发明地动仪和浑天仪的“科圣”张衡，经商理论集大成的“商圣”范蠡，世界上首次测出地球子午线长度的僧一行。
          </p>
          <Image
            src="/images/aboutus/18.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[40vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            新的时期，中原儿女在这片土地上砥砺奋进、续写辉煌。这里有“全国农村党支部书记的榜样”史来贺、“全国乡镇党委书记的榜样”吴金印、“全国十大女杰”刘志华、“当代愚公”张荣锁、“最美村官”裴春亮等一批先进典型；有获得18个乒乓球世界冠军、首位大满贯获得者邓亚萍；中国首位女航天员、“时代先锋”刘洋；发明了“王码五笔字型”汉字输入法、解决汉字输入难题的“改革先锋”王永民；有成千上万服务全国的人民公仆，有众多勇立潮头的知名企业家、创新创业人员，还有更多普通劳动者在平凡的岗位上无私奉献、默默耕耘，用辛勤和汗水描绘着一个个出彩人生。
          </p>
        </div>
        {/* 红色河南 薪火传承的伟大精神 */}
        <div
          className="pl-[300px] overflow-hidden"
          ref={hongseRef}
          title="红色河南 薪火传承的伟大精神"
        >
          <h1 className="text-[2.5vw]">红色河南 薪火传承的伟大精神</h1>
          <p className="text-[1vw]">
            河南是一片革命的热土，悠久的红色历史和丰富的红色精神是我们最为宝贵的财富，永远激励着中原儿女昂首奋进。这里有大别山精神，“坚守信念、胸怀全局、团结一心、勇当前锋”。
          </p>
          <Image
            src="/images/aboutus/19.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[40vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            河南新县是鄂豫皖苏区首府所在地，也是仅次于中央苏区的第二大革命根据地——鄂豫皖革命根据地的中心，先后诞生了红四方面军、红二十五军、红二十八军等多支主力红军，走出了许世友、李德生、郑维山等43位共和国将军。在战争岁月，不足10万人的新县献出了5.5万优秀儿女的生命，直到现在还有两个乡未恢复到大革命前的人口。河南新县人、曾担任红二十五军军长的吴焕先，为了自己的信仰，“破家革命”，彻底烧毁佃户、债农欠自己家的债务借据和租地契约，与地主家庭决裂。1935年，年仅28岁的吴焕先在战斗中不幸牺牲。除了他本人，他家中先后有10人为革命献出了宝贵生命。反“围剿”时期，吴焕先外出乞讨逃难的妻子曹干仙听说红二十五军缺粮，毅然将婆媳二人讨来的一袋“百家粮”送到部队，而怀有身孕的她却饿死在回家路上，为革命献出了年轻的生命。
          </p>
          <Image
            src="/images/aboutus/20.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[40vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            这里有竹沟精神，“坚定信念、依靠群众、艰苦奋斗、顾全大局”。作为中共中央中原局所在地，河南确山县竹沟是扬名全国的“小延安”。作为中原抗战的支点和新四军的摇篮，刘少奇、李先念、彭雪枫等老一辈无产阶级革命家曾在这里工作战斗过，先后培养出4000多名党政军干部，走出了10位党和国家领导人以及100多位将军。
          </p>
          <Image
            src="/images/aboutus/21.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[40vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            这里有焦裕禄精神，“亲民爱民、艰苦奋斗、科学求实、迎难而上、无私奉献”。县委书记的好榜样焦裕禄身患肝癌仍然带领兰考人民艰苦奋斗，与风沙、内涝、盐碱“三害”作斗争，生命不息、战斗不止，用赤诚和生命诠释了共产党人“为人民服务”的根本宗旨。
          </p>
          <Image
            src="/images/aboutus/22.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[40vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            这里有红旗渠精神，“自力更生、艰苦创业、团结协作、无私奉献”。林县县委书记杨贵带领十万林县人民苦战十个春秋，克服了难以想象的困难，一锤一凿地凿穿太行山，建成了一条全长1500公里的“人工天河”红旗渠，解决了全县人民世世代代难以解决的用水问题。这些伟大精神是我们的宝贵财富，历久弥新、催人奋进、永不过时。
          </p>
        </div>
        {/* 大美河南 诗和远方的神奇交融 */}
        <div
          className="pl-[300px] overflow-hidden"
          ref={dameiRef}
          title="大美河南 诗和远方的神奇交融"
        >
          <h1 className="text-[2.5vw]">大美河南 诗和远方的神奇交融</h1>
          <p className="text-[1vw]">
            辽阔的中原大地，群山拱卫、峰峦叠翠，河流纵横、湖塘棋布，名胜古迹、交相辉映。自然风光和人文景观相得益彰，共同勾勒出一幅大美河南的壮丽画卷。河南的山雄伟险峻。太行山雄踞华北众山之首，地势险绝的郭亮村挂壁公路、步随景移的安阳林州大峡谷、雄险秀美的焦作云台山，都是巍巍太行给河南的馈赠。人们说，太行山把最美的一段留在了河南。伏牛山绵延八百里，“人间仙境”洛阳白云山、中原之巅三门峡老鸦岔、峰林耸立的平顶山尧山、怪石林立的驻马店嵖岈山。著名的中岳嵩山，横卧中原大地，立于天地之中，七十二峰峦壑叠翠，少林寺、中岳庙等名胜掩映在群山翠柏之间，形成了秀美奇峻的恢弘气象。
          </p>
          <Image
            src="/images/aboutus/23.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[40vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            大别山北控中原、南领楚越，苍翠的群山环绕着血染的热土，给“青分楚豫，气压嵩衡”的雄伟气势增添了几分厚重。河南的水旖旎秀美。河南是我国唯一地跨黄河、长江、淮河、海河4大流域的省份。4大流域、1500余条河流，为河南增添了河乡水韵。
          </p>
          <Image
            src="/images/aboutus/24.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[40vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            三门峡天鹅湖的万鸟憩戏，小浪底黄河水利枢纽工程的气势磅礴，黄河湿地公园的生态多样，开封“地上悬河”的自然奇观，都是黄河散落在河南大地的明珠。“人工天河”红旗渠、南水北调中线渠首丹江湖、“豫南明珠”南湾湖等景观给河南增添了一幅幅壮美图画。
          </p>
          <Image
            src="/images/aboutus/25.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[40vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            焦作云台山、青龙峡，新乡八里沟、宝泉，一道道绝壁万仞之间的清泉，犹如一条条流淌着的“翡翠”。河南的平原广袤辽阔。这里有在国内乃至全世界最“平”的平原之一豫东平原，绝大部分海拔在100米以下。每年“三夏”时节，一望无垠的豫东平原，田成方、林成网、渠相连、路相通，目之所及，一马平川，风吹过处，麦浪滚滚，绘就一幅满地黄金的丰收画卷。对生活在山区或水乡的外地人来说，这里的“千里麦花香、万里青纱帐”就是美景，就是诗和远方。
          </p>
          <Image
            src="/images/aboutus/26.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[40vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            全省有5A级景区14处、A级景区525处。河南的人文景观丰富厚重。河南有国家重点文物保护单位420处，地上文物、地下文物数量均居全国前列，被誉为“天然的中华历史博物馆”；中国八大古都河南有其四：洛阳、开封、安阳、郑州；有洛阳龙门石窟、登封“天地之中”历史建筑群、安阳殷墟、丝绸之路河南段、大运河河南段等5项世界文化遗产；有得天独厚的宗教旅游资源，中国佛教祖庭白马寺、禅宗祖庭少林寺、千年古刹相国寺天下闻名；在海内外广受欢迎的少林功夫和太极拳均源自河南。
          </p>
        </div>
        {/* 出彩河南 谱写新时代绚丽篇章 */}
        <div
          className="pl-[300px] overflow-hidden"
          ref={chucaiRef}
          title="出彩河南 谱写新时代绚丽篇章"
        >
          <h1 className="text-[2.5vw]">出彩河南 谱写新时代绚丽篇章</h1>
          <p className="text-[1vw]">
            2019年习近平总书记在河南视察时指出，河南要在中部崛起中奋勇争先，深入贯彻黄河流域生态保护和高质量发展战略，谱写新时代中原更加出彩的绚丽篇章。中原儿女时刻牢记总书记的殷切嘱托，真抓实干、砥砺前行。
          </p>
          <Image
            src="/images/aboutus/27.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[40vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            河南高质量发展步履铿锵。2019年全省生产总值54259亿元，同比增长7%，经济总量继续保持全国第5位，位居中西部省份首位。规模以上工业增加值增长7.8%，高于全国平均水平2.1个百分点。服务业发展态势良好，增加值增长7.4%。三大需求运行平稳，固定资产投资增长8.0%，高于全国平均水平2.6个百分点；社会消费品零售总额增长10.4%，高于全国平均水平2.4个百分点，货物进出口总值5771亿元，增长3.6%，贸易额继续保持中部首位。质量效益持续提升，财政总收入6187.2亿元，增长5.3%；一般公共预算收入4041.6亿元，增长7.3%。全省居民人均可支配收入23902.7元，增长8.8%。河南扛稳粮食安全政治责任。2019年河南粮食总产量达1339亿斤，用全国1/16的耕地生产了全国1/10的粮食，为国家粮食安全作出了重要贡献。河南是全国第一粮食加工大省、第一肉制品大省，生产了全国1/2的火腿肠、1/3的方便面、1/4的馒头、3/5的汤圆、7/10的水饺，每年调出600亿斤原粮及粮食制成品。一根火腿肠享誉全球，一包汤圆畅销海外，一颗大枣成为“网红”美食，如今的河南已由“中原粮仓”变成“国人厨房”，并正在丰富着“世界餐桌”。双汇、思念、三全、好想你、十三香等已成为国内外知名品牌，河南的食品药品安全在2018年、2019年连续两年被国家考核评价为“A”级。
          </p>
          <Image
            src="/images/aboutus/28.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[40vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            河南交通枢纽地位不断提升。建成了覆盖全省所有县（市）的高速公路网，高速公路通车里程6967公里，居全国第5位；建设米字形高铁网，打造以郑州为中心的2小时高铁经济圈，覆盖中部地区近4亿人口和市场，时速350公里以上的高速铁路1728公里，居全国第一位；郑州新郑国际机场客货吞吐量保持中部机场双第一，2020年货运量逆势上扬，截至7月底货运量同比增长21.9%，其中国际货运量增速超过40%。河南先进制造业迅速崛起。中铁装备在郑州下线世界最大矩形盾构机，最大直径可达15.8米，出口到21个国家和地区，市场占有率和综合竞争力国内第一，习近平总书记“三个转变”的重要指示就是在这里提出的；宇通客车国内市场占有率37%，全球市场占有率13%，产销规模连续16年位居全球第一；中原鲲鹏生态创新中心、阿里巴巴和海康威视等企业区域总部相继落地，“黄河牌”鲲鹏服务器首批产品下线；国家超级计算郑州中心、国家农机装备创新中心顺利落户，国家级创新平台达到167家。河南电子信息技术及生产发展迅猛，全球每7部智能手机中就有1部产自河南。
          </p>
          <Image
            src="/images/aboutus/29.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[40vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            河南内陆开放高地正在形成。积极融入共建“一带一路”，加快空中、陆上、网上、海上“四条丝绸之路”建设，按照习近平总书记提出的河南要建成“连通境内外、辐射东中西的物流通道枢纽，为丝绸之路经济带建设多作贡献”的要求，努力建设内陆开放新高地。河南大力实施郑州—卢森堡“双枢纽”战略，构建起横跨欧亚美三大经济区、覆盖全球主要经济体的枢纽航线网络，开通多条跨境电商国际包机专线，2020年1-7月全省跨境电商进出口144.9亿元，同比增长85.6%；高质量运行中欧（郑州）班列，前7个月开行585班，进出口货值增长20%，是国家确定的中欧班列5大集结中心示范工程之一；通过多式联运对接海上丝绸之路，搭建起河南连通欧洲、中亚、东盟以及亚太的国际物流大通道；大力推动商业模式和监管制度创新，国家药品进口口岸和跨境电商药品进口试点正式获批，河南正朝着“买全球、卖全球”目标迈进。2020年1-7月进出口总值实现了9.2%的增长，增幅高于全国10.9个百分点，增速居全国第5位
          </p>
          <Image
            src="/images/aboutus/30.png"
            alt="aboutus_2"
            width={2000}
            height={2000}
            className="h-[auto] w-[40vw] mx-auto my-0"
          />
          <p className="text-[1vw]">
            中原大地，风鹏正举。滚滚黄河，不惧山阻石拦，奔腾不息入大海；巍巍嵩山，历经沧海桑田，雄峙中原展新姿。我们将以习近平新时代中国特色社会主义思想为指导，在省委、省政府坚强领导下，团结拼搏、开拓进取，担当作为、砥砺奋进，谱写新时代中原更加出彩的绚丽篇章！
          </p>
        </div>
      </div>
    </>
  );
}
