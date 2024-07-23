import React from "react";
import SeeMoreB from "./SeeMoreB";
import { team } from "./team";
const TeamCard = () => {
  return (
    <div>
      {team.map((item, id) => (
        <div
          key={id}
          className="p-[25px] pb-[35px] md:m-0 lg:m-0 xl:m-0 mr-32 "
        >
          <div className=" my-element group bg-white dark:bg-gray-700 relative rounded-md shadow dark:hover:shadow-xl hover:shadow-xl dark:hover:shadow-gray-700 overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                className="group-hover:scale-110 duration-500 ease-in-out object-cover"
                src={item.image}
                alt="Agon"
              />
            </div>
            <div className="content p-3 pb-1 relative">
              <h4 className="mt-2 text-lg font-bold truncate dark:text-gray-300">
                {item.position}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 my-2 text-sm line-clamp-2">
                {item.name}/ {item.lastname}
              </p>
              <p className="text-gray-600 dark:text-gray-300 my-2 text-sm line-clamp-2">
              {item.education} /{item.experience}
              </p>
              <span className="w-full inline-block h-[1px] bg-gray-200 dark:bg-white/50"></span>
              <SeeMoreB more="See Details" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TeamCard;
