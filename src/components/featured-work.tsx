// ======= VER 1, original, good starting base =======

// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { motion } from 'framer-motion';
// import { useState, useCallback, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import projectsData from '@/data/projects.json';
// import { ScrollDownButton } from './scroll-down-button';

// const fadeIn = {
// 	hidden: { opacity: 0, y: 20 },
// 	visible: {
// 		opacity: 1,
// 		y: 0,
// 		transition: { duration: 0.8, ease: 'easeOut' as const },
// 	},
// };

// const staggerContainer = {
// 	hidden: { opacity: 0 },
// 	visible: {
// 		opacity: 1,
// 		transition: {
// 			staggerChildren: 0.15,
// 			delayChildren: 0.1,
// 		},
// 	},
// };

// const cardVariants = {
// 	hidden: {
// 		opacity: 0,
// 		y: 30,
// 		scale: 0.95,
// 	},
// 	visible: {
// 		opacity: 1,
// 		y: 0,
// 		scale: 1,
// 		transition: {
// 			duration: 0.6,
// 			ease: 'easeOut',
// 		},
// 	},
// } as const;

// export default function FeaturedWork() {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const [visibleCount, setVisibleCount] = useState(1);
// 	const [isTransitioning, setIsTransitioning] = useState(false);

// 	// Get featured projects
// 	const featuredProjects = projectsData.filter((p) => p.featured);

// 	// Create infinite array by duplicating projects many times
// 	const infiniteProjects = [
// 		...featuredProjects,
// 		...featuredProjects,
// 		...featuredProjects,
// 		...featuredProjects,
// 		...featuredProjects,
// 		...featuredProjects,
// 		...featuredProjects,
// 		...featuredProjects,
// 		...featuredProjects,
// 		...featuredProjects,
// 	];

// 	// Reset carousel when filters change - REMOVED

// 	// Calculate visible cards based on window width - adjusted for better spacing
// 	useEffect(() => {
// 		const updateVisibleCount = () => {
// 			const width = window.innerWidth;
// 			if (width < 640) {
// 				setVisibleCount(1);
// 			} else if (width < 900) {
// 				setVisibleCount(1); // Reduced from 2 to 1 for much wider cards
// 			} else if (width < 1200) {
// 				setVisibleCount(2); // Reduced from 2 to 1 for much wider cards
// 			} else if (width < 1600) {
// 				setVisibleCount(3); // Reduced from 3 to 2 for much wider cards
// 			} else {
// 				setVisibleCount(4); // Reduced from 4 to 2 for much wider cards
// 			}
// 		};

// 		updateVisibleCount();
// 		window.addEventListener('resize', updateVisibleCount);
// 		return () => window.removeEventListener('resize', updateVisibleCount);
// 	}, []);

// 	const nextSlide = useCallback(() => {
// 		if (isTransitioning) return;

// 		setIsTransitioning(true);
// 		setCurrentIndex((prev) => prev + 1);

// 		setTimeout(() => {
// 			setIsTransitioning(false);
// 		}, 300);
// 	}, [isTransitioning]);

// 	const prevSlide = useCallback(() => {
// 		if (isTransitioning) return;

// 		setIsTransitioning(true);
// 		setCurrentIndex((prev) => prev - 1);

// 		setTimeout(() => {
// 			setIsTransitioning(false);
// 		}, 300);
// 	}, [isTransitioning]);

// 	// Calculate the actual slide position for indicators using modulo
// 	// const actualSlideIndex =
// 	// 	((currentIndex % featuredProjects.length) + featuredProjects.length) %
// 	// 	featuredProjects.length;

// 	return (
// 		<section
// 			id="featured-work"
// 			className="bg-gradient-featured-work relative flex min-h-screen w-full items-center py-12"
// 		>
// 			{/* Enhanced accent gradient overlay */}
// 			<div className="bg-accent-gradient-2 absolute inset-0" />

// 			{/* Subtle pattern overlay for visual interest */}
// 			<div className="bg-pattern-dots absolute inset-0 opacity-30" />

// 			{/* Additional floating gradient orbs for depth */}
// 			<div
// 				className="absolute left-1/4 top-1/4 h-64 w-64 animate-pulse rounded-full bg-gradient-to-br from-primary/10 to-secondary/5 blur-2xl"
// 				style={{ animationDuration: '12s' }}
// 			/>
// 			<div
// 				className="from-secondary/8 to-primary/4 absolute bottom-1/4 right-1/3 h-48 w-48 animate-pulse rounded-full bg-gradient-to-br blur-xl"
// 				style={{ animationDuration: '8s' }}
// 			/>

// 			<div className="container relative z-10 mx-auto px-2 lg:px-4 xl:px-6 2xl:px-8">
// 				<motion.div
// 					className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row"
// 					initial="hidden"
// 					whileInView="visible"
// 					viewport={{ once: true, amount: 0.2 }}
// 					variants={fadeIn}
// 				>
// 					<motion.h2
// 						className="font-heading text-4xl font-semibold text-text-primary md:text-5xl"
// 						variants={fadeIn}
// 					>
// 						Featured Work
// 					</motion.h2>
// 					<motion.div variants={fadeIn}>
// 						<Link href="/projects">
// 							<Button
// 								size="lg"
// 								variant="outline"
// 								className="rounded-xl px-8 py-4 font-semibold text-text-primary shadow-md"
// 							>
// 								View All Projects
// 							</Button>
// 						</Link>
// 					</motion.div>
// 				</motion.div>

// 				{/* Carousel Container */}
// 				<motion.div
// 					className="relative w-full"
// 					initial="hidden"
// 					whileInView="visible"
// 					viewport={{ once: true, amount: 0.2 }}
// 					variants={staggerContainer}
// 				>
// 					{/* Navigation Buttons */}
// 					<motion.button
// 						onClick={prevSlide}
// 						disabled={isTransitioning}
// 						className="duration-300md:hover:scale-110md:hover:bg-surfacemd:hover:shadow-xl absolute left-0 top-1/2 z-20 -translate-x-4 -translate-y-1/2 rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all disabled:opacity-60"
// 						style={{
// 							filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
// 						}}
// 						aria-label="Previous project"
// 						variants={fadeIn}
// 					>
// 						<ChevronLeft className="h-6 w-6 text-text-primary" />
// 					</motion.button>

