import React from 'react'
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto text-gray-900 font-normal max-w-[1320px]">
        <a name="top"> </a>
        <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[100px]">
          <div className="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]">
            <div className="relative">
              <img
                className="rounded-2xl mb-[30px] lg:mb-0 lg:flex-1"
                src={`${process.env.PUBLIC_URL}/file/mission.webp`}
                alt="About Image"
              />
            </div>
            <div className="flex-1 order-1">
              <h3 className="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px] dark:text-gray-300 ">
                title
              </h3>
              <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px] dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quae maxime culpa necessitatibus quis nesciunt veniam quod praesentium at impedit, voluptates architecto minus? Saepe possimus soluta nisi aperiam voluptatibus a!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quae maxime culpa necessitatibus quis nesciunt veniam quod praesentium at impedit, voluptates architecto minus? Saepe possimus soluta nisi aperiam voluptatibus a!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quae maxime culpa necessitatibus quis nesciunt veniam quod praesentium at impedit, voluptates architecto minus? Saepe possimus soluta nisi aperiam voluptatibus a!
              </p>
              <div className="border border-green-900 border-dashed mb-[48px] dark:border-white"></div>
              <div className="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
                <div className="mb-[30px] lg:mb-0">
                  <div className="flex items-center mb-[17px]">
                    <img
                      className="mr-[9px]"
                      src={`${process.env.PUBLIC_URL}/file/icon-leaf.svg`}
                      alt="leaf icon"
                    />
                    <h4 className="text-heading-6 font-chivo font-bold dark:text-gray-300">
                      Our Vission
                    </h4>
                  </div>
                  <p className="text-excerpt text-gray-600 dark:text-gray-200">
                    short desc Lorem ipsum dolor sit amet aliquid aperiam
                    doloremque in delectus deleniti vero, voluptatibus
                    architecto itaque sunt illum vitae eveniet quia voluptates
                    eius nisi? Minus accusantium nulla culpa placeat. Rerum
                    modi, asperiores itaque illum consequatur quod possimus
                    error alias architecto voluptatem quos omnis cum minus rem
                    suscipit quam odit.
                  </p>
                </div>
                <div className="mb-[30px] lg:mb-0">
                  <div className="flex items-center mb-[17px]">
                    <img
                      className="mr-[9px]"
                      src={`${process.env.PUBLIC_URL}/file/icon-leaf.svg`}
                      alt="leaf icon"
                    />
                    <h4 className="text-heading-6 font-chivo font-bold dark:text-gray-300">
                      Our Mission
                    </h4>
                  </div>
                  <p className="text-excerpt text-gray-600 dark:text-gray-200">
                    The latest design trends meet hand-crafted templates.
                  </p>
                </div>
                <div className="mb-[30px] lg:mb-0">
                  <div className="flex items-center mb-[17px]">
                    <img
                      className="mr-[9px]"
                      src={`${process.env.PUBLIC_URL}/file/icon-leaf.svg`}
                      alt="leaf icon"
                    />
                    <h4 className="text-heading-6 font-chivo font-bold dark:text-gray-300 ">
                      Our Objective
                    </h4>
                  </div>
                  <p className="text-excerpt text-gray-600 dark:text-gray-200">
                    The latest design trends meet hand-crafted templates.
                  </p>
                </div>
                <div className="mb-[30px] lg:mb-0">
                  <div className="flex items-center mb-[17px]">
                    <img
                      className="mr-[9px]"
                      src={`${process.env.PUBLIC_URL}/file/icon-leaf.svg`}
                      alt="leaf icon"
                    />
                    <h4 className="text-heading-6 font-chivo font-bold dark:text-gray-300">
                      Afghanistan Green Future
                    </h4>
                  </div>
                  <p className="text-excerpt text-gray-600 dark:text-gray-200">
                    The latest design trends meet hand-crafted templates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer footerTitle="I am in the About Page" />
    </>
  );
};
export default About;
