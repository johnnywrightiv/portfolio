import React from 'react';

const NavDesktop = ({ navItems }) => (
  <div 
    className='md:block hidden fixed top-[25%] z-10'
    role="navigation"
    aria-label="Desktop navigation"
  >
    <div className="flex flex-col">
      {navItems.map((item) => (
        <a 
          key={item.href} 
          href={item.href} 
          className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-md hover:shadow-purple-400'
          aria-label={item.text}
        >
          <item.icon size={20} />
        </a>
      ))}
    </div>
  </div>
);

export default NavDesktop;