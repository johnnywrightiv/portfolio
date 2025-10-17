'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function AboutSection() {
	const [hoveredImage, setHoveredImage] = useState<string | null>(null);
	const [displayedImage, setDisplayedImage] = useState<string | null>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const getOverlayImageSrc = () => {
		switch (displayedImage) {
			case 'cats':
				return '/images/cats-image.jpeg';
			case 'music':
				return '/images/music-image.jpeg';
			case 'outdoors':
				return '/images/outdoors-image.jpeg';
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
					<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
						{/* Profile Image */}
						<div className="flex justify-center lg:justify-start">
							<div className="group relative">
								<div className="glass absolute -inset-2 rounded-full opacity-30 transition-opacity group-hover:opacity-50 sm:-inset-4"></div>
								{/* Base Image - Always visible */}
								<Image
									src="/images/profile-picture2.jpg"
									alt="John Wright Developer Headshot"
									width={400}
									height={400}
									priority
									className="relative rounded-full border-4 border-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
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
										src={getOverlayImageSrc() || '/images/profile-picture2.jpg'}
										alt={`John Wright ${displayedImage || 'profile'}`}
										width={400}
										height={400}
										className="h-full w-full object-cover"
									/>
								</div>
							</div>
						</div>

						{/* About Content */}
						<div className="space-y-6 text-center lg:text-left">
							<h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">
								About Me
							</h2>

							<div className="space-y-4 leading-relaxed text-white/75">
								<p>
									Hi! I&apos;m{' '}
									<strong className="font-semibold text-white">
										John Wright
									</strong>
									, a Full-Stack Developer with a focus on process improvement
									and user experience. I specialize in building scalable and
									efficient applications for web and mobile using React,
									Next.js, Tailwind CSS, TypeScript, and AI integrations.
								</p>
								<p>
									With a passion for creating intuitive user experiences and
									optimizing workflows, I bring a unique blend of technical
									expertise and creative problem-solving to every project. My
									goal is to build applications that not only meet requirements
									but exceed expectations.
								</p>
								<p className="mt-6 text-white/75">
									When I&apos;m not coding, you can find me hanging out with my{' '}
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

							<div className="flex justify-center lg:justify-start">
								<Button
									asChild
									className="glass glass-hover group mt-8 border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10"
								>
									<a
										href="#contact"
										aria-label="Scroll to contact section"
										onClick={(e) => {
											e.preventDefault();
											const target = document.getElementById('contact');
											if (target) {
												const navbar = document.querySelector('nav');
												const navbarHeight = navbar ? navbar.offsetHeight : 80;
												const targetPosition =
													target.offsetTop - navbarHeight - 20;

												window.scrollTo({
													top: targetPosition,
													behavior: 'smooth',
												});
											}
										}}
									>
										<MessageCircle className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
										Let&apos;s Connect
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
