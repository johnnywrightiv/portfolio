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
      <Icon className={`text-3xl mb-1 badge-shadow ${isDarkMode && darkColor ? darkColor : color}`} />
      <span className={`text-xs badge-shadow ${isDarkMode && darkColor ? darkColor : color}`}>{name}</span>
    </div>
  );
};

export default TechBadge;