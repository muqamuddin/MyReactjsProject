import React from "react";
const TopHeader = () => {
  return (
    <>
      <div className=" bg-teal-700 dark:bg-black h-12 twhite w-full dark:border dark:border-b-1 dark:border-gray-600 sticky top-0 z-20">
        <div className="flex items-center px-3 justify-between gap-5 mx-auto max-w-[1320px] py-[10px] md:mx-8">
          <p
            className="text-base hidden font-bold md:block twhite"
          >
            Afghanistan is so beautiful(SideName)
          </p>
          <div className="flex items-center contact ml-auto gap-[10px] md:gap-2 md:flex-row twhite">
            <span>(+93) 790088684</span>
            <div className="border border-dashed border-white self-stretch twhite"></div>
                [&#160;m.safdari4140@gmail.com]
          </div>
          Hours: 8:17
        </div>
      </div>
    </>
  );
};

export default TopHeader;