// 					<motion.button
// 						onClick={nextSlide}
// 						disabled={isTransitioning}
// 						className="duration-300md:hover:scale-110md:hover:bg-surfacemd:hover:shadow-xl absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-4 rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all disabled:opacity-60"
// 						style={{
// 							filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
// 						}}
// 						aria-label="Next project"
// 						variants={fadeIn}
// 					>
// 						<ChevronRight className="h-6 w-6 text-text-primary" />
// 					</motion.button>

// 					{/* Carousel Cards */}
// 					<div className="mx-4 overflow-hidden">
// 						<div
// 							className="flex transition-transform duration-500 ease-out"
// 							style={{
// 								transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
// 							}}
// 						>
// 							{infiniteProjects.map((project, index) => (
// 								<motion.div
// 									key={`${project.title}-${index}`}
// 									className="px-2"
// 									style={{
// 										width: `${100 / visibleCount}%`,
// 										flexShrink: 0,
// 									}}
// 									variants={cardVariants}
// 								>
// 									<div className="ease-outmd:hover:border-primary/40md:hover:shadow-2xl group relative flex h-[500px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-primary/20 bg-surface/80 shadow-lg transition-all duration-500">
// 										{/*md:hover gradient overlay */}
// 										<div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-500 md:group-hover:opacity-10" />

// 										{/* Image container with fixed aspect ratio */}
// 										<div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-t-2xl bg-muted">
// 											{project.image ? (
// 												<Image
// 													src={project.image}
// 													alt={project.title}
// 													fill
// 													className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-110"
// 													sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, (max-width: 1600px) 25vw, 20vw"
// 												/>
// 											) : (
// 												<div className="flex h-full w-full items-center justify-center bg-muted text-lg text-muted-foreground transition-colors duration-500 md:group-hover:bg-muted/80">
// 													Project Visual
// 												</div>
// 											)}
// 											<div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />
// 										</div>

// 										{/* Content container with consistent spacing */}
// 										<div className="relative z-20 flex flex-1 flex-col justify-between p-6">
// 											<div className="flex-1">
// 												<div
// 													className={`mb-3 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${project.projectType.color} md:group-hover:opacity-80`}
// 												>
// 													{project.projectType.label}
// 												</div>
// 												<h3 className="mb-4 line-clamp-2 font-heading text-xl font-semibold text-text-primary transition-colors duration-300 md:group-hover:text-primary">
// 													{project.title}
// 												</h3>
// 												<p className="mb-6 line-clamp-3 text-text-secondary transition-colors duration-300 md:group-hover:text-text-primary/80">
// 													{project.blurb}
// 												</p>
// 											</div>

// 											{/* Technology tags with consistent height */}
// 											<div className="mt-auto">
// 												<div className="flex min-h-[32px] flex-wrap items-start gap-2">
// 													{project.technologies.map((tech) => (
// 														<span
// 															key={tech}
// 															className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs text-text-primary transition-all duration-300 md:group-hover:border-primary/30 md:group-hover:bg-primary/10"
// 														>
// 															{tech}
// 														</span>
// 													))}
// 												</div>
// 											</div>
// 										</div>

// 										{/* Subtle glow effect onmd:hover */}
// 										<div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 blur-sm transition-opacity duration-500 md:group-hover:opacity-100" />
// 									</div>
// 								</motion.div>
// 							))}
// 						</div>
// 					</div>

// 					{/* Carousel Indicators */}
// 					{/* <motion.div
// 						className="mt-8 flex justify-center gap-2"
// 						variants={fadeIn}
// 					>
// 						{featuredProjects.map((_, index) => (
// 							<button
// 								key={index}
// 								onClick={() => {
// 									if (!isTransitioning) {
// 										// Calculate the closest position to jump to
// 										const currentModulo =
// 											((currentIndex % featuredProjects.length) +
// 												featuredProjects.length) %
// 											featuredProjects.length;
// 										const diff = index - currentModulo;
// 										setCurrentIndex(currentIndex + diff);
// 									}
// 								}}
// 								className={`h-2 rounded-full transition-all duration-300 ${
// 									index === actualSlideIndex
// 										? 'w-8 bg-primary'
// 										: 'bg-bordermd:hover:bg-primary/50 w-2'
// 								}`}
// 								aria-label={`Go to slide ${index + 1}`}
// 							/>
// 						))}
// 					</motion.div> */}
// 				</motion.div>
// 				<ScrollDownButton targetId="featured-work" label="Learn More" />
// 			</div>
// 		</section>
// 	);
// }

// ======= VER 2, sort of working, modal needs nav/github/demo buttons =======
// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
// import { motion } from 'framer-motion';
// import { useState, useCallback, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
// import projectsData from '@/data/projects.json';
// import { ScrollDownButton } from './scroll-down-button';

// const fadeIn = {
// 	hidden: { opacity: 0, y: 20 },
// 	visible: {
// 		opacity: 1,
// 		y: 0,
// 		transition: { duration: 0.8, ease: 'easeOut' as const },
// 	},
// };

// const staggerContainer = {
// 	hidden: { opacity: 0 },
// 	visible: {
// 		opacity: 1,
// 		transition: {
// 			staggerChildren: 0.15,
// 			delayChildren: 0.1,
// 		},
// 	},
// };

// const cardVariants = {
// 	hidden: {
// 		opacity: 0,
// 		y: 30,
// 		scale: 0.95,
// 	},
// 	visible: {
// 		opacity: 1,
// 		y: 0,
// 		scale: 1,
// 		transition: {
// 			duration: 0.6,
// 			ease: 'easeOut',
// 		},
// 	},
// } as const;

// export default function FeaturedWork() {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const [visibleCount, setVisibleCount] = useState(1);
// 	const [isTransitioning, setIsTransitioning] = useState(false);

