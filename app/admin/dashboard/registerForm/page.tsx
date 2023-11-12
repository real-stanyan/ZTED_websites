"use client";

import { useDispatch } from "react-redux";
import { setMessage } from "@/app/GlobalRedux/Features/messageBoxSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [admin, setAdmin] = useState({
    email: "",
    name: "",
    position: "",
  });
  const [messageBox, setMessageBox] = useState({
    show: false,
    message: "",
    bgColor: "",
  });
  const [registerForm, setRegisterForm] = useState<RegisterForm[]>([]);
  useEffect(() => {
    const admin = localStorage.getItem("adminInfo");
    if (admin) {
      const admin_ = JSON.parse(admin);
      setAdmin(admin_);
      console.log(admin);

      if (admin_.position !== "1") {
        router.push("/dashboard");
      }
      getRegisterForm(admin_.email);
    }
    if (!admin) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMessageBox({ ...messageBox, show: false });
    }, 4000);
  }, [messageBox]);

  const getRegisterForm = async (email: string) => {
    const res = await fetch(
      `http://localhost:8080/ZTED/registerform?adminEmail=${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setRegisterForm(data);
  };

  const handleDelete = async (id: number) => {
    const res = await fetch(
      `http://localhost:8080/ZTED/registration/${id}?adminEmail=${admin.email}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);

    if (res.ok) {
      dispatch(setMessage({ message: `${id} 删除成功`, type: "success" }));
    } else {
      dispatch(setMessage({ message: "删除失败", type: "error" }));
    }

    getRegisterForm(admin.email);
  };

  return (
    <>
      {/* Message Box */}
      <div
        className={`w-[15vw] p-[1vw] text-[1vw] fixed left-[calc(50%)] ${
          !messageBox.show
            ? "top-[-6vw]"
            : messageBox.bgColor
            ? messageBox.bgColor
            : "top-6vw"
        } 
        p-[1vw] text-center text-black text-[2vw] font-formal border-4 rounded-md border-white transition-all duration-1000 ease-in-out`}
      >
        {messageBox.message}
      </div>
      {/* Table */}
      <table className="w-full table-auto text-black border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="font-formal border border-slate-600 bg-black text-white p-2">
              姓名🤠
            </th>
            <th className="font-formal border border-slate-600 bg-black text-white p-2">
              手机号码📱
            </th>
            <th className="font-formal border border-slate-600 bg-black text-white p-2">
              企业名称🏢
            </th>
            <th className="font-formal border border-slate-600 bg-black text-white p-2">
              您的职位👨‍💻
            </th>
            <th className="font-formal border border-slate-600 bg-black text-white p-2">
              公司年营收💵
            </th>
            <th className="font-formal border border-slate-600 bg-black text-white p-2">
              课程类型🗂️
            </th>
            <th className="font-formal border border-slate-600 bg-black text-white p-2">
              操作
            </th>
          </tr>
        </thead>
        <tbody>
          {registerForm.map((item) => (
            <tr
              key={item.id}
              className={`text-center ${item.id % 2 && "bg-black/10"}`}
            >
              <td className="font-formal border border-slate-600">
                {item.name || "无记录"}
              </td>
              <td className="font-formal border border-slate-600">
                {item.phoneNum || "无记录"}
              </td>
              <td className="font-formal border border-slate-600">
                {item.companyName || "无记录"}
              </td>
              <td className="font-formal border border-slate-600">
                {item.position || "无记录"}
              </td>
              <td className="font-formal border border-slate-600">
                {item.annualRevenue || "无记录"}
              </td>
              <td className="font-formal border border-slate-600">
                {item.classType || "无记录"}
              </td>
              <td
                className="hover:bg-[red] hover:text-white cursor-pointer  border border-slate-600"
                onClick={() => handleDelete(item.id)}
              >
                删除❌
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
