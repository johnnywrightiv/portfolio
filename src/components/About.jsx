import React from 'react';
import TechBadge from './TechBadge';

const About = () => {
  return (
    <div id='about' className="md:h-screen bg-orange-300 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">
        Hi, I'm <span className="block md:hidden p-2"></span> John Wright
      </h1>
      <img 
        src="/real-me.jpg"
        alt="John Wright" 
        className="w-48 h-48 rounded-full shadow-lg mb-6"
      />
      <div className="max-w-2xl text-center">
        <p className="text-lg text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quo incidunt magni quae ipsa, minus repellat quasi deleniti, in aspernatur perferendis, ducimus fuga. Alias expedita eum voluptas autem modi. Quam dignissimos voluptatibus quidem adipisci veniam sit. Totam fugit, voluptate quidem minima debitis rem ut beatae.</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center">
          <TechBadge text="HTML5" />
          <TechBadge text="CSS3" />
          <TechBadge text="JavaScript" />
          <TechBadge text="React" />
          <TechBadge text="Next.js" />
          <TechBadge text="Node.js" />
          <TechBadge text="Express" />
          <TechBadge text="MongoDB" />
          <TechBadge text="Tailwind" />
          <TechBadge text="Bootstrap" />
          <TechBadge text="Python" />
          <TechBadge text="jQuery" />
        </div>
      </div>
    </div>
  );
};

export default About;