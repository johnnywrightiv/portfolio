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
          className='group relative flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-purple-400 hover:rounded-3xl ease-in-out duration-200'
          aria-label={item.text}
        >
          <item.icon size={25} />

          {/* Tooltip */}
          <span className="ml-3 absolute left-full whitespace-nowrap hidden group-hover:block transition-all duration-200">
            {item.text}
          </span>
        </a>
      ))}
    </div>
  </div>
);

export default NavDesktop;