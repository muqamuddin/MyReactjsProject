import React from "react";
import Sidebar from '../layouts/Sidebar';
import Footer from "../layouts/Footer";
import Head from "../layouts/Head";

const Test = () =>{
        return (
           <div>
             <Sidebar/>
             <div className="w-screen flex flex-col h-screen overflow-y-hidden pl-64  -mt-[835px]">
            <Head/>
              {/* <main className="w-full flex-grow p-6">
                   <h1 className="text-3xl text-black pb-6 underline">
                  <div className="offer-list dots slick-initialized slick-slider slick-dotted">
                    <div className="slick-list draggable">
                        <div className="slick-track" style={{opacity: 1; width: 432px; transform: translate3d(0px, 0px, 0px)}}>
                            ::before
                              <div className=" w-[392px]  rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                                <img
                                  className="h-full w-full object-cover mb-[30px] max-w-[70px] max-h-[50px]"
                                  src="/about/service.webp"
                                />
                                <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                                  Education
                                </h3>
                                <p className="text-text text-gray-600 mb-2">
                                  Education is nececary for everybody of society
                                </p>
                              
                                  <SeeMoreB more="Project"/>
                              </div>
                                <ul className="slick-dots" role="tablist">
                                  <li className="slick-active" role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 1" tabindex="0" aria-selected="true" >
                                        1
                                    </button>
                                  </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                  </div>  
             
                 </h1>
              </main> */}
            <Footer/>
            </div>
           </div>          
          );
    }
export default Test;


