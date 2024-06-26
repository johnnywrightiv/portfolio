import React, { useState, useCallback } from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import { capitalize } from '../utils/capitalize';
import { FiSun, FiMoon, FiSettings } from "react-icons/fi";
import useBlur from '../utils/useBlur';

const ThemeSelector = ({ isMobile = false }) => {
  const { theme, changeTheme, systemTheme, availableThemes, dynamicColor } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const menuRef = useBlur(closeMenu);

  const effectiveTheme = theme === 'system' ? systemTheme : theme;
  const ThemeIcon = effectiveTheme === 'dark' ? FiSun : FiMoon;

  const handleChangeTheme = (newTheme) => {
    changeTheme(newTheme);
    setIsOpen(false);
  };

  const hoverColor = dynamicColor ? 'hover:shadow-dynamic hover:text-dynamic transition duration-100' : 'hover:shadow-cta hover:text-cta transition duration-100';

  return (
    <div className={isMobile ? "fixed right-1 top-4 z-10" : "md:block hidden fixed top-4 z-10"} ref={menuRef}>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`custom-button group ${hoverColor}`}
          aria-label="Theme Toggle"
        >
          <ThemeIcon size={25} className="custom-icon" />
        </button>
        
        {isOpen && (
          <div className={`absolute -top-5 mt-2 p-2 rounded-md ${isMobile ? '-left-36' : 'left-16'}`}>
            <div className="flex flex-col custom-icon">
              {availableThemes.map(t => (
                <button
                  key={t}
                  onClick={() => handleChangeTheme(t)}
                  className={`custom-button group ${
                    theme === t ? 'bg-secondary/80' : ''
                  } ${hoverColor}`}
                >
                  <span>
                    {t === 'dark' ? <FiMoon size={20} className="custom-icon" /> : t === 'system' ? <FiSettings size={20} className="custom-icon" /> : <FiSun size={20} className="custom-icon" />}
                  </span>
                  <span className="pl-2 custom-icon">{capitalize(t)}</span>
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