// 	// Get featured projects
// 	const featuredProjects = projectsData.filter((p) => p.featured);

// 	// For infinite carousel, we need enough copies to handle all scenarios
// 	// We'll use 3 copies: one for current view, one for seamless transitions
// 	const infiniteProjects = [
// 		...featuredProjects,
// 		...featuredProjects,
// 		...featuredProjects,
// 	];

// 	// Start at the middle set to allow both forward and backward navigation
// 	const initialOffset = featuredProjects.length;

// 	// Initialize currentIndex to the middle set on first load
// 	useEffect(() => {
// 		setCurrentIndex(initialOffset);
// 	}, [initialOffset]);

// 	// Calculate visible cards based on window width
// 	useEffect(() => {
// 		const updateVisibleCount = () => {
// 			const width = window.innerWidth;
// 			if (width < 640) {
// 				setVisibleCount(1);
// 			} else if (width < 900) {
// 				setVisibleCount(1);
// 			} else if (width < 1200) {
// 				setVisibleCount(2);
// 			} else if (width < 1600) {
// 				setVisibleCount(3);
// 			} else {
// 				setVisibleCount(4);
// 			}
// 		};

// 		updateVisibleCount();
// 		window.addEventListener('resize', updateVisibleCount);
// 		return () => window.removeEventListener('resize', updateVisibleCount);
// 	}, []);

// 	const nextSlide = useCallback(() => {
// 		if (isTransitioning || featuredProjects.length === 0) return;

// 		setIsTransitioning(true);
// 		setCurrentIndex((prev) => {
// 			const newIndex = prev + 1;
// 			// If we've gone past the second set, reset to the first set
// 			if (newIndex >= featuredProjects.length * 2) {
// 				setTimeout(() => {
// 					setCurrentIndex(featuredProjects.length);
// 				}, 300);
// 			}
// 			return newIndex;
// 		});

// 		setTimeout(() => {
// 			setIsTransitioning(false);
// 		}, 300);
// 	}, [isTransitioning, featuredProjects.length]);

// 	const prevSlide = useCallback(() => {
// 		if (isTransitioning || featuredProjects.length === 0) return;

// 		setIsTransitioning(true);
// 		setCurrentIndex((prev) => {
// 			const newIndex = prev - 1;
// 			// If we've gone before the first set, reset to the second set
// 			if (newIndex < 0) {
// 				setTimeout(() => {
// 					setCurrentIndex(featuredProjects.length * 2 - 1);
// 				}, 300);
// 			}
// 			return newIndex;
// 		});

// 		setTimeout(() => {
// 			setIsTransitioning(false);
// 		}, 300);
// 	}, [isTransitioning, featuredProjects.length]);

// 	// Project Detail Modal Component
// 	const ProjectModal = ({ project, children }) => (
// 		<Dialog>
// 			<DialogTrigger asChild>{children}</DialogTrigger>
// 			<DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-primary/20 bg-surface">
// 				<div className="space-y-6">
// 					{/* Header */}
// 					<div className="space-y-4">
// 						<div
// 							className={`text-sm font-bold uppercase tracking-wider ${project.projectType?.color || 'text-primary'}`}
// 						>
// 							{project.projectType?.label || 'Project'}
// 						</div>
// 						<h2 className="font-heading text-3xl font-semibold text-text-primary">
// 							{project.title}
// 						</h2>
// 						<p className="text-lg text-text-secondary">{project.blurb}</p>
// 					</div>

// 					{/* Image */}
// 					{project.image && (
// 						<div className="relative h-64 w-full overflow-hidden rounded-xl bg-muted">
// 							<Image
// 								src={project.image}
// 								alt={project.title}
// 								fill
// 								className="object-cover"
// 								sizes="(max-width: 768px) 100vw, 800px"
// 							/>
// 						</div>
// 					)}

// 					{/* Description */}
// 					{project.description && (
// 						<div className="space-y-2">
// 							<h3 className="text-xl font-semibold text-text-primary">
// 								Description
// 							</h3>
// 							<p className="text-text-secondary">{project.description}</p>
// 						</div>
// 					)}

// 					{/* Key Features */}
// 					{project.keyFeatures && (
// 						<div className="space-y-2">
// 							<h3 className="text-xl font-semibold text-text-primary">
// 								Key Features
// 							</h3>
// 							<p className="text-text-secondary">{project.keyFeatures}</p>
// 						</div>
// 					)}

// 					{/* Technical Highlights */}
// 					{project.technicalHighlights &&
// 						project.technicalHighlights.length > 0 && (
// 							<div className="space-y-2">
// 								<h3 className="text-xl font-semibold text-text-primary">
// 									Technical Highlights
// 								</h3>
// 								<ul className="list-inside list-disc space-y-1 text-text-secondary">
// 									{project.technicalHighlights.map((highlight, index) => (
// 										<li key={index}>{highlight}</li>
// 									))}
// 								</ul>
// 							</div>
// 						)}

// 					{/* Technologies */}
// 					<div className="space-y-2">
// 						<h3 className="text-xl font-semibold text-text-primary">
// 							Technologies
// 						</h3>
// 						<div className="flex flex-wrap gap-2">
// 							{project.technologies?.map((tech) => (
// 								<span
// 									key={tech}
// 									className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-sm text-text-primary"
// 								>
// 									{tech}
// 								</span>
// 							))}
// 						</div>
// 					</div>

// 					{/* Links */}
// 					{(project.liveUrl || project.githubUrl) && (
// 						<div className="flex flex-wrap gap-4 pt-4">
// 							{project.liveUrl && (
// 								<Button asChild className="flex items-center gap-2">
// 									<a
// 										href={project.liveUrl}
// 										target="_blank"
// 										rel="noopener noreferrer"
// 									>
// 										<ExternalLink className="h-4 w-4" />
// 										View Live
// 									</a>
// 								</Button>
// 							)}
// 							{project.githubUrl && (
// 								<Button
// 									variant="outline"
// 									asChild
// 									className="flex items-center gap-2"
// 								>
// 									<a
// 										href={project.githubUrl}
// 										target="_blank"
// 										rel="noopener noreferrer"
// 									>
// 										<Github className="h-4 w-4" />
// 										View Code
// 									</a>
// 								</Button>
// 							)}
// 						</div>
// 					)}
// 				</div>
// 			</DialogContent>
// 		</Dialog>
// 	);

