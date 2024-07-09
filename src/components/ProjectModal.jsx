import React, { useEffect, useRef, useCallback } from 'react'
import TechBubble from './TechBubble'
import useBlur from '../utils/useBlur'
import IconButton from './IconButton'
import { useThemeContext } from '../contexts/ThemeContext'
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { FaGithub } from 'react-icons/fa'
import { BsGlobeAmericas } from 'react-icons/bs'

const ProjectModal = ({ project, onClose, onPrev, onNext }) => {
  const { title, image, blurb, description, technologies, links } = project
  const { dynamicColor } = useThemeContext()
  const modalRef = useBlur(onClose)
  const contentRef = useRef(null)

  // Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'ArrowLeft') {
        onPrev()
      } else if (event.key === 'ArrowRight') {
        onNext()
      }
    },
    [onPrev, onNext]
  )

  // Add and remove keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  // Handle touch swipe navigation
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0
    let touchStartY = 0
    let touchEndY = 0

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX
      touchEndY = e.touches[0].clientY
    }

    const handleTouchEnd = () => {
      const horizontalDistance = touchStartX - touchEndX
      const verticalDistance = touchStartY - touchEndY

      // Check if swipe was primarily horizontal and significant
      if (
        Math.abs(horizontalDistance) > Math.abs(verticalDistance) &&
        Math.abs(horizontalDistance) > 75
      ) {
        if (horizontalDistance > 0) {
          onNext()
        } else {
          onPrev()
        }
      }
    }

    const content = contentRef.current
    if (content) {
      content.addEventListener('touchstart', handleTouchStart)
      content.addEventListener('touchmove', handleTouchMove)
      content.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      if (content) {
        content.removeEventListener('touchstart', handleTouchStart)
        content.removeEventListener('touchmove', handleTouchMove)
        content.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [onNext, onPrev])

  // Render link buttons (GitHub or website)
  const renderLinkButton = (link) => {
    const isGithub =
      link.name.toLowerCase().includes('github') || link.url.includes('github')
    const Icon = isGithub ? FaGithub : BsGlobeAmericas
    const buttonClass = isGithub
      ? 'bg-primary text-background hover:bg-primary/80'
      : `${dynamicColor ? 'bg-dynamic hover:bg-dynamic' : 'bg-cta hover:bg-cta'} text-white hover:opacity-80`

    return (
      <a
        key={link.url}
        href={link.url}
        target="_blank"
        className={`${buttonClass} px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center`}
      >
        <Icon className="mr-2" />
        {link.name}
      </a>
    )
  }

  // Render the modal
  return (
    <div className="fixed inset-0 bg-primary/40 flex items-center justify-center p-4 z-50">
      <div ref={modalRef} className="relative w-full max-w-4xl">
        {/* Navigation buttons for desktop */}
        <IconButton
          icon={IoClose}
          onClick={onClose}
          className="hidden lg:block absolute lg:-top-20 lg:-right-20 -top-16 mt-1 -right-5 text-primary hover:text-dynamic"
        />
        <IconButton
          icon={IoChevronBack}
          onClick={onPrev}
          className="hidden lg:block absolute top-1/2 -left-20 text-primary opacity-80 hover:text-dynamic"
        />
        <IconButton
          icon={IoChevronForward}
          onClick={onNext}
          className="hidden lg:block absolute top-1/2 -right-20 text-primary opacity-80 hover:text-dynamic"
        />

        {/* Navigation buttons for mobile */}
        <IoClose
          onClick={onClose}
          className="block lg:hidden absolute -top-8 -right-4 text-4xl p-2 bg-card/80 rounded-full text-primary hover:text-dynamic cursor-pointer"
        />
        <IoChevronBack
          onClick={onPrev}
          className="block lg:hidden absolute top-1/2 -left-4 text-4xl p-2 bg-card/80 rounded-full text-primary hover:text-dynamic cursor-pointer"
        />
        <IoChevronForward
          onClick={onNext}
          className="block lg:hidden absolute top-1/2 -right-4 text-4xl p-2 bg-card/80 rounded-full text-primary hover:text-dynamic cursor-pointer"
        />

        {/* Modal content */}
        <div
          ref={contentRef}
          className="bg-card rounded-lg p-6 max-h-[80vh] overflow-y-auto"
        >
          <h2 className="text-3xl font-bold text-htag mb-4">{title}</h2>
          <p className="text-secondary text-xl mb-6">{blurb}</p>
          <div className="w-full h-64 overflow-hidden rounded-lg mb-6">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300"
            />
          </div>
          <p className="text-secondary text-xl mb-6">{description}</p>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-htag mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <TechBubble
                  key={`${tech}-${index}`}
                  text={tech}
                  size="medium"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {links.map(renderLinkButton)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal