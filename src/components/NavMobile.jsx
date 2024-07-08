import React, { useEffect } from 'react';
import ThemeSelector from './ThemeSelector';
import useBlur from '../utils/useBlur';

const NavMobile = ({ navItems, closeMobileNav }) => {
  const blurRef = useBlur(closeMobileNav);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      ref={blurRef}
      className='fixed w-full h-screen bg-primary/40 flex flex-col justify-center items-center z-50'
      role="navigation"
      aria-label="Mobile navigation"
    >
      {navItems.map(({ href, icon: Icon, text }) => (
        <a 
          key={href} 
          href={href} 
          onClick={closeMobileNav} 
          className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-card shadow-gray-400/50 m-3 p-4 cursor-pointer'>
          <div className="w-8 flex justify-center">
            <Icon size={25} className="text-primary" />
          </div>
          <span className="pl-4 text-primary">{text}</span>
        </a>
      ))}
      <ThemeSelector isMobile={true} />
    </div>
  );
};

export default NavMobile;