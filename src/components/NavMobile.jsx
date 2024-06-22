import React from 'react';
import ThemeSelector from './ThemeSelector';

const NavMobile = ({ navItems, closeMobileNav }) => (
  <div 
    className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'
    role="navigation"
    aria-label="Mobile navigation"
  >
    {navItems.map(({ href, icon: Icon, text }) => (
      <a 
        key={href} 
        href={href} 
        onClick={closeMobileNav} 
        className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer'>
        <div className="w-8 flex justify-center">
          <Icon size={25} />
        </div>
        <span className="pl-4">{text}</span>
      </a>
    ))}
    <ThemeSelector isMobile={true} />
  </div>
);

export default NavMobile;
