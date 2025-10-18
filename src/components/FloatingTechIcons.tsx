'use client';

import React, { useEffect, useRef, useMemo, useState } from 'react';
import {
	FaReact,
	FaNodeJs,
	FaPython,
	FaGitAlt,
	FaGithub,
	FaSass,
	FaBootstrap,
	FaJs,
	FaFigma,
	FaDatabase,
	FaBasketballBall,
	FaDumbbell,
	FaGuitar,
	FaMusic,
	FaApple,
	FaWindows,
	FaPaw,
	// FaPinecone,
} from 'react-icons/fa';
import {
	SiNextdotjs,
	SiTypescript,
	SiMongodb,
	SiPostgresql,
	SiTailwindcss,
	SiExpress,
	SiFramer,
	SiPrisma,
	SiVercel,
	SiZod,
	SiEslint,
	SiPrettier,
	SiGulp,
	SiWebpack,
	SiRadixui,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiCanva,
	SiHtml5,
	SiCss3,
	SiPhp,
	SiWordpress,
	SiPostman,
	SiRedux,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { RiClaudeLine, RiOpenaiFill } from 'react-icons/ri';

interface FloatingTechIconsProps {
	onReady?: () => void;
}

export default function FloatingTechIcons({ onReady }: FloatingTechIconsProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<number>();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const iconsRef = useRef<any[]>([]);
	const elementsRef = useRef<HTMLDivElement[]>([]);
	const mouseRef = useRef({ x: 0, y: 0 });
	const dimensionsRef = useRef({ width: 0, height: 0 });
	const isMobileRef = useRef(false);
	const [ready, setReady] = useState(false);
	const [isInitialized, setIsInitialized] = useState(false);

	const techIcons = useMemo(() => {
		// Development Tools
		const developmentTools = [
			{ name: 'React', icon: FaReact, color: '#61DAFB' },
			{ name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
			{ name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
			{ name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
			{ name: 'Node.js', icon: FaNodeJs, color: '#339933' },
			{ name: 'Express', icon: SiExpress, color: '#000000' },
			{ name: 'Python', icon: FaPython, color: '#3776AB' },
			{ name: 'PHP', icon: SiPhp, color: '#777BB4' },
			{ name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
			{ name: 'CSS3', icon: SiCss3, color: '#1572B6' },
			{ name: 'Sass', icon: FaSass, color: '#CC6699' },
			{ name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
			{ name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
			{ name: 'Redux', icon: SiRedux, color: '#764ABC' },
			{ name: 'Framer Motion', icon: SiFramer, color: '#888888' },
			{ name: 'ShadCN/UI', icon: SiRadixui, color: '456456' },
			{ name: 'OpenAI', icon: RiOpenaiFill, color: '#999999' },
			{ name: 'Claude', icon: RiClaudeLine, color: '#C15F3C' },
		];

		// Database & Backend Tools
		const databaseTools = [
			{ name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
			{ name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
			{ name: 'Database', icon: FaDatabase, color: '#336791' },
			{ name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
			{ name: 'Zod', icon: SiZod, color: '#3E72F1' },
		];

		// Development Environment & Tools
		const devEnvironmentTools = [
			{ name: 'Git', icon: FaGitAlt, color: '#F05032' },
			{ name: 'GitHub', icon: FaGithub, color: '#999999' },
			{ name: 'VSCode', icon: VscVscode, color: '#0085D0' },
			{ name: 'Vercel', icon: SiVercel, color: '#333333' },
			{ name: 'ESLint', icon: SiEslint, color: '#4B32C3' },
			{ name: 'Prettier', icon: SiPrettier, color: '#F7B93E' },
			{ name: 'Gulp', icon: SiGulp, color: '#CF4647' },
			{ name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
			{ name: 'Postman', icon: SiPostman, color: '#FF6C37' },
		];

		// Design Tools
		const designTools = [
			{ name: 'Figma', icon: FaFigma, color: '#F24E1E' },
			{ name: 'Adobe Photoshop', icon: SiAdobephotoshop, color: '#31A8FF' },
			{ name: 'Adobe Illustrator', icon: SiAdobeillustrator, color: '#FF9A00' },
			{ name: 'Canva', icon: SiCanva, color: '#00C4CC' },
		];

		// Misc Tools & Platforms
		const miscTools = [
			{ name: 'WordPress', icon: SiWordpress, color: '#21759B' },
			{ name: 'Apple', icon: FaApple, color: '#999999' },
			{ name: 'Windows', icon: FaWindows, color: '#0078D4' },
		];

		// Personal Interests
		const interests = [
			{ name: 'Basketball', icon: FaBasketballBall, color: '#F48024' },
			{ name: 'Dumbbell', icon: FaDumbbell, color: '#555555' },
			{ name: 'Guitar', icon: FaGuitar, color: '#C1440E' },
			{ name: 'Music', icon: FaMusic, color: '#888888' },
			{ name: 'Paw', icon: FaPaw, color: '#663300' },
		];

		return [
			...developmentTools,
			...databaseTools,
			...devEnvironmentTools,
			...designTools,
			...miscTools,
			...interests,
		];
	}, []);

	// Initialize icons with physics properties - optimized for immediate display
	useEffect(() => {
		// Set default dimensions immediately to prevent layout shift
		dimensionsRef.current = {
			width: typeof window !== 'undefined' ? window.innerWidth : 1920,
			height: typeof window !== 'undefined' ? window.innerHeight : 1080,
		};

		// Detect mobile for performance optimizations
		isMobileRef.current =
			typeof window !== 'undefined' && window.innerWidth < 768;

		const updateDimensions = () => {
			dimensionsRef.current = {
				width: window.innerWidth || 1920,
				height: window.innerHeight || 1080,
			};
			isMobileRef.current = window.innerWidth < 768;
		};

		const initIcons = () => {
			const { width, height } = dimensionsRef.current;
			const iconSize = 64;
			const margin = 100;

			return techIcons.map((icon, index) => {
				const cols = Math.ceil(Math.sqrt(techIcons.length));
				const rows = Math.ceil(techIcons.length / cols);
				const col = index % cols;
				const row = Math.floor(index / cols);

				const baseX =
					(col / (cols - 1)) * (width - iconSize - margin * 2) + margin;
				const baseY =
					(row / (rows - 1)) * (height - iconSize - margin * 2) + margin;

				const x = baseX + (Math.random() - 0.5) * 100;
				const y = baseY + (Math.random() - 0.5) * 100;

				// Better initial floating speed - not too slow, not too fast
				const speed = 0.8 + Math.random() * 0.6;
				const angle = Math.random() * Math.PI * 2;
				const vx = Math.cos(angle) * speed;
				const vy = Math.sin(angle) * speed;

				return {
					...icon,
					id: index,
					x: Math.max(margin, Math.min(width - iconSize - margin, x)),
					y: Math.max(margin, Math.min(height - iconSize - margin, y)),
					vx,
					vy,
					size: iconSize,
					radius: iconSize / 2,
					mass: 0.8 + Math.random() * 0.4,
					scale: 0.8 + Math.random() * 0.3,
					scaleSpeed: 0.0008 + Math.random() * 0.0012,
					scaleDirection: Math.random() > 0.5 ? 1 : -1,
					rotation: Math.random() * 360,
					rotationSpeed: (Math.random() - 0.5) * 0.8,
					opacity: 0.6 + Math.random() * 0.3,
					isActive: false,
				};
			});
		};

		// Initialize immediately with default dimensions
		iconsRef.current = initIcons();
		setIsInitialized(true);
		setReady(true);

		// Defer onReady callback to next tick for better performance
		// Using ref to avoid adding onReady to dependencies (it's a callback from parent)
		const readyCallback = onReady;
		if (readyCallback) {
			requestAnimationFrame(() => readyCallback());
		}

		// Add resize listener
		window.addEventListener('resize', updateDimensions);

		return () => {
			window.removeEventListener('resize', updateDimensions);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [techIcons]); // onReady intentionally excluded - parent callback doesn't change

	// Optimized mouse tracking with container offset - disabled on touch devices
	useEffect(() => {
		// Check if device has hover capability (not a touch device)
		const hasHoverCapability =
			window.matchMedia('(hover: hover)').matches &&
			window.matchMedia('(pointer: fine)').matches;

		if (!hasHoverCapability) {
			// On touch devices, disable mouse tracking completely
			return;
		}

		let rafId: number;

		const handleMouseMove = (e: MouseEvent) => {
			if (rafId) return;

			rafId = requestAnimationFrame(() => {
				// Calculate mouse position relative to the container
				const container = containerRef.current;
				if (container) {
					const rect = container.getBoundingClientRect();
					mouseRef.current = {
						x: e.clientX - rect.left,
						y: e.clientY - rect.top,
					};
				} else {
					mouseRef.current = { x: e.clientX, y: e.clientY };
				}
				rafId = 0;
			});
		};

		document.addEventListener('mousemove', handleMouseMove, { passive: true });
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, []);

	// Optimized collision detection with better physics
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleCollisions = (icons: any[]) => {
		for (let i = 0; i < icons.length; i++) {
			const a = icons[i];

			for (let j = i + 1; j < icons.length; j++) {
				const b = icons[j];

				const dx = b.x - a.x;
				const dy = b.y - a.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const minDistance = a.radius + b.radius;

				if (distance < minDistance && distance > 0) {
					const nx = dx / distance;
					const ny = dy / distance;

					const dvx = b.vx - a.vx;
					const dvy = b.vy - a.vy;
					const dvn = dvx * nx + dvy * ny;

					if (dvn > 0) continue;

					// More energetic collisions that maintain velocity longer
					const restitution = 0.92; // Higher bounciness
					const impulse = (2 * dvn * restitution) / (a.mass + b.mass);

					a.vx += impulse * b.mass * nx;
					a.vy += impulse * b.mass * ny;
					b.vx -= impulse * a.mass * nx;
					b.vy -= impulse * a.mass * ny;

					// Cleaner separation to prevent sticking
					const overlap = minDistance - distance;
					const separationX = (overlap / 2) * nx * 1.05;
					const separationY = (overlap / 2) * ny * 1.05;

					a.x -= separationX;
					a.y -= separationY;
					b.x += separationX;
					b.y += separationY;
				}
			}
		}
	};

	// High-performance animation loop
	useEffect(() => {
		if (!iconsRef.current.length) return;

		let lastTime = performance.now();
		let mouseHasMovedSignificantly = false;
		let lastMousePos = { x: 0, y: 0 };

		const animate = (currentTime: number) => {
			const deltaTime = Math.min(currentTime - lastTime, 32); // Cap delta time to prevent huge jumps
			lastTime = currentTime;

			// Check if mouse has moved significantly to activate icons
			const mouse = mouseRef.current;
			const mouseDx = mouse.x - lastMousePos.x;
			const mouseDy = mouse.y - lastMousePos.y;
			const mouseMovement = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

			if (mouseMovement > 3) {
				// Lower threshold for more responsive activation
				mouseHasMovedSignificantly = true;
				lastMousePos = { ...mouse };
			}

			const icons = iconsRef.current;
			const { width, height } = dimensionsRef.current;

			// Update physics
			for (let i = 0; i < icons.length; i++) {
				const icon = icons[i];

				// Improved mouse interaction - more precise and follows trajectory
				const mouseDx = icon.x + icon.radius - mouse.x;
				const mouseDy = icon.y + icon.radius - mouse.y;
				const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
				const repelRadius = 100; // Larger detection radius for more responsive interaction

				if (mouseDistance < repelRadius && mouseDistance > 0) {
					// Activate this icon when mouse gets close
					icon.isActive = true;

					// More precise repulsion that follows mouse trajectory
					const normalizedDx = mouseDx / mouseDistance;
					const normalizedDy = mouseDy / mouseDistance;

					// Calculate force based on distance (stronger when closer)
					const forceStrength =
						Math.pow((repelRadius - mouseDistance) / repelRadius, 2) * 0.8;

					// Apply force in the direction away from mouse, following trajectory
					const repelX = normalizedDx * forceStrength;
					const repelY = normalizedDy * forceStrength;

					icon.vx += repelX;
					icon.vy += repelY;
				} else {
					// Deactivate icon when mouse moves away
					icon.isActive = false;
				}

				// Always apply floating motion - icons never stop moving
				const timeScale = deltaTime / 16.67;

				// Apply different friction based on activation state
				if (mouseHasMovedSignificantly || icon.isActive) {
					// Very light friction when active for highly dynamic movement
					icon.vx *= 0.9985;
					icon.vy *= 0.9985;
				} else {
					// Slightly more friction when inactive but still floating
					icon.vx *= 0.9995;
					icon.vy *= 0.9995;
				}

				// Ensure minimum floating velocity - icons never stop moving
				const minVelocity = 0.4; // Minimum speed for continuous floating
				const currentSpeed = Math.sqrt(icon.vx * icon.vx + icon.vy * icon.vy);

				if (currentSpeed < minVelocity) {
					// If too slow, add a gentle push in a random direction
					const pushAngle = Math.random() * Math.PI * 2;
					const pushStrength = minVelocity * 0.6;
					icon.vx += Math.cos(pushAngle) * pushStrength;
					icon.vy += Math.sin(pushAngle) * pushStrength;
				}

				// Add gentle random floating motion for organic feel
				if (!icon.isActive && Math.random() < 0.02) {
					// 2% chance per frame
					const floatAngle = Math.random() * Math.PI * 2;
					const floatStrength = 0.1;
					icon.vx += Math.cos(floatAngle) * floatStrength;
					icon.vy += Math.sin(floatAngle) * floatStrength;
				}

				// Always update position with floating motion
				icon.x += icon.vx * timeScale;
				icon.y += icon.vy * timeScale;

				// Wall bouncing with energy retention
				const damping = 0.94; // Good energy retention
				if (icon.x <= 0) {
					icon.x = 0;
					icon.vx = Math.abs(icon.vx) * damping;
				} else if (icon.x >= width - icon.size) {
					icon.x = width - icon.size;
					icon.vx = -Math.abs(icon.vx) * damping;
				}

				if (icon.y <= 0) {
					icon.y = 0;
					icon.vy = Math.abs(icon.vy) * damping;
				} else if (icon.y >= height - icon.size) {
					icon.y = height - icon.size;
					icon.vy = -Math.abs(icon.vy) * damping;
				}

				// Controlled breathing animation with strict bounds
				icon.scale += icon.scaleDirection * icon.scaleSpeed * timeScale;

				// Strict scale bounds to prevent growing/shrinking too much
				if (icon.scale > 1.2) {
					icon.scale = 1.2;
					icon.scaleDirection = -1;
				} else if (icon.scale < 0.7) {
					icon.scale = 0.7;
					icon.scaleDirection = 1;
				}

				// Update rotation
				icon.rotation += icon.rotationSpeed * timeScale;
			}

			// Handle collisions when icons are active or when there's significant movement
			// Skip expensive collision detection on mobile for better performance
			if (mouseHasMovedSignificantly && !isMobileRef.current) {
				handleCollisions(icons);
			}

			// DOM updates
			for (let i = 0; i < icons.length; i++) {
				const icon = icons[i];
				const element = elementsRef.current[i];

				if (element) {
					element.style.transform = `translate3d(${icon.x}px, ${icon.y}px, 0) scale(${icon.scale}) rotate(${icon.rotation}deg)`;
				}
			}

			animationRef.current = requestAnimationFrame(animate);
		};

		animationRef.current = requestAnimationFrame(animate);

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-1000"
			style={{ opacity: isInitialized ? 1 : 0 }}
		>
			<div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />

			{/* Show placeholder dots while initializing for better UX */}
			{!isInitialized && (
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="flex space-x-2">
						{[...Array(8)].map((_, i) => (
							<div
								key={i}
								className="h-2 w-2 animate-pulse rounded-full bg-white/20"
								style={{ animationDelay: `${i * 100}ms` }}
							/>
						))}
					</div>
				</div>
			)}

			{ready &&
				iconsRef.current.map((icon, index) => {
					const IconComponent = icon.icon;
					return (
						<div
							key={`${icon.name}-${icon.id}`}
							ref={(el) => {
								if (el) elementsRef.current[index] = el;
							}}
							className="absolute transition-opacity duration-500 will-change-transform"
							style={{
								left: 0,
								top: 0,
								transform: `translate3d(${icon.x}px, ${icon.y}px, 0) scale(${icon.scale}) rotate(${icon.rotation}deg)`,
								opacity: isInitialized ? icon.opacity : 0,
							}}
						>
							<div
								className="pointer-events-none absolute inset-0 rounded-full opacity-30 blur-xl"
								style={{
									background: `radial-gradient(circle, ${icon.color}60, transparent 70%)`,
									transform: 'scale(1.8)',
								}}
							/>

							<div
								className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 shadow-2xl backdrop-blur-md"
								style={{
									background: `linear-gradient(135deg, ${icon.color}20, ${icon.color}35)`,
									boxShadow: `0 8px 32px ${icon.color}25`,
								}}
							>
								<IconComponent
									className="h-8 w-8"
									style={{
										color: icon.color,
										filter:
											icon.name === 'Next.js' || icon.name === 'Express'
												? 'brightness(0) invert(1)'
												: 'none',
									}}
								/>
							</div>
						</div>
					);
				})}
		</div>
	);
}
