import Image from "next/image";
import IcoCross from "../assets/icon-cross.svg";
import TodoFooter from "./TodoFooter";

export default function TodoList({ isDarkMode }) {
  return (
    <ul className="rounded-md overflow-hidden w-full bg-[hsl(var(--gray-50))] mb-6">
      <li className={`flex flex-row justify-between items-center gap-4 w-full bg-[hsl(var(--gray-50))] px-4 py-3 border-b border-[hsl(var(--purple-800))] ${isDarkMode ? 'bg-[hsl(var(--navy-900))]' : ''}`}>
        <div className="flex flex-row gap-4 items-center">
          <input
            type="checkbox"
            className="appearance-none border border-[hsl(var(--purple-700))] h-5 w-5 rounded-2xl bg-transparent"
          />
          <p className="">10 minutes meditation</p>
        </div>
        <button
          className="cursor-pointer"
        >
          <Image src={IcoCross} alt="Remove todo" className="w-3 h-3" />
        </button>
      </li>
      <li className={`flex flex-row justify-between items-center gap-4 w-full bg-[hsl(var(--gray-50))] px-4 py-3 border-b border-[hsl(var(--purple-800))] ${isDarkMode ? 'bg-[hsl(var(--navy-900))]' : ''}`}>
        <div className="flex flex-row gap-4 items-center">
          <input
            type="checkbox"
            className="appearance-none border border-[hsl(var(--purple-700))] h-5 w-5 rounded-2xl bg-transparent"
          />
          <p className="">Read for 1 hour</p>
        </div>
        <button
          className="cursor-pointer"
        >
          <Image src={IcoCross} alt="Remove todo" className="w-3 h-3" />
        </button>
      </li>
      <TodoFooter
        isDarkMode={isDarkMode}
      />
    </ul>
  );
}