// 	return (
// 		<section
// 			id="featured-work"
// 			className="bg-gradient-featured-work relative flex min-h-screen w-full items-center py-12"
// 		>
// 			{/* Enhanced accent gradient overlay */}
// 			<div className="bg-accent-gradient-2 absolute inset-0" />

// 			{/* Subtle pattern overlay for visual interest */}
// 			<div className="bg-pattern-dots absolute inset-0 opacity-30" />

// 			{/* Additional floating gradient orbs for depth */}
// 			<div
// 				className="absolute left-1/4 top-1/4 h-64 w-64 animate-pulse rounded-full bg-gradient-to-br from-primary/10 to-secondary/5 blur-2xl"
// 				style={{ animationDuration: '12s' }}
// 			/>
// 			<div
// 				className="from-secondary/8 to-primary/4 absolute bottom-1/4 right-1/3 h-48 w-48 animate-pulse rounded-full bg-gradient-to-br blur-xl"
// 				style={{ animationDuration: '8s' }}
// 			/>

// 			<div className="container relative z-10 mx-auto px-2 lg:px-4 xl:px-6 2xl:px-8">
// 				<motion.div
// 					className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row"
// 					initial="hidden"
// 					whileInView="visible"
// 					viewport={{ once: true, amount: 0.2 }}
// 					variants={fadeIn}
// 				>
// 					<motion.h2
// 						className="font-heading text-4xl font-semibold text-text-primary md:text-5xl"
// 						variants={fadeIn}
// 					>
// 						Featured Work
// 					</motion.h2>
// 					<motion.div variants={fadeIn}>
// 						<Link href="/projects">
// 							<Button
// 								size="lg"
// 								variant="outline"
// 								className="rounded-xl px-8 py-4 font-semibold text-text-primary shadow-md"
// 							>
// 								View All Projects
// 							</Button>
// 						</Link>
// 					</motion.div>
// 				</motion.div>

// 				{/* Carousel Container */}
// 				<motion.div
// 					className="relative w-full"
// 					initial="hidden"
// 					whileInView="visible"
// 					viewport={{ once: true, amount: 0.2 }}
// 					variants={staggerContainer}
// 				>
// 					{/* Navigation Buttons - Desktop */}
// 					<motion.button
// 						onClick={prevSlide}
// 						disabled={isTransitioning}
// 						className="absolute left-0 top-1/2 z-20 hidden -translate-x-4 -translate-y-1/2 rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 disabled:opacity-60 md:block md:hover:scale-110 md:hover:bg-surface md:hover:shadow-xl"
// 						style={{
// 							filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
// 						}}
// 						aria-label="Previous project"
// 						variants={fadeIn}
// 					>
// 						<ChevronLeft className="h-6 w-6 text-text-primary" />
// 					</motion.button>

// 					<motion.button
// 						onClick={nextSlide}
// 						disabled={isTransitioning}
// 						className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 translate-x-4 rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 disabled:opacity-60 md:block md:hover:scale-110 md:hover:bg-surface md:hover:shadow-xl"
// 						style={{
// 							filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
// 						}}
// 						aria-label="Next project"
// 						variants={fadeIn}
// 					>
// 						<ChevronRight className="h-6 w-6 text-text-primary" />
// 					</motion.button>

// 					{/* Carousel Cards */}
// 					<div className="mx-4 overflow-hidden">
// 						<div
// 							className="flex transition-transform duration-500 ease-out"
// 							style={{
// 								transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
// 							}}
// 						>
// 							{infiniteProjects.map((project, index) => (
// 								<motion.div
// 									key={`${project.title}-${index}`}
// 									className="px-2"
// 									style={{
// 										width: `${100 / visibleCount}%`,
// 										flexShrink: 0,
// 									}}
// 									variants={cardVariants}
// 								>
// 									<ProjectModal project={project}>
// 										<div className="group relative flex h-[500px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-primary/20 bg-surface/80 shadow-lg transition-all duration-500 ease-out md:hover:border-primary/40 md:hover:shadow-2xl">
// 											{/* Hover gradient overlay */}
// 											<div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-500 md:group-hover:opacity-10" />

// 											{/* Image container with fixed aspect ratio */}
// 											<div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-t-2xl bg-muted">
// 												{project.image ? (
// 													<Image
// 														src={project.image}
// 														alt={project.title}
// 														fill
// 														className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-110"
// 														sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, (max-width: 1600px) 25vw, 20vw"
// 													/>
// 												) : (
// 													<div className="flex h-full w-full items-center justify-center bg-muted text-lg text-muted-foreground transition-colors duration-500 md:group-hover:bg-muted/80">
// 														Project Visual
// 													</div>
// 												)}
// 												<div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />
// 											</div>

// 											{/* Content container with consistent spacing */}
// 											<div className="relative z-20 flex flex-1 flex-col justify-between p-6">
// 												<div className="flex-1">
// 													<div
// 														className={`mb-3 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${project.projectType.color} md:group-hover:opacity-80`}
// 													>
// 														{project.projectType.label}
// 													</div>
// 													<h3 className="mb-4 line-clamp-2 font-heading text-xl font-semibold text-text-primary transition-colors duration-300 md:group-hover:text-primary">
// 														{project.title}
// 													</h3>
// 													<p className="mb-6 line-clamp-3 text-text-secondary transition-colors duration-300 md:group-hover:text-text-primary/80">
// 														{project.blurb}
// 													</p>
// 												</div>

