import React from 'react';
import HeroSection from './hero-section';
import WhoWeAre from './who-we-are';
import OurProducts from './our-products';
import WhyUs from './why-us';
import VariousFields from './various-fields';
import Testimonials from './testimonials';

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <OurProducts />
      <WhyUs />
      <VariousFields />
      <Testimonials />
    </>
  )
}

export default Home;