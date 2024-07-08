import React from 'react'
import IconButton from './IconButton'
import useIntersectionObserver from '../utils/useIntersectionObserver'

const NavDesktop = ({ navItems }) => {
  const ref = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className="md:block hidden fixed top-[25%] z-20 hide animate-slide-left"
      role="navigation"
      aria-label="Desktop navigation"
    >
      <div className="flex flex-col">
        {navItems.map((item) => (
          <IconButton
            key={item.href}
            icon={item.icon}
            text={item.text}
            onClick={() => (window.location.href = item.href)}
            aria-label={item.text}
          />
        ))}
      </div>
    </div>
  )
}

export default NavDesktop
