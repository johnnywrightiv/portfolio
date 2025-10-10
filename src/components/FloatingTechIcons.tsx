// 'use client';

// import React, { useEffect, useRef, useMemo, useState } from 'react';
// import {
// 	FaReact,
// 	FaNodeJs,
// 	FaPython,
// 	FaGitAlt,
// 	FaGithub,
// 	// FaDocker,
// 	// FaAws,
// 	// FaVuejs,
// 	// FaAngular,
// 	FaSass,
// 	FaBootstrap,
// 	FaJs,
// 	FaFigma,
// 	FaDatabase,
// 	FaBasketballBall,
// 	FaDumbbell,
// 	FaGuitar,
// 	FaMusic,
// 	FaApple,
// 	FaWindows,
// 	FaPaw,
// } from 'react-icons/fa';
// import {
// 	SiNextdotjs,
// 	SiTypescript,
// 	SiMongodb,
// 	SiPostgresql,
// 	SiTailwindcss,
// 	// SiGraphql,
// 	// SiRedis,
// 	SiExpress,
// 	SiFramer,
// 	SiPrisma,
// 	SiVercel,
// 	SiZod,
// 	SiEslint,
// 	SiPrettier,
// 	SiGulp,
// 	SiWebpack,
// 	SiRadixui,
// 	SiAdobephotoshop,
// 	SiAdobeillustrator,
// 	SiAdobexd,
// 	SiCanva,
// 	SiHtml5,
// 	SiCss3,
// 	SiPhp,
// 	SiWordpress,
// 	SiPostman,
// 	SiRedux,
// } from 'react-icons/si';
// import { VscVscode } from 'react-icons/vsc';

// interface FloatingTechIconsProps {
// 	onReady?: () => void;
// }

// const FloatingTechIcons = ({ onReady }: FloatingTechIconsProps) => {
// 	const containerRef = useRef<HTMLDivElement>(null);
// 	const animationRef = useRef<number>();
// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	const iconsRef = useRef<any[]>([]);
// 	const elementsRef = useRef<HTMLDivElement[]>([]);
// 	const mouseRef = useRef({ x: 0, y: 0 });
// 	const dimensionsRef = useRef({ width: 0, height: 0 });
// 	const [ready, setReady] = useState(false);

// 	// Tech icons with their authentic colors
// 	const techIcons = useMemo(
// 		() => [
// 			{ name: 'React', icon: FaReact, color: '#61DAFB' },
// 			{ name: 'Redux', icon: SiRedux, color: '#764ABC' },
// 			{ name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
// 			{ name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
// 			{ name: 'Node.js', icon: FaNodeJs, color: '#339933' },
// 			{ name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
// 			{ name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
// 			{ name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
// 			{ name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
// 			{ name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
// 			{ name: 'Python', icon: FaPython, color: '#3776AB' },
// 			{ name: 'Git', icon: FaGitAlt, color: '#F05032' },
// 			{ name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
// 			{ name: 'CSS3', icon: SiCss3, color: '#1572B6' },
// 			{ name: 'PHP', icon: SiPhp, color: '#777BB4' },
// 			{ name: 'WordPress', icon: SiWordpress, color: '#21759B' },
// 			// { name: 'Docker', icon: FaDocker, color: '#2496ED' },
// 			// { name: 'AWS', icon: FaAws, color: '#FF9900' },
// 			// { name: 'Redis', icon: SiRedis, color: '#DC382D' },
// 			// { name: 'Jest', icon: SiJest, color: '#C21325' },
// 			// { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
// 			// { name: 'Vue.js', icon: FaVuejs, color: '#4FC08D' },
// 			// { name: 'Angular', icon: FaAngular, color: '#DD0031' },
// 			{ name: 'Sass', icon: FaSass, color: '#CC6699' },
// 			{ name: 'Express', icon: SiExpress, color: '#000000' },
// 			{ name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
// 			{ name: 'Database', icon: FaDatabase, color: '#336791' },
// 			{ name: 'Figma', icon: FaFigma, color: '#F24E1E' },
// 			{ name: 'Zod', icon: SiZod, color: '#3E72F1' },
// 			{ name: 'Vercel', icon: SiVercel, color: '#000000' },
// 			{ name: 'ESLint', icon: SiEslint, color: '#4B32C3' },
// 			{ name: 'Prettier', icon: SiPrettier, color: '#F7B93E' },
// 			{ name: 'Gulp', icon: SiGulp, color: '#CF4647' },
// 			{ name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
// 			{ name: 'ShadCN/UI', icon: SiRadixui, color: '#000000' },
// 			{ name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
// 			{ name: 'GitHub', icon: FaGithub, color: '#181717' },
// 			{ name: 'Apple', icon: FaApple, color: '#A2AAAD' },
// 			{ name: 'Windows', icon: FaWindows, color: '#0078D4' },
// 			{ name: 'Postman', icon: SiPostman, color: '#FF6C37' },
// 			{ name: 'VSCode', icon: VscVscode, color: '#000000' },

