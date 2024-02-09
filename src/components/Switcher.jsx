import { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

const Switcher12 = () => {
  const [isChecked, setIsChecked] = useState(
    localStorage.theme === "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleCheckboxChange = () => {
    const newTheme = localStorage.theme === "dark" ? "light" : "dark";
    setIsChecked(!isChecked);
    localStorage.theme = newTheme;

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
          aria-label="Toggle dark mode"
        />
        <MdLightMode className="w-8 h-8 fill-yellow-400 dark:fill-white" />
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isChecked ? "translate-x-[28px]" : ""
            }`}
          ></span>
        </span>
        <MdOutlineDarkMode className="w-8 h-8 fill-slate-400 dark:fill-yellow-400" />
      </label>
    </>
  );
};

export default Switcher12;
