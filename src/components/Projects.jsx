import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <div id='projects' className='bg-cta flex flex-col items-center justify-center p-8'>
      <h1 className="text-5xl font-bold text-htag mb-12 text-center">My Projects</h1>
      <div className="flex flex-wrap justify-center">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;