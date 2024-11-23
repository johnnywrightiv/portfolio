'use client';

import About from '@/components/about';
import Contact from '@/components/contact';
import Hero from '@/components/hero';
import Projects from '@/components/projects';

const page = () => {
	return (
		<div>
			<Hero />
			<About />
			<Projects />
			<Contact />
		</div>
	);
};

export default page;
