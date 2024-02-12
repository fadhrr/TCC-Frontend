import React from 'react';
import Hero from './Hero';
import Footer from './Footer';
import Rank from './Rank';
import Step from './Step';
import Cta from './Cta';

function Home() {
  return (
    <div className="overflow-hidden md:min-w-fit xl:min-w-full">
      <Hero />
      <Step />
      <Rank />
      <Cta />
    </div>
  );
}

export default Home;

