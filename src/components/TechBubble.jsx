// import React from 'react';

// const TechBubble = ({ text, size = 'normal' }) => {
//   const sizeClasses = size === 'small' ? 'text-sm m-1 p-1' : 'm-2 p-2';

//   const badgeStyle ='bg-border text-tertiary';

//   return (
//     <span className={`flex-shrink-0 rounded-full shadow-md flex items-center ${badgeStyle} ${sizeClasses}`}>
//       <span>{text}</span>
//     </span>
//   );
// };

// export default TechBubble;



import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import { determineTextColorClass } from '../utils/determineTextColorClass';

const TechBubble = ({ text, size = 'normal' }) => {
  const { dynamicColor } = useThemeContext();
  const sizeClasses = size === 'small' ? 'text-sm m-1 p-1' : 'm-2 p-2';
  const textColorClass = determineTextColorClass(dynamicColor);

  return (
    <span className={`flex-shrink-0 rounded-full shadow-md flex items-center bg-bubble border-2 border-primary/5 ${textColorClass} ${sizeClasses}`}>
      <span>{text}</span>
    </span>
  );
};

export default TechBubble;