// 			// Design Tools
// 			{ name: 'Adobe Photoshop', icon: SiAdobephotoshop, color: '#31A8FF' },
// 			{ name: 'Adobe Illustrator', icon: SiAdobeillustrator, color: '#FF9A00' },
// 			{ name: 'Adobe XD', icon: SiAdobexd, color: '#FF61F6' },
// 			{ name: 'Canva', icon: SiCanva, color: '#00C4CC' },

// 			// Interests
// 			{ name: 'Basketball', icon: FaBasketballBall, color: '#F48024' },
// 			{ name: 'Dumbbell', icon: FaDumbbell, color: '#555555' },
// 			{ name: 'Guitar', icon: FaGuitar, color: '#C1440E' },
// 			{ name: 'Music', icon: FaMusic, color: '#888888' },
// 			{ name: 'Paw', icon: FaPaw, color: '#663300' },
// 		],
// 		[]
// 	);

// 	// Initialize icons with physics properties
// 	useEffect(() => {
// 		const updateDimensions = () => {
// 			dimensionsRef.current = {
// 				width: window.innerWidth || 1920,
// 				height: window.innerHeight || 1080,
// 			};
// 		};

// 		const initializeWhenReady = () => {
// 			updateDimensions();

// 			const initIcons = () => {
// 				const { width, height } = dimensionsRef.current;
// 				const iconSize = 64;
// 				const margin = 100;

// 				return techIcons.map((icon, index) => {
// 					const cols = Math.ceil(Math.sqrt(techIcons.length));
// 					const rows = Math.ceil(techIcons.length / cols);
// 					const col = index % cols;
// 					const row = Math.floor(index / cols);

// 					const baseX =
// 						(col / (cols - 1)) * (width - iconSize - margin * 2) + margin;
// 					const baseY =
// 						(row / (rows - 1)) * (height - iconSize - margin * 2) + margin;

// 					const x = baseX + (Math.random() - 0.5) * 100;
// 					const y = baseY + (Math.random() - 0.5) * 100;

// 					// Better initial floating speed - not too slow, not too fast
// 					const speed = 0.8 + Math.random() * 0.6; // Increased from 0.3-0.7
// 					const angle = Math.random() * Math.PI * 2;
// 					const vx = Math.cos(angle) * speed;
// 					const vy = Math.sin(angle) * speed;

// 					return {
// 						...icon,
// 						id: index,
// 						x: Math.max(margin, Math.min(width - iconSize - margin, x)),
// 						y: Math.max(margin, Math.min(height - iconSize - margin, y)),
// 						vx,
// 						vy,
// 						size: iconSize,
// 						radius: iconSize / 2,
// 						mass: 0.8 + Math.random() * 0.4, // Slight mass variation for more realistic collisions
// 						scale: 0.8 + Math.random() * 0.3, // Back to original scale range
// 						scaleSpeed: 0.0008 + Math.random() * 0.0012, // Back to original slower scale speed
// 						scaleDirection: Math.random() > 0.5 ? 1 : -1,
// 						rotation: Math.random() * 360,
// 						rotationSpeed: (Math.random() - 0.5) * 0.8, // Slower rotation
// 						opacity: 0.6 + Math.random() * 0.3,
// 						isActive: false, // Track if icon has been activated by mouse
// 					};
// 				});
// 			};

// 			iconsRef.current = initIcons();
// 			setReady(true);
// 			if (onReady) onReady();

// 			if (containerRef.current) {
// 				containerRef.current.style.opacity = '1';
// 			}
// 		};

// 		initializeWhenReady();
// 		window.addEventListener('resize', updateDimensions);

// 		return () => {
// 			window.removeEventListener('resize', updateDimensions);
// 		};
// 	}, [techIcons, onReady]);