// 												{/* Technology tags with consistent height */}
// 												<div className="mt-auto">
// 													<div className="flex min-h-[32px] flex-wrap items-start gap-2">
// 														{project.technologies.map((tech) => (
// 															<span
// 																key={tech}
// 																className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs text-text-primary transition-all duration-300 md:group-hover:border-primary/30 md:group-hover:bg-primary/10"
// 															>
// 																{tech}
// 															</span>
// 														))}
// 													</div>
// 												</div>
// 											</div>

// 											{/* Subtle glow effect on hover */}
// 											<div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 blur-sm transition-opacity duration-500 md:group-hover:opacity-100" />
// 										</div>
// 									</ProjectModal>
// 								</motion.div>
// 							))}
// 						</div>
// 					</div>

// 					{/* Navigation Buttons - Mobile */}
// 					<motion.div
// 						className="mt-6 flex justify-center gap-4 md:hidden"
// 						variants={fadeIn}
// 					>
// 						<motion.button
// 							onClick={prevSlide}
// 							disabled={isTransitioning}
// 							className="rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-surface hover:shadow-xl disabled:opacity-60"
// 							style={{
// 								filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
// 							}}
// 							aria-label="Previous project"
// 						>
// 							<ChevronLeft className="h-6 w-6 text-text-primary" />
// 						</motion.button>

// 						<motion.button
// 							onClick={nextSlide}
// 							disabled={isTransitioning}
// 							className="rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-surface hover:shadow-xl disabled:opacity-60"
// 							style={{
// 								filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
// 							}}
// 							aria-label="Next project"
// 						>
// 							<ChevronRight className="h-6 w-6 text-text-primary" />
// 						</motion.button>
// 					</motion.div>
// 				</motion.div>
// 				<ScrollDownButton targetId="featured-work" label="Learn More" />
// 			</div>
// 		</section>
// 	);
// }

// ======= VER 3, working, but cards take way too long to load =======
// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
// import { motion } from 'framer-motion';
// import { useState, useCallback, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
// import projectsData from '@/data/projects.json';
// import { ScrollDownButton } from './scroll-down-button';

// const fadeIn = {
// 	hidden: { opacity: 0, y: 20 },
// 	visible: {
// 		opacity: 1,
// 		y: 0,
// 		transition: { duration: 0.8, ease: 'easeOut' as const },
// 	},
// };

// const staggerContainer = {
// 	hidden: { opacity: 0 },
// 	visible: {
// 		opacity: 1,
// 		transition: {
// 			staggerChildren: 0.15,
// 			delayChildren: 0.1,
// 		},
// 	},
// };

// const cardVariants = {
// 	hidden: {
// 		opacity: 0,
// 		y: 30,
// 		scale: 0.95,
// 	},
// 	visible: {
// 		opacity: 1,
// 		y: 0,
// 		scale: 1,
// 		transition: {
// 			duration: 0.6,
// 			ease: 'easeOut',
// 		},
// 	},
// } as const;

// export default function FeaturedWork() {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const [visibleCount, setVisibleCount] = useState(1);
// 	const [isTransitioning, setIsTransitioning] = useState(false);

// 	// Get featured projects
// 	const featuredProjects = projectsData.filter((p) => p.featured);

// 	// Create a large enough array to handle infinite scrolling
// 	// We need enough buffer on both sides to never run out
// 	const bufferSize = Math.max(50, featuredProjects.length * 10); // Ensure we have plenty of buffer
// 	const [infiniteProjects, setInfiniteProjects] = useState(() => {
// 		const projects = [];
// 		for (let i = 0; i < bufferSize; i++) {
// 			projects.push(featuredProjects[i % featuredProjects.length]);
// 		}
// 		return projects;
// 	});

// 	// Start in the middle of our buffer
// 	const [initialLoad, setInitialLoad] = useState(true);
// 	useEffect(() => {
// 		if (initialLoad) {
// 			setCurrentIndex(Math.floor(bufferSize / 2));
// 			setInitialLoad(false);
// 		}
// 	}, [bufferSize, initialLoad]);

// 	// Calculate visible cards based on window width
// 	useEffect(() => {
// 		const updateVisibleCount = () => {
// 			const width = window.innerWidth;
// 			if (width < 640) {
// 				setVisibleCount(1);
// 			} else if (width < 900) {
// 				setVisibleCount(1);
// 			} else if (width < 1200) {
// 				setVisibleCount(2);
// 			} else if (width < 1600) {
// 				setVisibleCount(3);
// 			} else {
// 				setVisibleCount(4);
// 			}
// 		};

// 		updateVisibleCount();
// 		window.addEventListener('resize', updateVisibleCount);
// 		return () => window.removeEventListener('resize', updateVisibleCount);
// 	}, []);

// 	// Add more items to the end when we're getting close to the end
// 	useEffect(() => {
// 		const threshold = 10; // Add more items when we're within 10 of the end
// 		if (currentIndex > infiniteProjects.length - threshold - visibleCount) {
// 			setInfiniteProjects((prev) => {
// 				const newItems = [];
// 				for (let i = 0; i < featuredProjects.length; i++) {
// 					newItems.push(featuredProjects[i]);
// 				}
// 				return [...prev, ...newItems];
// 			});
// 		}
// 	}, [currentIndex, infiniteProjects.length, visibleCount, featuredProjects]);

// 	// Add more items to the beginning when we're getting close to the start
// 	useEffect(() => {
// 		const threshold = 10; // Add more items when we're within 10 of the start
// 		if (currentIndex < threshold) {
// 			setInfiniteProjects((prev) => {
// 				const newItems = [];
// 				for (let i = 0; i < featuredProjects.length; i++) {
// 					newItems.push(featuredProjects[i]);
// 				}
// 				// Adjust currentIndex to account for the new items added at the beginning
// 				setCurrentIndex((prevIndex) => prevIndex + newItems.length);
// 				return [...newItems, ...prev];
// 			});
// 		}
// 	}, [currentIndex, featuredProjects]);

// 	const nextSlide = useCallback(() => {
// 		if (isTransitioning || featuredProjects.length === 0) return;

// 		setIsTransitioning(true);
// 		setCurrentIndex((prev) => prev + 1);

