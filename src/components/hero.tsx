'use client';
import { Card } from '@/components/ui/card';
import { ChevronDown, Code, Smartphone, Bot, Rocket } from 'lucide-react';
import FloatingTechIcons from './FloatingTechIcons';
import { motion } from 'framer-motion';

// Vibrant yet subtle palettes (aligned with theme tokens)
const heroGradientPalettes: string[][] = [
	['#ff9b26', '#ff6b6b', '#6b21ef'],
	['#34d399', '#06b6d4', '#3b82f6'],
	['#f59e0b', '#ef4444', '#8b5cf6'],
	['#10b981', '#3b82f6', '#8b5cf6'],
];

// Mouse tracking handler for hero cards
const handleHeroMouseMove = (
	e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
	const target = e.currentTarget as HTMLDivElement;
	const rect = target.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;
	target.style.setProperty('--mouse-x', `${x}px`);
	target.style.setProperty('--mouse-y', `${y}px`);
};

// Animation variants

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
		},
	},
};

const cardVariants = {
	hidden: { y: 20 },
	visible: {
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut' as const },
	},
};

const bounceVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut' as const, delay: 1.2 },
	},
};

const continuousBounce = {
	animate: {
		y: [0, -8, 0],
		transition: {
			duration: 2,
			repeat: Infinity,
			ease: 'easeInOut' as const,
		},
	},
};

interface HeroSectionProps {
	onIconsReady?: () => void;
}

