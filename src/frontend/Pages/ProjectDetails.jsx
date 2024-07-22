import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";
import { data } from "../component/data";
const ProjectDetails = () => {
  const { id } = useParams();
  const project = data.find((item) => item.id === parseInt(id));
  return (
    <>
      <Navbar />
      <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
        <a name="top"> </a>
        <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[100px]">
          <div className="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]">
            <div className="relative">
              <img
                className="rounded-2xl mb-[30px] lg:mb-0 lg:flex-1"
                src={project.image}
              />
            </div>
            <div className="flex-1 order-1">
              <h1 className="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
                {project.name}
              </h1>
              <h3 className="font-chivo font-bold md:text-lead-lg text-gray-600 mb-[20px]">
                Short Description
              </h3>
              <div className="border border-green-900 border-dashed mb-10 "></div>
              <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
                ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                incidunt ut, vel maxime quas alias. Autem eum, necessitatibus
                quaerat nemo a similique quisquam vitae, aperiam ullam odio
                nulla esse nam! ipsum, dolor sit amet consectetur adipisicing
                elit. Deserunt minima necessitatibus quo tempore, tempora
                libero? Mollitia ullam ipsa nesciunt, esse officiis dolorem
                deserunt, iure velit dignissimos delectus minus voluptatem?
                Aliquid. ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis incidunt ut, vel maxime quas alias. Autem eum,
                necessitatibus quaerat nemo a similique quisquam vitae, aperiam
                ullam odio nulla esse nam! ipsum, dolor sit amet consectetur
                adipisicing elit. Deserunt minima necessitatibus quo tempore,
                tempora libero? Mollitia ullam ipsa nesciunt, esse officiis
                dolorem deserunt, iure velit dignissimos delectus minus
                voluptatem? Aliquid.
                {project.review}
              </p>
              <div className="border border-green-900 border-dashed mt-10"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
