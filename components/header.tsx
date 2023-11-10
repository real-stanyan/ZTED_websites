"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { RiSearchLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const router = useRouter();
  const [MobileNav, setMobileNav] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>({
    name: "",
    email: "",
    time: "",
  });
  const [currentAdmin, setCurrentAdmin] = useState<Admin>({
    name: "",
    email: "",
    position: "",
  });
  const [messageBox, setMessageBox] = useState({
    show: false,
    message: "",
    bgColor: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      // 获取视口高度的50%
      const triggerHeight = window.innerHeight * 0.2;

      if (window.scrollY >= triggerHeight) {
        console.log("User scrolled more than 50vh!");
        setMobileNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const user = localStorage.getItem("userInfo");
    const admin = localStorage.getItem("adminInfo");

    if (user) {
      const user_ = JSON.parse(user);
      const loginTimeStamp = Date.parse(user_.loginTime);
      const nowTimeStamp = Date.now();
      const timeDiff = nowTimeStamp - loginTimeStamp;
      if (timeDiff > 86400000) {
        console.log("user expired");

        localStorage.removeItem("userInfo");
        setIsLogin(false);
        setMessageBox({
          show: true,
          message: "登入成功",
          bgColor: "bg-green-400",
        });
      } else {
        console.log("user still login");
        setIsLogin(true);
      }
      console.log(user_);

      setCurrentUser({
        name: user_.Username,
        email: user_.email,
        time: user_.loginTime,
      });
    }

    if (admin) {
      const admin_ = JSON.parse(admin);

      const loginTimeStamp = Date.parse(admin_.loginTime);
      const nowTimeStamp = Date.now();
      const timeDiff = nowTimeStamp - loginTimeStamp;
      if (timeDiff > 10000) {
        console.log("admin expired");
        localStorage.removeItem("adminInfo");
        setIsAdmin(false);
        setMessageBox({
          show: true,
          message: "登入成功",
          bgColor: "bg-green-400",
        });
      } else {
        setIsAdmin(true);
      }
      console.log(admin_);

      setCurrentAdmin({
        name: admin_.currentUser,
        email: admin_.email,
        position: admin_.position,
      });

      console.log(currentAdmin);
    }

    function isUserExpired() {
      const user = localStorage.getItem("userInfo");
    }
    isUserExpired;

    // 当组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMessageBox({ ...messageBox, show: false });
    }, 4000);
  }, [messageBox]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (e.currentTarget.value === "123") {
        router.push("/admin");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setIsLogin(false);

    setTimeout(() => {
      location.reload();
    }, 1000);

    setMessageBox({
      show: true,
      message: "登出成功",
      bgColor: "bg-green-400",
    });
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("adminInfo");
    setIsAdmin(false);

    setTimeout(() => {
      location.reload();
    }, 1000);

    setMessageBox({
      show: true,
      message: "登出成功",
      bgColor: "bg-green-400",
    });
  };

  return (
    <>
      {/* Message Box */}
      {/* <div
        className={`w-[15vw] p-[1vw] text-[1vw] fixed left-[calc(50%)] ${
          !messageBox.show
            ? "top-[-6vw]"
            : messageBox.bgColor
            ? messageBox.bgColor
            : "top-0"
        } 
        p-[1vw] text-center text-black text-[2vw] font-formal border-4 rounded-md border-white transition-all duration-1000 ease-in-out`}
      >
        {messageBox.message}
      </div> */}
      {/* header */}
      <div
        className={`w-full md:h-[4vw] px-2 flex justify-between bg-header-bg bg-cover truncate transition-all duration-500 ease-in-out`}
      >
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src={"/images/zted_icon.png"}
            alt="ZTED ICON"
            width={50}
            height={50}
            className="mx-2 h-[80%] w-[auto]"
          />
          <h1 className="text-black text-[4vw] md:text-[2vw]">
            海南志途教育科技有限公司
          </h1>
        </div>
        <div className="flex items-center text-black">
          {/* 用户注册 */}
          {isLogin ? (
            <div className="group w-[10vw] font-formal text-[1.5vw] mr-[1vw]">
              {currentUser.name}老板您好👋
              <div className="w-[10vw] absolute border-2 bg-white group-hover:block hidden duration-1000">
                <div
                  className="font-formal text-center cursor-pointer"
                  onClick={handleLogout}
                >
                  登出
                </div>
              </div>
            </div>
          ) : isAdmin ? (
            <div className="group w-[10vw] font-formal text-[1.5vw] mr-[1vw] ">
              <span className="text-[red] font-formal">
                {currentAdmin.name}
              </span>
              老板您好👋
              <div className="w-[10vw] absolute border-2 bg-white group-hover:block hidden duration-1000 ">
                <div
                  className="h-[20px] text-[1vw] font-formal text-center cursor-pointer hover:bg-[#890a05] hover:text-white"
                  onClick={() => {
                    router.push("/admin/dashboard");
                  }}
                >
                  回到后台
                </div>
                <div
                  className="h-[20px] text-[1vw] font-formal text-center cursor-pointer hover:bg-[#890a05] hover:text-white"
                  onClick={handleAdminLogout}
                >
                  登出
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`flex cursor-pointer mr-[4vw]}`}
              onClick={() => router.push("/user")}
            >
              {/* <BiSolidUser color="black" size="30" /> */}
              <h1 className="align-middle hover:underline mr-[2vw] font-formal">
                用户登陆
              </h1>
            </div>
          )}
          {/* {isAdmin ? (
            <div className="group w-[10vw] font-formal text-[1.5vw] mr-[1vw] ">
              <span className="text-[red] font-formal">
                {currentAdmin.name}
              </span>
              老板您好👋
              <div className="w-[10vw] absolute border-2 bg-white group-hover:block hidden duration-1000">
                <div
                  className="font-formal text-center cursor-pointer"
                  onClick={handleLogout}
                >
                  登出
                </div>
              </div>
            </div>
          ) : null} */}

          {/* search bar */}
          <div className="relative hidden md:flex items-center">
            <RiSearchLine color="black" className="absolute left-2" />
            <input
              type="text"
              className="w-[10vw] bg-white/50 rounded-lg text-black pl-8 focus:outline-none font-formal"
              onKeyUp={handleSearch}
            />
          </div>
        </div>

        {/* nav bar for mobile */}
        <div
          className="flex md:hidden items-center cursor-pointer"
          onClick={() => {
            setMobileNav(!MobileNav);
          }}
        >
          <HiMenu color="#c12221" size="20" />
        </div>
      </div>
      {/* nav bar */}
      <div className="hidden md:flex justify-between items-center px-[20vw] h-[3vw] bg-nav-bg bg-cover">
        <Link href="/">
          <div className="cursor-pointer text-[1.2vw]">首页</div>
        </Link>
        <Link href="/aboutus">
          <div className="cursor-pointer text-[1.2vw]">关于我们</div>
        </Link>
        <Link href="/courseintro" className="group">
          <div className="cursor-pointer text-[1.2vw]">课程介绍</div>
          <div className="h-[3vw] leading-[3vw] group hidden group-hover:flex w-[100vw] bg-nav-bg bg-cover justify-around text-[1vw] left-0 absolute text-center text-white">
            <div className="flex-1 border border-white hover:border-4">
              北京大学现代管理与国学研修班
            </div>
            <div className="flex-1 border border-white">
              北京大学(豫商)企业转型升级领导力提升高级研修班
            </div>
            <div className="flex-1 border border-white">南美文化商务研学班</div>
            <div className="flex-1 border border-white">普陀山·觉醒研修班</div>
          </div>
        </Link>

        <div className="cursor-pointer text-[1.2vw]">新闻与活动</div>
        <Link href="/enroll">
          <div className="cursor-pointer text-[1.2vw]">课程报名</div>
        </Link>
        <div className="cursor-pointer text-[1.2vw]">联系我们</div>
      </div>
      {/* mobile nav bar */}
      <div
        className={`py-[5vw]  flex-col items-center md:hidden left-0 w-screen h-[50vh] bg-nav-bg bg-cover z-[0] ${
          MobileNav ? "flex" : "hidden"
        } transition-all duration-500 ease-in-out`}
      >
        <div className="w-full h-full flex flex-col justify-evenly text-center">
          <Link href={"/"} className="text-[6vw]">
            首页
          </Link>
          <Link href={"aboutus"} className="text-[6vw]">
            关于我们
          </Link>
          <Link href={"courseintro"} className="text-[6vw]">
            课程介绍
          </Link>
          <div className="text-[6vw]">新闻与活动</div>
          <Link href={"/enroll"} className="text-[6vw]">
            课程报名
          </Link>
          <div className="text-[6vw]">联系我们</div>
        </div>
        {/* <input
          type="text"
          className="w-[80vw] h-[7vw] px-4 rounded bg-transparent border-white border font-sans focus:outline-none"
        /> */}
      </div>
    </>
  );
}
