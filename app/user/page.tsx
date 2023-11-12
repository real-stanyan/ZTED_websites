"use client";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { setMessage } from "@/app/GlobalRedux/Features/messageBoxSlice";
import { setUser } from "@/app/GlobalRedux/Features/userSlice";
import { set } from "mongoose";

export default function UserRegistration() {
  const emailRegex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
  const phoneNumRegex = /^1[3456789]\d{9}$/;
  const dispatch = useDispatch();
  const router = useRouter();
  const [page, setPage] = useState("login");
  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [userLogin, setUserLogin] = useState<UserLogin>({
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
  const [loginInputError, setLoginInputError] = useState({
    email: false,
    password: false,
  });
  const [registerInputError, setRegisterInputError] = useState({
    name: false,
    email: false,
    phoneNum: false,
    password: false,
    confirmPassword: false,
  });

  useEffect(() => {
    if (loginError.includes("邮箱")) {
      setLoginInputError({ password: false, email: true });
    }
    if (loginError.includes("密码")) {
      setLoginInputError({ password: true, email: false });
    }
  }, [loginError]);

  useEffect(() => {
    if (registerError.includes("姓名")) {
      setRegisterInputError({
        email: false,
        phoneNum: false,
        password: false,
        confirmPassword: false,
        name: true,
      });
    }
    if (registerError.includes("邮箱")) {
      setRegisterInputError({
        phoneNum: false,
        password: false,
        confirmPassword: false,
        name: false,
        email: true,
      });
    }
    if (registerError.includes("手机号")) {
      setRegisterInputError({
        phoneNum: true,
        email: false,
        password: false,
        confirmPassword: false,
        name: false,
      });
    }
    if (registerError.includes("密码")) {
      setRegisterInputError({
        name: false,
        phoneNum: true,
        email: false,
        password: true,
        confirmPassword: true,
      });
    }
  }, [registerError]);

  // 注册Function
  const handleRegister = async () => {
    if (userRegister.name.length <= 2) {
      setRegisterError("姓名不能少于两个字");
      return;
    }
    if (emailRegex.test(userRegister.email) === false) {
      setRegisterError("邮箱格式不正确");
      return;
    }
    if (phoneNumRegex.test(userRegister.phoneNum) === false) {
      setRegisterError("手机号格式不正确");
      return;
    }
    if (userRegister.password === "") {
      setRegisterError("请输入密码");
      return;
    }
    if (userRegister.confirmPassword === "") {
      setRegisterError("请确认密码");
      return;
    }

    const res = await fetch("http://localhost:8080/ZTED/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userRegister),
    });

    if (res.status === 200) {
      setRegisterError("");
      const userInfo = await res.json();
      console.log(userInfo);
      dispatch(setMessage({ message: "注册成功!", type: "success" }));
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
    if (userLogin.email === "") {
      setLoginError("请输入邮箱");
      return;
    }
    if (userLogin.password === "") {
      setLoginError("请输入密码");
      return;
    }

    const res = await fetch("http://localhost:8080/ZTED/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLogin),
    });
    // ```登陆成功```
    if (res.status === 200) {
      const userInfo = await res.json();
      dispatch(setMessage({ message: "登陆成功!", type: "success" }));
      dispatch(
        setUser({
          name: userInfo.Username,
          email: userInfo.email,
          loginTime: userInfo.loginTime,
        })
      );

      console.log(userInfo);
      const userInfoString = JSON.stringify(userInfo);
      localStorage.setItem("userInfo", userInfoString);
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
  };

  return (
    <div className="flex flex-col items-center h-screen">
      {page === "register" && (
        <>
          {/* 用户注册Title */}
          <h1 className="text-black text-[6vw] md:text-[4vw] my-[4vw] md:my-[2vw]">
            用户注册
          </h1>
          {/* 注册姓名 */}
          <div className="w-[70%] md:w-[50%]">
            <input
              className={`font-formal w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw] ${
                registerInputError.name ? "border-red-500" : ""
              }`}
              type="text"
              placeholder="姓名"
              onChange={(e) =>
                setUserRegister({ ...userRegister, name: e.target.value })
              }
            />
          </div>
          {/* 注册邮箱 */}
          <div className="w-[70%] md:w-[50%]">
            <input
              className={`font-formal w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw] ${
                registerInputError.email ? "border-red-500" : ""
              }`}
              type="email"
              placeholder="邮箱"
              onChange={(e) =>
                setUserRegister({ ...userRegister, email: e.target.value })
              }
            />
          </div>
          {/* 注册手机号 */}
          <div className="w-[70%] md:w-[50%]">
            <input
              className={`font-formal w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw] ${
                registerInputError.phoneNum ? "border-red-500" : ""
              }`}
              type="text"
              placeholder="手机号"
              onChange={(e) =>
                setUserRegister({ ...userRegister, phoneNum: e.target.value })
              }
            />
          </div>
          {/* 注册密码 */}
          <div className="w-[70%] md:w-[50%]">
            <input
              className={`font-formal w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw] ${
                registerInputError.password ? "border-red-500" : ""
              }`}
              type="password"
              placeholder="密码"
              onChange={(e) =>
                setUserRegister({ ...userRegister, password: e.target.value })
              }
            />
          </div>

          <div className="w-[70%] md:w-[50%]">
            <input
              className={`font-formal w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw] ${
                registerInputError.confirmPassword ? "border-red-500" : ""
              }`}
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
          {/* {registerError !== "" && (
            <div className="w-[50%] text-red-500">{registerError}</div>
          )} */}
          {/* 注册报错 */}
          <div className="w-full min-h-[30px] text-center text-red-500">
            {registerError}
          </div>
          <div
            className=" w-[50%] md:w-[20%] h-[40px] md:h-[50px] leading-[40px] md:leading-[50px] border border-black text-black text-center rounded hover:text-white hover:bg-black"
            onClick={handleRegister}
          >
            注册
          </div>
        </>
      )}
      {page === "login" && (
        <>
          {/* 用户登陆Title */}
          <h1 className="text-black text-[6vw] md:text-[4vw] my-[4vw] md:my-[2vw]">
            用户登陆
          </h1>
          {/* 登陆邮箱 */}
          <div className="w-[70%] md:w-[50%]">
            <input
              className={`font-formal w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw] ${
                loginInputError.email ? "border-red-500" : ""
              }`}
              type="text"
              placeholder="邮箱"
              onChange={(e) => {
                setUserLogin({ ...userLogin, email: e.target.value });
              }}
            />
          </div>
          {/* 登陆密码 */}
          <div className="w-[70%] md:w-[50%]">
            <input
              className={`font-formal w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw] ${
                loginInputError.password ? "border-red-500" : ""
              }`}
              type="text"
              placeholder="密码"
              onChange={(e) => {
                setUserLogin({ ...userLogin, password: e.target.value });
              }}
            />
          </div>

          {/* 登陆报错 */}
          <div className="w-full min-h-[30px] text-center text-red-500">
            {loginError}
          </div>
          <div
            className=" w-[50%] md:w-[20%] h-[40px] md:h-[50px] leading-[40px] md:leading-[50px] border border-black text-black text-center rounded hover:text-white hover:bg-black"
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
