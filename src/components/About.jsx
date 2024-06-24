import React from 'react';
import TechBadge from './TechBadge';
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact, FaNodeJs, FaDatabase, FaCode, FaServer, FaLink, FaPython, FaNode, FaFigma, FaGitAlt } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaBootstrap, FaPython, FaFigma, FaGitAlt, } from 'react-icons/fa';
import { SiMongodb, SiJquery, SiVercel, SiNextdotjs, SiExpress, SiAdobephotoshop } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";




const About = () => {
  return (
    <div id='about' className="sm:h-screen bg-orange-300 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-htag mb-6 text-center">
        Hi, I'm <span className="block md:hidden p-2"></span> John Wright
      </h1>
      <img 
        src="/real-me.jpg"
        alt="John Wright" 
        className="w-48 h-48 rounded-full shadow-lg mb-6"
      />
      <div className="max-w-2xl text-center">
        <p className="text-lg text-ptag mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quo incidunt magni quae ipsa, minus repellat quasi deleniti, in aspernatur perferendis, ducimus fuga. Alias expedita eum voluptas autem modi. Quam dignissimos voluptatibus quidem adipisci veniam sit. Totam fugit, voluptate quidem minima debitis rem ut beatae.</p>
        <h2 className="text-3xl font-bold text-htag mb-4">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center">
          <TechBadge text="HTML5" icon={FaHtml5} color="bg-orange-400" />
          <TechBadge text="CSS3" icon={FaCss3Alt} color="bg-blue-400" />
          <TechBadge text="JavaScript" icon={FaJsSquare} color="bg-yellow-400" />
          <TechBadge text="React" icon={FaReact} color="bg-cyan-400" />
          <TechBadge text="Next.js" icon={SiNextdotjs} />
          <TechBadge text="Node.js" icon={FaNodeJs} />
          <TechBadge text="Express" icon={SiExpress} />
          <TechBadge text="MongoDB" icon={SiMongodb} />
          <TechBadge text="NoSQL" icon={FaDatabase} />
          <TechBadge text="Tailwind" icon={FaCss3Alt} />
          <TechBadge text="Bootstrap" icon={FaBootstrap} />
          <TechBadge text="Python" icon={FaPython} />
          <TechBadge text="jQuery" icon={SiJquery} />
          <TechBadge text="Vercel" icon={SiVercel}/>
          <TechBadge text="Figma" icon={FaFigma} />
          <TechBadge text="Photoshop" icon={SiAdobephotoshop}/>
          <TechBadge text="Git & GitHub" icon={FaGitAlt} />
          <TechBadge text="VSCode" icon={VscVscodeInsiders} />
        </div>
      </div>
    </div>
  );
};

export default About;