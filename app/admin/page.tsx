export default function Admin() {
  return (
    <div className="flex flex-col justify-evenly w-full h-[40vw] items-center">
      <h1 className="text-black text-[4vw]">管理员登陆</h1>
      <div className="w-[50%]">
        <input
          className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent"
          type="text"
          placeholder="用户名"
        />
      </div>
      <div className="w-[50%]">
        <input
          className="w-full h-[50px] p-[5px] border border-black rounded bg-transparent"
          type="password"
          placeholder="密码"
        />
      </div>
      <div className="w-[30%] border border-black text-black text-center rounded hover:text-white hover:bg-black">
        登陆
      </div>
    </div>
  );
}
