import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React from "react";

const DarkModeButton = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <>
      <button onClick={toggleDarkMode} className={` toggle-btn font-semibold `}>
        {isDarkMode ? <MoonIcon className="h-6 w-6" />  : <SunIcon className="h-6 w-6"/>}
      </button>
    </>
  );
};

export default DarkModeButton;

