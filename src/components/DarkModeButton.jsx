import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDarkTheme } from "./DarkThemeProvider";

const DarkModeButton = () => {
  const  { toggleDarkMode , isDarkMode } = useDarkTheme(); // Using the custom hook to get the dark mode state and toggle function
  return (
    <>
      <button onClick={toggleDarkMode} className={` toggle-btn font-semibold `}>
        {isDarkMode ? <MoonIcon className="h-6 w-6" />  : <SunIcon className="h-6 w-6"/>}
      </button>
    </>
  );
};

export default DarkModeButton;

