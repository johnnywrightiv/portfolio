import React, { useState, useEffect } from 'react'
import { useThemeContext } from '../contexts/ThemeContext'
import useIntersectionObserver from '../utils/useIntersectionObserver'
import useNavigation from '../utils/useNavigation'
import { CiCircleChevDown } from 'react-icons/ci'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  const navigateTo = useNavigation()
  const ref = useIntersectionObserver()
  const { dynamicColor } = useThemeContext()
  const [showButton, setShowButton] = useState(false)
  const [showH1, setShowH1] = useState(false)

  useEffect(() => {
    const h1Timer = setTimeout(() => {
      setShowH1(true)
    }, 1000)

    const buttonTimer = setTimeout(() => {
      setShowButton(true)
    }, 5000)

    return () => {
      clearTimeout(h1Timer)
      clearTimeout(buttonTimer)
    }
  }, [])

  const handleButtonClick = () => {
    setShowButton(false)
    navigateTo('about')
  }

  return (
    <div
      id="main"
      className="h-screen flex flex-col items-center justify-center p-8 z-10"
    >
      {showH1 && (
        <h1
          ref={ref}
          className="text-5xl font-bold text-htag mb-12 text-center hide animate-fade absolute"
        >
          <TypeAnimation
            style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
            sequence={[
              `Hello World, \n \n`,
              750, 
              `Hello World, \n \n Welcome to my Portfolio`
            ]}
            wrapper="span"
            speed={40}
            repeat="no"
          />
        </h1>
      )}

      {showButton && (
        <>
          <button
            onClick={handleButtonClick}
            className={`text-primary z-30 rounded-full ${dynamicColor ? 'hover:text-dynamic' : 'hover:text-cta'} absolute bottom-12 animate-fade animate-pulse`}
          >
            <CiCircleChevDown className="text-5xl text-center" />
          </button>
          <p className="text-center text-primary absolute bottom-4 animate-fade animate-pulse">
            psst... it's down here
          </p>
        </>
      )}
    </div>
  )
}

export default Hero
