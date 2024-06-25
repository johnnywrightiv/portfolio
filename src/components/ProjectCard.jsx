// ORIGINAL //
// import React from 'react';
// import TechBadge from './TechBadge';

// const ProjectCard = ({ project, onSeeMore }) => {
//   const { title, image, blurb, technologies } = project;
  
//   return (
//     <div className="group bg-card shadow-lg border-2 border-border rounded-lg p-6 m-4 w-80 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-primary">
//       <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
//       <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
//         <img 
//           src={image} 
//           alt={title} 
//           onClick={onSeeMore} 
//           className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" 
//         />
//       </div>
//       <p className="text-secondary mb-4">{blurb}</p>
//       <div className="mb-4">
//         <h4 className="text-lg font-semibold text-primary mb-2">Technologies Used</h4>
//         <div className="flex flex-wrap gap-1">
//           {technologies.map((tech) => (
//             <TechBadge key={tech} text={tech} size="small" />
//           ))}
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <button 
//           className="bg-cta text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-cta-active hover:shadow-md"
//           onClick={onSeeMore}
//         >
//           See More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;







// NEW VERTICAL //
// import React from 'react';
// import TechBadge from './TechBadge';

// const ProjectCard = ({ project, onSeeMore }) => {
//   const { title, image, blurb, technologies } = project;
  
//   return (
//     <div className="group bg-card shadow-lg border-2 border-border rounded-lg p-6 m-4 w-80 h-[600px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-primary flex flex-col">
//       <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
//       <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
//         <img 
//           src={image} 
//           alt={title} 
//           onClick={onSeeMore} 
//           className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" 
//         />
//       </div>
//       <p className="text-secondary mb-4 flex-grow line-clamp-4">{blurb}</p>
//       <div className="mt-auto">
//         <div className="mb-4">
//           <h4 className="text-lg font-semibold text-primary mb-2">Technologies Used</h4>
//           <div className="flex flex-wrap gap-1">
//             {technologies.map((tech) => (
//               <TechBadge key={tech} text={tech} size="small" />
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <button 
//             className="bg-cta text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-cta-active hover:shadow-md"
//             onClick={onSeeMore}
//           >
//             See More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;





// NEW HORIZONTAL //
import React from 'react';
import TechBadge from './TechBadge';

const ProjectCard = ({ project, onSeeMore }) => {
  const { title, image, blurb, technologies } = project;

  return (
    <div className="group bg-card shadow-lg border-2 border-border rounded-lg p-6 m-4 flex items-center w-[90%] mx-auto transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-primary">
      <div className="w-60 h-40 mr-6 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          onClick={onSeeMore} 
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-secondary mb-4 line-clamp-4">{blurb}</p>
        <div className="flex justify-between items-end mb-4">
          <div>
            <h4 className="text-lg font-semibold text-primary mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech) => (
                <TechBadge key={tech} text={tech} size="small" />
              ))}
            </div>
          </div>
          <button 
            className="flex-shrink-0 bg-cta text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-cta-active hover:shadow-md"
            onClick={onSeeMore}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;