import React, { useEffect, useRef } from 'react';
import TechBadge from './TechBadge';
import useBlur from '../utils/useBlur';
import IconButton from './IconButton';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { BsGlobeAmericas } from 'react-icons/bs';

const ProjectModal = ({ project, onClose, onPrev, onNext }) => {
  const { title, image, blurb, description, technologies, liveDemoLink, githubLink } = project;
  const modalRef = useBlur(onClose);
  const contentRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
      touchEndY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const horizontalDistance = touchStartX - touchEndX;
      const verticalDistance = touchStartY - touchEndY;

      if (Math.abs(horizontalDistance) > Math.abs(verticalDistance) && Math.abs(horizontalDistance) > 75) {
        if (horizontalDistance > 0) {
          onNext();
        } else {
          onPrev();
        }
      }
    };

    const content = contentRef.current;
    if (content) {
      content.addEventListener('touchstart', handleTouchStart);
      content.addEventListener('touchmove', handleTouchMove);
      content.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (content) {
        content.removeEventListener('touchstart', handleTouchStart);
        content.removeEventListener('touchmove', handleTouchMove);
        content.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [onNext, onPrev]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div ref={modalRef} className="relative w-full max-w-4xl">
        <IconButton
          icon={IoClose}
          onClick={onClose}
          className="absolute lg:-top-20 lg:-right-20 -top-16 mt-1 -right-5 text-primary hover:text-cta-active"
        />
        <IconButton
          icon={IoChevronBack}
          onClick={onPrev}
          className="absolute top-1/2 lg:-left-20 -left-5 text-primary hover:text-cta-active"
        />
        <IconButton
          icon={IoChevronForward}
          onClick={onNext}
          className="absolute top-1/2 lg:-right-20 -right-5 text-primary hover:text-cta-active"
        />
        <div ref={contentRef} className="bg-card rounded-lg p-6 max-h-[80vh] overflow-y-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-secondary text-xl mb-6">{blurb}</p>
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <img src={image} alt={title} className="rounded-lg object-cover w-auto h-auto" />
          </div>
          <p className="text-secondary text-xl mb-6">{description}</p>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-primary mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <TechBadge key={tech} text={tech} size="medium" />
              ))}
            </div>
          </div>
          <div className="flex justify-start space-x-4">
            {liveDemoLink && (
              <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="bg-cta text-white px-4 py-2 rounded hover:bg-cta-active flex items-center">
                <BsGlobeAmericas className="mr-2" />
                Website
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-background px-4 py-2 rounded hover:bg-primary/80 flex items-center">
                <FaGithub className="mr-2" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;