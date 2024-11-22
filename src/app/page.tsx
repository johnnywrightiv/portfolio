'use client';

import About from '@/components/about';
import Contact from '@/components/contact';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Projects from '@/components/projects';

const page = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Contact />
		</div>
	);
};

export default page;
