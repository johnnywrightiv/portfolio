import React from 'react';
import TechBadge from './TechBadge';

const ProjectCard = ({ project }) => {
  const { title, image, description, technologies, liveDemoLink, githubLink } = project;
  return (
    <div className="bg-card shadow-lg border-2 border-border rounded-lg p-6 m-4 max-w-sm">
      <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
      <img src={image} alt={title} className="rounded-lg mb-4" />
      <p className="text-secondary mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-primary mb-2">Technologies Used</h4>
        <div className="flex flex-wrap">
          {technologies.map((tech) => (
            <TechBadge key={tech} text={tech} size="small" />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="text-cta hover:text-cta-active" onClick={() => alert('See more functionality to be implemented')}>See More</button>
        <div className="flex space-x-4">
          {liveDemoLink && (
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Live Demo</a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-primary/90 hover:text-secondary/90">GitHub Repo</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;