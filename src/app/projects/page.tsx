'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useCallback } from 'react';
import { Search, X, Filter } from 'lucide-react';
import projectsData from '@/data/dev-projects.json';
import { Dialog } from '@/components/ui/dialog';
import { DialogContent } from '@/components/ui/dialog';
import {
	Github,
	ArrowLeftCircle,
	ArrowRightCircle,
	ExternalLink,
} from 'lucide-react';
import React from 'react';

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
			staggerChildren: 0.15,
			delayChildren: 0.1,
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

// ProjectModal logic (copied and adapted from src/components/projects.tsx)
function ProjectModal({
	project,
	open,
	onOpenChange,
	onPrev,
	onNext,
	disablePrev,
	disableNext,
}) {
	// Keyboard navigation inside modal
	React.useEffect(() => {
		if (!open) return;
		const handleKeyDown = (e) => {
			if (e.key === 'ArrowLeft') onPrev();
			if (e.key === 'ArrowRight') onNext();
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [open, onPrev, onNext]);

	if (!project) return null;
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-primary/20 bg-surface">
				<div className="space-y-6">
					{/* Header */}
					<div className="space-y-4">
						<div
							className={`text-sm font-bold uppercase tracking-wider ${project.projectType?.color || 'text-primary'}`}
						>
							{project.projectType?.label || 'Project'}
						</div>
						<h2 className="font-heading text-3xl font-semibold text-text-primary">
							{project.title}
						</h2>
						<p className="text-lg text-text-secondary">{project.blurb}</p>
					</div>
					{/* Image */}
					{project.image && (
						<div className="relative h-64 w-full overflow-hidden rounded-xl bg-muted">
							<Image
								src={project.image}
								alt={project.title}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 800px"
							/>
						</div>
					)}
					{/* Description */}
					{project.description && (
						<div className="space-y-2">
							<h3 className="text-xl font-semibold text-text-primary">
								Description
							</h3>
							<p className="text-text-secondary">{project.description}</p>
						</div>
					)}
					{/* Key Features */}
					{project.keyFeatures && project.keyFeatures.length > 0 && (
						<div className="space-y-2">
							<h3 className="text-xl font-semibold text-text-primary">
								Key Features
							</h3>
							<ul className="list-inside list-disc space-y-1 text-text-secondary">
								{project.keyFeatures.map((feature, idx) => (
									<li key={idx}>{feature}</li>
								))}
							</ul>
						</div>
					)}
					{/* Technical Highlights */}
					{project.technicalHighlights &&
						project.technicalHighlights.length > 0 && (
							<div className="space-y-2">
								<h3 className="text-xl font-semibold text-text-primary">
									Technical Highlights
								</h3>
								<ul className="list-inside list-disc space-y-1 text-text-secondary">
									{project.technicalHighlights.map((highlight, idx) => (
										<li key={idx}>{highlight}</li>
									))}
								</ul>
							</div>
						)}
					{/* Technologies */}
					<div className="space-y-2">
						<h3 className="text-xl font-semibold text-text-primary">
							Technologies
						</h3>
						<div className="flex flex-wrap gap-2">
							{project.technologies?.map((tech) => (
								<span
									key={tech}
									className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-sm text-text-primary"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
					{/* Links */}
					{project.links && project.links.length > 0 && (
						<div className="flex flex-wrap gap-4 pt-4">
							{project.links.map((link) => (
								<Button
									key={link.name}
									variant={
										link.name.includes('GitHub') || link.name.includes('Code')
											? 'outline'
											: 'default'
									}
									asChild
									className="flex items-center gap-2"
								>
									<a href={link.url} target="_blank" rel="noopener noreferrer">
										{link.name.includes('GitHub') ||
										link.name.includes('Code') ? (
											<Github className="h-4 w-4" />
										) : (
											<ExternalLink className="h-4 w-4" />
										)}
										{link.name}
									</a>
								</Button>
							))}
						</div>
					)}
					{/* Navigation */}
					<div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between">
						<Button
							variant="ghost"
							size="icon"
							className="rounded-full bg-background/50 p-2"
							onClick={onPrev}
							disabled={disablePrev}
						>
							<ArrowLeftCircle className="h-8 w-8" />
						</Button>
						<Button
							variant="ghost"
							size="icon"
							className="rounded-full bg-background/50 p-2"
							onClick={onNext}
							disabled={disableNext}
						>
							<ArrowRightCircle className="h-8 w-8" />
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}

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

	// Get all projects (not just featured for filtering)
	const allProjects = projectsData;

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
			className="bg-gradient-featured-work relative flex min-h-screen w-full items-center py-16 pt-32"
		>
			{/* Enhanced accent gradient overlay */}
			<div className="bg-accent-gradient-2 absolute inset-0" />

			{/* Subtle pattern overlay for visual interest */}
			<div className="bg-pattern-dots absolute inset-0 opacity-30" />

			{/* Additional floating gradient orbs for depth */}
			<div
				className="absolute left-1/4 top-1/4 h-64 w-64 animate-pulse rounded-full bg-gradient-to-br from-primary/10 to-secondary/5 blur-2xl"
				style={{ animationDuration: '12s' }}
			/>
			<div
				className="from-secondary/8 to-primary/4 absolute bottom-1/4 right-1/3 h-48 w-48 animate-pulse rounded-full bg-gradient-to-br blur-xl"
				style={{ animationDuration: '8s' }}
			/>

			<div className="container relative z-10 mx-auto px-2 lg:px-4 xl:px-6 2xl:px-8">
				<motion.div
					className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={fadeIn}
				>
					<motion.h2
						className="font-heading text-4xl font-semibold text-text-primary md:text-5xl"
						variants={fadeIn}
					>
						All Projects
					</motion.h2>
					<motion.div variants={fadeIn}>
						<Link href="/">
							<Button
								size="lg"
								variant="outline"
								className="rounded-xl bg-transparent px-8 py-4 font-semibold text-text-primary shadow-md"
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
							<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
							<Input
								type="text"
								placeholder="Search projects by title, description, or highlights..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="border-primary/20 bg-surface/80 py-8 pl-10 pr-10 text-xl text-text-primary placeholder:text-text-secondary focus:border-primary/40"
							/>
							{searchTerm && (
								<Button
									variant="ghost"
									size="icon"
									onClick={() => setSearchTerm('')}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary transition-colors hover:text-text-primary"
								>
									<X className="h-4 w-4" />
								</Button>
							)}
						</div>

						<div className="flex items-center gap-2">
							<Button
								variant="outline"
								size="sm"
								onClick={() => setShowFilters(!showFilters)}
								className="border-primary/20 bg-surface/80 text-text-primary hover:border-primary/40"
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
									className="border-primary/20 bg-surface/80 text-text-primary hover:border-primary/40"
								>
									Clear All
									<X className="h-4 w-4" />
								</Button>
							)}

							{/* Results Count */}
							<motion.div
								className="text-center text-sm text-text-secondary"
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
								<div className="space-y-6 rounded-xl border border-primary/20 bg-surface/60 p-6 backdrop-blur-sm">
									{/* Project Types */}
									<div>
										<h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-primary">
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
																? 'text-primary-foreground bg-primary shadow-md'
																: 'border border-accent/50 bg-accent/20 text-text-primary hover:bg-accent/30'
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
										<h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-primary">
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
																? 'text-primary-foreground bg-primary shadow-md'
																: 'border border-accent/50 bg-accent/20 text-text-primary hover:bg-accent/30'
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
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={staggerContainer}
				>
					<AnimatePresence mode="wait">
						{filteredProjects.length > 0 ? (
							<motion.div
								key="projects-grid"
								className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
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
										className="group relative flex h-[580px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-primary/20 bg-surface/80 shadow-lg transition-all duration-500 ease-out hover:border-primary/40 hover:shadow-2xl"
										onClick={() => {
											setCurrentProjectIndex(index);
											setIsDialogOpen(true);
										}}
									>
										{/* Hover gradient overlay */}
										<div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

										{/* Image container with fixed aspect ratio */}
										<div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-t-2xl bg-muted">
											{project.image ? (
												<Image
													src={project.image || '/placeholder.svg'}
													alt={project.title}
													fill
													className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
													sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
												/>
											) : (
												<div className="flex h-full w-full items-center justify-center bg-muted text-lg text-muted-foreground transition-colors duration-500 group-hover:bg-muted/80">
													Project Visual
												</div>
											)}
											<div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
										</div>

										{/* Content container with consistent spacing */}
										<div className="relative z-20 flex flex-1 flex-col justify-between p-6">
											<div className="flex-1">
												<div
													className={`mb-3 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${project.projectType?.color || 'text-primary'} group-hover:opacity-80`}
												>
													{project.projectType?.label || 'Project'}
												</div>
												<h3 className="mb-4 line-clamp-2 font-heading text-xl font-semibold text-text-primary transition-colors duration-300 group-hover:text-primary">
													{project.title}
												</h3>
												<p className="mb-6 line-clamp-3 text-text-secondary transition-colors duration-300 group-hover:text-text-primary/80">
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
																	? 'border-primary/50 bg-primary/20 text-primary'
																	: 'border-accent/50 bg-accent/10 text-text-primary group-hover:border-primary/30 group-hover:bg-primary/10'
															}`}
														>
															{tech}
														</span>
													))}
												</div>
											</div>
										</div>

										{/* Subtle glow effect on hover */}
										<div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
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
								<h3 className="mb-2 text-xl font-semibold text-text-primary">
									No projects found
								</h3>
								<p className="mb-6 text-text-secondary">
									Try adjusting your search terms or filters to find what
									you&apos;re looking for.
								</p>
								<Button
									onClick={clearAllFilters}
									variant="outline"
									className="border-primary/20 bg-surface/80 text-text-primary hover:border-primary/40"
								>
									Clear All Filters
								</Button>
							</motion.div>
						)}
						{/* ProjectModal rendered after the grid, for the selected project */}
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
						/>
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
}
