import React from 'react';
import TechBadge from './TechBadge';

const ProjectCard = ({ project, onSeeMore }) => {
  const { title, image, description, technologies } = project;
  
  return (
    <div className="bg-card shadow-lg border-2 border-border rounded-lg p-6 m-4 w-80">
      <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <img src={image} alt={title} className="rounded-lg object-cover w-full h-full" />
      </div>
      <p className="text-secondary mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-primary mb-2">Technologies Used</h4>
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech) => (
            <TechBadge key={tech} text={tech} size="small" />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button 
          className="text-cta hover:text-cta-active"
          onClick={onSeeMore}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;