// 		setTimeout(() => {
// 			setIsTransitioning(false);
// 		}, 300);
// 	}, [isTransitioning, featuredProjects.length]);

// 	const prevSlide = useCallback(() => {
// 		if (isTransitioning || featuredProjects.length === 0) return;

// 		setIsTransitioning(true);
// 		setCurrentIndex((prev) => prev - 1);

// 		setTimeout(() => {
// 			setIsTransitioning(false);
// 		}, 300);
// 	}, [isTransitioning, featuredProjects.length]);

// 	// Project Detail Modal Component
// 	const ProjectModal = ({ project, children }) => (
// 		<Dialog>
// 			<DialogTrigger asChild>{children}</DialogTrigger>
// 			<DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-primary/20 bg-surface">
// 				<div className="space-y-6">
// 					{/* Header */}
// 					<div className="space-y-4">
// 						<div
// 							className={`text-sm font-bold uppercase tracking-wider ${project.projectType?.color || 'text-primary'}`}
// 						>
// 							{project.projectType?.label || 'Project'}
// 						</div>
// 						<h2 className="font-heading text-3xl font-semibold text-text-primary">
// 							{project.title}
// 						</h2>
// 						<p className="text-lg text-text-secondary">{project.blurb}</p>
// 					</div>

// 					{/* Image */}
// 					{project.image && (
// 						<div className="relative h-64 w-full overflow-hidden rounded-xl bg-muted">
// 							<Image
// 								src={project.image}
// 								alt={project.title}
// 								fill
// 								className="object-cover"
// 								sizes="(max-width: 768px) 100vw, 800px"
// 							/>
// 						</div>
// 					)}

// 					{/* Description */}
// 					{project.description && (
// 						<div className="space-y-2">
// 							<h3 className="text-xl font-semibold text-text-primary">
// 								Description
// 							</h3>
// 							<p className="text-text-secondary">{project.description}</p>
// 						</div>
// 					)}

// 					{/* Key Features */}
// 					{project.keyFeatures && (
// 						<div className="space-y-2">
// 							<h3 className="text-xl font-semibold text-text-primary">
// 								Key Features
// 							</h3>
// 							<p className="text-text-secondary">{project.keyFeatures}</p>
// 						</div>
// 					)}

// 					{/* Technical Highlights */}
// 					{project.technicalHighlights &&
// 						project.technicalHighlights.length > 0 && (
// 							<div className="space-y-2">
// 								<h3 className="text-xl font-semibold text-text-primary">
// 									Technical Highlights
// 								</h3>
// 								<ul className="list-inside list-disc space-y-1 text-text-secondary">
// 									{project.technicalHighlights.map((highlight, index) => (
// 										<li key={index}>{highlight}</li>
// 									))}
// 								</ul>
// 							</div>
// 						)}

// 					{/* Technologies */}
// 					<div className="space-y-2">
// 						<h3 className="text-xl font-semibold text-text-primary">
// 							Technologies
// 						</h3>
// 						<div className="flex flex-wrap gap-2">
// 							{project.technologies?.map((tech) => (
// 								<span
// 									key={tech}
// 									className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-sm text-text-primary"
// 								>
// 									{tech}
// 								</span>
// 							))}
// 						</div>
// 					</div>

// 					{/* Links */}
// 					{(project.liveUrl || project.githubUrl) && (
// 						<div className="flex flex-wrap gap-4 pt-4">
// 							{project.liveUrl && (
// 								<Button asChild className="flex items-center gap-2">
// 									<a
// 										href={project.liveUrl}
// 										target="_blank"
// 										rel="noopener noreferrer"
// 									>
// 										<ExternalLink className="h-4 w-4" />
// 										View Live
// 									</a>
// 								</Button>
// 							)}
// 							{project.githubUrl && (
// 								<Button
// 									variant="outline"
// 									asChild
// 									className="flex items-center gap-2"
// 								>
// 									<a
// 										href={project.githubUrl}
// 										target="_blank"
// 										rel="noopener noreferrer"
// 									>
// 										<Github className="h-4 w-4" />
// 										View Code
// 									</a>
// 								</Button>
// 							)}
// 						</div>
// 					)}
// 				</div>
// 			</DialogContent>
// 		</Dialog>
// 	);

// 	return (
// 		<section
// 			id="featured-work"
// 			className="bg-gradient-featured-work relative flex min-h-screen w-full items-center py-12"
// 		>
// 			{/* Enhanced accent gradient overlay */}
// 			<div className="bg-accent-gradient-2 absolute inset-0" />

// 			{/* Subtle pattern overlay for visual interest */}
// 			<div className="bg-pattern-dots absolute inset-0 opacity-30" />

// 			{/* Additional floating gradient orbs for depth */}
// 			<div
// 				className="absolute left-1/4 top-1/4 h-64 w-64 animate-pulse rounded-full bg-gradient-to-br from-primary/10 to-secondary/5 blur-2xl"
// 				style={{ animationDuration: '12s' }}
// 			/>
// 			<div
// 				className="from-secondary/8 to-primary/4 absolute bottom-1/4 right-1/3 h-48 w-48 animate-pulse rounded-full bg-gradient-to-br blur-xl"
// 				style={{ animationDuration: '8s' }}
// 			/>

// 			<div className="container relative z-10 mx-auto px-2 lg:px-4 xl:px-6 2xl:px-8">
// 				<motion.div
// 					className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row"
// 					initial="hidden"
// 					whileInView="visible"
// 					viewport={{ once: true, amount: 0.2 }}
// 					variants={fadeIn}
// 				>
// 					<motion.h2
// 						className="font-heading text-4xl font-semibold text-text-primary md:text-5xl"
// 						variants={fadeIn}
// 					>
// 						Featured Work
// 					</motion.h2>
// 					<motion.div variants={fadeIn}>
// 						<Link href="/projects">
// 							<Button
// 								size="lg"
// 								variant="outline"
// 								className="rounded-xl px-8 py-4 font-semibold text-text-primary shadow-md"
// 							>
// 								View All Projects
// 							</Button>
// 						</Link>
// 					</motion.div>
// 				</motion.div>

