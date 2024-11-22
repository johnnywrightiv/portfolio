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

export default function Projects() {
	const { theme } = useTheme();
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isHeaderVisible, setIsHeaderVisible] = useState(false);
	const [isProjectsVisible, setIsProjectsVisible] = useState(false);
	const [mounted, setMounted] = useState(false);

	const headerRef = useRef(null);
	const projectsRef = useRef(null);

	const handleNextProject = (e?: React.MouseEvent) => {
		e?.stopPropagation();
		if (currentProjectIndex < projects.length - 1) {
			setCurrentProjectIndex((prev) => prev + 1);
		}
	};

	const handlePrevProject = (e?: React.MouseEvent) => {
		e?.stopPropagation();
		if (currentProjectIndex > 0) {
			setCurrentProjectIndex((prev) => prev - 1);
		}
	};

	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (!isDialogOpen) return;

			if (e.key === 'ArrowRight') {
				handleNextProject();
			} else if (e.key === 'ArrowLeft') {
				handlePrevProject();
			}
		};

		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [isDialogOpen, currentProjectIndex, handleNextProject, handlePrevProject]);

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

		if (headerRef.current) {
			headerObserver.observe(headerRef.current);
		}
		if (projectsRef.current) {
			projectsObserver.observe(projectsRef.current);
		}

		return () => {
			if (headerRef.current) {
				headerObserver.unobserve(headerRef.current);
			}
			if (projectsRef.current) {
				projectsObserver.unobserve(projectsRef.current);
			}
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
					mounted && theme === 'light' ? 'text-secondary' : 'text-foreground',
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
					<Dialog
						key={project.title}
						open={isDialogOpen && currentProjectIndex === index}
						onOpenChange={(open) => {
							setIsDialogOpen(open);
							if (open) setCurrentProjectIndex(index);
						}}
					>
						<DialogTrigger asChild>
							<div
								className="group cursor-pointer"
								data-animate="true"
								data-animation={
									index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
								}
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
						</DialogTrigger>
						<DialogContent className="max-h-[98vh] w-[95vw] max-w-7xl overflow-y-auto">
							<DialogHeader>
								<DialogTitle className="text-3xl font-bold">
									{project.title}
								</DialogTitle>
								<DialogDescription className="hidden">
									project details
								</DialogDescription>
							</DialogHeader>
							<div className="relative space-y-8">
								<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
									<div className="col-span-2 space-y-6">
										<div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
											<Image
												src={project.image}
												alt={project.title}
												fill
												className="object-cover"
											/>
										</div>
										<p className="text-xl leading-relaxed text-muted-foreground">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech) => (
												<span
													key={tech}
													className="rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-sm text-accent-foreground"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
									<div className="flex flex-col justify-between space-y-12">
										<div className="space-y-4 text-xl">
											<div className="rounded-lg bg-muted/10 p-4">
												<h3 className="mb-2 font-semibold">Key Features</h3>
												<ul className="ml-4 list-disc space-y-1 text-muted-foreground">
													{project.keyFeatures.map((feature, index) => (
														<li key={index}>{feature}</li>
													))}
												</ul>
											</div>
											<div className="rounded-lg bg-muted/10 p-4">
												<h3 className="mb-2 font-semibold">
													Technical Highlights
												</h3>
												<ul className="ml-4 list-disc space-y-1 text-muted-foreground">
													{project.technicalHighlights.map(
														(highlight, index) => (
															<li key={index}>{highlight}</li>
														)
													)}
												</ul>
											</div>
										</div>
										<div className="flex flex-wrap justify-center gap-4 sm:justify-end">
											{project.links.map((link) => (
												<Button
													key={link.name}
													variant="outline"
													className={cn(
														'flex items-center gap-2 py-6 text-lg',
														link.name.includes('GitHub') ||
															link.name.includes('Code')
															? 'border-primary text-muted-foreground hover:bg-primary/10'
															: 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:text-primary-foreground hover:opacity-90'
													)}
													size="lg"
													asChild
												>
													<Link
														href={link.url}
														target="_blank"
														rel="noopener noreferrer"
													>
														{link.name.includes('GitHub') ||
														link.name.includes('Code') ? (
															<Github className="h-5 w-5" />
														) : (
															<Globe className="h-5 w-5" />
														)}
														{link.name}
													</Link>
												</Button>
											))}
										</div>
									</div>
								</div>
								<div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between">
									<Button
										variant="ghost"
										size="icon"
										className="rounded-full bg-background/50 p-2 hover:bg-background/80"
										onClick={handlePrevProject}
										disabled={currentProjectIndex === 0}
									>
										<ArrowLeftCircle className="h-8 w-8" />
									</Button>
									<Button
										variant="ghost"
										size="icon"
										className="rounded-full bg-background/50 p-2 hover:bg-background/80"
										onClick={handleNextProject}
										disabled={currentProjectIndex === projects.length - 1}
									>
										<ArrowRightCircle className="h-8 w-8" />
									</Button>
								</div>
							</div>
						</DialogContent>
					</Dialog>
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
							className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs text-accent-foreground"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
		<div className="flex justify-center pt-4">
			<Button
				variant="outline"
				className="group/btn -ml-4 border-secondary text-muted-foreground hover:bg-primary/5"
			>
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
