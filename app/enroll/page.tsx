"use client";

import { useState } from "react";
import { z } from "zod";

const RegisterSchema = z.object({
  name: z.string().min(1, { message: "姓名不能为空" }),
  phone: z.string().min(1, { message: "电话不能为空" }),
  company: z.string().min(1, { message: "公司名不能为空" }),
  occupation: z.enum(["金融", "互联网", "房地产"]),
  incomes: z.string().min(1, { message: "不能为空" }),
  learning_experience: z.string().min(1, { message: "不能为空" }),
});

export default function Enroll() {
  const [nameError, setNameError] = useState<string[]>([]);
  const [phoneError, setPhoneError] = useState<string[]>([]);
  const [companyError, setCompanyError] = useState<string[]>([]);
  const [occupationError, setOccupationError] = useState<string[]>([]);
  const [incomesError, setIncomesError] = useState<string[]>([]);
  const [learning_experienceError, setLearning_experienceError] = useState<
    string[]
  >([]);
  const [userinfo, setUserinfo] = useState<UserInfo>({
    name: "",
    phoneNum: "",
    companyName: "",
    position: "",
    annualRevenue: "",
    classType: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserinfo({ ...userinfo, [name]: value });
  };

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:8080/ZTED/registrationForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userinfo),
    });

    console.log(res);
  };

  return (
    <>
      <div className="flex flex-col justify-evenly w-[60%] h-[45vw] mx-auto items-center text-black">
        {/* 姓名 */}
        <div className="w-[100%] h-[50px] font-sans">
          <input
            value={userinfo.name}
            type="text"
            name="name"
            className="w-[100%] h-[100%] bg-transparent border-2 border-black/10 placeholder:text-black rounded-lg p-2"
            placeholder="姓名"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e)
            }
          />
          <h1
            className={`font-sans self-start text-[red] ${
              nameError.length === 0 ? "hidden" : "flex"
            }`}
          >
            {nameError}
          </h1>
        </div>

        {/* 手机号码 */}
        <div className="w-[100%] h-[50px] font-sans">
          <input
            value={userinfo.phoneNum}
            type="text"
            name="phoneNum"
            className="w-[100%] h-[50px] bg-transparent border-2 border-black/10 placeholder:text-black rounded-lg p-2"
            placeholder="手机号码"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e)
            }
          />
          <h1
            className={`font-sans self-start text-[red] ${
              phoneError.length === 0 ? "hidden" : "flex"
            }`}
          >
            {phoneError}
          </h1>
        </div>

        {/* 企业名称 */}
        <div className="w-[100%] h-[50px] font-sans">
          <input
            value={userinfo.companyName}
            type="text"
            name="companyName"
            className="w-[100%] h-[50px] bg-transparent border-2 border-black/10 placeholder:text-black rounded-lg p-2"
            placeholder="企业名称"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e)
            }
          />
          <h1
            className={`font-sans self-start text-[red] ${
              companyError.length === 0 ? "hidden" : "flex"
            }`}
          >
            {companyError}
          </h1>
        </div>

        {/* 您的职位 */}
        <div className="w-[100%] h-[50px] font-sans">
          <select
            value={userinfo.position}
            name="position"
            id="position"
            className="w-[100%] h-[50px] bg-transparent border-2 border-black/10 rounded-lg p-2"
            onChange={handleInputChange}
          >
            <option value="">您的职位</option>
            <option value="金融">金融</option>
            <option value="互联网">互联网</option>
            <option value="房地产">房地产</option>
          </select>
          <h1
            className={`font-sans self-start text-[red] ${
              occupationError.length === 0 ? "hidden" : "flex"
            }`}
          >
            {occupationError}
          </h1>
        </div>

        {/* 公司年营收 */}
        <div className="w-[100%] h-[50px] font-sans">
          <select
            value={userinfo.annualRevenue}
            name="annualRevenue"
            id="annualRevenue"
            className="w-[100%] h-[50px] bg-transparent border-2 border-black/10 rounded-lg p-2"
            onChange={handleInputChange}
          >
            <option value="">公司年营收</option>
            <option value="小于 500,000">小于 500,000</option>
            <option value="50,000 - 10,000">50,000 - 100,000</option>
            <option value="100,000 - 500,000">100,000 - 500,000</option>
            <option value="500,000 - 1,000,000">500,000 - 1,000,000</option>
            <option value="大于 1,000,000">大于 1,000,000</option>
          </select>
          <h1
            className={`font-sans self-start text-[red] ${
              incomesError.length === 0 ? "hidden" : "flex"
            }`}
          >
            {incomesError}
          </h1>
        </div>

        {/* 你希望得到什的收获 */}
        <div className="w-[100%] h-[50px] font-sans">
          <select
            value={userinfo.classType}
            name="classType"
            id="learning_experience"
            className="w-[100%] h-[50px] bg-transparent border-2 border-black/10 rounded-lg p-2"
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
          <h1
            className={`font-sans self-start text-[red] ${
              learning_experienceError.length === 0 ? "hidden" : "flex"
            }`}
          >
            {learning_experienceError}
          </h1>
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