// 				{/* Carousel Container */}
// 				<motion.div
// 					className="relative w-full"
// 					initial="hidden"
// 					whileInView="visible"
// 					viewport={{ once: true, amount: 0.2 }}
// 					variants={staggerContainer}
// 				>
// 					{/* Navigation Buttons - Desktop */}
// 					<motion.button
// 						onClick={prevSlide}
// 						disabled={isTransitioning}
// 						className="absolute left-0 top-1/2 z-20 hidden -translate-x-4 -translate-y-1/2 rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 disabled:opacity-60 md:block md:hover:scale-110 md:hover:bg-surface md:hover:shadow-xl"
// 						style={{
// 							filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
// 						}}
// 						aria-label="Previous project"
// 						variants={fadeIn}
// 					>
// 						<ChevronLeft className="h-6 w-6 text-text-primary" />
// 					</motion.button>

// 					<motion.button
// 						onClick={nextSlide}
// 						disabled={isTransitioning}
// 						className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 translate-x-4 rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 disabled:opacity-60 md:block md:hover:scale-110 md:hover:bg-surface md:hover:shadow-xl"
// 						style={{
// 							filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
// 						}}
// 						aria-label="Next project"
// 						variants={fadeIn}
// 					>
// 						<ChevronRight className="h-6 w-6 text-text-primary" />
// 					</motion.button>

// 					{/* Carousel Cards */}
// 					<div className="mx-4 overflow-hidden">
// 						<div
// 							className="flex transition-transform duration-500 ease-out"
// 							style={{
// 								transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
// 							}}
// 						>
// 							{infiniteProjects.map((project, index) => (
// 								<motion.div
// 									key={`${project.title}-${index}`}
// 									className="px-2"
// 									style={{
// 										width: `${100 / visibleCount}%`,
// 										flexShrink: 0,
// 									}}
// 									variants={cardVariants}
// 								>
// 									<ProjectModal project={project}>
// 										<div className="group relative flex h-[500px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-primary/20 bg-surface/80 shadow-lg transition-all duration-500 ease-out md:hover:border-primary/40 md:hover:shadow-2xl">
// 											{/* Hover gradient overlay */}
// 											<div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-500 md:group-hover:opacity-10" />

// 											{/* Image container with fixed aspect ratio */}
// 											<div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-t-2xl bg-muted">
// 												{project.image ? (
// 													<Image
// 														src={project.image}
// 														alt={project.title}
// 														fill
// 														className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-110"
// 														sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, (max-width: 1600px) 25vw, 20vw"
// 													/>
// 												) : (
// 													<div className="flex h-full w-full items-center justify-center bg-muted text-lg text-muted-foreground transition-colors duration-500 md:group-hover:bg-muted/80">
// 														Project Visual
// 													</div>
// 												)}
// 												<div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />
// 											</div>

// 											{/* Content container with consistent spacing */}
// 											<div className="relative z-20 flex flex-1 flex-col justify-between p-6">
// 												<div className="flex-1">
// 													<div
// 														className={`mb-3 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${project.projectType.color} md:group-hover:opacity-80`}
// 													>
// 														{project.projectType.label}
// 													</div>
// 													<h3 className="mb-4 line-clamp-2 font-heading text-xl font-semibold text-text-primary transition-colors duration-300 md:group-hover:text-primary">
// 														{project.title}
// 													</h3>
// 													<p className="mb-6 line-clamp-3 text-text-secondary transition-colors duration-300 md:group-hover:text-text-primary/80">
// 														{project.blurb}
// 													</p>
// 												</div>

// 												{/* Technology tags with consistent height */}
// 												<div className="mt-auto">
// 													<div className="flex min-h-[32px] flex-wrap items-start gap-2">
// 														{project.technologies.map((tech) => (
// 															<span
// 																key={tech}
// 																className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs text-text-primary transition-all duration-300 md:group-hover:border-primary/30 md:group-hover:bg-primary/10"
// 															>
// 																{tech}
// 															</span>
// 														))}
// 													</div>
// 												</div>
// 											</div>

// 											{/* Subtle glow effect on hover */}
// 											<div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 blur-sm transition-opacity duration-500 md:group-hover:opacity-100" />
// 										</div>
// 									</ProjectModal>
// 								</motion.div>
// 							))}
// 						</div>
// 					</div>

// 					{/* Navigation Buttons - Mobile */}
// 					<motion.div
// 						className="mt-6 flex justify-center gap-4 md:hidden"
// 						variants={fadeIn}
// 					>
// 						<motion.button
// 							onClick={prevSlide}
// 							disabled={isTransitioning}
// 							className="rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-surface hover:shadow-xl disabled:opacity-60"
// 							style={{
// 								filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
// 							}}
// 							aria-label="Previous project"
// 						>
// 							<ChevronLeft className="h-6 w-6 text-text-primary" />
// 						</motion.button>

// 						<motion.button
// 							onClick={nextSlide}
// 							disabled={isTransitioning}
// 							className="rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-surface hover:shadow-xl disabled:opacity-60"
// 							style={{
// 								filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
// 							}}
// 							aria-label="Next project"
// 						>
// 							<ChevronRight className="h-6 w-6 text-text-primary" />
// 						</motion.button>
// 					</motion.div>
// 				</motion.div>
// 				<ScrollDownButton targetId="featured-work" label="Learn More" />
// 			</div>
// 		</section>
// 	);
// }

// ======= VER 4, idk claude help fix my ai slop? =======
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import projectsData from '@/data/projects.json';
import { ScrollDownButton } from './scroll-down-button';

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
			staggerChildren: 0, // Remove stagger from container since we handle it per card
			delayChildren: 0,
		},
	},
};

const cardVariants = {
	hidden: {
		opacity: 0,
		y: 20,
		scale: 0.98,
	},
	visible: (index) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.3,
			ease: 'easeOut',
			delay: index < 4 ? index * 0.1 : 0, // Only stagger first 4 cards
		},
	}),
} as const;

