import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import projectsData from '../data/projects.json';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const Projects = () => {
  const ref = useIntersectionObserver();
  
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
    <div id='projects' className='flex flex-col items-center justify-center p-10 z-20'>
      <h1 ref={ref} className="sm:text-5xl text-4xl font-bold text-htag mb-6 text-center justify-center bg-card rounded-xl px-6 py-4 border-2 border-border/80 z-10 hide md:animate-slide-up show">My Projects</h1>
      <div className="flex flex-wrap justify-center z-10">
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