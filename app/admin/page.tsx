"use client";
import { useSelector, useDispatch } from "react-redux";
import { setAdmin } from "@/app/GlobalRedux/Features/adminSlice";
import { setMessage } from "../GlobalRedux/Features/messageBoxSlice";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { set } from "mongoose";

export default function Admin() {
  const dispatch = useDispatch();
  const emailRegex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
  const router = useRouter();
  const [page, setPage] = useState("login");
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [adminLogin, setAdminLogin] = useState<AdminLogin>({
    email: "",
    password: "",
  });
  const [adminRegister, setAdminRegister] = useState<AdminRegister>({
    name: "",
    password: "",
    email: "",
    confirmPassword: "",
    position: "",
  });
  const [loginInputError, setLoginInputError] = useState({
    email: false,
    password: false,
  });
  const [registerInputError, setRegisterInputError] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    position: false,
  });

  useEffect(() => {
    localStorage.removeItem("userInfo");
    const admin = localStorage.getItem("adminInfo");
    if (admin) {
      router.push("/admin/dashboard");
    }
  }, []);

  const handleLogin = async () => {
    if (adminLogin.email.length === 0) {
      setLoginError("邮箱不能为空");
      setLoginInputError({ ...loginInputError, email: true });
      return;
    }
    if (adminLogin.password.length === 0) {
      setLoginError("密码不能为空");
      setLoginInputError({ ...loginInputError, password: true });
      return;
    }
    // 注意 await 关键字的使用
    const res = await fetch("http://localhost:8080/ZTED/administrator/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminLogin),
    });
    // ```登陆成功```
    if (res.status === 200) {
      setLoginError("");
      const adminInfo = await res.json();
      console.log(adminInfo);
      dispatch(
        setAdmin({
          name: adminInfo.currentUser,
          email: adminInfo.email,
          position: adminInfo.position,
        })
      );
      dispatch(
        setMessage({
          message: "管理员登陆成功",
          type: "success",
        })
      );
      const adminInfo_ = JSON.stringify(adminInfo);
      console.log(adminInfo_);

      localStorage.setItem("adminInfo", adminInfo_);

      router.push("/admin/dashboard");
    }

    if (res.status === 400) {
      setLoginError("用户名或密码错误");
    }

    if (res.status === 404) {
      setLoginError("邮箱不存在");
    }

    console.log(res);
  };

  const handleRegister = async () => {
    if (adminRegister.name.length <= 2) {
      setRegisterError("名称不能少于两个字");
      setRegisterInputError({ ...registerInputError, name: true });
      return;
    }

    if (emailRegex.test(adminRegister.email) === false) {
      setRegisterError("邮箱格式不正确");
      setRegisterInputError({ ...registerInputError, email: true });
      return;
    }

    if (adminRegister.password.length <= 5) {
      setRegisterError("密码不能少于5位");
      setRegisterInputError({ ...registerInputError, password: true });
      return;
    }

    if (adminRegister.confirmPassword !== adminRegister.password) {
      setRegisterError("两次输入密码不一致");
      setRegisterInputError({ ...registerInputError, confirmPassword: true });
      return;
    }

    if (adminRegister.position.length === 0) {
      setRegisterError("权限不能为空");
      setRegisterInputError({ ...registerInputError, position: true });
      return;
    }

    // 注意 await 关键字的使用
    const res = await fetch(
      "http://localhost:8080/ZTED/administrator/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adminRegister),
      }
    );

    console.log(res);
  };

  return (
    <>
      {page === "login" && (
        <div className="w-screen flex flex-col items-center">
          <h1 className="text-black text-[6vw] md:text-[4vw] my-[4vw] md:my-[2vw]">
            管理员登陆
          </h1>
          <div className="w-[70%] md:w-[50%]">
            <input
              className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw] font-formal"
              type="text"
              placeholder="用户名"
              onChange={(e) =>
                setAdminLogin({ ...adminLogin, email: e.target.value })
              }
            />
          </div>
          <div className="w-[70%] md:w-[50%]">
            <input
              className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent text-black my-[1vw] focus:outline-none font-formal"
              type="password"
              placeholder="密码"
              onChange={(e) =>
                setAdminLogin({ ...adminLogin, password: e.target.value })
              }
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
        </div>
      )}
      {page === "register" && (
        <div className="w-screen flex flex-col items-center">
          <h1 className="text-black text-[4vw] my-[2vw]">管理员注册</h1>{" "}
          <div className="w-[50%]">
            <input
              className={`w-full h-[50px] p-[5px] border ${
                registerInputError.name ? "border-red-500" : "border-black"
              } rounded bg-transparent text-black my-[1vw] font-formal`}
              type="text"
              placeholder="名称"
              onChange={(e) => {
                setAdminRegister({ ...adminRegister, name: e.target.value });
              }}
            />
          </div>
          <div className="w-[50%]">
            <input
              className={`w-full h-[50px] p-[5px] border ${
                registerInputError.email ? "border-red-500" : "border-black"
              } rounded bg-transparent text-black my-[1vw] font-formal`}
              type="text"
              placeholder="邮箱"
              onChange={(e) => {
                setAdminRegister({ ...adminRegister, email: e.target.value });
              }}
            />
          </div>
          <div className="w-[50%]">
            <input
              className={`w-full h-[50px] p-[5px] border ${
                registerInputError.password ? "border-red-500" : "border-black"
              }  rounded bg-transparent text-black my-[1vw] font-formal`}
              type="password"
              placeholder="密码"
              onChange={(e) => {
                setAdminRegister({
                  ...adminRegister,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <div className="w-[50%]">
            <input
              className={`w-full h-[50px] p-[5px] border ${
                registerInputError.confirmPassword
                  ? "border-red-500"
                  : "border-black"
              }  rounded bg-transparent text-black my-[1vw] font-formal`}
              type="password"
              placeholder="确认密码"
              onChange={(e) => {
                setAdminRegister({
                  ...adminRegister,
                  confirmPassword: e.target.value,
                });
              }}
            />
          </div>
          <div className="w-[50%]">
            <select
              name="learning_experience"
              id="learning_experience"
              className={`w-full h-[50px] p-[5px] border ${
                registerInputError.position ? "border-red-500" : "border-black"
              }  rounded bg-transparent text-black my-[1vw] font-formal`}
              onChange={(e) => {
                setAdminRegister({
                  ...adminRegister,
                  position: e.target.value,
                });
              }}
            >
              <option value="">权限</option>
              <option value="1">等级1</option>
              <option value="2">等级2</option>
            </select>
          </div>
          {/* 注册报错 */}
          <div className="w-full min-h-[30px] text-center text-red-500">
            {registerError}
          </div>
          <div
            className="w-[20%] h-[50px] leading-[50px] border border-black text-black text-center rounded hover:text-white hover:bg-black"
            onClick={handleRegister}
          >
            注册
          </div>
        </div>
      )}
      <p
        className="w-screen text-black cursor-pointer mt-4 text-center hover:underline"
        onClick={() => setPage(page === "login" ? "register" : "login")}
      >
        {page === "login" ? "注册管理员" : "返回登录"}
      </p>
    </>
  );
}
