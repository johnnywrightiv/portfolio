import React, { useState, useCallback } from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import { capitalize } from '../utils/capitalize';
import { FiSun, FiMoon, FiSettings } from "react-icons/fi";
import useBlur from '../utils/useBlur';

const ThemeSelector = () => {
  const { theme, changeTheme, systemTheme, availableThemes } = useThemeContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const effectiveTheme = theme === 'system' ? systemTheme : theme;

  const closeDropdown = useCallback(() => setIsDropdownOpen(false), []);
  const dropdownRef = useBlur(closeDropdown);

  return (
    <div className="md:block hidden fixed top-4 z-10">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className='flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-purple-400 hover:rounded-3xl ease-in-out duration-200'
          aria-label="Theme Toggle"
        >
          {effectiveTheme === 'dark' ? <FiSun size={25} /> : <FiMoon size={25} />}
        </button>
        
        {isDropdownOpen && (
          <div className="absolute top-0 left-20 mt-2 p-2">
            <div className="flex flex-col">
              {availableThemes.map(t => (
                <button
                  key={t}
                  onClick={() => {
                    changeTheme(t);
                    setIsDropdownOpen(false);
                  }}
                  className='group flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-1 p-2 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-purple-400 hover:rounded-3xl ease-in-out duration-200'
                >
                  <span>
                    {t === 'dark' ? <FiMoon size={20} /> : t === 'system' ? <FiSettings /> : <FiSun size={20} />}
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