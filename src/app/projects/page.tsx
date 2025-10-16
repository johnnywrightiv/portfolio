'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useCallback, useEffect } from 'react';
import { Search, X, Filter } from 'lucide-react';
import projectsData from '@/data/dev-projects.json';
import React from 'react';
import ProjectModal from '@/components/ProjectModal';

// Type definitions
interface ProjectType {
	label: string;
	color: string;
}

interface ProjectLink {
	name: string;
	url: string;
}

interface Project {
	title: string;
	featured: boolean;
	projectType?: ProjectType;
	keyFeatures?: string[];
	technicalHighlights?: string[];
	image?: string;
	blurb: string;
	description?: string;
	technologies?: string[];
	links?: ProjectLink[];
}

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
			delayChildren: 0.05,
		},
	},
};

const cardVariants = {
	hidden: {
		opacity: 0,
		y: 30,
		scale: 0.95,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
} as const;

// Vibrant gradient palettes for variety
const gradientPalettes: string[][] = [
	['#ff9b26', '#ff6b6b', '#6b21ef'],
	['#34d399', '#06b6d4', '#3b82f6'],
	['#f59e0b', '#ef4444', '#8b5cf6'],
	['#10b981', '#3b82f6', '#8b5cf6'],
];

// Mouse tracking handler for radial gradient
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
	const target = e.currentTarget as HTMLDivElement;
	const rect = target.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;
	target.style.setProperty('--mouse-x', `${x}px`);
	target.style.setProperty('--mouse-y', `${y}px`);
};

const filterButtonVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.3 },
	},
	exit: {
		opacity: 0,
		scale: 0.8,
		transition: { duration: 0.2 },
	},
};

