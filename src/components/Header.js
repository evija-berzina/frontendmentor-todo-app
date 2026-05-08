import Image from "next/image";
import IconSun from "../assets/icon-sun.svg";
import IconMoon from "../assets/icon-moon.svg";

export default function Header({ isDarkMode, setIsDarkMode }) {
 
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    // toggle state - reverses the current value
  }

  return (
    <header className="flex flex-row justify-between items-center w-full mb-12">
      <h1 className="text-4xl font-bold tracking-wide text-gray-50">
        T O D O
      </h1>
      <button onClick={() => toggleDarkMode()}>
        <Image
          src={isDarkMode ? IconSun : IconMoon}
          alt="Background"
          className=" cursor-pointer"
        />
      </button>
    </header>
  );
}