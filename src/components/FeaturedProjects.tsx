import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import React, { useState, useCallback } from 'react';
import projectsData from '@/data/dev-projects.json';
import ProjectModal from './ProjectModal';
import {
	getProjectOriginClass,
	getProjectTypeClass,
	type ProjectSection,
} from '@/lib/project-types';

// TypeScript interfaces
interface Project {
	title: string;
	featured: boolean;
	origin: string;
	type: string;
	highlightSections?: ProjectSection[];
	image?: string;
	description: string;
	technologies: string[];
	links?: Array<{ name: string; url: string }>;
	liveUrl?: string;
	githubUrl?: string;
}

// Animation variants
const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut' as const },
	},
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 20, scale: 0.98 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.5, ease: 'easeOut' },
	},
} as const;

// Vibrant gradient palettes for variety
const gradientPalettes: string[][] = [
	['#ff9b26', '#ff6b6b', '#6b21ef'], // orange → red → purple
	['#34d399', '#06b6d4', '#3b82f6'], // green → teal → blue
	['#f59e0b', '#ef4444', '#8b5cf6'], // amber → red → violet
	['#10b981', '#3b82f6', '#8b5cf6'], // emerald → blue → indigo
];

export default function FeaturedProjects() {
	// Get featured projects with proper typing
	const featuredProjects: Project[] = projectsData.filter(
		(p: Project) => p.featured
	);

	// State for modal navigation
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Navigation functions wrapped in useCallback for stable references
	const goToPrevious = useCallback(() => {
		setCurrentProjectIndex((prev) =>
			prev === 0 ? featuredProjects.length - 1 : prev - 1
		);
	}, [featuredProjects.length]);

	const goToNext = useCallback(() => {
		setCurrentProjectIndex((prev) =>
			prev === featuredProjects.length - 1 ? 0 : prev + 1
		);
	}, [featuredProjects.length]);

	// Mouse-tracking gradient handler for cards with RAF throttling
	const handleMouseMove = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			const target = e.currentTarget as HTMLDivElement;
			const rect = target.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			// Use RAF to throttle updates for better performance
			requestAnimationFrame(() => {
				target.style.setProperty('--mouse-x', `${x}px`);
				target.style.setProperty('--mouse-y', `${y}px`);
			});
		},
		[]
	);

	// Handle keyboard navigation for project cards
	const handleCardKeyDown = useCallback(
		(e: React.KeyboardEvent, index: number) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				setCurrentProjectIndex(index);
				setIsModalOpen(true);
			}
		},
		[]
	);

	return (
		<section
			id="featured-projects"
			className="py-section relative flex min-h-screen items-center justify-center overflow-x-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-black to-gray-900"></div>

			{/* Enhanced pattern overlay for smoother transition */}
			<div
				className="absolute inset-0 opacity-25"
				style={{
					backgroundImage:
						'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)',
					backgroundSize: '20px 20px',
				}}
			/>

			<div className="container-section relative z-10">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={fadeIn}
				>
					{/* Desktop: Header and Button side by side, Mobile: Header only */}
					<div className="mb-6 flex flex-col items-center justify-between gap-4 px-4 md:mb-12 md:flex-row min-[980px]:px-0">
						<motion.h2
							className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
							variants={fadeIn}
						>
							Featured Work
						</motion.h2>
						{/* Desktop button - hidden on mobile */}
						<motion.div variants={fadeIn} className="hidden md:block">
							<Button
								asChild
								className="glass glass-hover group border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10"
							>
								<Link href="/projects">View All Projects</Link>
							</Button>
						</motion.div>
					</div>

					{/* Carousel Container */}
					<motion.div
						className="relative w-full px-4 min-[980px]:px-0"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={staggerContainer}
					>
						<Carousel
							opts={{
								align: 'start',
								loop: true,
							}}
							className="w-full"
						>
							<CarouselContent className="-ml-3 md:-ml-4">
								{featuredProjects.map((project, index) => {
									const palette =
										gradientPalettes[index % gradientPalettes.length];
									return (
										<CarouselItem
											key={project.title}
											className="basis-full pl-3 md:pl-4 min-[900px]:basis-1/2 min-[1011px]:basis-1/3 xl:basis-1/4"
										>
											<motion.div variants={cardVariants}>
												<div
													role="button"
													tabIndex={0}
													aria-label={`View details for ${project.title}`}
													className="group relative mx-auto flex h-[520px] max-w-[380px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-lg backdrop-blur-sm transition-all duration-500 ease-out hover:border-white/40 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black sm:h-[580px] min-[900px]:mx-0 min-[900px]:max-w-none"
													onMouseMove={handleMouseMove}
													style={
														{
															// Provide gradient colors as CSS variables for overlay usage
															'--grad-start': palette[0],
															'--grad-mid': palette[1],
															'--grad-end': palette[2],
															// Resting subtle tint using low alpha
															background: `linear-gradient(135deg, ${palette[0]}14 0%, ${palette[2]}0f 100%)`,
														} as React.CSSProperties
													}
													onClick={() => {
														setCurrentProjectIndex(index);
														setIsModalOpen(true);
													}}
													onKeyDown={(e) => handleCardKeyDown(e, index)}
												>
													{/* Dynamic multi-color radial gradient hover overlay (body only) */}
													<div
														className="pointer-events-none absolute bottom-0 left-0 right-0 top-48 z-10 rounded-b-2xl opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-40"
														style={{
															background:
																'radial-gradient(360px circle at var(--mouse-x) var(--mouse-y), var(--grad-start) 0%, var(--grad-mid) 35%, var(--grad-end) 60%, transparent 85%)',
														}}
													/>
													{/* Glass effect overlay (reduced) */}
													<div className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

													{/* Image container with fixed aspect ratio */}
													<div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-t-2xl bg-gray-800">
														{project.image ? (
															<Image
																src={project.image}
																alt={project.title}
																fill
																loading="lazy"
																className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
																sizes="(max-width: 990px) 100vw, (max-width: 1200px) 50vw, (max-width: 1600px) 33vw, 25vw"
															/>
														) : (
															<div className="flex h-full w-full items-center justify-center bg-gray-800 text-lg text-white/60 transition-colors duration-500 group-hover:bg-gray-700">
																Project Visual
															</div>
														)}
														<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
													</div>

													{/* Content container with consistent spacing */}
													<div className="relative z-20 flex flex-1 flex-col justify-between p-5 min-[900px]:p-6">
														<div className="flex-1">
															{/* Title first for better hierarchy */}
															<h3 className="mb-3 line-clamp-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-white/90 min-[900px]:mb-4">
																{project.title}
															</h3>
															{/* Type and Origin tags side-by-side with wrapping */}
															<div className="mb-4 flex flex-wrap items-center gap-2">
																{project.type && (
																	<span
																		className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${getProjectTypeClass(project.type)} group-hover:opacity-80`}
																	>
																		{project.type}
																	</span>
																)}
																{project.type && project.origin && (
																	<span className="text-white/30">•</span>
																)}
																{project.origin && (
																	<div
																		className={`text-sm font-normal uppercase tracking-wider transition-colors duration-300 ${getProjectOriginClass()} group-hover:opacity-80`}
																	>
																		{project.origin}
																	</div>
																)}
															</div>
															<p className="mb-2 line-clamp-5 text-sm leading-relaxed text-white/75 transition-colors duration-300 group-hover:text-white/90 min-[900px]:text-base">
																{project.description}
															</p>
														</div>

														{/* Technology tags with consistent height - uniformly at bottom */}
														<div className="mt-auto">
															<div className="flex min-h-[32px] flex-wrap items-start gap-2">
																{project.technologies.map((tech) => (
																	<span
																		key={tech}
																		className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20"
																	>
																		{tech}
																	</span>
																))}
															</div>
														</div>
													</div>
												</div>
											</motion.div>
										</CarouselItem>
									);
								})}
							</CarouselContent>
							<CarouselPrevious className="absolute left-[calc(50%-180px-20px)] top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/95 hover:shadow-xl min-[900px]:left-0 min-[900px]:-translate-x-5" />
							<CarouselNext className="absolute right-[calc(50%-180px-20px)] top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/95 hover:shadow-xl min-[900px]:right-0 min-[900px]:translate-x-5" />
						</Carousel>
					</motion.div>

					{/* Mobile button - shown only on mobile */}
					<div className="flex justify-center md:hidden">
						<Button
							asChild
							className="glass glass-hover group mt-8 border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10"
						>
							<Link href="/projects">View All Projects</Link>
						</Button>
					</div>
				</motion.div>

				{/* Shared ProjectModal */}
				<ProjectModal
					project={featuredProjects[currentProjectIndex]}
					open={isModalOpen}
					onOpenChange={setIsModalOpen}
					onPrev={goToPrevious}
					onNext={goToNext}
					projects={featuredProjects}
					currentIndex={currentProjectIndex}
				/>
			</div>
		</section>
	);
}
