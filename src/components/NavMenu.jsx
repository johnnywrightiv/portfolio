import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';
import { BsFileEarmarkCode } from "react-icons/bs";
import { AiOutlineHome, AiOutlineMenu, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';

const MEDIUM_BREAKPOINT = 768;

const NavMenu = () => {
  const [mobileNav, setMobileNav] = useState(false)

  const navItems = [
    { href: "#main", icon: AiOutlineHome, text: "Home" },
    { href: "#about", icon: AiOutlineUser, text: "About" },
    { href: "#projects", icon: BsFileEarmarkCode, text: "Projects" },
    { href: "#contact", icon: AiOutlineMail, text: "Contact" },
  ];

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const closeMobileNav = () => {
    setMobileNav(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MEDIUM_BREAKPOINT) {
        setMobileNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <nav>
      {/* Mobile Hamburger Icon */}
      <button 
        onClick={toggleMobileNav} 
        className='absolute top-4 right-4 z-[99] md:hidden'
        aria-label="Toggle mobile navigation"
        aria-expanded={mobileNav}
      >
        <AiOutlineMenu />
      </button>
  
      {/* Mobile Navigation Menu */}
      {mobileNav && (
        <div 
          className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <NavItem key={item.href} {...item} closeMenu={closeMobileNav}/>
          ))}
        </div>
      )}
  
      {/* Sidebar Navigation */}
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
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
              aria-label={item.text}
            >
              <item.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;