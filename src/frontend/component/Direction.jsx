import React, { useState, useEffect } from "react";
const Direction = () => {
    const [direction, setDirection] = useState(localStorage.getItem("direction") || "ltr");
    useEffect(() => {
      document.documentElement.setAttribute("dir", direction);
      localStorage.setItem("direction", direction);
    }, [direction]);
  
    const handleDirection = () => {
      setDirection(prevDirection => (prevDirection === "rtl" ? "ltr" : "rtl"));
    };
  
  return (
    < >
      <button
              className="rounded-md bg-teal-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 dark:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              onClick={handleDirection}
            >
               {direction === "rtl" ? "Dari" : "English"}
            </button>
    </>
  )
}
export default Direction
