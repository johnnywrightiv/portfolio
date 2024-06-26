import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaBootstrap, FaPython, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiRedux, SiNextdotjs, SiExpress, SiTailwindcss, SiJquery, SiAdobephotoshop } from "react-icons/si";


const TechIcon = ({ Icon, name, color, darkColor }) => {
  const { theme, systemTheme } = useThemeContext();
  const isDarkMode = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  return (
    <div className="flex flex-col items-center m-2 transition-transform duration-300 ease-in-out hover:scale-110">
      <Icon className={`text-3xl mb-1 badge-shadow ${isDarkMode && darkColor ? darkColor : color}`} />
      <span className={`text-xs badge-shadow ${isDarkMode && darkColor ? darkColor : color}`}>{name}</span>
    </div>
  );
};

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
              I'm a passionate full-stack developer with a keen eye for improving UX. My journey in tech so far has afforded me firsthand experience across the development lifecycle - from project management and design, to crafting sleek UIs, to architecting APIs and robust backend systems.
            </p>
            <p className="text-lg text-ptag">
              When I'm not coding, you'll often find me playing or producing music, trying out new recipies in the kitchen, enjoying the great outdoors, and exploring the latest tech trends.
            </p>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          My Tech Stack
        </h2>
        
        <div className="flex flex-wrap justify-center text-cta">
          <TechIcon Icon={FaHtml5} name="HTML5" color="text-[#E34F26]" />
          <TechIcon Icon={FaCss3Alt} name="CSS3" color="text-[#1572B6]" />
          <TechIcon Icon={FaJsSquare} name="JavaScript" color="text-[#F7DF1E]" />
          <TechIcon Icon={FaReact} name="React" color="text-[#61DAFB]" />
          <TechIcon Icon={SiRedux} name="Redux" color="text-[#764ABC]" />
          <TechIcon Icon={SiNextdotjs} name="Next.js" color="text-[#000000]" darkColor="text-white" />
          <TechIcon Icon={SiTailwindcss} name="Tailwind" color="text-[#06B6D4]" />
          <TechIcon Icon={FaBootstrap} name="Bootstrap" color="text-[#7952B3]" />
          <TechIcon Icon={FaNodeJs} name="Node.js" color="text-[#5FA04E]" />
          <TechIcon Icon={SiExpress} name="Express" color="text-[#000000]" darkColor="text-white" />
          <TechIcon Icon={SiMongodb} name="MongoDB" color="text-[#47A248]" />
          <TechIcon Icon={FaPython} name="Python" color="text-[#3776AB]" />
          <TechIcon Icon={FaGitAlt} name="Git" color="text-[#F05032]" />
          {/* <TechIcon Icon={SiJquery} name="jQuery" color="text-[#0769AD]" /> */}
          {/* <TechIcon Icon={FaFigma} name="Figma" color="text-[#F24E1E]" /> */}
          {/* <TechIcon Icon={SiAdobephotoshop} name="Photoshop" color="text-[#31A8FF]" /> */}

        </div>
      </div>
    </div>
  );
};

export default About;