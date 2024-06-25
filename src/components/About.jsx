// import React from 'react';
// import TechBadge from './TechBadge';
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaBootstrap, FaPython, FaFigma, FaGitAlt } from 'react-icons/fa';
// import { SiMongodb, SiRedux, SiJquery, SiVercel, SiNextdotjs, SiExpress, SiAdobephotoshop } from "react-icons/si";
// import { VscVscodeInsiders } from "react-icons/vsc";

// const About = () => {
//   return (
//     <div id='about' className="min-h-screen bg-orange-300 flex flex-col items-center justify-center p-8">
//       <h1 className="text-5xl font-bold text-htag mb-6 text-center">
//         Hi, I'm <span className="block md:hidden p-2"></span> John Wright
//       </h1>
//       <img 
//         src="/real-me.jpg"
//         alt="John Wright" 
//         className="w-48 h-48 rounded-full shadow-lg mb-6"
//       />
//       <div className="max-w-2xl text-center">
//         <p className="text-lg text-ptag mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quo incidunt magni quae ipsa, minus repellat quasi deleniti, in aspernatur perferendis, ducimus fuga. Alias expedita eum voluptas autem modi. Quam dignissimos voluptatibus quidem adipisci veniam sit. Totam fugit, voluptate quidem minima debitis rem ut beatae.</p>
//         <h2 className="text-3xl font-bold text-htag mb-4">My Tech Stack</h2>
//         <div className="flex flex-wrap justify-center">
//           <TechBadge text="HTML5" icon={FaHtml5} color="bg-[#E34F26]" />
//           <TechBadge text="CSS3" icon={FaCss3Alt} color="bg-[#1572B6]" />
//           <TechBadge text="JavaScript" icon={FaJsSquare} color="bg-[#F7DF1E]" />
//           <TechBadge text="React" icon={FaReact} color="bg-[#61DAFB]" />
//           <TechBadge text="Redux" icon={SiRedux} color="bg-[#764ABC]" />
//           <TechBadge text="Next.js" icon={SiNextdotjs} color="bg-[#000000]" />
//           <TechBadge text="Node.js" icon={FaNodeJs} color="bg-[#5FA04E]" />
//           <TechBadge text="Express" icon={SiExpress} color="bg-[#000000]" />
//           <TechBadge text="MongoDB" icon={SiMongodb} color="bg-[#47A248]" />
//           <TechBadge text="NoSQL" icon={FaDatabase} color="bg-[#003B57]" />
//           <TechBadge text="Git & GitHub" icon={FaGitAlt} color="bg-[#F05032]" /> {/* #181717 black */}
//           <TechBadge text="Tailwind" icon={FaCss3Alt} color="bg-[#06B6D4]" />
//           <TechBadge text="Bootstrap" icon={FaBootstrap} color="bg-[#7952B3]" />
//           <TechBadge text="Figma" icon={FaFigma} color="bg-[#F24E1E]" />
//           <TechBadge text="Photoshop" icon={SiAdobephotoshop} color="bg-[#31A8FF]" />
//           <TechBadge text="VSCode" icon={VscVscodeInsiders} color="bg-[#007ACC]" />
//           <TechBadge text="Python" icon={FaPython} color="bg-[#3776AB]" />
//           <TechBadge text="jQuery" icon={SiJquery} color="bg-[#0769AD]" />
//           <TechBadge text="Vercel" icon={SiVercel} color="bg-[#000000]" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;








// import React from 'react';
// import TechBadge from './TechBadge';
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaBootstrap, FaPython, FaFigma, FaGitAlt } from 'react-icons/fa';
// import { SiMongodb, SiRedux, SiJquery, SiVercel, SiNextdotjs, SiExpress, SiAdobephotoshop } from "react-icons/si";
// import { VscVscodeInsiders } from "react-icons/vsc";

