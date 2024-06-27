import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';

const TechBadge = ({ Icon, name, color, darkColor, onClick }) => {
  const { theme, systemTheme } = useThemeContext();
  const isDarkMode = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  return (
    <div 
      className="flex flex-col items-center m-2 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
      onClick={onClick}
    >
      <Icon 
        style={{ color: isDarkMode && darkColor ? darkColor : color }} 
        className="text-3xl mb-1" 
      />
      <span 
        style={{ color: isDarkMode && darkColor ? darkColor : color }}
        className="text-xs"
      >
        {name}
      </span>
    </div>
  );
};

export default TechBadge;