import React, { } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import ServiceCom from "../component/ServiceCom";
import TeamCom from "../component/TeamCom";
import ComProject from "../component/ComProject";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center lg:mt-[150px]">
        <div className="text-center mb-[35px] md:mb-[50px]">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 dark:text-gray-200 mb-5 md:mb-[30px] max-w-[725px]">
            The Prophet Muhammad (pbuh) has said that
          </h2>
          <p className=" mb-20  text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px] dark:text-gray-300">
            Someone who fulfills the need of his Muslim brother will have the
            reward of someone who is all
          </p>
        </div>
        <div className=" flex items-center justify-center gap-[22px] mb-[40px] md:mb-[70px]">
          <button type="button">
            <Link
              className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-teal-700 text-white hover:bg-gray-100 hover:text-black dark:bg-white dark:text-black dark:text-bold text-heading-6 tracking-wide hover:translate-y-[-2px]"
              to="/faqs"
            >
              <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                Start Free FAQS
              </span>
              <i>
                <img
                  className="ml-[7px] w-[12px] filter-white group-hover:filter-green"
                  src={`${process.env.PUBLIC_URL}/file/icon-right.svg`}
                  alt="arrow right icon"
                />
              </i>
            </Link>
          </button>
          <button type="button">
            {" "}
            <Link
              className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-teal-600 text-white hover:bg-teal-700 dark:hover:bg-white dark:hover:text-black hover:text-white text-heading-6 tracking-wide hover:translate-y-[-2px]"
              to="#"
            >
              <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                Learn more
              </span>
              <i>
                {" "}
                <img
                  class="ml-[7px] w-[12px] filter-white group-hover:filter-white"
                  src={`${process.env.PUBLIC_URL}/file/icon-right.svg`}
                  alt="arrow right icon"
                />
              </i>
            </Link>
          </button>
        </div>
      </div>
      <ServiceCom />
      <ComProject/>
      <TeamCom />
      <Footer />
    </>
  );
};
export default Home;
