import React from "react";
import TeamCard from "./TeamCard";
const TeamCom = () => {
  return (
    <>
          <div className="container mx-auto px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px] max-w-[1320px] ">
          <h2 className="text-gray-900 font-bold font-chivo mb-2 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px] flex items-center justify-center sm:justify-start dark:text-gray-200">
            Our Team
          </h2>
          <p className=" text-quote md:text-lead-lg text-gray-600 flex items-center justify-center sm:justify-start dark:text-gray-300 ">
            Decades of experience in design and development
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-[30px] gap-y-[50px] mb-[52px] p-14">
          <TeamCard />
        </div>
      </div>
    </>
  );
};

export default TeamCom;
