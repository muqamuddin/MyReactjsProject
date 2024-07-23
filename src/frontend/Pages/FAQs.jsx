import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const FAQs = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-element  px-[12px] md:px-[36px] xl:px-0 mt-[70px] ">
        <div className="gap-6 px-5 lg:flex xl:gap-[50px] ">
          <div className="flex-1 mb-[40px] ">
            <div className="mb-[22px]">
              <h2 className="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px] dark:text-gray-200">
                Frequently asked questions
              </h2>
              <p className="text-quote md:text-lead-lg text-gray-600"></p>
            </div>
            <p className="text-text text-gray-600 mb-[40px] dark:text-gray-300">
              Feeling inquisitive? Have a read through some of our FAQs or
              contact our supporters for help
            </p>
            <div className="flex flex-col lg:max-w-[303px] md:gap-[35px] lg:mb-[48px]">
              <div className="mb-[30px] lg:mb-0">
                <div className="flex items-center mb-[17px]">
                  <img
                    className="mr-[9px]"
                    src={`${process.env.PUBLIC_URL}/file/icon-leaf.svg`}
                    alt="leaf icon"
                  />
                  <h4 className="text-heading-6 font-chivo font-bold dark:text-gray-200">
                    Boost your sale
                  </h4>
                </div>
                <p className="text-excerpt text-gray-600 dark:text-gray-300">
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
                  <h4 className="text-heading-6 font-chivo font-bold dark:text-gray-200">
                    Introducing New Features
                  </h4>
                </div>
                <p className="text-excerpt text-gray-600 dark:text-gray-300">
                  The latest design trends meet hand-crafted templates.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <button type="button">
                <Link
                  className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-teal-700 text-white hover:bg-gray-100 hover:text-white dark:bg-white dark:text-black w-fit"
                  to="home-3.html#"
                >
                  <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Contact Us
                  </span>
                  <i>
                    <img
                      className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                      src={`${process.env.PUBLIC_URL}/file/icon-right.svg`}
                      alt="arrow right icon"
                    />
                  </i>
                </Link>
              </button>
              <button type="button">
                {" "}
                <Link
                  className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-transparent text-white bg-teal-500 hover:bg-teal-700  dark:text-gray-900 dark:bg-white w-fit"
                  to="/contact"
                >
                  <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold ">
                    Support Center
                  </span>
                </Link>
              </button>
            </div>
          </div>
          <div className="flex-[1.5] ">
            <div className="relative accordion-item mb-5   ">
              <details className="bg-teal-700">
                <summary className=" flex justify-between py-2 items-center gap-5 px-2    ">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5  w-[800px] h-16 text-white  py-5 px-4  ">
                    What is Your Name?
                  </h4>
                </summary>
                <p className="text-text content font-chivo  ml-[30px] my-auto py-2 px-2 text-white ">
                  In the Name allah My Name is Muqamuddin Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Sunt dicta, recusandae
                  maiores corrupti numquam quae dolor eligendi in aperiam
                  debitis autem? Eos rerum nobis quis excepturi sint
                  repellendus, numquam ducimus eligendi voluptate esse nulla
                  exercitationem cupiditate voluptates delectus earum rem
                  quisquam quas ullam aspernatur explicabo fuga ipsa maiores
                  maxime? Impedit maiores esse possimus corporis voluptatum
                  atque officiis obcaecati hic quasi consequatur, placeat unde
                  aspernatur veritatis repellendus eius laboriosam quam
                  doloribus molestias dolorum maxime, porro excepturi? Iure
                  voluptas ducimus optio vel.
                </p>
              </details>
            </div>
            <div className="relative accordion-item mb-5   ">
              <details className="bg-teal-700">
                <summary className=" flex justify-between py-2 items-center gap-5 px-2   ">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5  w-[800px] h-16 text-white  py-5 px-4   ">
                    What is Your Purpose?
                  </h4>
                </summary>
                <p className="text-text content font-chivo  ml-[30px] my-auto py-2 px-2 text-white ">
                  In the Name allah My Name is Muqamuddin Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Sunt dicta, recusandae
                  maiores corrupti numquam quae dolor eligendi in aperiam
                  debitis autem? Eos rerum nobis quis excepturi sint
                  repellendus, numquam ducimus eligendi voluptate esse nulla
                  exercitationem cupiditate voluptates delectus earum rem
                  quisquam quas ullam aspernatur explicabo fuga ipsa maiores
                  maxime? Impedit maiores esse possimus corporis voluptatum
                  atque officiis obcaecati hic quasi consequatur, placeat unde
                  aspernatur veritatis repellendus eius laboriosam quam
                  doloribus molestias dolorum maxime, porro excepturi? Iure
                  voluptas ducimus optio vel.
                </p>
              </details>
            </div>
            <div className="relative accordion-item mb-5   ">
              <details className="bg-teal-700">
                <summary className=" flex justify-between py-2 items-center gap-5 px-2   ">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5  w-[800px] h-16 text-white  py-5 px-4   ">
                    What is Your Opinion ?
                  </h4>
                </summary>
                <p className="text-text content font-chivo  ml-[30px] my-auto py-2 px-2 text-white ">
                  In the Name allah My Name is Muqamuddin Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Sunt dicta, recusandae
                  maiores corrupti numquam quae dolor eligendi in aperiam
                  debitis autem? Eos rerum nobis quis excepturi sint
                  repellendus, numquam ducimus eligendi voluptate esse nulla
                  exercitationem cupiditate voluptates delectus earum rem
                  quisquam quas ullam aspernatur explicabo fuga ipsa maiores
                  maxime? Impedit maiores esse possimus corporis voluptatum
                  atque officiis obcaecati hic quasi consequatur, placeat unde
                  aspernatur veritatis repellendus eius laboriosam quam
                  doloribus molestias dolorum maxime, porro excepturi? Iure
                  voluptas ducimus optio vel.
                </p>
              </details>
            </div>
            <div className="relative accordion-item mb-5   ">
              <details className="bg-teal-700">
                <summary className=" flex justify-between py-2 items-center gap-5 px-2   ">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5  w-[800px] h-16 text-white  py-5 px-4   ">
                    What is Your Idea?
                  </h4>
                </summary>
                <p className="text-text content font-chivo  ml-[30px] my-auto py-2 px-2 text-white ">
                  In the Name allah My Name is Muqamuddin Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Sunt dicta, recusandae
                  maiores corrupti numquam quae dolor eligendi in aperiam
                  debitis autem? Eos rerum nobis quis excepturi sint
                  repellendus, numquam ducimus eligendi voluptate esse nulla
                  exercitationem cupiditate voluptates delectus earum rem
                  quisquam quas ullam aspernatur explicabo fuga ipsa maiores
                  maxime? Impedit maiores esse possimus corporis voluptatum
                  atque officiis obcaecati hic quasi consequatur, placeat unde
                  aspernatur veritatis repellendus eius laboriosam quam
                  doloribus molestias dolorum maxime, porro excepturi? Iure
                  voluptas ducimus optio vel.
                </p>
              </details>
            </div>
            <div className="relative accordion-item mb-5   ">
              <details className="bg-teal-700">
                <summary className=" flex justify-between py-2 items-center gap-5 px-2   ">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5  w-[800px] h-16 text-white  py-5 px-4   ">
                    What is Your Result?
                  </h4>
                </summary>
                <p className="text-text content font-chivo  ml-[30px] my-auto py-2 px-2 text-white ">
                  In the Name allah My Name is Muqamuddin Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Sunt dicta, recusandae
                  maiores corrupti numquam quae dolor eligendi in aperiam
                  debitis autem? Eos rerum nobis quis excepturi sint
                  repellendus, numquam ducimus eligendi voluptate esse nulla
                  exercitationem cupiditate voluptates delectus earum rem
                  quisquam quas ullam aspernatur explicabo fuga ipsa maiores
                  maxime? Impedit maiores esse possimus corporis voluptatum
                  atque officiis obcaecati hic quasi consequatur, placeat unde
                  aspernatur veritatis repellendus eius laboriosam quam
                  doloribus molestias dolorum maxime, porro excepturi? Iure
                  voluptas ducimus optio vel.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
