import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import { determineTextColorClass } from '../utils/determineTextColorClass';

const TechBubble = ({ text, size = 'normal' }) => {
  const sizeClasses = size === 'small' ? 'text-sm m-1 p-1' : 'm-2 p-2';
  const { dynamicColor } = useThemeContext();
  const textColorClass = determineTextColorClass(dynamicColor);

  const badgeStyle =`bg-border/50 ${textColorClass}`;

  return (
    <span className={`flex-shrink-0 rounded-full shadow-md flex items-center ${badgeStyle} ${sizeClasses}`}>
      <span>{text}</span>
    </span>
  );
};

export default TechBubble;