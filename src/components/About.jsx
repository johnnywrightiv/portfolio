import React from 'react'
import TechBadge from './TechBadge'
import { useThemeContext } from '../contexts/ThemeContext'
import { determineTextColorClass } from '../utils/determineTextColorClass'
import useIntersectionObserver from '../utils/useIntersectionObserver'
import {
  FaSass,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaBootstrap,
  FaFigma,
} from 'react-icons/fa'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiJquery,
  SiAdobephotoshop,
} from 'react-icons/si'

const techStack = [
  { Icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  { Icon: SiCss3, name: 'CSS3', color: '#1572B6' },
  { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiTypescript, name: 'TypeScript', color: '#007ACC' },
  { Icon: FaReact, name: 'React', color: '#61DAFB' },
  { Icon: SiRedux, name: 'Redux', color: '#764ABC' },
  { Icon: SiNextdotjs, name: 'Next.js', color: '#000000', darkColor: '#FFFFFF' },
  { Icon: SiJquery, name: "jQuery", color: "#0769AD" },
  { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { Icon: FaBootstrap, name: 'Bootstrap', color: '#7952B3' },
  { Icon: FaSass, name: 'SASS', color: '#C7618C' },
  { Icon: FaPython, name: 'Python', color: '#3776AB' },
  { Icon: FaNodeJs, name: 'Node.js', color: '#5FA04E' },
  { Icon: SiExpress, name: 'Express', color: '#000000', darkColor: '#FFFFFF' },
  { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { Icon: FaGitAlt, name: 'Git', color: '#F05032' },
  // { Icon: FaFigma, name: "Figma", color: "#F24E1E" },
  // { Icon: SiAdobephotoshop, name: "Photoshop", color: "#31A8FF" }
]

const IMAGE_URL = '/headshot.jpeg'

const About = () => {
  const ref = useIntersectionObserver()
  const { setColor, dynamicColor } = useThemeContext()
  const textColorClass = determineTextColorClass(dynamicColor)

  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center p-8 transition-all duration-500 z-20"
    >
      <div
        ref={ref}
        className="max-w-4xl w-full bg-card bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl p-10 border-2 border-border transition-all duration-500 ease-in-out md:hover:shadow-3xl md:hover:scale-105 md:hover:border-primary/80 z-10 hide animate-zoom-in"
      >
        <h1 className="sm:text-5xl text-4xl font-bold text-htag mb-8 md:text-start text-center">
          Hey, I'm
          <span className={`block sm:inline ${textColorClass} font-light`}>
            {' '}
            John Wright{' '}
          </span>
          <span id="wave" className="">
            👋
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
          <img
            src={IMAGE_URL}
            alt="John Wright"
            className="w-48 h-48 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8"
          />
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-ptag mb-4">
              I am a full-stack developer passionate about improving user
              experiences. My journey in tech has provided me with real world
              experience across the development lifecycle—from managing projects
              and designing user flows to crafting sleek UIs, creative backend
              solutions and thoughtful APIs.
            </p>
            <p className="text-lg text-ptag">
              When I'm not coding, you can catch me playing or producing music,
              trying out new recipes in the kitchen, watching basketball with my
              cats, enjoying the great outdoors, or exploring the latest trends
              in tech.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-htag text-center mb-6">
          My Tech Stack
        </h2>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-x-16 sm:gap-2 lg:gap-1 justify-items-center">
          {techStack.map(({ Icon, name, color, darkColor }) => (
            <TechBadge
              key={name}
              Icon={Icon}
              name={name}
              color={color}
              darkColor={darkColor}
              onClick={() => setColor(color)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
