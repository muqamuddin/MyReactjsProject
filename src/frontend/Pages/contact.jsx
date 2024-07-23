import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto  px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px] max-w-[1320px] ">
        <div className="bg-gray-100 dark:bg-gray-500 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] rounded-[58px]">
          <div className="mx-auto relative max-w-[1320px]">
            <img
              className="absolute right-0 max-w-[129px] top-[-50px] "
              src={`${process.env.PUBLIC_URL}/file/email.png`}
              alt="mail image"
            />
            <p className="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px] dark:text-gray-200 ">
              Contact us
            </p>
            <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px] dark:text-gray-200">
              Have an project in mind?
            </h2>
            <p className="text-text text-gray-600 mb-[30px] md:mb-[60px] dark:text-gray-300">
              The right move at the right time saves your investment. live the
              dream of expanding your business.
            </p>
            <div className="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]">
              <div>
                <div className="flex gap-[13px] mb-[15px] md:mb-[25px]">
                  <i>
                    <img 
                    src={`${process.env.PUBLIC_URL}/file/icon-home-fill.svg`}
                    alt="home icon"  />
                  </i>
                  <p className="text-heading-6 font-bold font-chivo dark:text-gray-300">
                    A Green Future
                  </p>
                </div>
                <p className="text-text text-gray-600 dark:text-gray-200">
                  Near Charahi Shaheed Shar-e- Now,
                </p>
                <p className="text-text text-gray-600 mb-[10px] md:mb-[16px] dark:text-gray-200">
                  Dist 10 Kabul,Afghanistan
                </p>
                <p className="text-text text-gray-600 dark:text-gray-200">(+93) 799 222 555</p>
                <p className="text-text text-gray-600 dark:text-gray-200">
                  <a
                    href="../../../../cdn-cgi/l/email-protection.html"
                    className="__cf_email__"
                    data-cfemail="41222e2f352022350120262e2f6f222e2c"
                  >
                    [email:&#160;info@agfo.af]
                  </a>
                </p>
              </div>
              <form className="flex-1" action="/">
                <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                  <input
                    className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Enter your name"
                  />
                  <input
                    className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Company (optional)"
                  />
                </div>
                <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                  <input
                    className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Your email"
                  />
                  <input
                    className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Phone number"
                  />
                </div>
                <textarea
                  className="w-full py-5 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px]"
                  name=""
                  cols="100"
                  rows="10"
                  placeholder="Tell us about yourself"
                />
                <div className="flex flex-col gap-5">
                  <button
                    className="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white bg-teal-700 dark:bg-white dark:text-black w-fit"
                    type="submit"
                  >
                    Send Message
                    <i>
                      <img
                        className="ml-[7px] w-[12px] filter-white  "
                        src={`${process.env.PUBLIC_URL}/file/icon-right.svg`}
                        alt="arrow right icon"
                      />
                    </i>
                  </button>
                  <p className="text-md text-gray-500 dark:text-gray-300">
                    By clicking contact us button, you agree our terms and
                    policy,
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
