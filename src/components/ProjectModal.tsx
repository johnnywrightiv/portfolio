'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	getProjectOriginClass,
	getProjectTypeClass,
	type ProjectSection,
} from '@/lib/project-types';

// TypeScript interfaces
interface ProjectLink {
	name: string;
	url: string;
}

interface Project {
	title: string;
	featured: boolean;
	origin?: string;
	type?: string;
	highlightSections?: ProjectSection[];
	image?: string;
	description: string;
	technologies?: string[];
	links?: ProjectLink[];
	liveUrl?: string;
	githubUrl?: string;
}

interface ProjectModalProps {
	project: Project | undefined;
	open: boolean;
	// eslint-disable-next-line no-unused-vars
	onOpenChange: (open: boolean) => void;
	onPrev: () => void;
	onNext: () => void;
	projects: Project[];
	currentIndex: number;
}

// Animation variants for smooth transitions
const contentVariants = {
	hidden: { opacity: 0, scale: 0.98 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.3, ease: 'easeOut' as const },
	},
	exit: {
		opacity: 0,
		scale: 0.98,
		transition: { duration: 0.2, ease: 'easeIn' as const },
	},
};

export default function ProjectModal({
	project,
	open,
	onOpenChange,
	onPrev,
	onNext,
	projects,
	currentIndex,
}: ProjectModalProps) {
	// Swipe state for mobile navigation
	const [touchStart, setTouchStart] = React.useState<number | null>(null);
	const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

	// Keyboard navigation inside modal
	React.useEffect(() => {
		if (!open) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowLeft') onPrev();
			if (e.key === 'ArrowRight') onNext();
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [open, onPrev, onNext]);

	// Simple swipe handler without drag physics
	const minSwipeDistance = 50;

	const onTouchStart = (e: React.TouchEvent) => {
		setTouchEnd(null);
		setTouchStart(e.targetTouches[0].clientX);
	};

	const onTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return;
		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > minSwipeDistance;
		const isRightSwipe = distance < -minSwipeDistance;

		if (isLeftSwipe) {
			onNext();
		} else if (isRightSwipe) {
			onPrev();
		}
	};

	if (!project) return null;

	const currentProject = projects[currentIndex];

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-h-[90vh] max-w-6xl overflow-hidden border border-white/40 bg-gradient-to-b from-slate-900 to-black p-0">
				{/* Navigation arrows - carousel style */}
				{projects.length > 1 && (
					<>
						<Button
							variant="ghost"
							size="icon"
							className="absolute left-1 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/95 hover:shadow-xl lg:left-4"
							onClick={onPrev}
						>
							<ChevronLeft className="h-5 w-5" />
							<span className="sr-only">Previous project</span>
						</Button>
						<Button
							variant="ghost"
							size="icon"
							className="absolute right-1 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/95 hover:shadow-xl lg:right-4"
							onClick={onNext}
						>
							<ChevronRight className="h-5 w-5" />
							<span className="sr-only">Next project</span>
						</Button>
					</>
				)}

				{/* Content container with touch handlers */}
				<div
					className="flex h-full max-h-[90vh] flex-col overflow-y-auto px-12 py-6 lg:px-20"
					onTouchStart={onTouchStart}
					onTouchMove={onTouchMove}
					onTouchEnd={onTouchEnd}
				>
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							className="space-y-8"
							variants={contentVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
						>
							{/* Row 1: Image and Header */}
							<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
								{/* Left column - Image */}
								<motion.div
									className="space-y-6"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.1 }}
								>
									{currentProject.image && (
										<div className="relative aspect-video w-full rounded-xl bg-muted">
											<Image
												src={currentProject.image}
												alt={currentProject.title}
												fill
												loading="lazy"
												className="object-contain"
												sizes="(max-width: 1024px) 100vw, 50vw"
											/>
										</div>
									)}
								</motion.div>

								{/* Right column - Header and Description */}
								<motion.div
									className="space-y-6"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: 0.2 }}
								>
									{/* Header */}
									<div className="space-y-4">
										{/* Title first for better hierarchy */}
										<h2 className="text-foreground text-3xl font-semibold">
											{currentProject.title}
										</h2>
										{/* Type and Origin tags side-by-side with wrapping */}
										<div className="flex flex-wrap items-center gap-2">
											{currentProject.type && (
												<span
													className={`text-sm font-bold uppercase tracking-wider ${getProjectTypeClass(currentProject.type)}`}
												>
													{currentProject.type}
												</span>
											)}
											{currentProject.type && currentProject.origin && (
												<span className="text-white/30">•</span>
											)}
											{currentProject.origin && (
												<div
													className={`text-sm font-normal uppercase tracking-wider ${getProjectOriginClass()}`}
												>
													{currentProject.origin}
												</div>
											)}
										</div>
									</div>

									{/* Description */}
									{currentProject.description && (
										<div className="space-y-2">
											<p className="text-white/75">
												{currentProject.description}
											</p>
										</div>
									)}
								</motion.div>
							</div>

							{/* Row 2: Highlight Sections */}
							{currentProject.highlightSections &&
								currentProject.highlightSections.length > 0 && (
									<motion.div
										className={`grid gap-8 ${
											currentProject.highlightSections.length === 1
												? 'grid-cols-1'
												: 'grid-cols-1 lg:grid-cols-2'
										}`}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.4, delay: 0.3 }}
									>
										{currentProject.highlightSections.map((section, index) => (
											<div key={index} className="space-y-2">
												<h3 className="text-foreground text-xl font-semibold">
													{section.title}
												</h3>
												<ul className="list-inside list-disc space-y-1 text-white/75">
													{section.items.map((item, itemIndex) => (
														<li key={itemIndex}>{item}</li>
													))}
												</ul>
											</div>
										))}
									</motion.div>
								)}

							{/* Row 3: Technologies and Links */}
							<motion.div
								className="grid grid-cols-1 gap-8 lg:grid-cols-2"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 0.4 }}
							>
								{/* Technologies */}
								<div className="space-y-2">
									<h3 className="text-foreground text-xl font-semibold">
										Technologies
									</h3>
									<div className="flex flex-wrap gap-2">
										{currentProject.technologies?.map((tech) => (
											<span
												key={tech}
												className="text-foreground rounded-full border border-white/40 bg-muted px-3 py-1 text-sm"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Links */}
								{(() => {
									const hasLiveUrl =
										currentProject.liveUrl &&
										typeof currentProject.liveUrl === 'string' &&
										currentProject.liveUrl.trim() !== '';
									const hasGithubUrl =
										currentProject.githubUrl &&
										typeof currentProject.githubUrl === 'string' &&
										currentProject.githubUrl.trim() !== '';
									const hasValidLinks =
										currentProject.links &&
										Array.isArray(currentProject.links) &&
										currentProject.links.length > 0 &&
										currentProject.links.some(
											(link) =>
												link &&
												link.url &&
												typeof link.url === 'string' &&
												link.url.trim() !== ''
										);

									const hasAnyLinks =
										hasLiveUrl || hasGithubUrl || hasValidLinks;

									if (!hasAnyLinks) return null;

									return (
										<div className="space-y-2">
											<h3 className="text-foreground text-xl font-semibold">
												Links
											</h3>
											<div className="flex flex-wrap gap-4">
												{hasLiveUrl && (
													<Button
														asChild
														className="glass glass-hover flex items-center gap-2 border border-white/20 hover:border-white/40"
													>
														<a
															href={currentProject.liveUrl!}
															target="_blank"
															rel="noopener noreferrer"
														>
															<ExternalLink className="h-4 w-4" />
															View Live
														</a>
													</Button>
												)}
												{hasGithubUrl && (
													<Button
														asChild
														className="glass glass-hover flex items-center gap-2 border border-white/20 hover:border-white/40"
													>
														<a
															href={currentProject.githubUrl!}
															target="_blank"
															rel="noopener noreferrer"
														>
															<Github className="h-4 w-4" />
															View Code
														</a>
													</Button>
												)}
												{hasValidLinks &&
													currentProject.links
														?.filter(
															(link) =>
																link &&
																link.url &&
																typeof link.url === 'string' &&
																link.url.trim() !== '' &&
																link.name &&
																typeof link.name === 'string' &&
																link.name.trim() !== ''
														)
														.map((link) => (
															<Button
																key={link.name}
																asChild
																className="glass glass-hover flex items-center gap-2 border border-white/20 hover:border-white/40"
															>
																<a
																	href={link.url}
																	target="_blank"
																	rel="noopener noreferrer"
																>
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
										</div>
									);
								})()}
							</motion.div>
						</motion.div>
					</AnimatePresence>
				</div>
			</DialogContent>
		</Dialog>
	);
}
