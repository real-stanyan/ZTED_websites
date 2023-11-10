"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import userAuth from "@/util/userAuth";

export default function Enroll() {
  const phoneNumRegex = /^1[3456789]\d{9}$/;
  const router = useRouter();
  const [error, setError] = useState("");
  const [userinfo, setUserinfo] = useState<UserInfo>({
    registerEmail: "",
    name: "",
    phoneNum: "",
    companyName: "",
    position: "",
    annualRevenue: "",
    classType: "",
  });
  const [userEmail, setUserEmail] = useState("");
  const [inputError, setInputError] = useState({
    name: false,
    phoneNum: false,
    companyName: false,
    position: false,
    annualRevenue: false,
    classType: false,
  });

  useEffect(() => {
    const res = userAuth();
    if (res) {
      setUserEmail(res.email);
      setUserinfo({ ...userinfo, registerEmail: res.email });
    } else {
      router.push("/user");
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserinfo({ ...userinfo, [name]: value });
  };

  const handleSubmit = async () => {
    if (userinfo.name.length <= 2) {
      setError("姓名不能少于两个字");
      setInputError({ ...inputError, name: true });
      return;
    }
    if (phoneNumRegex.test(userinfo.phoneNum) === false) {
      setError("手机号码格式不正确");
      setInputError({ ...inputError, phoneNum: true });
      return;
    }
    if (userinfo.companyName.length <= 2) {
      setError("企业名称不能少于两个字");
      setInputError({ ...inputError, companyName: true });
      return;
    }
    if (userinfo.position.length === 0) {
      setError("职位不能为空");
      setInputError({ ...inputError, position: true });
      return;
    }
    if (userinfo.annualRevenue.length === 0) {
      setError("年营收不能为空");
      setInputError({ ...inputError, annualRevenue: true });
      return;
    }
    if (userinfo.classType.length === 0) {
      setError("课程类型不能为空");
      setInputError({ ...inputError, classType: true });
      return;
    }

    const res = await fetch("http://localhost:8080/ZTED/registrationForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userinfo),
    });

    console.log(res);
  };

  return (
    <>
      <div className="w-screen flex flex-col items-center">
        <h1 className="text-black text-[6vw] md:text-[4vw] my-[4vw] md:my-[2vw]">
          课程报名
        </h1>
        {/* 姓名 */}
        <div className="w-[70%] md:w-[50%]">
          <input
            value={userinfo.name}
            type="text"
            name="name"
            className={`w-full h-[50px] p-[5px] border ${
              inputError.name ? "border-red-500" : "border-black"
            }  rounded bg-transparent text-black my-[1vw] font-formal`}
            placeholder="姓名"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e)
            }
          />
        </div>

        {/* 手机号码 */}
        <div className="w-[70%] md:w-[50%]">
          <input
            value={userinfo.phoneNum}
            type="text"
            name="phoneNum"
            className={`w-full h-[50px] p-[5px] border ${
              inputError.phoneNum ? "border-red-500" : "border-black"
            }  rounded bg-transparent text-black my-[1vw] font-formal`}
            placeholder="手机号码"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e)
            }
          />
        </div>

        {/* 企业名称 */}
        <div className="w-[70%] md:w-[50%]">
          <input
            value={userinfo.companyName}
            type="text"
            name="companyName"
            className={`w-full h-[50px] p-[5px] border ${
              inputError.companyName ? "border-red-500" : "border-black"
            } rounded bg-transparent text-black my-[1vw] font-formal`}
            placeholder="企业名称"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e)
            }
          />
        </div>

        {/* 您的职位 */}
        <div className="w-[70%] md:w-[50%]">
          <select
            value={userinfo.position}
            name="position"
            id="position"
            className={`w-full h-[50px] p-[5px] border ${
              inputError.position ? "border-red-500" : "border-black"
            } rounded bg-transparent text-black my-[1vw] font-formal`}
            onChange={handleInputChange}
          >
            <option value="">您的职位</option>
            <option value="金融">金融</option>
            <option value="互联网">互联网</option>
            <option value="房地产">房地产</option>
          </select>
        </div>

        {/* 公司年营收 */}
        <div className="w-[70%] md:w-[50%]">
          <select
            value={userinfo.annualRevenue}
            name="annualRevenue"
            id="annualRevenue"
            className={`w-full h-[50px] p-[5px] border ${
              inputError.annualRevenue ? "border-red-500" : "border-black"
            } rounded bg-transparent text-black my-[1vw] font-formal`}
            onChange={handleInputChange}
          >
            <option value="">公司年营收</option>
            <option value="小于 500,000">小于 500,000</option>
            <option value="50,000 - 10,000">50,000 - 100,000</option>
            <option value="100,000 - 500,000">100,000 - 500,000</option>
            <option value="500,000 - 1,000,000">500,000 - 1,000,000</option>
            <option value="大于 1,000,000">大于 1,000,000</option>
          </select>
        </div>

        {/* 课程类型 */}
        <div className="w-[70%] md:w-[50%]">
          <select
            value={userinfo.classType}
            name="classType"
            id="learning_experience"
            className={`w-full h-[50px] p-[5px] border ${
              inputError.classType ? "border-red-500" : "border-black "
            } rounded bg-transparent text-black my-[1vw] font-formal`}
            onChange={handleInputChange}
          >
            <option value="">课程类型</option>
            <option value="北京大学现代管理与国学研修班">
              北京大学现代管理与国学研修班
            </option>
            <option value="北京大学(豫商)企业转型升级领导力提升高级研修班">
              北京大学(豫商)企业转型升级领导力提升高级研修班
            </option>
            <option value="南美文化商务研学班">南美文化商务研学班</option>
            <option value="普陀山觉醒研修班">普陀山·觉醒研修班</option>
          </select>
        </div>
        <div className="w-full min-h-[30px] text-center text-red-500">
          {error}
        </div>
        <div
          className="w-[40vw] h-[20px] leading-[20px] md:h-[50px] md:leading-[50px] my-5 text-center text-[1.5vw] bg-white/50 hover:bg-white text-black rounded cursor-pointer"
          onClick={handleSubmit}
        >
          提交报名，等待回电
        </div>
      </div>
    </>
  );
}
