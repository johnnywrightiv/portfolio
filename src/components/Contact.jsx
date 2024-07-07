import React from 'react';
import IconButton from './IconButton';
import { useThemeContext } from '../contexts/ThemeContext';
import useIntersectionObserver from '../utils/useIntersectionObserver';
import useNavigation from '../utils/useNavigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const navigateTo = useNavigation();
  const ref = useIntersectionObserver();
  const { dynamicColor } = useThemeContext();
  
  const handleEmailClick = () => {
    window.location.href = 'mailto:johnnywrightiv@gmail.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/johnnywrightiv', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://linkedin.com/in/johnnywrightiv', '_blank');
  };

  return (
    <div className="overflow-hidden">
      <footer id='contact' ref={ref} className={`bg-gradient-to-br from-contact-bg to-cta flex flex-col items-center justify-center p-16 z-20 hide md:animate-zoom-in show rounded-t-xl border-secondary/50 border-t-2`}>
        <h1 className="text-4xl font-bold text-htag mb-6 z-10">Contact Me</h1>
        <button className={`text-lg text-ptag mb-4 z-10 ${dynamicColor ? 'hover:text-dynamic' : 'hover:text-cta'}`} onClick={handleEmailClick}>johnnywrightiv@gmail.com</button>
        <div className="flex space-x-4 pr-2 z-10">
          <IconButton
            icon={FaGithub}
            onClick={handleGithubClick}
            className="text-primary"
            aria-label="GitHub"
          />
          <IconButton
            icon={FaLinkedin}
            onClick={handleLinkedinClick}
            className="text-linkedin"
            aria-label="LinkedIn"
          />
        </div>
        <button
          onClick={() => navigateTo('main')}
          className={`text-ptag z-30 ${dynamicColor ? 'hover:text-dynamic' : 'hover:text-cta'}  pt-10 items-end`}
        >
          ↑ Back to Top
        </button>
      </footer>
    </div>
  );
};

export default Contact;