import React from 'react';
import useIntersectionObserver from '../utils/useIntersectionObserver';


const Hero = () => {
  const ref = useIntersectionObserver();

  return (
    <div id='main' className='h-screen bg-background flex flex-col items-center justify-center p-8 z-10'>
      <h1 ref={ref} className="text-5xl font-bold text-htag mb-12 text-center z-20 hide">👋 Welcome to my portfolio</h1>
    </div>
  );
};

export default Hero;