// 	// Optimized mouse tracking
// 	useEffect(() => {
// 		let rafId: number;

// 		const handleMouseMove = (e: MouseEvent) => {
// 			if (rafId) return;

// 			rafId = requestAnimationFrame(() => {
// 				mouseRef.current = { x: e.clientX, y: e.clientY };
// 				rafId = 0;
// 			});
// 		};

// 		document.addEventListener('mousemove', handleMouseMove, { passive: true });
// 		return () => {
// 			document.removeEventListener('mousemove', handleMouseMove);
// 			if (rafId) cancelAnimationFrame(rafId);
// 		};
// 	}, []);

// 	// Optimized collision detection with better physics
// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	const handleCollisions = (icons: any[]) => {
// 		for (let i = 0; i < icons.length; i++) {
// 			const a = icons[i];

// 			for (let j = i + 1; j < icons.length; j++) {
// 				const b = icons[j];

// 				const dx = b.x - a.x;
// 				const dy = b.y - a.y;
// 				const distance = Math.sqrt(dx * dx + dy * dy);
// 				const minDistance = a.radius + b.radius;

// 				if (distance < minDistance && distance > 0) {
// 					const nx = dx / distance;
// 					const ny = dy / distance;

// 					const dvx = b.vx - a.vx;
// 					const dvy = b.vy - a.vy;
// 					const dvn = dvx * nx + dvy * ny;

// 					if (dvn > 0) continue;

// 					// More energetic collisions that maintain velocity longer
// 					const restitution = 0.92; // Higher bounciness
// 					const impulse = (2 * dvn * restitution) / (a.mass + b.mass);

// 					a.vx += impulse * b.mass * nx;
// 					a.vy += impulse * b.mass * ny;
// 					b.vx -= impulse * a.mass * nx;
// 					b.vy -= impulse * a.mass * ny;

// 					// Cleaner separation to prevent sticking
// 					const overlap = minDistance - distance;
// 					const separationX = (overlap / 2) * nx * 1.05;
// 					const separationY = (overlap / 2) * ny * 1.05;

// 					a.x -= separationX;
// 					a.y -= separationY;
// 					b.x += separationX;
// 					b.y += separationY;
// 				}
// 			}
// 		}
// 	};

// 	// High-performance animation loop
// 	useEffect(() => {
// 		if (!iconsRef.current.length) return;

// 		let lastTime = performance.now();
// 		let mouseHasMovedSignificantly = false;
// 		let lastMousePos = { x: 0, y: 0 };

// 		const animate = (currentTime: number) => {
// 			const deltaTime = Math.min(currentTime - lastTime, 32); // Cap delta time to prevent huge jumps
// 			lastTime = currentTime;

// 			// Check if mouse has moved significantly to activate icons
// 			const mouse = mouseRef.current;
// 			const mouseDx = mouse.x - lastMousePos.x;
// 			const mouseDy = mouse.y - lastMousePos.y;
// 			const mouseMovement = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

// 			if (mouseMovement > 10) {
// 				// Threshold for significant movement
// 				mouseHasMovedSignificantly = true;
// 				lastMousePos = { ...mouse };
// 			}

// 			const icons = iconsRef.current;
// 			const { width, height } = dimensionsRef.current;

// 			// Update physics
// 			for (let i = 0; i < icons.length; i++) {
// 				const icon = icons[i];

// 				// Mouse interaction - activate icons and apply repulsion
// 				const mouseDx = icon.x + icon.radius - mouse.x;
// 				const mouseDy = icon.y + icon.radius - mouse.y;
// 				const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
// 				const repelRadius = 100;

// 				if (mouseDistance < repelRadius && mouseDistance > 0) {
// 					// Activate this icon when mouse gets close
// 					icon.isActive = true;

// 					const repelForce =
// 						((repelRadius - mouseDistance) / repelRadius) * 0.4;
// 					const repelX = (mouseDx / mouseDistance) * repelForce;
// 					const repelY = (mouseDy / mouseDistance) * repelForce;

// 					icon.vx += repelX;
// 					icon.vy += repelY;
// 				}

// 				// Only apply active movement if mouse has moved significantly or icon is active
// 				if (mouseHasMovedSignificantly || icon.isActive) {
// 					// Much lighter friction to maintain velocity longer
// 					icon.vx *= 0.9985; // Less friction than before
// 					icon.vy *= 0.9985;

