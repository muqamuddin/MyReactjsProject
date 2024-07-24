import React from "react";
import { Link } from "react-router-dom";
import UseFullLinks from "./UseFullLinks";
import CopyRight from "./CopyRight";
const Footer = (props) => {
  return (
    <>
      <div
        className="bg fixed bottom-28 rounded-full grid place-items-center opacity-0 invisible transition-all duration-300 right-[20px] z-[9999] w-[48px] h-[48px] max-w-[1320px] mx-auto"
        id="backToTop"
      >
        <Link
          className="rounded-full bg-green-900 grid place-items-center w-[48px] h-[48px]"
          to="#"
        >
          <img 
          // src="/file/icon-up.svg" 
          src={`${process.env.PUBLIC_URL}/file/icon-up.svg`}
          alt="to top icon" />
        </Link>
      </div>

      <footer className="container mx-auto mt-[92px] lg:mt-[150px] xl:mt-[200px] mb-[30px]  rtl:dark:bg-black rtl:bg-opacity-80 dark:bg-black dark:bg-opacity-80 ">
        <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px]">
          <div className="flex flex-col items-center gap-2 mb-14 md:flex-row md:justify-between">
            <img
              className="h-full w-full object-cover max-w-[162px]"
              src={`${process.env.PUBLIC_URL}/about/logo.jpg`}
              alt="to top icon"
            />

            <div className="flex items-center flex-col gap-5 md:flex-row lg:gap-[30px]   ">
              <p className="text-heading-6 font-chivo font-bold  ">
                Ready to get started?
              </p>
              <button type="button">
                <Link
                  className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-teal-700 text-white hover:bg-gray-100 hover:text-gray-400 w-fit dark:bg-white dark:text-black"
                  to="/"
                >
                  <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold  ">
                    More Aboute Us
                  </span>
                </Link>
              </button>
            </div>
          </div>
          <UseFullLinks />
          <CopyRight />
        </div>
      </footer>
    </>
  );
};
export default Footer;

