import React, { useState, useEffect } from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import useIntersectionObserver from '../utils/useIntersectionObserver';
import useNavigation from '../utils/useNavigation';
import { CiCircleChevDown } from "react-icons/ci";

const Hero = () => {
  const navigateTo = useNavigation();
  const ref = useIntersectionObserver();
  const { dynamicColor } = useThemeContext();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id='main' className='h-screen flex flex-col items-center justify-center p-8 z-10'>
      <h1 ref={ref} className="text-5xl font-bold text-htag mb-12 text-center z-20 hide animate-slide-up">
        👋 Welcome to my portfolio
      </h1>
      {showButton && (
        <button
          onClick={() => navigateTo('about')}
          className={`text-primary z-30 text-5xl rounded-full ${dynamicColor ? 'hover:text-dynamic' : 'hover:text-cta'} absolute bottom-12 animate-fade animate-pulse`}
        >
          <CiCircleChevDown />
        </button>
      )}
    </div>
  );
};

export default Hero;
