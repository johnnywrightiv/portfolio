// hero.tsx
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ScrollDownButton } from './scroll-down-button';

interface HeroProps {
	onTechIconsReady?: () => void;
}

// Loading component for the floating icons
const FloatingIconsLoading = () => (
	<div className="flex h-screen items-center justify-center">
		<div className="flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-t-4 border-solid border-primary border-t-accent"></div>
	</div>
);

// Dynamically import FloatingTechIcons with a loading component
const FloatingTechIcons = dynamic(() => import('./floating-tech-icons-og'), {
	ssr: false, // Disable SSR for the floating icons to ensure they load properly
	loading: FloatingIconsLoading,
});

export default function Hero({ onTechIconsReady }: HeroProps) {
	const [, setScrolledPastHero] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const heroSection = document.getElementById('hero');
			if (heroSection) {
				const heroTop = heroSection.offsetTop;
				const heroHeight = heroSection.offsetHeight;
				const triggerPoint = heroTop + heroHeight * 1.0; // 100% down the hero
				const scrollPosition = window.scrollY + 100; // Add some buffer
				setScrolledPastHero(scrollPosition > triggerPoint);
			}
		};
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			const navHeight = 64;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - navHeight;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
		}
	};

	return (
		<section
			id="hero"
			className="bg-gradient-hero relative flex min-h-screen flex-col justify-center overflow-hidden"
		>
			{/* Diagonal gradient overlay */}
			<div className="bg-gradient-hero-overlay absolute inset-0" />

			<div className="absolute inset-0 z-0">
				{/* Enhanced gradient orbs with subtle animations */}
				<div
					className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 blur-3xl"
					style={{ animationDuration: '8s' }}
				/>
				<div
					className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-secondary/25 to-primary/15 blur-2xl"
					style={{ animationDuration: '5s' }}
				/>
				{/* Additional smaller orbs for depth */}
				<div
					className="absolute bottom-1/3 left-1/3 h-64 w-64 animate-pulse rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl"
					style={{ animationDuration: '7s' }}
				/>
				<div
					className="absolute right-1/3 top-1/3 h-48 w-48 animate-pulse rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-xl"
					style={{ animationDuration: '6s' }}
				/>
				{/* FloatingTechIcons will be rendered here with loading state */}
				<FloatingTechIcons onReady={onTechIconsReady} />
			</div>
			<div className="relative z-10 w-full px-4 py-32 lg:px-16 xl:px-24 2xl:px-32">
				<div className="mx-auto flex max-w-[900px] flex-col items-center gap-10 lg:grid lg:max-w-[1400px] lg:grid-cols-2 lg:items-center lg:justify-evenly lg:gap-[6vw] xl:gap-[8vw]">
					{/* Image - above text on mobile, right on desktop */}
					<div className="order-1 mb-8 flex justify-center lg:order-2 lg:mb-0">
						<div className="relative w-fit">
							<div className="bg-gradient-primary absolute -inset-3 rounded-full blur" />
							<Image
								src="/avatar.jpg"
								alt="Profile"
								width={320}
								height={320}
								priority
								className="relative rounded-full border-4 border-background object-cover shadow-xl"
							/>
						</div>
					</div>

					{/* Text content */}
					<div className="order-2 flex flex-col items-center justify-center text-center lg:order-1 lg:items-start lg:pl-6 lg:text-left xl:pl-10">
						<h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
							I build digital experiences
							<br className="hidden sm:inline" /> that drive results
						</h1>
						<p className="mb-10 max-w-xl text-lg text-text-secondary sm:text-xl lg:text-2xl">
							Full-stack developer with a creative background, helping
							businesses create products that matter.
						</p>
						<div className="flex flex-col gap-5 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
							<Button
								size="lg"
								className="rounded-xl px-10 py-5 text-lg font-semibold shadow-md sm:px-8 sm:py-4 sm:text-base"
								onClick={() => scrollToSection('#featured-work')}
							>
								View Work
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="rounded-xl px-10 py-5 text-lg font-semibold shadow-md sm:px-8 sm:py-4 sm:text-base"
								onClick={() => scrollToSection('#about-contact')}
							>
								Contact Me
							</Button>
						</div>
					</div>
				</div>

				{/* Optional scroll button */}
				<div className="mt-20 flex justify-center">
					<ScrollDownButton targetId="hero" label="Scroll Down" />
				</div>
			</div>
		</section>
	);
}
