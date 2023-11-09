"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [admin, setAdmin] = useState({
    email: "",
    name: "",
    position: "",
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

  return (
    <table className="w-full table-auto text-black">
      <thead>
        <tr>
          <th className="font-formal">姓名🤠</th>
          <th className="font-formal">手机号码📱</th>
          <th className="font-formal">企业名称🏢</th>
          <th className="font-formal">您的职位👨‍💻</th>
          <th className="font-formal">公司年营收💵</th>
          <th className="font-formal">课程类型🗂️</th>
          <th className="font-formal">操作</th>
        </tr>
      </thead>
      <tbody>
        {registerForm.map((item) => (
          <tr key={item.id} className="text-center">
            <td className="font-formal">{item.name || "无记录"}</td>
            <td className="font-formal">{item.phoneNum || "无记录"}</td>
            <td className="font-formal">{item.companyName || "无记录"}</td>
            <td className="font-formal">{item.position || "无记录"}</td>
            <td className="font-formal">{item.annualRevenue || "无记录"}</td>
            <td className="font-formal">{item.classType || "无记录"}</td>
            <td className="hover:underline cursor-pointer">删除❌</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
