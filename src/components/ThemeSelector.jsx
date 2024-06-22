import React, { useState, useCallback } from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import { capitalize } from '../utils/capitalize';
import { FiSun, FiMoon, FiSettings } from "react-icons/fi";
import useBlur from '../utils/useBlur';
import IconButton from './IconButton';

const ThemeSelector = ({ isMobile = false }) => {
  const { theme, changeTheme, systemTheme, availableThemes } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const menuRef = useBlur(closeMenu);

  const effectiveTheme = theme === 'system' ? systemTheme : theme;
  const ThemeIcon = effectiveTheme === 'dark' ? FiSun : FiMoon;

  const handleChangeTheme = (newTheme) => {
    changeTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className={isMobile ? "fixed left-4 top-4 z-10" : "md:block hidden fixed top-4 z-10"} ref={menuRef}>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='group flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-purple-400 hover:rounded-3xl ease-in-out duration-200'
          aria-label="Theme Toggle"
        >
          <ThemeIcon size={25} className="group-hover:text-purple-600 transition-colors duration-200" />
        </button>
        
        {isOpen && (
          <div className="absolute top-0 left-20 mt-2 p-2 rounded-md">
            <div className="flex flex-col">
              {availableThemes.map(t => (
                <button
                  key={t}
                  onClick={() => handleChangeTheme(t)}
                  className={`group flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-1 p-2 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-purple-400 hover:rounded-3xl ease-in-out duration-200 ${
                    theme === t ? 'bg-purple-200' : ''
                  }`}
                >
                  <span>
                    {t === 'dark' ? <FiMoon size={20} className="group-hover:text-purple-600 transition-colors duration-200" /> : t === 'system' ? <FiSettings size={20} className="group-hover:text-purple-600 transition-colors duration-200" /> : <FiSun size={20} className="group-hover:text-purple-600 transition-colors duration-200" />}
                  </span>
                  <span className="pl-2">{capitalize(t)}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSelector;
