
import React, { useState, useEffect } from "react";
const DarkMode = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    applyTheme();
    localStorage.setItem("theme", theme);
  }, [theme]);

  const applyTheme = () => {
    const bgStyle = theme === "dark" ? "black" : "#ffff";
    document.documentElement.style.setProperty("--bg-color", bgStyle);
    document.documentElement.classList.toggle("dark", theme === "dark");
  };

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    applyTheme();
  }, []);

  return (
    <div>
      {/* Tooltip bottom */}
      <button
        onClick={handleThemeSwitch}
        data-tooltip-target="tooltip-bottom"
        data-tooltip-placement="bottom"
        type="button"
        className={`ms-3 mb-2 md:mb-0 text-gray-950 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ${
          theme === "dark" ? "dark:bg-white dark:hover:bg-gray-400 dark:focus:ring-gray-400" : ""
        }`}
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
      </button>
      <div
        id="tooltip-bottom"
        role="tooltip"
        className={`absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ${
          theme === "dark" ? "dark:bg-gray-700" : ""
        }`}
      >
        Change Mode
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};
export default DarkMode;