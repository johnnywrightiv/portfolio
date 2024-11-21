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

export default function Projects() {
	const { theme } = useTheme();
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

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
  }, [isDialogOpen, currentProjectIndex]);
  
    useEffect(() => {
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
			className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
			ref={projectsRef}
		>
			<h1
				ref={headerRef}
				className={cn(
					'overflow-y-visible mb-12 transform text-end text-4xl font-bold tracking-tight transition-transform duration-1000 md:text-5xl lg:text-6xl',
					theme === 'light' ? 'text-secondary' : 'text-foreground',
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
								<div className="from-primary/5 to-accent/5 border-accent/10 hover:border-accent/20 transform overflow-hidden rounded-3xl border bg-gradient-to-br p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg lg:p-12">
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
						<DialogContent className="max-h-[95vh] w-[95vw] max-w-7xl overflow-y-auto">
							<DialogHeader>
								<DialogTitle className="text-3xl font-bold">
									{project.title}
								</DialogTitle>
							</DialogHeader>
							<div className="mt-6 grid gap-8 lg:grid-cols-2">
								<div>
									<div className="relative aspect-video w-full overflow-hidden rounded-lg">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover"
										/>
									</div>
								</div>
								{/* Left Column */}
								<div className="space-y-8">
									{/* Description */}
									<p className="text-muted-foreground text-xl leading-relaxed">
										{project.description}
									</p>
								</div>
								{/* Right Column */}
							</div>
							{/* Tags */}
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className="bg-accent/10 border-accent/50 text-accent-foreground rounded-full border px-4 py-2 text-base"
									>
										{tech}
									</span>
								))}
							</div>
							{/* Links */}
							<div className="flex flex-wrap justify-center gap-4 md:justify-end">
								{project.links.map((link) => (
									<Button
										key={link.name}
										variant="outline"
										className={cn(
											'flex items-center gap-2 py-6 text-lg',
											link.name.includes('GitHub') ||
											link.name.includes('Code')
												? 'border-primary hover:bg-primary/10 text-muted-foreground'
												: 'from-primary to-accent text-primary-foreground hover:text-primary-foreground bg-gradient-to-r hover:opacity-90'
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
											link.name.includes('Code')
                       ? (
												<Github className="h-5 w-5" />
											) : (
												<Globe className="h-5 w-5" />
											)}
											{link.name}
										</Link>
									</Button>
								))}
							</div>
							{/* Navigation Buttons */}
							<div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between">
								<Button
									variant="ghost"
									size="icon"
									className="hover:bg-background/80 bg-background/50 rounded-full p-2"
									onClick={handlePrevProject}
									disabled={currentProjectIndex === 0}
								>
									<ArrowLeftCircle className="h-8 w-8" />
								</Button>
								<Button
									variant="ghost"
									size="icon"
									className="hover:bg-background/80 bg-background/50 rounded-full p-2"
									onClick={handleNextProject}
									disabled={currentProjectIndex === projects.length - 1}
								>
									<ArrowRightCircle className="h-8 w-8" />
								</Button>
							</div>
						</DialogContent>
					</Dialog>
				))}
			</div>
		</section>
	);
}

const ProjectInfo = ({ project }: { project: any }) => (
	<div className="space-y-6">
		<div>
			<h3 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
				{project.title}
			</h3>
			<p className="text-muted-foreground mt-2 text-lg">{project.blurb}</p>
		</div>
		<div className="flex flex-wrap gap-4">
			<div className="space-y-2">
				<p className="text-sm font-medium">Technologies</p>
				<div className="flex flex-wrap gap-2">
					{project.technologies.map((tech: string) => (
						<span
							key={tech}
							className="bg-accent/10 border-accent/50 text-accent-foreground rounded-full border px-3 py-1 text-xs"
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
				className="group/btn text-muted-foreground border-secondary hover:bg-primary/5 -ml-4"
			>
				View project details
				<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
			</Button>
    </div>
	</div>
);

const ProjectImage = ({ project }: { project: any }) => (
	<div className="from-muted/50 to-muted/10 relative aspect-[16/10] overflow-hidden rounded-lg p-2">
		<Image
			src={project.image}
			alt={project.title}
			fill
			className="object-cover"
		/>
	</div>
);