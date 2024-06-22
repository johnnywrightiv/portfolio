import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BsFileEarmarkCode } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

const MEDIUM_BREAKPOINT = 768;

const Navbar = () => {
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
        className='absolute top-4 right-4 z-[99] md:hidden flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-purple-400 hover:rounded-3xl ease-in-out duration-200'
        aria-label="Toggle mobile navigation"
        aria-expanded={mobileNav}
      >
        {mobileNav ? <IoClose size={20}/> : <AiOutlineMenu />}
      </button>
  
      {/* Mobile Navigation Menu */}
      {mobileNav && <NavMobile navItems={navItems} closeMobileNav={closeMobileNav} />}

  
      {/* Desktop Navigation Sidebar */}
      <NavDesktop navItems={navItems} />
    </nav>
  );
};

export default Navbar;