import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React from "react";



const DarkModeButton = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <>
      <button onClick={toggleDarkMode} className={`rounded-full toggle-btn font-semibold ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}>
        {isDarkMode ? <SunIcon className="h-6 w-6"/> : <MoonIcon className="h-6 w-6" />}
      </button>
    </>
  );
};

export default DarkModeButton;
