"use client";

import { useState } from "react";

export default function Enroll() {
  const [userinfo, setUserinfo] = useState<UserInfo>({
    name: "",
    phone: "",
    company: "",
    occupation: "",
    incomes: "",
    learning_experience: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserinfo({ ...userinfo, [name]: value });
  };

  console.log(userinfo);
  return (
    <>
      <div className="flex flex-col justify-evenly w-[60%] h-[45vw] mx-auto items-center font-sans text-black">
        {/* 姓名 */}
        <input
          type="text"
          name="name"
          className="w-[100%] h-[50px] bg-transparent border-2 border-black/10 placeholder:text-black rounded-lg p-2"
          placeholder="姓名"
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e)
          }
        />
        {/* 手机号码 */}
        <input
          type="text"
          name="phone"
          className="w-[100%] h-[50px] bg-transparent border-2 border-black/10 placeholder:text-black rounded-lg p-2"
          placeholder="手机号码"
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e)
          }
        />
        {/* 企业名称 */}
        <input
          type="text"
          name="company"
          className="w-[100%] h-[50px] bg-transparent border-2 border-black/10 placeholder:text-black rounded-lg p-2"
          placeholder="企业名称"
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e)
          }
        />
        {/* 您的职位 */}
        <select
          name="occupation"
          id="occupation"
          className="w-[100%] h-[50px] bg-transparent border-2 border-black/10 rounded-lg p-2"
          onChange={handleInputChange}
        >
          <option value="">您的职位</option>
          <option value="金融">金融</option>
          <option value="互联网">互联网</option>
          <option value="房地产">房地产</option>
        </select>
        {/* 公司年营收 */}
        <select
          name="incomes"
          id="incomes"
          className="w-[100%] h-[50px] bg-transparent border-2 border-black/10 rounded-lg p-2"
          onChange={handleInputChange}
        >
          <option
            value=""
            className="w-[100%] h-[50px] bg-transparent border-2 border-black/10 rounded-lg p-2"
          >
            公司年营收
          </option>
          <option value="小于 500,000">小于 500,000</option>
          <option value="50,000 - 10,000">50,000 - 100,000</option>
          <option value="100,000 - 500,000">100,000 - 500,000</option>
          <option value="500,000 - 1,000,000">500,000 - 1,000,000</option>
          <option value="大于 1,000,000">大于 1,000,000</option>
        </select>
        {/* 你希望得到什的收获 */}
        <select
          name="learning_experience"
          id="learning_experience"
          className="w-[100%] h-[50px] bg-transparent border-2 border-black/10 rounded-lg p-2"
          onChange={handleInputChange}
        >
          <option value="">你希望得到什的收获</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
        <div>提交报名，等待回电</div>
      </div>
    </>
  );
}
