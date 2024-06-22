import React, { useState, useCallback } from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import { capitalize } from '../utils/capitalize';
import { FiSun, FiMoon, FiSettings } from "react-icons/fi";
import useBlur from '../utils/useBlur';

const ThemeSelector = ({ isMobile = false }) => {
  const { theme, changeTheme, systemTheme, availableThemes } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);

  const effectiveTheme = theme === 'system' ? systemTheme : theme;

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const menuRef = useBlur(closeMenu);

  const handleChangeTheme = (newTheme) => {
    changeTheme(newTheme);
    setIsOpen(false);
  };

  const ThemeIcon = effectiveTheme === 'dark' ? FiSun : FiMoon;

  if (isMobile) {
    return (
      <div className="w-[75%]" ref={menuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 my-2 p-4 cursor-pointer"
        >
          <div className="w-8 flex justify-center">
            <ThemeIcon size={25} />
          </div>
          <span className="pl-4">Theme</span>
        </button>

        {isOpen && (
          <div className=" w-full mt-2 p-2 rounded-md flex flex-col justify-center items-center">
            {availableThemes.map(t => (
              <button
                key={t}
                onClick={() => handleChangeTheme(t)}
                className={`w-[85%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-1 p-3 cursor-pointer ${
                  theme === t ? 'bg-purple-200' : ''
                }`}
              >
                <div className="w-8 flex justify-center">
                  {t === 'dark' ? <FiMoon size={20} /> : t === 'system' ? <FiSettings size={20} /> : <FiSun size={20} />}
                </div>
                <span className="pl-4">{capitalize(t)}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="md:block hidden fixed top-4 z-10" ref={menuRef}>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-purple-400 hover:rounded-3xl ease-in-out duration-200'
          aria-label="Theme Toggle"
        >
          <ThemeIcon size={25} />
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
                    {t === 'dark' ? <FiMoon size={20} /> : t === 'system' ? <FiSettings size={20} /> : <FiSun size={20} />}
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