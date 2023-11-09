"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminForm() {
  const router = useRouter();
  const [admin, setAdmin] = useState({
    email: "",
    name: "",
    position: "",
  });
  const [adminForm, setAdminForm] = useState<AdminForm[]>([]);

  useEffect(() => {
    const admin = localStorage.getItem("adminInfo");
    if (admin) {
      const admin_ = JSON.parse(admin);
      setAdmin(admin_);
      if (admin_.position !== "1") {
        router.push("/dashboard");
      }
      getAdminForm(admin_.email);
    }
    if (!admin) {
      router.push("/");
    }
  }, []);

  const getAdminForm = async (email: string) => {
    const res = await fetch(
      `http://localhost:8080/ZTED/allAdmins?adminEmail=${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setAdminForm(data);
  };

  const handleDelete = async (email: string) => {
    const res = await fetch(
      `http://localhost:8080/ZTED/administrator/${email}?adminEmail=${admin.email}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);

    getAdminForm(admin.email);
  };

  return (
    <table className="w-full table-auto text-black border-collapse border border-slate-500">
      <thead>
        <tr>
          <th className="font-formal border border-slate-600 bg-black text-white p-2">
            ID
          </th>
          <th className="font-formal border border-slate-600 bg-black text-white p-2">
            姓名🤠
          </th>
          <th className="font-formal border border-slate-600 bg-black text-white p-2">
            邮箱📮
          </th>
          <th className="font-formal border border-slate-600 bg-black text-white p-2">
            权限🔑
          </th>
          <th className="font-formal border border-slate-600 bg-black text-white p-2">
            操作
          </th>
        </tr>
      </thead>
      <tbody>
        {adminForm.map((item, index) => (
          <tr
            key={item.id}
            className={`text-center ${index % 2 && "bg-black/10"}`}
          >
            <td className="font-formal border border-slate-600">
              {item.id || "无记录"}
            </td>
            <td className="font-formal border border-slate-600">
              {item.name || "无记录"}
            </td>
            <td className="font-formal border border-slate-600">
              {item.email || "无记录"}
            </td>
            <td className="font-formal border border-slate-600">
              {item.position || "无记录"}
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
