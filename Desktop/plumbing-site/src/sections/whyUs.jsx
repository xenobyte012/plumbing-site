import React from "react";
import hero_img from '../images/images.jpg'
function WhyUs() {
  // Data for the reasons (this keeps the component clean and scalable)

  
return (
  <section className="bg-slate-900 py-10 px-6 flex justify-center">
    <div className="  ">
      <h2 className="text-4xl font-bold text-center mb-4 text-normal-text-2 leading-tight pb-4">
        Why Choose US
      </h2>
      
      <p className="text-sub-heading-2 text-xl max-w-2xl mx-auto mb-12">
        We provede fast, and affordable plumbing services you can depend on.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 pt-6">
        <div className="flex flex-col gap-6 text-left ">
          <div>
            <h1 className="text-xl font-semibold pb-2 text-sub-heading-2">
              ⚡ Fast Responsived
            </h1>
            <p className="pl-4  text-normal-text-2">
              We respond quickly and arrive on time to handle your plumbing
              emergencies without delay.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold pb-2 text-sub-heading-2">
              🎨Affordable
            </h1>
            <p className="pl-4  text-normal-text-2">
              Quality plumbing services at fair and transparent prices with no
              hidden costs.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold pb-2 text-sub-heading-2">
              📱 Exprienced
            </h1>
            <p className="pl-4  text-normal-text-2">
              Skilled and exprienced profeddionals delivering reliable and
              long-lasting solution.
            </p>
          </div>
        </div>
        <div className="hidden md:block  pt-2 ">
          <img
            loading="lazy"
            src={hero_img}
            alt="our goal images"
            className="rounded-xl object-cover shadow-2xl w-full h-65"
          />
        </div>
      </div>
    </div>
  </section>
);
}
export default WhyUs;