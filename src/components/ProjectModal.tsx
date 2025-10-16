'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import {
	ExternalLink,
	Github,
	ArrowLeftCircle,
	ArrowRightCircle,
	X,
} from 'lucide-react';

// TypeScript interfaces
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
	liveUrl?: string;
	githubUrl?: string;
}

interface ProjectModalProps {
	project: Project | undefined;
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onPrev: () => void;
	onNext: () => void;
	disablePrev: boolean;
	disableNext: boolean;
	projects: Project[];
	currentIndex: number;
}

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

export default function ProjectModal({
	project,
	open,
	onOpenChange,
	onPrev,
	onNext,
	disablePrev,
	disableNext,
	projects,
	currentIndex,
}: ProjectModalProps) {
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

	if (!project) return null;

	const currentProject = projects[currentIndex];

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-h-[90vh] max-w-6xl overflow-hidden border border-white/40 bg-gradient-to-b from-slate-900 to-black p-0">
				{/* Navigation arrows - bigger and better positioned */}
				{projects.length > 1 && (
					<>
						<Button
							variant="ghost"
							size="icon"
							className="hover:text-foreground absolute left-0 top-1/2 z-50 -translate-y-1/2 text-muted-foreground lg:left-1 [&_svg]:h-6 [&_svg]:w-6 [&_svg]:stroke-[1.5]"
							onClick={onPrev}
						>
							<ArrowLeftCircle />
						</Button>
						<Button
							variant="ghost"
							size="icon"
							className="hover:text-foreground absolute right-2 top-1/2 z-50 -translate-y-1/2 text-muted-foreground lg:right-4 [&_svg]:h-6 [&_svg]:w-6 [&_svg]:stroke-[1.5]"
							onClick={onNext}
						>
							<ArrowRightCircle />
						</Button>
					</>
				)}

				<div className="flex h-full max-h-[90vh] flex-col overflow-y-auto px-12 py-6 lg:px-20">
					{/* Three-row layout */}
					<div className="space-y-8">
						{/* Row 1: Image and Header */}
						<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
							{/* Left column - Image */}
							<div className="space-y-6">
								{currentProject.image && (
									<div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
										<Image
											src={currentProject.image}
											alt={currentProject.title}
											fill
											className="object-cover"
											sizes="(max-width: 1024px) 100vw, 50vw"
										/>
									</div>
								)}
							</div>

							{/* Right column - Header and Description */}
							<div className="space-y-6">
								{/* Header */}
								<div className="space-y-4">
									<div
										className="text-sm font-bold uppercase tracking-wider"
										style={{
											color: getProjectTypeColor(
												currentProject.projectType?.color || 'text-primary'
											),
										}}
									>
										{currentProject.projectType?.label || 'Project'}
									</div>
									<h2 className="text-foreground text-3xl font-semibold">
										{currentProject.title}
									</h2>
								</div>

								{/* Description */}
								{currentProject.description && (
									<div className="space-y-2">
										<h3 className="text-foreground sr-only text-xl font-semibold">
											Description
										</h3>
										<p className="text-white/75">
											{currentProject.description}
										</p>
									</div>
								)}
							</div>
						</div>

						{/* Row 2: Key Features and Technical Highlights */}
						{(currentProject.keyFeatures ||
							currentProject.technicalHighlights) && (
							<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
								{/* Key Features */}
								{currentProject.keyFeatures && (
									<div className="space-y-2">
										<h3 className="text-foreground text-xl font-semibold">
											Key Features
										</h3>
										<ul className="list-inside list-disc space-y-1 text-white/75">
											{currentProject.keyFeatures.map((feature, index) => (
												<li key={index}>{feature}</li>
											))}
										</ul>
									</div>
								)}

								{/* Technical Highlights */}
								{currentProject.technicalHighlights &&
									currentProject.technicalHighlights.length > 0 && (
										<div className="space-y-2">
											<h3 className="text-foreground text-xl font-semibold">
												Technical Highlights
											</h3>
											<ul className="list-inside list-disc space-y-1 text-white/75">
												{currentProject.technicalHighlights.map(
													(highlight, index) => (
														<li key={index}>{highlight}</li>
													)
												)}
											</ul>
										</div>
									)}
							</div>
						)}

						{/* Row 3: Technologies and Links */}
						<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
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
							{(currentProject.liveUrl ||
								currentProject.githubUrl ||
								currentProject.links) && (
								<div className="space-y-2">
									<h3 className="text-foreground text-xl font-semibold">
										Links
									</h3>
									<div className="flex flex-wrap gap-4">
										{currentProject.liveUrl && (
											<Button
												asChild
												variant="outline"
												className="flex items-center gap-2"
											>
												<a
													href={currentProject.liveUrl}
													target="_blank"
													rel="noopener noreferrer"
												>
													<ExternalLink className="h-4 w-4" />
													View Live
												</a>
											</Button>
										)}
										{currentProject.githubUrl && (
											<Button
												asChild
												variant="outline"
												className="flex items-center gap-2"
											>
												<a
													href={currentProject.githubUrl}
													target="_blank"
													rel="noopener noreferrer"
												>
													<Github className="h-4 w-4" />
													View Code
												</a>
											</Button>
										)}
										{currentProject.links?.map((link) => (
											<Button
												key={link.name}
												asChild
												variant="outline"
												className="flex items-center gap-2"
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
							)}
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
