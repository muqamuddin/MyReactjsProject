import React from "react";
import SeeMoreB from "./SeeMoreB";
import { data } from './data';
const ServicCard = () => {
return (
    <>
     {data.map((item, index) => (
        <div key={index}   className="p-[35px] pb-[35px] ">
         
          <div className="group bg-white dark:bg-gray-700 relative rounded-md shadow dark:hover:shadow-xl hover:shadow-xl dark:hover:shadow-gray-700 overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                className="group-hover:scale-110 duration-500 ease-in-out "
                src={item.image}
                alt="My image"
                loading="lazy"
              />
            </div>
            <div className="content p-3 pb-1 relative">
              <h4 className="mt-2 text-lg font-bold truncate dark:text-gray-300">
              {item.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 my-2 text-sm line-clamp-2">
              Short Description
              </p>
              <p className="text-gray-600 dark:text-gray-300 my-2 text-sm line-clamp-2">
                {item.review}
              </p>
              <span className="w-full inline-block h-[1px] bg-gray-200 dark:bg-white/50"></span>
              <SeeMoreB more="More details" to={`/servicedetails/${item.id}`} />
            </div>
          </div>
        </div>
            ))}
    </>
  );
};
export default ServicCard;
