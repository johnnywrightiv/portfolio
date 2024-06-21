import React from 'react';
import NavMobileItem from './NavMobileItem';

const NavMobile = ({ navItems, closeMobileNav }) => (
  <div 
    className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'
    role="navigation"
    aria-label="Mobile navigation"
  >
    {navItems.map((item) => (
      <NavMobileItem key={item.href} {...item} closeMenu={closeMobileNav}/>
    ))}
  </div>
);

export default NavMobile;