export default function AllProjects() {
	// Filter states
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
		[]
	);
	const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>(
		[]
	);
	const [showFilters, setShowFilters] = useState(false);
	const [isDialogOpen, setIsDialogOpen] = React.useState(false);
	const [currentProjectIndex, setCurrentProjectIndex] = React.useState(0);
	const [forceAnimation, setForceAnimation] = useState(false);

	// Get all projects (not just featured for filtering)
	const allProjects = projectsData;

	// Force animation on mount for mobile devices
	useEffect(() => {
		const timer = setTimeout(() => {
			setForceAnimation(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	// Extract unique technologies and project types
	const allTechnologies = useMemo(() => {
		const techs = new Set<string>();
		allProjects.forEach((project) => {
			project.technologies?.forEach((tech) => techs.add(tech));
		});
		return Array.from(techs).sort();
	}, [allProjects]);

	const allProjectTypes = useMemo(() => {
		const types = new Set<string>();
		allProjects.forEach((project) => {
			if (project.projectType?.label) {
				types.add(project.projectType.label);
			}
		});
		return Array.from(types).sort();
	}, [allProjects]);

	// Filter projects based on search term, technologies, and project types
	const filteredProjects = useMemo(() => {
		return allProjects.filter((project) => {
			// Text search across multiple fields
			const searchFields = [
				project.title,
				project.blurb,
				project.description,
				project.keyFeatures,
				...(project.technicalHighlights || []),
			]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();

			const matchesSearch =
				searchTerm === '' || searchFields.includes(searchTerm.toLowerCase());

			// Technology filter
			const matchesTechnology =
				selectedTechnologies.length === 0 ||
				selectedTechnologies.some((tech) =>
					project.technologies?.includes(tech)
				);

			// Project type filter
			const matchesProjectType =
				selectedProjectTypes.length === 0 ||
				selectedProjectTypes.includes(project.projectType?.label || '');

			return matchesSearch && matchesTechnology && matchesProjectType;
		});
	}, [allProjects, searchTerm, selectedTechnologies, selectedProjectTypes]);

	// Toggle technology filter
	const toggleTechnology = useCallback((tech: string) => {
		setSelectedTechnologies((prev) =>
			prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
		);
	}, []);

	// Toggle project type filter
	const toggleProjectType = useCallback((type: string) => {
		setSelectedProjectTypes((prev) =>
			prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
		);
	}, []);

	// Clear all filters
	const clearAllFilters = useCallback(() => {
		setSearchTerm('');
		setSelectedTechnologies([]);
		setSelectedProjectTypes([]);
	}, []);

	// Check if any filters are active
	const hasActiveFilters =
		searchTerm !== '' ||
		selectedTechnologies.length > 0 ||
		selectedProjectTypes.length > 0;

	return (
		<section
			id="featured-work"
			className="relative flex min-h-screen w-full items-center bg-gradient-to-b from-gray-900 via-black to-gray-900 py-16 pt-32"
		>
			{/* Subtle pattern overlay for visual interest */}
			<div
				className="absolute inset-0 opacity-30"
				style={{
					backgroundImage:
						'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
					backgroundSize: '20px 20px',
				}}
			/>

			<div className="container-section relative z-10">
				<motion.div
					className="mb-8 flex flex-row items-center justify-between gap-2 sm:mb-12"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={fadeIn}
				>
					<motion.h2
						className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
						variants={fadeIn}
					>
						All Projects
					</motion.h2>
					<motion.div variants={fadeIn}>
						<Link href="/">
							<Button
								size="sm"
								className="glass glass-hover sm:size-lg rounded-xl border border-white/20 px-4 py-2 font-semibold text-white hover:border-white/40 sm:px-8 sm:py-4"
							>
								Back Home
							</Button>
						</Link>
					</motion.div>
				</motion.div>
				{/* Search and Filter Controls */}
				<motion.div
					className="mb-8 space-y-4"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={fadeIn}
				>
					{/* Search Bar and Filter Toggle */}
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div className="relative max-w-md flex-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-search absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-white/80 transition-none"
								style={{ transition: 'none' }}
							>
								<circle cx="11" cy="11" r="8"></circle>
								<path d="m21 21-4.3-4.3"></path>
							</svg>
							<Input
								id="project-search"
								name="project-search"
								type="text"
								placeholder="Search projects..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="border border-white/20 bg-black/50 py-4 pl-10 pr-10 text-base text-white backdrop-blur-sm placeholder:text-white/70 focus:border-white/40 sm:py-6 sm:text-lg lg:py-8 lg:text-xl"
							/>
							{searchTerm && (
								<Button
									variant="ghost"
									size="icon"
									onClick={() => setSearchTerm('')}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 transition-colors hover:text-white"
								>
									<X className="h-4 w-4" />
								</Button>
							)}
						</div>

						<div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-2">
							<div className="flex items-center gap-2">
								<Button
									variant="outline"
									size="sm"
									onClick={() => setShowFilters(!showFilters)}
									className="glass glass-hover border border-white/20 text-white hover:border-white/40"
								>
									<Filter className="mr-2 h-4 w-4" />
									Filters
									{hasActiveFilters && (
										<Badge
											variant="default"
											className="text-md ml-4 h-6 w-6 pl-1.5"
										>
											{selectedTechnologies.length +
												selectedProjectTypes.length +
												(searchTerm ? 1 : 0)}
										</Badge>
									)}
								</Button>

								{hasActiveFilters && (
									<Button
										variant="outline"
										size="sm"
										onClick={clearAllFilters}
										className="glass glass-hover border border-white/20 text-white hover:border-white/40"
									>
										Clear All
										<X className="h-4 w-4" />
									</Button>
								)}
							</div>

							{/* Results Count */}
							<motion.div
								className="text-center text-sm text-white/75"
								variants={fadeIn}
							>
								Showing {filteredProjects.length} of {allProjects.length}{' '}
								projects
							</motion.div>
						</div>
					</div>

					{/* Filter Options */}
					<AnimatePresence>
						{showFilters && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: 'auto' }}
								exit={{ opacity: 0, height: 0 }}
								transition={{ duration: 0.3 }}
								className="overflow-hidden"
							>
								<div className="space-y-6 rounded-xl border border-white/20 bg-black/50 p-6 backdrop-blur-sm">
									{/* Project Types */}
									<div>
										<h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
											Project Types
										</h3>
										<div className="flex flex-wrap gap-2">
											<AnimatePresence>
												{allProjectTypes.map((type) => (
													<motion.button
														key={type}
														variants={filterButtonVariants}
														initial="hidden"
														animate="visible"
														exit="exit"
														onClick={() => toggleProjectType(type)}
														className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
															selectedProjectTypes.includes(type)
																? 'border border-white/30 bg-white/20 text-white shadow-md'
																: 'border border-white/20 bg-white/10 text-white hover:bg-white/20'
														}`}
													>
														{type}
													</motion.button>
												))}
											</AnimatePresence>
										</div>
									</div>

									{/* Technologies */}
									<div>
										<h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
											Technologies
										</h3>
										<div className="flex flex-wrap gap-2">
											<AnimatePresence>
												{allTechnologies.map((tech) => (
													<motion.button
														key={tech}
														variants={filterButtonVariants}
														initial="hidden"
														animate="visible"
														exit="exit"
														onClick={() => toggleTechnology(tech)}
														className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
															selectedTechnologies.includes(tech)
																? 'border border-white/30 bg-white/20 text-white shadow-md'
																: 'border border-white/20 bg-white/10 text-white hover:bg-white/20'
														}`}
													>
														{tech}
													</motion.button>
												))}
											</AnimatePresence>
										</div>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
				{/* Projects Grid */}
				<motion.div
					className="relative w-full"
					initial="hidden"
					animate={forceAnimation ? 'visible' : 'hidden'}
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
					variants={staggerContainer}
				>
					<AnimatePresence mode="wait">
						{filteredProjects.length > 0 ? (
							<motion.div
								key="projects-grid"
								className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
								variants={staggerContainer}
								initial="hidden"
								animate="visible"
								exit="hidden"
							>
								{filteredProjects.map((project, index) => (
									<motion.div
										key={`${project.title}-${index}`}
										variants={cardVariants}
										layout
										className="group relative flex h-[520px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-lg backdrop-blur-sm transition-all duration-500 ease-out hover:border-white/40 hover:shadow-2xl sm:h-[580px]"
										onMouseMove={handleMouseMove}
										style={
											{
												'--grad-start':
													gradientPalettes[index % gradientPalettes.length][0],
												'--grad-mid':
													gradientPalettes[index % gradientPalettes.length][1],
												'--grad-end':
													gradientPalettes[index % gradientPalettes.length][2],
												// Resting subtle tint
												background: `linear-gradient(135deg, ${gradientPalettes[index % gradientPalettes.length][0]}14 0%, ${gradientPalettes[index % gradientPalettes.length][2]}0f 100%)`,
											} as React.CSSProperties
										}
										onClick={() => {
											setCurrentProjectIndex(index);
											setIsDialogOpen(true);
										}}
									>
										{/* Softer, mouse-tracking radial gradient (body only) */}
										<div
											className="pointer-events-none absolute bottom-0 left-0 right-0 top-48 z-10 rounded-b-2xl opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-40"
											style={{
												background:
													'radial-gradient(380px circle at var(--mouse-x) var(--mouse-y), var(--grad-start) 0%, var(--grad-mid) 35%, var(--grad-end) 60%, transparent 85%)',
											}}
										/>
										{/* Reduced glass overlay */}
										<div className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

										{/* Image container with fixed aspect ratio */}
										<div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-t-2xl bg-gray-800">
											{project.image ? (
												<Image
													src={project.image || '/placeholder.svg'}
													alt={project.title}
													fill
													className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
													sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
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
													className={`mb-3 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${project.projectType?.color || 'text-primary'} group-hover:opacity-80`}
												>
													{project.projectType?.label || 'Project'}
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
													{project.technologies?.map((tech) => (
														<span
															key={tech}
															className={`rounded-full border px-3 py-1 text-xs transition-all duration-300 ${
																selectedTechnologies.includes(tech)
																	? 'border-white/50 bg-white/20 text-white'
																	: 'border-white/20 bg-white/10 text-white group-hover:border-white/30 group-hover:bg-white/20'
															}`}
														>
															{tech}
														</span>
													))}
												</div>
											</div>
										</div>

										{/* Subtle glow effect on hover */}
										<div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-white/20 to-white/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
									</motion.div>
								))}
							</motion.div>
						) : (
							<motion.div
								key="no-results"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								className="py-16 text-center"
							>
								<div className="mb-4 text-6xl">🔍</div>
								<h3 className="mb-2 text-xl font-semibold text-white">
									No projects found
								</h3>
								<p className="mb-6 text-white/75">
									Try adjusting your search terms or filters to find what
									you&apos;re looking for.
								</p>
								<Button
									onClick={clearAllFilters}
									className="glass glass-hover border border-white/20 text-white hover:border-white/40"
								>
									Clear All Filters
								</Button>
							</motion.div>
						)}
						{/* Shared ProjectModal rendered after the grid, for the selected project */}
						<ProjectModal
							project={filteredProjects[currentProjectIndex]}
							open={isDialogOpen && filteredProjects.length > 0}
							onOpenChange={setIsDialogOpen}
							onPrev={() =>
								setCurrentProjectIndex((prev) => Math.max(0, prev - 1))
							}
							onNext={() =>
								setCurrentProjectIndex((prev) =>
									Math.min(filteredProjects.length - 1, prev + 1)
								)
							}
							disablePrev={currentProjectIndex === 0}
							disableNext={currentProjectIndex === filteredProjects.length - 1}
							projects={filteredProjects}
							currentIndex={currentProjectIndex}
						/>
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
}
