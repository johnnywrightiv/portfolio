import React from 'react';
import IconButton from './IconButton';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
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
    <div id='contact' className="h-screen bg-slate-300 flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h1>
      <button className="text-lg text-gray-600 mb-4" onClick={handleEmailClick}>johnnywrightiv@gmail.com</button>
      <div className="flex space-x-4">
        <IconButton
          icon={FaGithub}
          onClick={handleGithubClick}
          className="text-gray-800"
          aria-label="GitHub"
        />
        <IconButton
          icon={FaLinkedin}
          onClick={handleLinkedinClick}
          className="text-blue-800"
          aria-label="LinkedIn"
        />
      </div>
    </div>
  );
};

export default Contact;