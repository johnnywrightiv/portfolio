import React from 'react';
import IconButton from './IconButton';

const NavDesktop = ({ navItems }) => (
  <div 
    className='md:block hidden fixed top-[25%] z-10'
    role="navigation"
    aria-label="Desktop navigation"
  >
    <div className="flex flex-col">
      {navItems.map((item) => (
        <IconButton
          key={item.href}
          icon={item.icon}
          text={item.text}
          onClick={() => window.location.href = item.href}
          aria-label={item.text}
        />
      ))}
    </div>
  </div>
);

export default NavDesktop;