// const About = () => {
//   return (
//     <div id='about' className="min-h-screen bg-orange-300 flex flex-col items-center justify-center p-8">
//       <div className="max-w-3xl w-full bg-card rounded-lg shadow-lg p-8">
//         <h1 className="text-5xl font-bold text-htag mb-6">
//           Hey, thanks for stopping by.
//         </h1>
//         <div className="flex items-center mb-6">
//           <img 
//             src="/real-me.jpg"
//             alt="John Wright" 
//             className="w-24 h-24 rounded-full shadow-lg mr-6"
//           />
//           <h2 className="text-3xl font-bold text-htag">
//             I'm John Wright
//           </h2>
//         </div>
//         <div className="text-ptag mb-6">
//           <p className="mb-4">I'm a developer with a background in web development and design. Over the years, I've spent my time working on various projects including web apps, responsive design, and full-stack development.</p>
//           <p className="mb-4">I'm obsessed with keeping up with new technologies, constantly getting my hands dirty on set, and love a good coding challenge.</p>
//           <p>Outside of work, I'm an avid problem solver, tech enthusiast, and always eager to learn new things in the world of programming.</p>
//         </div>
//         <h3 className="text-2xl font-bold text-htag mb-4">My Tech Stack</h3>
//         <div className="flex flex-wrap">
//           <TechBadge text="HTML5" icon={FaHtml5} color="bg-[#E34F26]" />
//           <TechBadge text="CSS3" icon={FaCss3Alt} color="bg-[#1572B6]" />
//           <TechBadge text="JavaScript" icon={FaJsSquare} color="bg-[#F7DF1E]" />
//           <TechBadge text="React" icon={FaReact} color="bg-[#61DAFB]" />
//           <TechBadge text="Redux" icon={SiRedux} color="bg-[#764ABC]" />
//           <TechBadge text="Next.js" icon={SiNextdotjs} color="bg-[#000000]" />
//           {/* Add more TechBadge components as needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;











import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiRedux, SiNextdotjs, SiExpress } from "react-icons/si";

const TechIcon = ({ Icon, name }) => (
  <div className="flex flex-col items-center m-2 transition-transform duration-300 ease-in-out hover:scale-110">
    <Icon className="text-3xl mb-1" />
    <span className="text-xs">{name}</span>
  </div>
);

const About = () => {
  return (
    <div id='about' className="min-h-screen bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-card bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl p-12 transition-all duration-500 ease-in-out hover:shadow-3xl">
        <h1 className="text-5xl font-bold text-primary mb-8">
          Hey, I'm <span className='text-cta font-light'>John Wright</span> 👋
        </h1>
        
        <div className="flex flex-col md:flex-row items-start mb-12">
          <img 
            src="/real-me.jpg"
            alt="John Wright" 
            className="w-48 h-48 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8 transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <div className="flex-1">
            <p className="text-lg text-ptag mb-4">
              I'm a passionate full-stack developer with a keen eye for design. My journey in tech has led me through various realms of web development, from crafting sleek UIs to architecting robust backend systems.
            </p>
            <p className="text-lg text-ptag">
              When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, or mentoring aspiring developers.
            </p>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          My Tech Stack
        </h2>
        
        <div className="flex flex-wrap justify-center text-cta">
          <TechIcon Icon={FaHtml5} name="HTML5" />
          <TechIcon Icon={FaCss3Alt} name="CSS3" />
          <TechIcon Icon={FaJsSquare} name="JavaScript" />
          <TechIcon Icon={FaReact} name="React" />
          <TechIcon Icon={SiRedux} name="Redux" />
          <TechIcon Icon={SiNextdotjs} name="Next.js" />
          <TechIcon Icon={FaNodeJs} name="Node.js" />
          <TechIcon Icon={SiExpress} name="Express" />
          <TechIcon Icon={SiMongodb} name="MongoDB" />
          <TechIcon Icon={FaGitAlt} name="Git" />
        </div>
      </div>
    </div>
  );
};

export default About;