// 					// Update position
// 					const timeScale = deltaTime / 16.67;
// 					icon.x += icon.vx * timeScale;
// 					icon.y += icon.vy * timeScale;
// 				} else {
// 					// Normal floating motion when inactive (not too slow)
// 					const timeScale = deltaTime / 16.67;
// 					icon.x += icon.vx * timeScale * 0.8; // Less reduction than before
// 					icon.y += icon.vy * timeScale * 0.8;
// 				}

// 				// Wall bouncing with better energy retention
// 				const damping = 0.92; // Better energy retention
// 				if (icon.x <= 0) {
// 					icon.x = 0;
// 					icon.vx = Math.abs(icon.vx) * damping;
// 				} else if (icon.x >= width - icon.size) {
// 					icon.x = width - icon.size;
// 					icon.vx = -Math.abs(icon.vx) * damping;
// 				}

// 				if (icon.y <= 0) {
// 					icon.y = 0;
// 					icon.vy = Math.abs(icon.vy) * damping;
// 				} else if (icon.y >= height - icon.size) {
// 					icon.y = height - icon.size;
// 					icon.vy = -Math.abs(icon.vy) * damping;
// 				}

// 				// Controlled breathing animation with strict bounds
// 				const timeScale = deltaTime / 16.67;
// 				icon.scale += icon.scaleDirection * icon.scaleSpeed * timeScale;

// 				// Strict scale bounds to prevent growing/shrinking too much
// 				if (icon.scale > 1.2) {
// 					icon.scale = 1.2;
// 					icon.scaleDirection = -1;
// 				} else if (icon.scale < 0.7) {
// 					icon.scale = 0.7;
// 					icon.scaleDirection = 1;
// 				}

// 				// Update rotation
// 				icon.rotation += icon.rotationSpeed * timeScale;
// 			}

// 			// Handle collisions only if icons are active
// 			if (mouseHasMovedSignificantly) {
// 				handleCollisions(icons);
// 			}

// 			// DOM updates
// 			for (let i = 0; i < icons.length; i++) {
// 				const icon = icons[i];
// 				const element = elementsRef.current[i];

// 				if (element) {
// 					element.style.transform = `translate3d(${icon.x}px, ${icon.y}px, 0) scale(${icon.scale}) rotate(${icon.rotation}deg)`;
// 				}
// 			}

// 			animationRef.current = requestAnimationFrame(animate);
// 		};

// 		animationRef.current = requestAnimationFrame(animate);

// 		return () => {
// 			if (animationRef.current) {
// 				cancelAnimationFrame(animationRef.current);
// 			}
// 		};
// 	}, []);

// 	return (
// 		<div
// 			ref={containerRef}
// 			className="pointer-events-none absolute inset-0 overflow-hidden"
// 		>
// 			<div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />

// 			{ready &&
// 				iconsRef.current.map((icon, index) => {
// 					const IconComponent = icon.icon;
// 					return (
// 						<div
// 							key={`${icon.name}-${icon.id}`}
// 							ref={(el) => {
// 								if (el) elementsRef.current[index] = el;
// 							}}
// 							className="absolute will-change-transform"
// 							style={{
// 								left: 0,
// 								top: 0,
// 								transform: `translate3d(${icon.x}px, ${icon.y}px, 0) scale(${icon.scale}) rotate(${icon.rotation}deg)`,
// 								opacity: icon.opacity,
// 							}}
// 						>
// 							<div
// 								className="pointer-events-none absolute inset-0 rounded-full opacity-30 blur-xl"
// 								style={{
// 									background: `radial-gradient(circle, ${icon.color}60, transparent 70%)`,
// 									transform: 'scale(1.8)',
// 								}}
// 							/>

// 							<div
// 								className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 shadow-2xl backdrop-blur-sm"
// 								style={{
// 									background: `linear-gradient(135deg, ${icon.color}25, ${icon.color}45)`,
// 									boxShadow: `0 8px 32px ${icon.color}30`,
// 								}}
// 							>
// 								<IconComponent
// 									className="h-8 w-8"
// 									style={{
// 										color: icon.color,
// 										filter:
// 											icon.name === 'Next.js' || icon.name === 'Express'
// 												? 'brightness(0) invert(1)'
// 												: 'none',
// 									}}
// 								/>
// 							</div>
// 						</div>
// 					);
// 				})}
// 		</div>
// 	);
// };

// export default FloatingTechIcons;

