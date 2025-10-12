import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import React from 'react';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import projectsData from '@/data/dev-projects.json';

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

export default function FeaturedWork() {
	// Get featured projects with proper typing
	const featuredProjects: Project[] = projectsData.filter(
		(p: Project) => p.featured
	);

	// Project Detail Modal Component
	const ProjectModal = ({
		project,
		children,
	}: {
		project: Project;
		children: React.ReactNode;
	}) => (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-primary/20 bg-surface">
				<div className="space-y-6">
					{/* Header */}
					<div className="space-y-4">
						<div
							className={`text-sm font-bold uppercase tracking-wider ${
								project.projectType?.color || 'text-primary'
							}`}
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
					{project.keyFeatures && (
						<div className="space-y-2">
							<h3 className="text-xl font-semibold text-text-primary">
								Key Features
							</h3>
							<p className="text-text-secondary">{project.keyFeatures}</p>
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
									{project.technicalHighlights.map((highlight, index) => (
										<li key={index}>{highlight}</li>
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
					{(project.liveUrl || project.githubUrl) && (
						<div className="flex flex-wrap gap-4 pt-4">
							{project.liveUrl && (
								<Button asChild className="flex items-center gap-2">
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink className="h-4 w-4" />
										View Live
									</a>
								</Button>
							)}
							{project.githubUrl && (
								<Button
									variant="outline"
									asChild
									className="flex items-center gap-2"
								>
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="h-4 w-4" />
										View Code
									</a>
								</Button>
							)}
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);

	return (
		<section
			id="featured-work"
			className="bg-gradient-featured-work relative flex min-h-screen w-full items-center py-12"
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
						Featured Work
					</motion.h2>
					<motion.div variants={fadeIn}>
						<Link href="/projects">
							<Button
								size="lg"
								variant="outline"
								className="rounded-xl px-8 py-4 font-semibold text-text-primary shadow-md"
							>
								View All Projects
							</Button>
						</Link>
					</motion.div>
				</motion.div>

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
						<CarouselContent className="-ml-2 md:-ml-4">
							{featuredProjects.map((project) => (
								<CarouselItem
									key={project.title}
									className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3 xl:basis-1/4"
								>
									<motion.div variants={cardVariants}>
										<ProjectModal project={project}>
											<div className="group relative flex h-[500px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-primary/20 bg-surface/80 shadow-lg transition-all duration-500 ease-out md:hover:border-primary/40 md:hover:shadow-2xl">
												{/* Hover gradient overlay */}
												<div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-500 md:group-hover:opacity-10" />

												{/* Image container with fixed aspect ratio */}
												<div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-t-2xl bg-muted">
													{project.image ? (
														<Image
															src={project.image}
															alt={project.title}
															fill
															className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-110"
															sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, (max-width: 1600px) 25vw, 20vw"
														/>
													) : (
														<div className="flex h-full w-full items-center justify-center bg-muted text-lg text-muted-foreground transition-colors duration-500 md:group-hover:bg-muted/80">
															Project Visual
														</div>
													)}
													<div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />
												</div>

												{/* Content container with consistent spacing */}
												<div className="relative z-20 flex flex-1 flex-col justify-between p-6">
													<div className="flex-1">
														<div
															className={`mb-3 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${project.projectType.color} md:group-hover:opacity-80`}
														>
															{project.projectType.label}
														</div>
														<h3 className="mb-4 line-clamp-2 font-heading text-xl font-semibold text-text-primary transition-colors duration-300 md:group-hover:text-primary">
															{project.title}
														</h3>
														<p className="mb-6 line-clamp-3 text-text-secondary transition-colors duration-300 md:group-hover:text-text-primary/80">
															{project.blurb}
														</p>
													</div>

													{/* Technology tags with consistent height */}
													<div className="mt-auto">
														<div className="flex min-h-[32px] flex-wrap items-start gap-2">
															{project.technologies.map((tech) => (
																<span
																	key={tech}
																	className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs text-text-primary transition-all duration-300 md:group-hover:border-primary/30 md:group-hover:bg-primary/10"
																>
																	{tech}
																</span>
															))}
														</div>
													</div>
												</div>

												{/* Subtle glow effect on hover */}
												<div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 blur-sm transition-opacity duration-500 md:group-hover:opacity-100" />
											</div>
										</ProjectModal>
									</motion.div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="absolute left-0 top-1/2 z-20 hidden -translate-x-4 -translate-y-1/2 rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-surface hover:shadow-xl md:flex" />
						<CarouselNext className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 translate-x-4 rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-surface hover:shadow-xl md:flex" />
					</Carousel>
				</motion.div>

				{/* Scroll Down Button */}
				<motion.div
					className="mt-12 flex justify-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={fadeIn}
				>
					<Button
						variant="ghost"
						onClick={() =>
							document
								.getElementById('about')
								?.scrollIntoView({ behavior: 'smooth' })
						}
						className="animate-gentle-bounce group transition-all duration-500 hover:scale-105"
					>
						<div className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full p-2 sm:h-16 sm:w-16 sm:p-4">
							<ChevronDown className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-white/80 sm:h-8 sm:w-8" />
						</div>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
