import React from 'react';

const TechBadge = ({ text, size = 'normal' }) => {
  const sizeClasses = size === 'small' ? 'text-sm m-1 p-2' : 'm-2 p-2';

  return (
    <span className={`bg-border text-primary rounded-full shadow-md ${sizeClasses}`}>
      {text}
    </span>
  );
};

export default TechBadge;