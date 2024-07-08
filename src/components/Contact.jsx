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

  const handleEmailClick = () => {
    window.location.href = 'mailto:johnnywrightiv@gmail.com'
  }

  const handleGithubClick = () => {
    window.open('https://github.com/johnnywrightiv', '_blank')
  }

  const handleLinkedinClick = () => {
    window.open('https://linkedin.com/in/johnnywrightiv', '_blank')
  }

  return (
    <div className="overflow-hidden">
      <footer
        id="contact"
        ref={ref}
        className={`bg-gradient-to-br from-contact-bg to-cta flex flex-col items-center justify-center pt-10 pb-6 z-20 hide animate-zoom-in rounded-t-xl border-secondary/50 border-t-2`}
      >
        <h1 className="text-4xl font-bold text-htag mb-4">Contact Me</h1>
        <div className=" w-1/2 flex-1 text-center pb-2">
          <a
            onClick={handleEmailClick}
            className={`text-lg text-ptag ${dynamicColor ? 'hover:text-dynamic' : 'hover:text-cta'}`}
          >
            johnnywrightiv@gmail.com
          </a>
        </div>
        <div className="flex">
          <IconButton
            icon={IoIosMail}
            onClick={handleEmailClick}
            className="text-primary"
            aria-label="Email"
          />
          <IconButton
            icon={FaGithub}
            onClick={handleGithubClick}
            className="text-primary"
            aria-label="GitHub"
          />
          <IconButton
            icon={FaLinkedin}
            onClick={handleLinkedinClick}
            className="text-linkedin"
            aria-label="LinkedIn"
          />
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