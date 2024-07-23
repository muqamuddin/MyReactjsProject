import React from 'react'
import CardSlid from './CardSlid'
const ComProject = () => {
  return (
    <>
       <div className=" my-element container mx-auto px-[12px] md:px-[36px] xl:px-0 mt-[70px] ">
        <div className=" bg-beige relative px-[12px] py-[70px] rounded-[50px] ">
          <img
            className="absolute top-0 left-0 z-0 -translate-x-1/4"
            src={`${process.env.PUBLIC_URL}/file/pattern-4.svg`}
            alt="pattern icon"
          />
          <div className="text-center relative mb-[70px] md:mb-[90px]">
            <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px] dark:text-gray-400">
              OUR Project
            </h2>
            <p className="text-quote md:text-lead-lg text-gray-600 mx-auto md:max-w-[50ch] dark:text-gray-300">
              It Increases What Allah (swt) Grants You
            </p>
          </div>
          <div className="offer-list dots  ">
            <CardSlid/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComProject
