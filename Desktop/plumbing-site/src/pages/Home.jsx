import React from 'react'
import HeroSection from '../sections/HeroSection';
import WhyDifferent from '../sections/WhyDifferent';
import WhyUs from '../sections/whyUs';
import Navbar from '../components/Navbar';
import Gallary from '../sections/Gallary'
import Footer from '../components/Footer'
import ContactUs from '../sections/ContactUs'
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <WhyDifferent />
      <WhyUs />
      <Gallary />
      <ContactUs />
      <Footer />
    </div>
  );
}

