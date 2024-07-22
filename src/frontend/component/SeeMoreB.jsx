import React from "react";
import { Link } from "react-router-dom";
const SeeMoreB = (props) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Link
          type="button"
          className="w-full py-3 inline-block text-sm text-center hover:bg-teal-600 hover:text-white duration-200 ease-in-out rounded-md text-gray-600 dark:text-gray-300 dark:hover:bg-dark-bg "
          to=''
        >
        {props.more}
        </Link>
      </div>
    </>
  );
};
export default SeeMoreB;
