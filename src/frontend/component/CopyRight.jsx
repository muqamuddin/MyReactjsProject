import React from "react";
import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <>
      <div className="max-w-[1320px] bg-gray-200 h-[1px] mb-[46px] dark:border dark:border-b-1 dark:border-gray-600 "></div>
      <div className="text-gray-400 lg:flex lg:items-center lg:justify-between">
        <div className="md:flex md:items-center md:gap-6">
          <p className="text-lead font-bold dark:text-white">
            ©Copyright - 2023 | All Rights Reserved
          </p>
          <div className="flex items-center justify-between md:gap-6">
            <Link className="text-text dark:text-gray-300" to="home-3.html#">
              Privacy policy
            </Link>
            <Link className="text-text dark:text-gray-300" to="home-3.html#">
              Cookies
            </Link>
            <Link className="text-text dark:text-gray-300" to="home-3.html#">
              Terms of service
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-5 lg:mt-0">
          <Link
            className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
            to="home-3.html#"
          >
            <img
              className="h-full w-full object-cover"
              src={`${process.env.PUBLIC_URL}/file/icon-facebook-green.svg`}
              alt="facebook icon"
            />
          </Link>
          <Link
            className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
            to="home-3.html#"
          >
            <img
              className="h-full w-full object-cover"
              src={`${process.env.PUBLIC_URL}/file/icon-instagram-green.svg`}
              alt="instagram icon"
            />
          </Link>
          <Link
            className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
            to="home-3.html#"
          >
            <img
              className="h-full w-full object-cover"
              src={`${process.env.PUBLIC_URL}/file/icon-twitter-green.svg`}
              alt="twitter icon"
            />
          </Link>
          <Link
            className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
            to="home-3.html#"
          >
            <img
              className="h-full w-full object-cover"
              src={`${process.env.PUBLIC_URL}/file/icon-linkedin-green.svg`}
              alt="linkedin icon"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CopyRight;
