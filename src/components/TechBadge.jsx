import React from 'react';

const TechBadge = ({ text, icon: IconComponent, size = 'normal', color }) => {
  const sizeClasses = size === 'small' ? 'text-sm m-1 p-1' : 'm-2 p-2';

  const badgeStyle = color ? `${color} text-white` : 'bg-border text-tertiary';

  return (
    <span className={`rounded-full shadow-md flex items-center ${badgeStyle} ${sizeClasses}`}>
      {IconComponent && <IconComponent className={`mr-2 ${color ? 'badge-shadow' : ''}`} />}
      {text && <span className={color ? 'badge-shadow' : ''}>{text}</span>}
    </span>
  );
};

export default TechBadge;