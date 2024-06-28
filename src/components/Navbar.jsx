import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BsFileEarmarkCode } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';
import IconButton from './IconButton';

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
      <IconButton
        icon={mobileNav ? IoClose : AiOutlineMenu}
        onClick={toggleMobileNav}
        className='fixed top-4 z-[99] md:hidden'
        aria-label="Toggle mobile navigation"
        aria-expanded={mobileNav}
      />
  
      {/* Mobile Navigation Menu */}
      {mobileNav && <NavMobile navItems={navItems} closeMobileNav={closeMobileNav} />}

  
      {/* Desktop Navigation Sidebar */}
      <NavDesktop navItems={navItems} />
    </nav>
  );
};

export default Navbar;