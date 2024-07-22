import React from "react";
const Head = () => {
  return (
    <div>
      <header className="w-full items-center bg-gray-400 py-2 px-6 hidden sm:flex ">
        <div className="w-1/2"></div>
        <div className="relative w-1/2 flex justify-end">
          <button className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
            <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" alt=""></img>
          </button>
        </div>
      </header>
      <div className="w-full overflow-x-hidden border-t flex flex-col"></div>
    </div>
  );
}

export default Head;
