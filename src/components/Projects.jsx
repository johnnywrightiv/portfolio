import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const handleSeeMore = (index) => {
    setSelectedProjectIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedProjectIndex(null);
  };

  const handlePrevProject = () => {
    setSelectedProjectIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : projectsData.length - 1
    );
  };

  const handleNextProject = () => {
    setSelectedProjectIndex((prevIndex) => 
      prevIndex < projectsData.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div id='projects' className='flex flex-col items-center justify-center p-10'>
      <h1 className="text-5xl font-bold text-htag mb-12 text-center">My Projects</h1>
      <div className="flex flex-wrap justify-center">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            onSeeMore={() => handleSeeMore(index)}
          />
        ))}
      </div>
      {selectedProjectIndex !== null && (
        <ProjectModal 
          project={projectsData[selectedProjectIndex]} 
          onClose={handleCloseModal}
          onPrev={handlePrevProject}
          onNext={handleNextProject}
        />
      )}
    </div>
  );
};

export default Projects;