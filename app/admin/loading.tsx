import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={"/images/loading.gif"}
        alt="ZTED ICON"
        width={500}
        height={500}
        className="w-[30vw] h-[30vw]"
      />
    </div>
  );
}
