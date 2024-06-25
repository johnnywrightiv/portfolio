import React from 'react';
import TechBadge from './TechBadge';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaBootstrap, FaPython, FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiRedux, SiJquery, SiVercel, SiNextdotjs, SiExpress, SiAdobephotoshop } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";


const About = () => {
  return (
    <div id='about' className="md:h-screen bg-orange-300 flex flex-col items-center justify-center p-8">
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

          {/* <TechBadge text="HTML5" icon={FaHtml5}" />
          <TechBadge text="CSS3" icon={FaCss3Alt}" />
          <TechBadge text="JavaScript" icon={FaJsSquare}" />
          <TechBadge text="React" icon={FaReact}" />
          <TechBadge text="Redux" icon={FaRedux}" />
          <TechBadge text="Next.js" icon={SiNextdotjs} />
          <TechBadge text="Node.js" icon={FaNodeJs} />
          <TechBadge text="Express" icon={SiExpress} />
          <TechBadge text="MongoDB" icon={SiMongodb} />
          <TechBadge text="NoSQL" icon={FaDatabase} />
          <TechBadge text="Tailwind" icon={FaCss3Alt} />
          <TechBadge text="Bootstrap" icon={FaBootstrap} />
          <TechBadge text="Python" icon={FaPython} />
          <TechBadge text="jQuery" icon={SiJquery} />
          <TechBadge text="Vercel" icon={SiVercel} />
          <TechBadge text="Figma" icon={FaFigma} />
          <TechBadge text="Photoshop" icon={SiAdobephotoshop} />
          <TechBadge text="Git & GitHub" icon={FaGitAlt} />
          <TechBadge text="VSCode" icon={VscVscodeInsiders} /> */}

          <TechBadge text="HTML5" icon={FaHtml5} color="bg-[#E34F26]" />
          <TechBadge text="CSS3" icon={FaCss3Alt} color="bg-[#1572B6]" />
          <TechBadge text="JavaScript" icon={FaJsSquare} color="bg-[#F7DF1E]" />
          <TechBadge text="React" icon={FaReact} color="bg-[#61DAFB]" />
          <TechBadge text="Redux" icon={SiRedux} color="bg-[#764ABC]" />
          <TechBadge text="Next.js" icon={SiNextdotjs} color="bg-[#000000]" />
          <TechBadge text="Node.js" icon={FaNodeJs} color="bg-[#339933]" />
          <TechBadge text="Express" icon={SiExpress} color="bg-[#000000]" />
          <TechBadge text="MongoDB" icon={SiMongodb} color="bg-[#47A248]" />
          <TechBadge text="NoSQL" icon={FaDatabase} color="bg-[#A6E22E]" />
          <TechBadge text="Tailwind" icon={FaCss3Alt} color="bg-[#38B2AC]" />
          <TechBadge text="Bootstrap" icon={FaBootstrap} color="bg-[#7952B3]" />
          <TechBadge text="Python" icon={FaPython} color="bg-[#3776AB]" />
          <TechBadge text="jQuery" icon={SiJquery} color="bg-[#0769AD]" />
          <TechBadge text="Vercel" icon={SiVercel} color="bg-[#000000]" />
          <TechBadge text="Figma" icon={FaFigma} color="bg-[#F24E1E]" />
          <TechBadge text="Photoshop" icon={SiAdobephotoshop} color="bg-[#31A8FF]" />
          <TechBadge text="Git & GitHub" icon={FaGitAlt} color="bg-[#F05032]" />
          <TechBadge text="VSCode" icon={VscVscodeInsiders} color="bg-[#007ACC]" />

        </div>
      </div>
    </div>
  );
};

export default About;