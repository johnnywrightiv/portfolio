import React, { useState } from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import { capitalize } from '../utils/capitalize';
import { GoSun, GoMoon } from "react-icons/go";

const ThemeSelector = () => {
  const { theme, changeTheme, systemTheme, availableThemes } = useThemeContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const effectiveTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="text-grape fixed top-0 z-10">
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className='flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-purple-400 hover:rounded-3xl ease-in-out duration-200'
          aria-label="Theme Toggle"
        >
          {effectiveTheme === 'dark' ? <GoSun size={25} /> : <GoMoon size={25} />}
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
                  {capitalize(t)}
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
