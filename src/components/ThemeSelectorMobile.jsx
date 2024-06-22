import React, { useState, useCallback } from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import { FiSun, FiMoon, FiSettings } from 'react-icons/fi';
import { capitalize } from '../utils/capitalize';
import useBlur from '../utils/useBlur';

const ThemeSelectorMobile = () => {
  const { theme, changeTheme, availableThemes } = useThemeContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState(theme);

  const handleChangeTheme = (newTheme) => {
    setSelected(newTheme);
    changeTheme(newTheme);
    setIsMenuOpen(false); // Close the menu after selecting a theme
  };

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const  menuRef = useBlur(closeMenu);

  return (
    <div className="fixed top-4 z-10">
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-purple-400 hover:rounded-3xl ease-in-out duration-200"
          aria-label="Mobile theme toggle"
        >
          {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          <span className="pl-4">Theme</span>
        </button>

        {isMenuOpen && (
          <div className="absolute top-14 left-0 right-0 mt-2 p-2 rounded-md z-20">
            <div className="flex flex-col items-center">
              {availableThemes.map((t) => (
                <label
                  key={t}
                  className={`w-full flex  items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-1 p-3 cursor-pointer hover:scale-110 ease-in duration-200 ${
                    selected === t ? 'bg-purple-200' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="theme"
                    value={t}
                    checked={selected === t}
                    onChange={() => handleChangeTheme(t)}
                    className="hidden"
                  />
                  <div className="w-8 flex justify-center">
                  {t === 'dark' ? <FiMoon size={20} /> : t === 'system' ? <FiSettings /> : <FiSun size={20} />}
                  </div>
                  <span className="pl-4">{capitalize(t)}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSelectorMobile;