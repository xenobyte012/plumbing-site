import React from "react";
import hero_img from '../images/hero-img.jpg'
import drain_cleaing from '../images/drain-cleaning.jpg'
import leak_repair from '../images/leak-repair.jpg'
import pipe_installation from '../images/pipe-installation.jpg'

function WhyDifferent() {
  // Data for the reasons (this keeps the component clean and scalable)
  const reasons = [
    {
      title: "Leak Repair",
      text: "We quickly detect and fix leaks to prevent water damage and save your money.",
      
    },
    {
      title: "Pipe Installation",
      text: "Professional pipe installation for reliable and long-lasting plumbing system.",
      
    },
    {
      title: "Drain Cleaning",
      text: "Fast drain cleaning to remove blockages and keep flowing smoothly.",
      
    },
  ]
  
return (
  <section className="bg-background-1 py-10 px-6 flex justify-center">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4 text-sub-heading-1 leading-tight ">
        Services
      </h2>
      {/*
      <p className="text-sub-heading-2 text-xl max-w-2xl mx-auto mb-12">
        We focus on creating websites that not only look great but also help
        businesses attract customers and grow online.
      </p>
      */}

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:pxp-40 lg:grid-cols-3 justify-items-center mx-auto pt-8 gap-12  ">
        <div>
          <div className="w-65 shadow-2xl rounded-lg hover:bg-blue-600 focus:bg-gray-200 transition-colors duration-300">
            <div className=" ">
              <img
                loading="lazy"
                src={leak_repair}
                alt="project 1 "
                className="object-cover rounded-t-lg h-90 w-full "
              />
            </div>
            <div className="bg-background-1 text-center py-4 rounded-b-lg  text-xl font-semibold text-sub-heading-1 ">
              Leak Repair
            </div>
          </div>
        </div>

        <div className="w-65 shadow-2xl rounded-lg hover:bg-blue-600 focus:bg-gray-200 transition-colors duration-300">
          <div className=" ">
            <img
              loading="lazy"
              src={pipe_installation}
              alt="project 2 "
              className="object-cover  rounded-t-lg h-90 w-full"
            />
          </div>
          <div className="bg-background-1 text-center py-4 rounded-b-lg  text-xl font-semibold text-sub-heading-1 ">
            Pipe Installation
          </div>
        </div>

        <div
          className="w-65 shadow-2xl rounded-lg hover:bg-blue-600 focus:bg-gray-200 transition-colors duration-300"
        >
          <div className="rounded-t-xl ">
            <img
              loading="lazy"
              src={drain_cleaing}
              alt="project 3 "
              className="object-cover rounded-t-lg h-90 w-full"
            />
          </div>
          <div className="bg-background-1 text-center py-4 rounded-b-lg  text-xl font-semibold text-sub-heading-1 ">
            Drain Cleaning
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
export default WhyDifferent;