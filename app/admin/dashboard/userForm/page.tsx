"use client";

import { useDispatch } from "react-redux";
import { setMessage } from "@/app/GlobalRedux/Features/messageBoxSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [admin, setAdmin] = useState({
    email: "",
    name: "",
    position: "",
  });
  const [userForm, setUserForm] = useState<UserForm[]>([]);

  useEffect(() => {
    const admin = localStorage.getItem("adminInfo");
    if (admin) {
      const admin_ = JSON.parse(admin);
      setAdmin(admin_);
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

  const handleDelete = async (email: string) => {
    const res = await fetch(
      `http://localhost:8080/ZTED/user/${email}?adminEmail=${admin.email}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);

    if (res.status === 204) {
      dispatch(setMessage({ message: `${email} 删除成功`, type: "success" }));
    }

    getUserForm(admin.email);
  };

  return (
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
            邮箱📮
          </th>
          <th className="font-formal border border-slate-600 bg-black text-white p-2">
            上次登录时间⌚️
          </th>
          <th className="font-formal border border-slate-600 bg-black text-white p-2">
            操作
          </th>
        </tr>
      </thead>
      <tbody>
        {userForm.map((item, index) => (
          <tr
            key={item.email}
            className={`text-center ${index % 2 && "bg-black/10"}`}
          >
            <td className="font-formal border border-slate-600">
              {item.name || "无记录"}
            </td>
            <td className="font-formal border border-slate-600">
              {item.phoneNum || "无记录"}
            </td>
            <td className="font-formal border border-slate-600">
              {item.email || "无记录"}
            </td>
            <td className="font-formal border border-slate-600">
              {item.lastActivityTime || "无记录"}
            </td>
            <td
              className="hover:bg-[red] hover:text-white cursor-pointer  border border-slate-600"
              onClick={() => handleDelete(item.email)}
            >
              删除
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
