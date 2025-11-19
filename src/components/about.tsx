'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, FolderKanban } from 'lucide-react';
import {
	smoothScrollToElementWithNav,
	smoothScrollToElement,
} from '@/lib/smooth-scroll';

export default function AboutSection() {
	const [hoveredImage, setHoveredImage] = useState<string | null>(null);
	const [displayedImage, setDisplayedImage] = useState<string | null>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const getOverlayImageSrc = () => {
		switch (displayedImage) {
			case 'cats':
				return '/images/optimized/cats-image.jpeg';
			case 'music':
				return '/images/optimized/music-image.jpeg';
			case 'outdoors':
				return '/images/optimized/outdoors-image.jpeg';
			default:
				return null;
		}
	};

	const handleMouseEnter = (imageType: string) => {
		// Clear any pending timeout when entering a new trigger
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		setHoveredImage(imageType);
		setDisplayedImage(imageType);
	};

	const handleMouseLeave = () => {
		setHoveredImage(null);
		// Clear any existing timeout
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		// Delay the image change to allow opacity transition to complete
		timeoutRef.current = setTimeout(() => {
			setDisplayedImage(null);
			timeoutRef.current = null;
		}, 300); // Match the transition duration
	};

	return (
		<section
			id="about"
			className="py-section relative flex min-h-screen items-center justify-center"
		>
			<div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/95"></div>

			<div className="container-section relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-12">
						{/* Profile Image */}
						<div className="flex shrink-0 justify-center lg:justify-end">
							<div className="group relative">
								<div className="glass absolute -inset-2 rounded-full opacity-30 transition-opacity group-hover:opacity-50 sm:-inset-4"></div>
								{/* Base Image - Always visible */}
								<Image
									src="/images/optimized/profile-picture2.jpg"
									alt="John Wright Developer Headshot"
									width={400}
									height={400}
									loading="lazy"
									className="relative rounded-full border-4 border-white/10 transition-all duration-300 hover:border-white/20"
								/>
								{/* Overlay Image - Only visible on hover */}
								<div
									className={`absolute inset-0 overflow-hidden rounded-full border-4 border-white/10 transition-opacity duration-300 ease-in-out ${
										hoveredImage
											? 'opacity-100'
											: 'pointer-events-none opacity-0'
									}`}
								>
									<Image
										src={
											getOverlayImageSrc() ||
											'/images/optimized/profile-picture2.jpg'
										}
										alt={`John Wright ${displayedImage || 'profile'}`}
										width={400}
										height={400}
										loading="lazy"
										className="h-full w-full object-cover"
									/>
								</div>
							</div>
						</div>

						{/* About Content */}
						<div className="min-w-0 space-y-6 text-center lg:max-w-2xl lg:flex-1 lg:text-left">
							<h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">
								About Me
							</h2>

							<div className="space-y-4 leading-relaxed text-white/75">
								<p>
									Hi! I&apos;m{' '}
									<strong className="font-semibold text-white">
										John Wright
									</strong>
									, a Full-Stack Developer focused on process improvement and
									user experience. I specialize in building scalable
									applications for web and mobile using React, Next.js, Tailwind
									CSS, and TypeScript. I also build and maintain WordPress
									websites, and design AI integrations and workflow automations
									for businesses and teams.
								</p>
								<p>
									My backgrounds in product and production management provide me
									with a unique perspective on the full development lifecycle.
									I&apos;ve led teams, managed complex projects, and bridged
									communication between stakeholders and technical teams -
									experiences that help me deliver solutions that align with
									strategic goals while maintaining high standards for code
									quality and user experience.
								</p>
								<p className="mt-6 text-white/75">
									When I&apos;m not coding, you can typically find me practicing
									my jumpshot, hanging out with my{' '}
									<span
										className="cursor-pointer font-semibold text-blue-300 transition-colors duration-200 hover:text-blue-200"
										onMouseEnter={() => handleMouseEnter('cats')}
										onMouseLeave={handleMouseLeave}
									>
										cats
									</span>
									, creating{' '}
									<span
										className="cursor-pointer font-semibold text-purple-300 transition-colors duration-200 hover:text-purple-200"
										onMouseEnter={() => handleMouseEnter('music')}
										onMouseLeave={handleMouseLeave}
									>
										music
									</span>
									, or exploring the great{' '}
									<span
										className="cursor-pointer font-semibold text-green-300 transition-colors duration-200 hover:text-green-200"
										onMouseEnter={() => handleMouseEnter('outdoors')}
										onMouseLeave={handleMouseLeave}
									>
										outdoors
									</span>
									.
								</p>
							</div>

							<div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row lg:justify-start">
								<Button
									asChild
									className="glass glass-hover group w-full border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 sm:w-auto"
								>
									<a
										href="#contact"
										aria-label="Scroll to contact section"
										onClick={(e) => {
											e.preventDefault();
											smoothScrollToElementWithNav('contact');
										}}
									>
										<MessageCircle className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
										Let&apos;s Connect
									</a>
								</Button>
								<Button
									asChild
									className="glass glass-hover group w-full border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 sm:w-auto"
								>
									<a
										href="#projects"
										aria-label="Scroll to projects section"
										onClick={(e) => {
											e.preventDefault();
											smoothScrollToElement('featured-projects');
										}}
									>
										<FolderKanban className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
										Explore Projects
									</a>
								</Button>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