'use client';

import React, { useEffect, useRef, useMemo, useState } from 'react';
import {
	FaReact,
	FaNodeJs,
	FaPython,
	FaGitAlt,
	FaGithub,
	// FaDocker,
	// FaAws,
	// FaVuejs,
	// FaAngular,
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
} from 'react-icons/fa';
import {
	SiNextdotjs,
	SiTypescript,
	SiMongodb,
	SiPostgresql,
	SiTailwindcss,
	// SiGraphql,
	// SiRedis,
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
	SiAdobexd,
	SiCanva,
	SiHtml5,
	SiCss3,
	SiPhp,
	SiWordpress,
	SiPostman,
	SiRedux,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

interface FloatingTechIconsProps {
	onReady?: () => void;
}

const FloatingTechIcons = ({ onReady }: FloatingTechIconsProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<number>();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const iconsRef = useRef<any[]>([]);
	const elementsRef = useRef<HTMLDivElement[]>([]);
	const mouseRef = useRef({ x: 0, y: 0 });
	const dimensionsRef = useRef({ width: 0, height: 0 });
	const [ready, setReady] = useState(false);

	// Tech icons with their authentic colors
	const techIcons = useMemo(
		() => [
			{ name: 'React', icon: FaReact, color: '#61DAFB' },
			{ name: 'Redux', icon: SiRedux, color: '#764ABC' },
			{ name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
			{ name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
			{ name: 'Node.js', icon: FaNodeJs, color: '#339933' },
			{ name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
			{ name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
			{ name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
			{ name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
			{ name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
			{ name: 'Python', icon: FaPython, color: '#3776AB' },
			{ name: 'Git', icon: FaGitAlt, color: '#F05032' },
			{ name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
			{ name: 'CSS3', icon: SiCss3, color: '#1572B6' },
			{ name: 'PHP', icon: SiPhp, color: '#777BB4' },
			{ name: 'WordPress', icon: SiWordpress, color: '#21759B' },
			// { name: 'Docker', icon: FaDocker, color: '#2496ED' },
			// { name: 'AWS', icon: FaAws, color: '#FF9900' },
			// { name: 'Redis', icon: SiRedis, color: '#DC382D' },
			// { name: 'Jest', icon: SiJest, color: '#C21325' },
			// { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
			// { name: 'Vue.js', icon: FaVuejs, color: '#4FC08D' },
			// { name: 'Angular', icon: FaAngular, color: '#DD0031' },
			{ name: 'Sass', icon: FaSass, color: '#CC6699' },
			{ name: 'Express', icon: SiExpress, color: '#000000' },
			{ name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
			{ name: 'Database', icon: FaDatabase, color: '#336791' },
			{ name: 'Figma', icon: FaFigma, color: '#F24E1E' },
			{ name: 'Zod', icon: SiZod, color: '#3E72F1' },
			{ name: 'Vercel', icon: SiVercel, color: '#000000' },
			{ name: 'ESLint', icon: SiEslint, color: '#4B32C3' },
			{ name: 'Prettier', icon: SiPrettier, color: '#F7B93E' },
			{ name: 'Gulp', icon: SiGulp, color: '#CF4647' },
			{ name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
			{ name: 'ShadCN/UI', icon: SiRadixui, color: '#000000' },
			{ name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
			{ name: 'GitHub', icon: FaGithub, color: '#181717' },
			{ name: 'Apple', icon: FaApple, color: '#A2AAAD' },
			{ name: 'Windows', icon: FaWindows, color: '#0078D4' },
			{ name: 'Postman', icon: SiPostman, color: '#FF6C37' },
			{ name: 'VSCode', icon: VscVscode, color: '#000000' },

			// Design Tools
			{ name: 'Adobe Photoshop', icon: SiAdobephotoshop, color: '#31A8FF' },
			{ name: 'Adobe Illustrator', icon: SiAdobeillustrator, color: '#FF9A00' },
			{ name: 'Adobe XD', icon: SiAdobexd, color: '#FF61F6' },
			{ name: 'Canva', icon: SiCanva, color: '#00C4CC' },

			// Interests
			{ name: 'Basketball', icon: FaBasketballBall, color: '#F48024' },
			{ name: 'Dumbbell', icon: FaDumbbell, color: '#555555' },
			{ name: 'Guitar', icon: FaGuitar, color: '#C1440E' },
			{ name: 'Music', icon: FaMusic, color: '#888888' },
			{ name: 'Paw', icon: FaPaw, color: '#663300' },
		],
		[]
	);

	// Initialize icons with physics properties
	useEffect(() => {
		const updateDimensions = () => {
			dimensionsRef.current = {
				width: window.innerWidth || 1920,
				height: window.innerHeight || 1080,
			};
		};

		const initializeWhenReady = () => {
			updateDimensions();

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

			iconsRef.current = initIcons();
			setReady(true);
			if (onReady) onReady();

			if (containerRef.current) {
				containerRef.current.style.opacity = '1';
			}
		};

		initializeWhenReady();
		window.addEventListener('resize', updateDimensions);

		return () => {
			window.removeEventListener('resize', updateDimensions);
		};
	}, [techIcons, onReady]);

	// Optimized mouse tracking
	useEffect(() => {
		let rafId: number;

		const handleMouseMove = (e: MouseEvent) => {
			if (rafId) return;

			rafId = requestAnimationFrame(() => {
				mouseRef.current = { x: e.clientX, y: e.clientY };
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
					const restitution = 0.92;
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
			const deltaTime = Math.min(currentTime - lastTime, 32);
			lastTime = currentTime;

			// Check if mouse has moved significantly to activate icons
			const mouse = mouseRef.current;
			const mouseDx = mouse.x - lastMousePos.x;
			const mouseDy = mouse.y - lastMousePos.y;
			const mouseMovement = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

			if (mouseMovement > 10) {
				mouseHasMovedSignificantly = true;
				lastMousePos = { ...mouse };
			}

			const icons = iconsRef.current;
			const { width, height } = dimensionsRef.current;

			// Update physics
			for (let i = 0; i < icons.length; i++) {
				const icon = icons[i];

				// Mouse interaction - activate icons and apply repulsion
				const mouseDx = icon.x + icon.radius - mouse.x;
				const mouseDy = icon.y + icon.radius - mouse.y;
				const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
				const repelRadius = 100;

				if (mouseDistance < repelRadius && mouseDistance > 0) {
					icon.isActive = true;

					const repelForce =
						((repelRadius - mouseDistance) / repelRadius) * 0.4;
					const repelX = (mouseDx / mouseDistance) * repelForce;
					const repelY = (mouseDy / mouseDistance) * repelForce;

					icon.vx += repelX;
					icon.vy += repelY;
				}

				// Apply minimal friction to maintain free floating motion
				if (mouseHasMovedSignificantly || icon.isActive) {
					// Very light friction - icons keep moving freely for much longer
					icon.vx *= 0.999;
					icon.vy *= 0.999;
				} else {
					// Even less friction for base floating - icons stay lively
					icon.vx *= 0.9995;
					icon.vy *= 0.9995;
				}

				// Update position
				const timeScale = deltaTime / 16.67;
				icon.x += icon.vx * timeScale;
				icon.y += icon.vy * timeScale;

				// Wall bouncing with great energy retention
				const damping = 0.94;
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
				const timeScale2 = deltaTime / 16.67;
				icon.scale += icon.scaleDirection * icon.scaleSpeed * timeScale2;

				if (icon.scale > 1.2) {
					icon.scale = 1.2;
					icon.scaleDirection = -1;
				} else if (icon.scale < 0.7) {
					icon.scale = 0.7;
					icon.scaleDirection = 1;
				}

				// Update rotation
				icon.rotation += icon.rotationSpeed * timeScale2;
			}

			// Handle collisions
			if (mouseHasMovedSignificantly) {
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
			className="pointer-events-none absolute inset-0 overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />

			{ready &&
				iconsRef.current.map((icon, index) => {
					const IconComponent = icon.icon;
					return (
						<div
							key={`${icon.name}-${icon.id}`}
							ref={(el) => {
								if (el) elementsRef.current[index] = el;
							}}
							className="absolute will-change-transform"
							style={{
								left: 0,
								top: 0,
								transform: `translate3d(${icon.x}px, ${icon.y}px, 0) scale(${icon.scale}) rotate(${icon.rotation}deg)`,
								opacity: icon.opacity,
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
								className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 shadow-2xl backdrop-blur-sm"
								style={{
									background: `linear-gradient(135deg, ${icon.color}25, ${icon.color}45)`,
									boxShadow: `0 8px 32px ${icon.color}30`,
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
};

export default FloatingTechIcons;
