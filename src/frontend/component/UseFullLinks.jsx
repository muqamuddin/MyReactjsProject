import React from "react";
import { Link } from "react-router-dom";
const UseFullLinks = () => {
  return (
    <>
      <div className=" my-element w-full bg-gray-200 h-[1px] mb-[52px] dark:border dark:border-b-1 dark:border-gray-600 "></div>
      <div className="text-gray-600 grid gird-cols-1 gap-8 mb-[48px] md:grid-cols-2 lg:grid-cols-5 xl:gap-[98px] ">
        <div>
          <h5 className="text-heading-5 font-chivo usefull-link-title">
            Contact
          </h5>
          <p className="text-text usefull-link-subtitle">Address</p>
          <p className="text-text usefull-link-subtitle">(+93) 790088684</p>
          <p className="text-text usefull-link-subtitle">
            <Link>[m.safdari4140@gmail.com]</Link>
          </p>
        </div>
        <div>
          <h5 className="text-heading-5 font-chivo usefull-link-title">
            About Us
          </h5>
          <ul>
            <li className="mb-2">
              <Link className="usefull-link-subtitle-without-contact" to="/admin/about/about">
                Mission &amp; Vision
              </Link>
            </li>
            <li className="mb-2">
              <Link className="usefull-link-subtitle-without-contact" to="/team">
                Our Team
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-heading-5 font-chivo usefull-link-title">
            Support
          </h5>
          <ul>
            <li className="mb-2">
              <Link className="usefull-link-subtitle-without-contact" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-heading-5 font-chivo usefull-link-title">
            Useful links
          </h5>
          <ul>
            <li className="mb-2">
              <Link className="usefull-link-subtitle-without-contact" to="/Service">
                News &amp; Services
              </Link>
            </li>
            <li className="mb-2">
              <Link className="usefull-link-subtitle-without-contact" to="/project">
                How it works
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UseFullLinks;
