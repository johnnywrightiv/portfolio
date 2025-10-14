'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';

export default function Page() {
	return (
		<div className="relative">
			<Hero />
			<About />
			<FeaturedProjects />

			{/* =================== */}
			{/* Optional Components */}
			{/* =================== */}
			{/* <TrustedBy /> */}
			{/* <Services /> */}
			{/* <HowIWork /> */}
			{/* <FeaturedWork /> */}
			{/* <CareerJourney /> */}
			{/* <Testimonials /> */}
			{/* <TechnicalSkills /> */}
			{/* <ClientTestimonials /> */}
			{/* <FAQ /> */}
		</div>
	);
}