export default function FeaturedWork() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleCount, setVisibleCount] = useState(1);
	const [isTransitioning, setIsTransitioning] = useState(false);

	// Get featured projects
	const featuredProjects = projectsData.filter((p) => p.featured);

	// Create a large enough array to handle infinite scrolling
	// We need enough buffer on both sides to never run out
	const bufferSize = Math.max(50, featuredProjects.length * 10); // Ensure we have plenty of buffer
	const [infiniteProjects, setInfiniteProjects] = useState(() => {
		const projects = [];
		for (let i = 0; i < bufferSize; i++) {
			projects.push(featuredProjects[i % featuredProjects.length]);
		}
		return projects;
	});

	// Start in the middle of our buffer
	const [initialLoad, setInitialLoad] = useState(true);
	useEffect(() => {
		if (initialLoad) {
			setCurrentIndex(Math.floor(bufferSize / 2));
			setInitialLoad(false);
		}
	}, [bufferSize, initialLoad]);

	// Calculate visible cards based on window width
	useEffect(() => {
		const updateVisibleCount = () => {
			const width = window.innerWidth;
			if (width < 640) {
				setVisibleCount(1);
			} else if (width < 900) {
				setVisibleCount(1);
			} else if (width < 1200) {
				setVisibleCount(2);
			} else if (width < 1600) {
				setVisibleCount(3);
			} else {
				setVisibleCount(4);
			}
		};

		updateVisibleCount();
		window.addEventListener('resize', updateVisibleCount);
		return () => window.removeEventListener('resize', updateVisibleCount);
	}, []);

	// Add more items to the end when we're getting close to the end
	useEffect(() => {
		const threshold = 10; // Add more items when we're within 10 of the end
		if (currentIndex > infiniteProjects.length - threshold - visibleCount) {
			setInfiniteProjects((prev) => {
				const newItems = [];
				for (let i = 0; i < featuredProjects.length; i++) {
					newItems.push(featuredProjects[i]);
				}
				return [...prev, ...newItems];
			});
		}
	}, [currentIndex, infiniteProjects.length, visibleCount, featuredProjects]);

	// Add more items to the beginning when we're getting close to the start
	useEffect(() => {
		const threshold = 10; // Add more items when we're within 10 of the start
		if (currentIndex < threshold) {
			setInfiniteProjects((prev) => {
				const newItems = [];
				for (let i = 0; i < featuredProjects.length; i++) {
					newItems.push(featuredProjects[i]);
				}
				// Adjust currentIndex to account for the new items added at the beginning
				setCurrentIndex((prevIndex) => prevIndex + newItems.length);
				return [...newItems, ...prev];
			});
		}
	}, [currentIndex, featuredProjects]);

	const nextSlide = useCallback(() => {
		if (isTransitioning || featuredProjects.length === 0) return;
		setIsTransitioning(true);
		setCurrentIndex((prev) => prev + 1);
		setTimeout(() => {
			setIsTransitioning(false);
		}, 300);
	}, [isTransitioning, featuredProjects.length]);

	const prevSlide = useCallback(() => {
		if (isTransitioning || featuredProjects.length === 0) return;
		setIsTransitioning(true);
		setCurrentIndex((prev) => prev - 1);
		setTimeout(() => {
			setIsTransitioning(false);
		}, 300);
	}, [isTransitioning, featuredProjects.length]);

	// Project Detail Modal Component
	const ProjectModal = ({ project, children }) => (
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
					initial="visible"
					animate="visible"
					variants={staggerContainer}
				>
					{/* Navigation Buttons - Desktop */}
					<motion.button
						onClick={prevSlide}
						disabled={isTransitioning}
						className="absolute left-0 top-1/2 z-20 hidden -translate-x-4 -translate-y-1/2 rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 disabled:opacity-60 md:block md:hover:scale-110 md:hover:bg-surface md:hover:shadow-xl"
						style={{
							filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
						}}
						aria-label="Previous project"
						variants={fadeIn}
					>
						<ChevronLeft className="h-6 w-6 text-text-primary" />
					</motion.button>

					<motion.button
						onClick={nextSlide}
						disabled={isTransitioning}
						className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 translate-x-4 rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 disabled:opacity-60 md:block md:hover:scale-110 md:hover:bg-surface md:hover:shadow-xl"
						style={{
							filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
						}}
						aria-label="Next project"
						variants={fadeIn}
					>
						<ChevronRight className="h-6 w-6 text-text-primary" />
					</motion.button>

					{/* Carousel Cards */}
					<div className="mx-4 overflow-hidden">
						<div
							className="flex transition-transform duration-500 ease-out"
							style={{
								transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
							}}
						>
							{infiniteProjects.map((project, index) => (
								<motion.div
									key={`${project.title}-${index}`}
									className="px-2"
									style={{
										width: `${100 / visibleCount}%`,
										flexShrink: 0,
									}}
									variants={cardVariants}
									custom={index}
								>
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
							))}
						</div>
					</div>

					{/* Navigation Buttons - Mobile */}
					<motion.div
						className="mt-6 flex justify-center gap-4 md:hidden"
						variants={fadeIn}
					>
						<motion.button
							onClick={prevSlide}
							disabled={isTransitioning}
							className="rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-surface hover:shadow-xl disabled:opacity-60"
							style={{
								filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
							}}
							aria-label="Previous project"
						>
							<ChevronLeft className="h-6 w-6 text-text-primary" />
						</motion.button>
						<motion.button
							onClick={nextSlide}
							disabled={isTransitioning}
							className="rounded-full bg-surface/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-surface hover:shadow-xl disabled:opacity-60"
							style={{
								filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
							}}
							aria-label="Next project"
						>
							<ChevronRight className="h-6 w-6 text-text-primary" />
						</motion.button>
					</motion.div>
				</motion.div>

				<ScrollDownButton targetId="featured-work" label="Learn More" />
			</div>
		</section>
	);
}
