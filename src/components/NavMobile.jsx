import React from 'react';
import ThemeSelector from './ThemeSelector';

const NavMobile = ({ navItems, closeMobileNav }) => (
  <div 
    className='fixed w-full h-screen bg-background/80 flex flex-col justify-center items-center z-20'
    role="navigation"
    aria-label="Mobile navigation"
  >
    {navItems.map(({ href, icon: Icon, text }) => (
      <a 
        key={href} 
        href={href} 
        onClick={closeMobileNav} 
        className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-card shadow-gray-400/50 m-4 p-4 cursor-pointer'>
        <div className="w-8 flex justify-center">
          <Icon size={25} className="text-primary" />
        </div>
        <span className="pl-4 text-primary">{text}</span>
      </a>
    ))}
    <ThemeSelector isMobile={true} />
  </div>
);

export default NavMobile;
