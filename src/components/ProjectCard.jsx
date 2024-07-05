import React from 'react';
import TechBubble from './TechBubble';
import { useThemeContext } from '../contexts/ThemeContext';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const ProjectCard = ({ project, onSeeMore }) => {
  const ref = useIntersectionObserver();
  const { title, image, blurb, technologies } = project;
  const { dynamicColor } = useThemeContext();

  return (
    <div ref={ref} className="project-card group bg-card shadow-lg border-2 border-border rounded-xl p-4 md:p-6 m-4 flex flex-col w-[90%] mx-auto transition-all duration-300 md:hover:shadow-2xl md:hover:scale-105 md:hover:border-primary/80 hide animate-slide-left">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-72 h-48 md:h-64 lg:h-80 md:mr-6 overflow-hidden rounded-lg mb-4 md:mb-0 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 md:group-hover:scale-110 hover:cursor-pointer"
            onClick={onSeeMore}
          />
        </div>
        <div className="flex-1 flex flex-col md:h-64 lg:h-80">
          <h3 className="text-2xl font-bold text-htag mb-2">{title}</h3>
          <p className="text-secondary mb-4">{blurb}</p>
          <h4 className="text-lg font-semibold text-htag mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-1 mb-4">
            {technologies.map((tech, index) => (
              <TechBubble key={`${tech}-${index}`} text={tech} size="small" />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-2 flex justify-end">
        <button
          className={`${dynamicColor ? 'bg-dynamic' : 'bg-cta'} text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 md:hover:${dynamicColor ? 'bg-dynamic hover:opacity-80' : 'bg-cta hover:opacity-80'} md:hover:scale-105 md:hover:shadow-md whitespace-nowrap border-2 border-border/50`}
          onClick={onSeeMore}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;