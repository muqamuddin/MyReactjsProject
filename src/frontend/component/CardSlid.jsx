import React  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { data } from './data';
const CardSlid = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
        <div className="w-3/4 m-auto">
          <div className="mt-20 ">
          <Slider {...settings} >
          {data.map((item, index) => (
              <div key={index}  className=" bg-white h-[450px] text-black rounded-xl ">
                <div className="h-56 rounded-t-xl   bg-teal-700 flex justify-center items-center">
                  <img 
                  src={item.image}
                  alt="" className="h-44 w-44 rounded-full" />
                </div>

                <div className="flex flex-col justify-center items-center gap-4 px-4 pt-2  hover:cursor-pointer ">
                  <p className="hover:underline">{item.name}</p>
                  <p className="-mt-4 flex justify-between items-start ">{item.review.slice(0 , 100)}...</p>
                  <Link  className="bg-teal-500 text-white text-lg px-6 py-1 rounded-xl mb-4 " 
                  to={`/projectdetail/${item.id}`}
                  >Read More</Link>
                </div>
              </div>
             ))}  
               </Slider>
          </div>
        </div> 
  );
};
export default CardSlid;
