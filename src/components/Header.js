import Image from "next/image";
import IconSun from "../assets/icon-sun.svg";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center w-full">
      <h1 className="text-4xl font-bold tracking-wide text-gray-50">
        T O D O
      </h1>
      <Image
        src={IconSun}
        alt="Background"
        className=" cursor-pointer"
      />
    </header>
  );
}