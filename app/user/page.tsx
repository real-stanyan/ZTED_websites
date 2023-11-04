"use client";

import { useState } from "react";

export default function UserRegistration() {
  const [page, setPage] = useState("login");
  const [registerError, setRegisterError] = useState("");
  const [userRegister, setUserRegister] = useState<UserRegister>({
    name: "",
    email: "",
    phoneNum: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async () => {
    const res = await fetch("http://localhost:8080/ZTED/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userRegister),
    });

    console.log(res);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {page === "register" && (
        <>
          <h1 className="text-black text-[4vw]">用户注册</h1>
          <div className="w-[50%]">
            <input
              className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black"
              type="text"
              placeholder="姓名"
              onChange={(e) =>
                setUserRegister({ ...userRegister, name: e.target.value })
              }
            />
          </div>
          <div className="w-[50%]">
            <input
              className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black"
              type="password"
              placeholder="邮箱"
              onChange={(e) =>
                setUserRegister({ ...userRegister, email: e.target.value })
              }
            />
          </div>
          <div className="w-[50%]">
            <input
              className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black"
              type="text"
              placeholder="手机号"
              onChange={(e) =>
                setUserRegister({ ...userRegister, phoneNum: e.target.value })
              }
            />
          </div>
          <div className="w-[50%]">
            <input
              className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black"
              type="password"
              placeholder="password"
              onChange={(e) =>
                setUserRegister({ ...userRegister, password: e.target.value })
              }
            />
          </div>

          <div className="w-[50%]">
            <input
              className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black"
              type="password"
              placeholder="确认密码"
              onChange={(e) =>
                setUserRegister({
                  ...userRegister,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
          {registerError !== "" && (
            <div className="w-[50%] text-red-500">{registerError}</div>
          )}
          <div
            className="w-[30%] border border-black text-black text-center rounded hover:text-white hover:bg-black cursor-pointer"
            onClick={handleRegister}
          >
            注册
          </div>
        </>
      )}
      <p
        className="text-black cursor-pointer mt-4"
        onClick={() => setPage(page === "login" ? "register" : "login")}
      >
        {page === "login" ? "创建账号" : "已有账号？登录"}
      </p>
    </div>
  );
}
