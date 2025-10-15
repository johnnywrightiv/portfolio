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
	const [iconsReady, setIconsReady] = useState(false);

	// Only show splash screen on initial load
	useEffect(() => {
		if (!isInitialLoad) {
			setIsLoading(false);
			setIconsReady(true);
		}
	}, [isInitialLoad]);

	// Add a minimum loading time to ensure smooth experience (only on initial load)
	useEffect(() => {
		if (!isInitialLoad) return;

		const minLoadTime = 2000; // 2 seconds minimum
		const startTime = Date.now();

		const checkLoadingComplete = () => {
			const elapsed = Date.now() - startTime;
			if (iconsReady && elapsed >= minLoadTime) {
				setIsLoading(false);
				setHasSplashRun(true);
			} else if (elapsed >= minLoadTime * 2) {
				// Fallback: stop loading after 4 seconds max
				setIsLoading(false);
				setHasSplashRun(true);
			}
		};

		const interval = setInterval(checkLoadingComplete, 100);
		return () => clearInterval(interval);
	}, [iconsReady, isInitialLoad, setHasSplashRun]);

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
