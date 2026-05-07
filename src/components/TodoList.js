import Image from "next/image";
import IcoCross from "../assets/icon-cross.svg";

export default function TodoList() {
  return (
    <ul className=" w-full">
      <li className="flex flex-row justify-between items-center gap-4 w-full bg-[hsl(var(--navy-900))] px-4 py-3 rounded-md">
        <div className="flex flex-row gap-4 items-center">
          <input
            type="checkbox"
            className="appearance-none border border-[hsl(var(--purple-700))] h-6 w-6 rounded-2xl bg-transparent"
          />
          <p className="">10 minutes meditation</p>
        </div>
        <button
          className="cursor-pointer"
        >
          <Image src={IcoCross} alt="Remove todo" />
        </button>
      </li>
    </ul>
  );
}