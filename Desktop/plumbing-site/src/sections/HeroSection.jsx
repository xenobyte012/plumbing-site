import React from 'react'
import heroImage from '../images/hero-img.jpg'

function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    })
  }
  return (
    <section
      id="home"
      className=" relative t-30 bg-gradient-to-r from-blue-800 to-slate-800 flex flex-col text-black  "
    >
      <div className="block md:hidden  ">
        <img
          loading="lazy"
          src={heroImage}
          alt="hero image"
          className="w-full  object-cover h-170"
        />
        <div className="absolute top-1 h-full left-7 flex flex-col justify-center ">
          <div className="text-6xl w-full  text-white font-bold leading-tight justify-center">
            24/7 Plumbing
          </div>
          <div className="text-6xl text-white font-bold leading-tight">
            Service In
          </div>
          <div className="text-6xl text-white font-bold leading-tight">
            Rustenbung
          </div>
        </div>
        <div>
          <div className="absolute bottom-8 l w-full flex justify-center ">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-700 to-slate-600 rounded-4xl text-white py-3 px-7 text-xl"
            >
              Call Now
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block top-14 pt-15">
        <img
          src={heroImage}
          alt="hero image"
          className="w-full  object-cover h-180 backdrop-blur-xl bg-white/30"
        />
        <div className="absolute top-7 left-20 h-full w-full flex flex-col justify-center ">
          <div className="text-7xl w-full right-10 text-white font-bold leading-tight justify-center">
            24/7 Plumbing
          </div>
          <div className="text-7xl text-white font-bold leading-tight">
            Service In
          </div>
          <div className="text-7xl text-white font-bold leading-tight">
            Rustenbung
          </div>
        </div>
        <div>
          <div className="absolute bottom-10 l w-full flex justify-center ">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-500 to-slate-800 rounded-4xl py-3 px-12 text-xl text-white"
            >
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection