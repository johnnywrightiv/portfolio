import React from 'react'
import IconButton from './IconButton'
import { useThemeContext } from '../contexts/ThemeContext'
import useIntersectionObserver from '../utils/useIntersectionObserver'
import useNavigation from '../utils/useNavigation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

const Contact = () => {
  const navigateTo = useNavigation()
  const ref = useIntersectionObserver()
  const { dynamicColor } = useThemeContext()

  return (
    <div className="overflow-hidden">
      <footer
        id="contact"
        ref={ref}
        className={`bg-gradient-to-br from-contact-bg to-cta flex flex-col items-center justify-center pt-10 pb-6 z-20 hide animate-zoom-in rounded-t-xl border-secondary/50 border-t-2`}
      >
        <h1 className="text-4xl font-bold text-htag mb-4">Contact Me</h1>
        <div className=" w-1/2 flex-1 text-center pb-2">
          <p className='text-lg text-ptag'>johnnywrightiv@gmail.com</p>
        </div>
        <div className="flex">
          <a href="mailto:johnnywrightiv@gmail.com">
            <IconButton
              icon={IoIosMail}
              className="text-primary"
              aria-label="Email"
            />
          </a>
          <a href="https://github.com/johnnywrightiv" target="_blank">
            <IconButton
              icon={FaGithub}
              className="text-primary"
              aria-label="GitHub"
            />

          </a>
          <a href="https://linkedin.com/in/johnnywrightiv" target="_blank">
            <IconButton
              icon={FaLinkedin}
              className="text-linkedin"
              aria-label="LinkedIn"
            />
          </a>
        </div>
        <button
          onClick={() => navigateTo('main')}
          className={`text-ptag z-30 ${dynamicColor ? 'hover:text-dynamic' : 'hover:text-cta'}  pt-12 items-end`}
        >
          ↑ Back to Top
        </button>
      </footer>
    </div>
  )
}

export default Contact