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
        <MdLightMode className="w-5 h-5 fill-yellow-400 dark:fill-white" />
        <span
          className={`slider mx-2 flex h-7 w-[56px] items-center rounded-full p-1 duration-200 ${isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
            }`}
        >
          <span
            className={`dot h-5 w-5 p-1 rounded-full bg-white duration-200 ${isChecked ? "translate-x-[24px]" : ""
              }`}
          ></span>
        </span>
        <MdOutlineDarkMode className="w-5 h-5 fill-slate-400 dark:fill-yellow-400" />
      </label>
    </>
  );
};

export default Switcher12;
