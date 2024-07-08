import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';

const IconButton = ({ icon: Icon, text, onClick, className = '' }) => {
  const { dynamicColor } = useThemeContext();

  const hoverColor = dynamicColor ? 'hover:shadow-dynamic hover:text-dynamic transition duration-100' : 'hover:shadow-cta hover:text-cta transition duration-100';

  return (
    <button
      onClick={onClick}
      className={`custom-button group ${hoverColor} ${className}`}
    >
      <Icon size={25} className="" />
      {text && 
        <span className="ml-3 p-2 absolute left-full rounded-2xl whitespace-nowrap hidden group-hover:block text-primary bg-card/50">
          {text}
        </span>
      }
    </button>
  );
};

export default IconButton;