"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserForm() {
  const router = useRouter();
  const [userForm, setUserForm] = useState<UserForm[]>([]);

  useEffect(() => {
    const admin = localStorage.getItem("adminInfo");
    if (admin) {
      const admin_ = JSON.parse(admin);
      if (admin_.position !== "1") {
        router.push("/dashboard");
      }
      getUserForm(admin_.email);
    }
    if (!admin) {
      router.push("/");
    }
  }, []);

  const getUserForm = async (email: string) => {
    const res = await fetch(
      `http://localhost:8080/ZTED/allUsers?adminEmail=${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setUserForm(data);
  };

  return (
    <table className="w-full table-auto text-black">
      <thead>
        <tr>
          <th className="font-formal">姓名🤠</th>
          <th className="font-formal">手机号码📱</th>
          <th className="font-formal">邮箱📮</th>
          <th className="font-formal">上次登录时间⌚️</th>
        </tr>
      </thead>
      <tbody>
        {userForm.map((item) => (
          <tr key={item.email} className="text-center">
            <td className="font-formal">{item.name || "无记录"}</td>
            <td className="font-formal">{item.phoneNum || "无记录"}</td>
            <td className="font-formal">{item.email || "无记录"}</td>
            <td className="font-formal">{item.lastActivityTime || "无记录"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
