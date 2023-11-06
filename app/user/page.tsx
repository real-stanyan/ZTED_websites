"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserRegistration() {
  const router = useRouter();
  const [page, setPage] = useState("login");
  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [useLogin, setUserLogin] = useState<UserLogin>({
    email: "",
    password: "",
  });
  const [userRegister, setUserRegister] = useState<UserRegister>({
    name: "",
    email: "",
    phoneNum: "",
    password: "",
    confirmPassword: "",
  });
  // 注册Function
  const handleRegister = async () => {
    const res = await fetch("http://localhost:8080/ZTED/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userRegister),
    });

    if (res.status === 200) {
      setRegisterError("");
      setPage("login");
    }
    if (res.status === 400) {
      setRegisterError("两次输入密码不一致");
    }
    if (res.status === 404) {
      setRegisterError("注册邮箱已存在");
    }
    if (res.status === 403) {
      setRegisterError("服务器错误");
    }

    console.log(res);
  };
  // 登陆function
  const handleLogin = async () => {
    const res = await fetch("http://localhost:8080/ZTED/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(useLogin),
      // credentials: "include",
    });

    if (res.status === 200) {
      setLoginError("");
      router.push("/");
    }
    if (res.status === 400) {
      setLoginError("用户名或密码错误");
    }
    if (res.status === 404) {
      setLoginError("邮箱不存在");
    }
    if (res.status === 429) {
      setLoginError("登陆次数过多，请一分钟再试");
    }

    console.log(res);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      {page === "register" && (
        <>
          <h1 className="text-black text-[4vw]">用户注册</h1>
          {/* 注册姓名 */}
          <div className="w-[50%]">
            <input
              className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw]"
              type="text"
              placeholder="姓名"
              onChange={(e) =>
                setUserRegister({ ...userRegister, name: e.target.value })
              }
            />
          </div>
          {/* 注册邮箱 */}
          <div className="w-[50%]">
            <input
              className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw]"
              type="email"
              placeholder="邮箱"
              onChange={(e) =>
                setUserRegister({ ...userRegister, email: e.target.value })
              }
            />
          </div>
          {/* 注册手机号 */}
          <div className="w-[50%]">
            <input
              className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw]"
              type="text"
              placeholder="手机号"
              onChange={(e) =>
                setUserRegister({ ...userRegister, phoneNum: e.target.value })
              }
            />
          </div>
          {/* 注册密码 */}
          <div className="w-[50%]">
            <input
              className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw]"
              type="password"
              placeholder="密码"
              onChange={(e) =>
                setUserRegister({ ...userRegister, password: e.target.value })
              }
            />
          </div>

          <div className="w-[50%]">
            <input
              className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw]"
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
            className="w-[20%] h-[50px] leading-[50px] border border-black text-black text-center rounded hover:text-white hover:bg-black"
            onClick={handleRegister}
          >
            注册
          </div>
        </>
      )}
      {page === "login" && (
        <>
          <h1 className="text-black text-[4vw] my-[2vw]">用户登陆</h1>
          <div className="w-[50%]">
            <input
              className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw]"
              type="text"
              placeholder="邮箱"
              onChange={(e) => {
                setUserLogin({ ...useLogin, email: e.target.value });
              }}
            />
          </div>
          <div className="w-[50%]">
            <input
              className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw]"
              type="text"
              placeholder="密码"
              onChange={(e) => {
                setUserLogin({ ...useLogin, password: e.target.value });
              }}
            />
          </div>

          {loginError !== "" && (
            <div className="w-[50%] text-red-500">{loginError}</div>
          )}
          <div
            className="w-[20%] h-[50px] leading-[50px] border border-black text-black text-center rounded hover:text-white hover:bg-black"
            onClick={handleLogin}
          >
            登陆
          </div>
        </>
      )}
      <p
        className="w-screen text-black cursor-pointer mt-4 text-center hover:underline"
        onClick={() => setPage(page === "login" ? "register" : "login")}
      >
        {page === "login" ? "创建账号" : "已有账号？登录"}
      </p>
    </div>
  );
}
