import React from 'react';

const TechBadge = ({ text, icon: IconComponent, size = 'normal', color }) => {
  const sizeClasses = size === 'small' ? 'text-sm m-1 p-1' : 'm-2 p-2';

  const badgeStyle = color ? `${color} text-primary` : 'bg-border text-tertiary';

  return (
    <span className={`${badgeStyle} text-primary rounded-full shadow-md flex items-center ${sizeClasses}`}>
      {IconComponent && <IconComponent className="mr-2" />}
      {text}
    </span>
  );
};

export default TechBadge;