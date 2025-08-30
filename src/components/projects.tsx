/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import {
	Github,
	Globe,
	ArrowRight,
	ArrowLeftCircle,
	ArrowRightCircle,
	ExternalLink,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import Link from 'next/link';
import projects from '@/data/projects.json';
import { DialogDescription } from '@radix-ui/react-dialog';

// ProjectModal component, modeled after featured-work.tsx
const ProjectModal = ({
	project,
	open,
	onOpenChange,
	onPrev,
	onNext,
	disablePrev,
	disableNext,
}: {
	project: any;
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onPrev: () => void;
	onNext: () => void;
	disablePrev: boolean;
	disableNext: boolean;
}) => {
	// Keyboard navigation inside modal
	useEffect(() => {
		if (!open) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowLeft') onPrev();
			if (e.key === 'ArrowRight') onNext();
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [open, onPrev, onNext]);

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
								{project.keyFeatures.map((feature: string, idx: number) => (
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
									{project.technicalHighlights.map(
										(highlight: string, idx: number) => (
											<li key={idx}>{highlight}</li>
										)
									)}
								</ul>
							</div>
						)}
					{/* Technologies */}
					<div className="space-y-2">
						<h3 className="text-xl font-semibold text-text-primary">
							Technologies
						</h3>
						<div className="flex flex-wrap gap-2">
							{project.technologies?.map((tech: string) => (
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
							{project.links.map((link: any) => (
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
};

export default function Projects() {
	const { theme } = useTheme();
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isHeaderVisible, setIsHeaderVisible] = useState(false);
	const [isProjectsVisible, setIsProjectsVisible] = useState(false);
	const [mounted, setMounted] = useState(false);

	const headerRef = useRef(null);
	const projectsRef = useRef(null);

	useEffect(() => {
		setMounted(true);
		const headerObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsHeaderVisible(true);
				}
			},
			{ threshold: 0.1 }
		);
		const projectsObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsProjectsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);
		if (headerRef.current) headerObserver.observe(headerRef.current);
		if (projectsRef.current) projectsObserver.observe(projectsRef.current);
		return () => {
			if (headerRef.current) headerObserver.unobserve(headerRef.current);
			if (projectsRef.current) projectsObserver.unobserve(projectsRef.current);
		};
	}, []);

	return (
		<section
			id="projects"
			className="container mx-auto overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
			ref={projectsRef}
		>
			<h1
				ref={headerRef}
				className={cn(
					'mb-12 transform overflow-y-visible text-end text-4xl font-bold tracking-tight transition-transform duration-1000 md:text-5xl lg:text-6xl',
					mounted && theme === 'light' ? 'text-secondary' : 'text-text-primary',
					isHeaderVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-full opacity-0'
				)}
			>
				Featured <span className="fancy-word">Projects</span>
			</h1>
			<div
				className={cn(
					'space-y-16 transition-transform duration-1000',
					isProjectsVisible
						? 'translate-x-0 opacity-100'
						: 'translate-x-full opacity-0'
				)}
			>
				{projects.map((project, index) => (
					<div key={project.title}>
						<div
							className="group cursor-pointer"
							data-animate="true"
							data-animation={
								index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
							}
							onClick={() => {
								setCurrentProjectIndex(index);
								setIsDialogOpen(true);
							}}
						>
							<div className="transform overflow-hidden rounded-3xl border border-accent/10 bg-gradient-to-br from-primary/5 to-accent/5 p-8 transition-all duration-300 hover:scale-[1.02] hover:border-accent/20 hover:shadow-lg lg:p-12">
								<div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
									<div
										className={cn(
											'order-1',
											'lg:order-none',
											index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
										)}
									>
										<ProjectImage project={project} />
									</div>
									<div
										className={cn(
											'order-2',
											'lg:order-none',
											index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
										)}
									>
										<ProjectInfo project={project} />
									</div>
								</div>
							</div>
						</div>
						<ProjectModal
							project={project}
							open={isDialogOpen && currentProjectIndex === index}
							onOpenChange={(open) => setIsDialogOpen(open)}
							onPrev={() =>
								setCurrentProjectIndex((prev) => Math.max(0, prev - 1))
							}
							onNext={() =>
								setCurrentProjectIndex((prev) =>
									Math.min(projects.length - 1, prev + 1)
								)
							}
							disablePrev={currentProjectIndex === 0}
							disableNext={currentProjectIndex === projects.length - 1}
						/>
					</div>
				))}
			</div>
		</section>
	);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectInfo = ({ project }: { project: any }) => (
	<div className="space-y-6">
		<div>
			<h3 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
				{project.title}
			</h3>
			<p className="mt-2 text-lg text-muted-foreground">{project.blurb}</p>
		</div>
		<div className="flex flex-wrap gap-4">
			<div className="space-y-2">
				<p className="text-sm font-medium">Technologies</p>
				<div className="flex flex-wrap gap-2">
					{project.technologies.map((tech: string) => (
						<span
							key={tech}
							className="text-accent-foreground rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
		<div className="flex justify-center pt-4">
			<Button variant="outline" className="group/btn -ml-4">
				View project details
				<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
			</Button>
		</div>
	</div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectImage = ({ project }: { project: any }) => (
	<div className="relative aspect-[16/10] overflow-hidden rounded-lg from-muted/50 to-muted/10 p-2">
		<Image
			src={project.image}
			alt={project.title}
			fill
			sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			className="object-cover"
		/>
	</div>
);
