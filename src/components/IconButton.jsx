import React from 'react';

const IconButton = ({ icon: Icon, text, onClick, className = ''}) => (
  <button
    onClick={onClick}
    className={`custom-button group ${className}`}
  >
    <Icon size={25} className="custom-icon" />
    {text && 
      <span className="ml-3 p-3 absolute left-full rounded-full whitespace-nowrap hidden group-hover:block text-primary" style={{ background: `radial-gradient(ellipse at center, rgba(var(--cta), .3), rgba(255, 255, 255, .3))` }}>
        {text}
      </span>
    }
  </button>
);

export default IconButton;