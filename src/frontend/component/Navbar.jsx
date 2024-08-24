import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import Direction from "./Direction";
import TopHeader from "./TopHeader";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <TopHeader />
      <header className="navbar z-20 ">
        <nav className=" w-full  navbar  bgw dark:bg-black dark:bg-opacity-80  dark:rtl:bg-black shadow-2xl dark:shadow-2xl dark:border dark:border-b-1 dark:border-gray-600  ">
          <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 ">
              <div className="hidden md:block">
                <div className=" flex items-baseline space-x-4 ">
                  <Link
                    className="my-auto mr-40 object-cover rtl:mr-0 rtl:ml-40"
                    to="index.html"
                  >
                    <img
                      className="logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[138px]"
                      src={`${process.env.PUBLIC_URL}/about/Footer-Logo-2nd.jpg`}
                      alt="logo image"
                      loading="lazy"
                    />
                  </Link>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                  <Link to="/Service/" className="nav-link">
                    Services
                  </Link>
                  <Link to="/project/" className="nav-link">
                    Project
                  </Link>
                  <Link to="/admin/about/about/" className="nav-link">
                    About
                  </Link>
                  <Link to="/team/" className="nav-link">
                    Teams
                  </Link>
                  <Link to="/contact/" className="nav-link">
                    Contact
                  </Link>
                  <Link to="/faqs/" className="nav-link">
                    FAQS
                  </Link>
                </div>
              </div>
              <div className="md:hidden">
                <button
                  onClick={toggleNav}
                  className="text-gray-300 hover:text-white focus:outline-none focus:text-white ml-6"
                >
                  <img
                    className="w-6 dark:bg-white"
                    src={`${process.env.PUBLIC_URL}/file/menu.png`}
                    alt="Image"
                  />
                </button>
              </div>
              <Direction />
              <span className="hidden md:block mr-48 rtl:ml-48">
                <DarkMode />
              </span>
            </div>
            {isNavOpen && (
              <div className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link to="/" className="nav-link-mobile">
                    Home
                  </Link>
                  <Link to="/admin/about/about/" className="nav-link-mobile">
                    About
                  </Link>
                  <Link to="/Service/" className="nav-link-mobile">
                    Services
                  </Link>
                  <Link to="/project/" className="nav-link-mobile">
                    Project
                  </Link>
                  <Link to="/team/" className="nav-link-mobile">
                    Team
                  </Link>
                  <Link to="/faqs/" className="nav-link-mobile">
                    Faqs
                  </Link>
                  <Link to="/contact/" className="nav-link-mobile">
                    Contact Us
                  </Link>
                  <DarkMode />
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
