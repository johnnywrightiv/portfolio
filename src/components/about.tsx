/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useTheme } from 'next-themes';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef, SetStateAction } from 'react';
import Image from 'next/image';

export default function About() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [imageSrc, setImageSrc] = useState('/headshot.jpeg');
	const [imageOpacity, setImageOpacity] = useState(1);
	const aboutRef = useRef(null);

	// Handle mounting state
	useEffect(() => {
		setMounted(true);
	}, []);

	// Intersection Observer to reveal content when it comes into view
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (aboutRef.current) {
			observer.observe(aboutRef.current);
		}

		return () => {
			if (aboutRef.current) {
				observer.unobserve(aboutRef.current);
			}
		};
	}, []);

	const handleMouseEnter = (newImageSrc: SetStateAction<string>) => {
		setImageOpacity(0.3);
		setTimeout(() => {
			setImageSrc(newImageSrc);
			setImageOpacity(1);
		}, 200);
	};

	const handleMouseLeave = () => {
		setImageOpacity(0.3);
		setTimeout(() => {
			setImageSrc('/headshot.jpeg');
			setImageOpacity(1);
		}, 200);
	};

	return (
		<section
			ref={aboutRef}
			id="about"
			className="flex min-h-screen w-full items-center overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10"
		>
			<div className="container mx-auto max-w-6xl px-6 py-24">
				<div className="mb-12">
					<h1
						className={cn(
							'text-4xl font-bold tracking-tight transition-all duration-700 md:text-5xl lg:text-6xl',
							mounted && theme === 'light'
								? 'text-secondary'
								: 'text-foreground',
							!isVisible
								? 'translate-y-10 opacity-0'
								: 'translate-y-0 opacity-100',
							'ease-in-out'
						)}
					>
						<span className="fancy-word">About</span> Me
					</h1>
				</div>

				<div className="grid gap-12 md:grid-cols-2">
					{/* Image Section */}
					<div
						className={cn(
							'relative h-[600px] transition-transform duration-700 ease-in-out',
							!isVisible
								? '-translate-x-full opacity-0'
								: 'translate-x-0 opacity-100',
							'transform transition-all duration-700 ease-in-out'
						)}
					>
						<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-background/50 shadow-lg">
							<Image
								src={imageSrc}
								alt="Profile"
								className="h-full w-full rounded-3xl object-cover transition-opacity duration-500 ease-in-out"
								style={{ opacity: imageOpacity }}
							/>
						</div>
					</div>

					{/* About Text Section */}
					<div
						className={cn(
							'flex flex-col justify-between transition-all duration-700',
							!isVisible
								? 'translate-x-full opacity-0'
								: 'translate-x-0 opacity-100',
							'ease-in-out'
						)}
					>
						<div className="rounded-3xl bg-gradient-to-br from-muted/50 to-muted/10 p-8">
							<h2 className="mb-6 text-2xl font-semibold">A little about me</h2>
							<p className="mb-4 text-lg leading-relaxed text-muted-foreground">
								I am a full-stack developer with a passion for creating
								intuitive applications that optimize the user experience. I
								specialize in both front-end design and back-end development.
							</p>
							<p className="text-lg leading-relaxed text-muted-foreground">
								When I&#39;m not coding, you can catch me playing{' '}
								<span
									className="cursor-pointer underline transition-all duration-300 ease-in-out"
									onMouseEnter={() => handleMouseEnter('/music-image.jpeg')}
									onMouseLeave={handleMouseLeave}
								>
									music
								</span>
								, hanging with my{' '}
								<span
									className="cursor-pointer underline transition-all duration-300 ease-in-out"
									onMouseEnter={() => handleMouseEnter('/cats-image.jpeg')}
									onMouseLeave={handleMouseLeave}
								>
									cats
								</span>
								, practicing my jumpshot, or exploring the great{' '}
								<span
									className="cursor-pointer underline transition-all duration-300 ease-in-out"
									onMouseEnter={() => handleMouseEnter('/outdoors-image.jpeg')}
									onMouseLeave={handleMouseLeave}
								>
									outdoors
								</span>
								!
							</p>
						</div>
						<Card className="border-none bg-gradient-to-br from-accent/10 to-primary/10">
							<CardContent className="p-8">
								<h2 className="mb-6 text-2xl font-semibold">Tech Stack</h2>
								<div className="flex flex-wrap gap-3">
									{[
										'React',
										'Next.js',
										'TypeScript',
										'Node.js',
										'MongoDB',
										'SQL',
										'Tailwind CSS',
										'Bootstrap',
									].map((tech) => (
										<span
											key={tech}
											className="rounded-full border border-accent/50 bg-accent/10 px-6 py-2 text-lg font-medium text-accent-foreground"
										>
											{tech}
										</span>
									))}
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
