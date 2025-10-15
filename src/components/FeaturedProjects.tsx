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
import React, { useState } from 'react';
import projectsData from '@/data/dev-projects.json';
import ProjectModal from './ProjectModal';

// TypeScript interfaces
interface ProjectType {
	label: string;
	color: string;
}

interface Project {
	title: string;
	featured: boolean;
	projectType: ProjectType;
	keyFeatures?: string[];
	technicalHighlights?: string[];
	image?: string;
	blurb: string;
	description?: string;
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

export default function FeaturedProjects() {
	// Get featured projects with proper typing
	const featuredProjects: Project[] = projectsData.filter(
		(p: Project) => p.featured
	);

	// State for modal navigation
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Color mapping utility
	const getProjectTypeColor = (colorClass: string) => {
		const colorMap: { [key: string]: string } = {
			'text-blue-500': '#3b82f6',
			'text-green-500': '#10b981',
			'text-orange-500': '#f97316',
			'text-purple-500': '#8b5cf6',
			'text-red-500': '#ef4444',
			'text-yellow-500': '#eab308',
			'text-primary': 'var(--primary)',
			'text-secondary': 'var(--secondary)',
		};
		return colorMap[colorClass] || '#ffffff';
	};

	// Navigation functions
	const goToPrevious = () => {
		setCurrentProjectIndex((prev) =>
			prev === 0 ? featuredProjects.length - 1 : prev - 1
		);
	};

	const goToNext = () => {
		setCurrentProjectIndex((prev) =>
			prev === featuredProjects.length - 1 ? 0 : prev + 1
		);
	};

	return (
		<section id="featured-projects" className="py-section relative">
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
					<div className="mb-8 flex flex-col items-center justify-between gap-6 md:mb-12 md:flex-row">
						<motion.h2
							className="text-4xl font-bold text-white md:text-5xl"
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
						className="relative w-full"
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
							<CarouselContent className="-ml-4">
								{featuredProjects.map((project, index) => (
									<CarouselItem
										key={project.title}
										className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
									>
										<motion.div variants={cardVariants}>
											<div
												className="group relative flex h-[500px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/20 bg-black/50 shadow-lg backdrop-blur-sm transition-all duration-500 ease-out hover:border-white/40 hover:shadow-2xl"
												onClick={() => {
													setCurrentProjectIndex(index);
													setIsModalOpen(true);
												}}
											>
												{/* Glass effect overlay */}
												<div className="absolute inset-0 z-10 bg-gradient-to-br from-white/5 to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

												{/* Image container with fixed aspect ratio */}
												<div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-t-2xl bg-gray-800">
													{project.image ? (
														<Image
															src={project.image}
															alt={project.title}
															fill
															className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
															sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, (max-width: 1600px) 25vw, 20vw"
														/>
													) : (
														<div className="flex h-full w-full items-center justify-center bg-gray-800 text-lg text-white/60 transition-colors duration-500 group-hover:bg-gray-700">
															Project Visual
														</div>
													)}
													<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
												</div>

												{/* Content container with consistent spacing */}
												<div className="relative z-20 flex flex-1 flex-col justify-between p-6">
													<div className="flex-1">
														<div
															className="mb-3 text-sm font-bold uppercase tracking-wider transition-colors duration-300 group-hover:opacity-80"
															style={{
																color: getProjectTypeColor(
																	project.projectType.color
																),
															}}
														>
															{project.projectType.label}
														</div>
														<h3 className="mb-4 line-clamp-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-white/90">
															{project.title}
														</h3>
														<p className="mb-6 line-clamp-3 text-white/75 transition-colors duration-300 group-hover:text-white/90">
															{project.blurb}
														</p>
													</div>

													{/* Technology tags with consistent height */}
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

												{/* Subtle glow effect on hover */}
												<div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-white/20 to-white/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
											</div>
										</motion.div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="absolute left-0 top-1/2 z-20 hidden -translate-x-4 -translate-y-1/2 rounded-full border border-white/20 bg-black/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/95 hover:shadow-xl md:flex" />
							<CarouselNext className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 translate-x-4 rounded-full border border-white/20 bg-black/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/95 hover:shadow-xl md:flex" />
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
					disablePrev={currentProjectIndex === 0}
					disableNext={currentProjectIndex === featuredProjects.length - 1}
					projects={featuredProjects}
					currentIndex={currentProjectIndex}
				/>
			</div>
		</section>
	);
}
