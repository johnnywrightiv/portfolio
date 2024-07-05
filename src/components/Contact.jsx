import React from 'react';
import IconButton from './IconButton';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const Contact = () => {
  const ref = useIntersectionObserver();
  
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
      <footer id='contact' ref={ref} className={`bg-gradient-to-br from-contact-bg to-cta/40 flex flex-col items-center justify-center p-16 z-20 hide animate-zoom-in rounded-xl border-secondary/50 border-t-2`}>
        <h1 className="text-4xl font-bold text-htag mb-6 z-10">Contact Me</h1>
        <button className="text-lg text-ptag mb-4 z-10" onClick={handleEmailClick}>johnnywrightiv@gmail.com</button>
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
      </footer>
    </div>
  );
};

export default Contact;