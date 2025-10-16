'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import SplashScreen from '@/components/SplashScreen';
import { useLoading } from '@/contexts/LoadingContext';

export default function Page() {
	const { isInitialLoad, setHasSplashRun } = useLoading();
	const [isLoading, setIsLoading] = useState(isInitialLoad);
	const [, setIconsReady] = useState(false);

	// Only show splash screen on initial load
	useEffect(() => {
		if (!isInitialLoad) {
			setIsLoading(false);
			setIconsReady(true);
		}
	}, [isInitialLoad]);

	// Pre-load icons in the background while splash screen runs
	useEffect(() => {
		if (!isInitialLoad) return;

		// Just set icons as ready, don't control the splash timing
		const timer = setTimeout(() => {
			setIconsReady(true);
		}, 100);

		return () => clearTimeout(timer);
	}, [isInitialLoad]);

	const handleIconsReady = () => {
		setIconsReady(true);
	};

	const handleSplashComplete = () => {
		setIsLoading(false);
		setHasSplashRun(true);
	};

	return (
		<>
			<SplashScreen isLoading={isLoading} onComplete={handleSplashComplete} />
			<div
				className={`relative transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
			>
				<Hero onIconsReady={handleIconsReady} />
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
		</>
	);
}
