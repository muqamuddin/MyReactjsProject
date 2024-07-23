import React from "react";
import TeamCard from "./TeamCard";
const TeamCom = () => {
  return (
    <>
      <div className="container  mx-auto my-element px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px] ">
        <div className="mb-8">
          <h2 className="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px]  dark:text-gray-200 ">
            Our Team
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 dark:text-gray-300  ">
            Decades of experience in design and development
          </p>
        </div>
        <div className="grid-cols-1 !grid gap-x-[30px] gap-y-[48px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </>
  );
};

export default TeamCom;
