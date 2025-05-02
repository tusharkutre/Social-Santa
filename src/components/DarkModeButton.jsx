import React from "react";

const DarkModeButton = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <>
      <button onClick={toggleDarkMode} className={`toggle-btn font-semibold ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </>
  );
};

export default DarkModeButton;