export default function HeroSection({ onIconsReady }: HeroSectionProps) {
	const scrollToAbout = () => {
		document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
	};

	const handleIconsReady = () => {
		onIconsReady?.();
	};

	return (
		<section
			id="home"
			className="bg-gradient-hero-enhanced relative flex min-h-screen items-center justify-center overflow-hidden pt-16 md:pt-0"
		>
			<FloatingTechIcons onReady={handleIconsReady} />

			{/* Background Image Overlay */}
			<div
				className="absolute inset-0 opacity-5"
				style={{
					backgroundImage: 'url(/images/hero-background3.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			></div>

			{/* Gradient Overlay */}
			<div className="bg-gradient-hero-overlay absolute inset-0"></div>

			<div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center text-center">
					{/* Profile Image - Now on top */}
					{/* <motion.div
						className="mb-6 sm:mb-8"
						initial={{ opacity: 0, y: 20, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
					>
						<div className="glass rounded-full p-2 shadow-2xl">
							<Image
								src="/images/profile-picture.jpg"
								alt="John Wright Full-Stack Developer Headshot"
								width={120}
								height={120}
								className="rounded-full"
								priority
							/>
						</div>
					</motion.div> */}

					{/* Welcome Message */}
					{/* <motion.div
						className="mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
					>
						<p
							className="text-white/75"
							style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
						>
							Welcome to my portfolio!{' '}
							<span className="animate-wave inline-block">👋</span>
						</p>
					</motion.div> */}

					{/* Main Heading with Name for SEO */}
					<motion.div
						className="mb-6 max-w-4xl"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
					>
						<h1
							className="text-foreground mb-4 font-bold leading-tight"
							style={{ fontSize: 'clamp(3rem, 6vw, 4rem)' }}
						>
							Hi, I&apos;m{' '}
							<span className="bg-gradient-to-r from-[#ff9b26] via-[#6b21ef] to-[#34d399] bg-clip-text text-transparent">
								John Wright
							</span>
						</h1>
						<h2
							className="mb-4 text-white/75"
							style={{ fontSize: 'clamp(1.4rem, 2vw, 1.5rem)' }}
						>
							Full-Stack Developer with a passion for user experience,
							innovation, and results.
						</h2>
					</motion.div>

					{/* Skills Cards - Mobile Optimized */}
					<motion.div
						className="mb-6 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
						initial="hidden"
						animate="visible"
						variants={staggerContainer}
					>
						<motion.div variants={cardVariants}>
							<Card
								className="glass glass-hover group relative overflow-hidden rounded-lg border border-white/20 bg-gradient-to-br from-primary/10 to-primary/5 p-2 text-center shadow-md transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:shadow-xl sm:p-3"
								onMouseMove={handleHeroMouseMove}
								style={
									{
										'--grad-start': heroGradientPalettes[0][0],
										'--grad-mid': heroGradientPalettes[0][1],
										'--grad-end': heroGradientPalettes[0][2],
										background: `linear-gradient(135deg, ${heroGradientPalettes[0][0]}14 0%, ${heroGradientPalettes[0][2]}0f 100%)`,
									} as React.CSSProperties
								}
							>
								{/* Body-only radial overlay (avoids icon area) */}
								<div
									className="pointer-events-none absolute inset-0 z-0 rounded-lg opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-40"
									style={{
										background:
											'radial-gradient(260px circle at var(--mouse-x) var(--mouse-y), var(--grad-start) 0%, var(--grad-mid) 35%, var(--grad-end) 60%, transparent 85%)',
									}}
								/>
								<div className="flex flex-col items-center space-y-1 sm:space-y-2">
									<div className="rounded-full bg-primary/20 p-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 sm:p-3">
										<Code className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
									</div>
									<p
										className="text-foreground text-xs font-medium sm:text-sm"
										style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.875rem)' }}
									>
										Web Development
									</p>
								</div>
							</Card>
						</motion.div>

						<motion.div variants={cardVariants}>
							<Card
								className="glass glass-hover group relative overflow-hidden rounded-lg border border-white/20 bg-gradient-to-br from-primary/10 to-primary/5 p-2 text-center shadow-md transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:shadow-xl sm:p-3"
								onMouseMove={handleHeroMouseMove}
								style={
									{
										'--grad-start': heroGradientPalettes[1][0],
										'--grad-mid': heroGradientPalettes[1][1],
										'--grad-end': heroGradientPalettes[1][2],
										background: `linear-gradient(135deg, ${heroGradientPalettes[1][0]}14 0%, ${heroGradientPalettes[1][2]}0f 100%)`,
									} as React.CSSProperties
								}
							>
								<div
									className="pointer-events-none absolute inset-0 z-0 rounded-lg opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-40"
									style={{
										background:
											'radial-gradient(260px circle at var(--mouse-x) var(--mouse-y), var(--grad-start) 0%, var(--grad-mid) 35%, var(--grad-end) 60%, transparent 85%)',
									}}
								/>
								<div className="flex flex-col items-center space-y-1 sm:space-y-2">
									<div className="rounded-full bg-secondary/20 p-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 sm:p-3">
										<Smartphone className="h-4 w-4 text-secondary sm:h-5 sm:w-5" />
									</div>
									<p
										className="text-foreground text-xs font-medium sm:text-sm"
										style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.875rem)' }}
									>
										Mobile Applications
									</p>
								</div>
							</Card>
						</motion.div>

						<motion.div variants={cardVariants}>
							<Card
								className="glass glass-hover group relative overflow-hidden rounded-lg border border-white/20 bg-gradient-to-br from-primary/10 to-primary/5 p-2 text-center shadow-md transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:shadow-xl sm:p-3"
								onMouseMove={handleHeroMouseMove}
								style={
									{
										'--grad-start': heroGradientPalettes[2][0],
										'--grad-mid': heroGradientPalettes[2][1],
										'--grad-end': heroGradientPalettes[2][2],
										background: `linear-gradient(135deg, ${heroGradientPalettes[2][0]}14 0%, ${heroGradientPalettes[2][2]}0f 100%)`,
									} as React.CSSProperties
								}
							>
								<div
									className="pointer-events-none absolute inset-0 z-0 rounded-lg opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-40"
									style={{
										background:
											'radial-gradient(260px circle at var(--mouse-x) var(--mouse-y), var(--grad-start) 0%, var(--grad-mid) 35%, var(--grad-end) 60%, transparent 85%)',
									}}
								/>
								<div className="flex flex-col items-center space-y-1 sm:space-y-2">
									<div className="rounded-full bg-accent/20 p-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 sm:p-3">
										<Bot className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
									</div>
									<p
										className="text-foreground text-xs font-medium sm:text-sm"
										style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.875rem)' }}
									>
										AI Integrations
									</p>
								</div>
							</Card>
						</motion.div>

						<motion.div variants={cardVariants}>
							<Card
								className="glass glass-hover group relative overflow-hidden rounded-lg border border-white/20 bg-gradient-to-br from-primary/10 to-primary/5 p-2 text-center shadow-md transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:shadow-xl sm:p-3"
								onMouseMove={handleHeroMouseMove}
								style={
									{
										'--grad-start': heroGradientPalettes[3][0],
										'--grad-mid': heroGradientPalettes[3][1],
										'--grad-end': heroGradientPalettes[3][2],
										background: `linear-gradient(135deg, ${heroGradientPalettes[3][0]}14 0%, ${heroGradientPalettes[3][2]}0f 100%)`,
									} as React.CSSProperties
								}
							>
								<div
									className="pointer-events-none absolute inset-0 z-0 rounded-lg opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-40"
									style={{
										background:
											'radial-gradient(260px circle at var(--mouse-x) var(--mouse-y), var(--grad-start) 0%, var(--grad-mid) 35%, var(--grad-end) 60%, transparent 85%)',
									}}
								/>
								<div className="flex flex-col items-center space-y-1 sm:space-y-2">
									<div className="rounded-full bg-chart-1/20 p-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 sm:p-3">
										<Rocket className="h-4 w-4 text-chart-1 sm:h-5 sm:w-5" />
									</div>
									<p
										className="text-foreground text-xs font-medium sm:text-sm"
										style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.875rem)' }}
									>
										Process Improvement
									</p>
								</div>
							</Card>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator - Centered */}
			<motion.div
				className="absolute bottom-8 flex -translate-x-1/2 items-center justify-center"
				initial="hidden"
				animate={['visible', 'animate']}
				variants={bounceVariants}
			>
				<motion.button
					onClick={scrollToAbout}
					className="glass glass-hover group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 p-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
					aria-label="Skip to about section"
					variants={continuousBounce}
					animate="animate"
				>
					<ChevronDown className="group-hover:text-primary-foreground h-5 w-5 text-primary transition-all duration-300" />
				</motion.button>
			</motion.div>
		</section>
	);
}
