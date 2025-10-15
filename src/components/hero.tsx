'use client';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import FloatingTechIcons from './FloatingTechIcons';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
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
			delayChildren: 0.1,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: 'easeOut' as const },
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
			className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16 md:pt-0"
		>
			<FloatingTechIcons onReady={handleIconsReady} />
			<div
				className="absolute inset-0 opacity-15"
				style={{
					backgroundImage: 'url(/images/hero-background1.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			></div>

			<div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6">
				<div>
					{/* Profile Introduction */}
					<motion.div
						className="mb-4 flex items-center justify-center sm:mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
					>
						<div className="glass mr-3 rounded-full p-1 sm:mr-4">
							<Image
								src="/images/profile-picture.jpg"
								alt="John Wright Full-Stack Developer Headshot"
								width={40}
								height={40}
								className="rounded-full sm:h-[60px] sm:w-[60px]"
							/>
						</div>
						<div className="text-center">
							<h1 className="text-sm text-white/75 sm:text-xl">
								Welcome to my personal portfolio{' '}
								<span className="animate-wave inline-block">👋</span>
							</h1>
						</div>
					</motion.div>

					<motion.div
						className="relative mb-6 sm:mb-12"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
					>
						<h1 className="mb-4 px-2 text-xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
							Full-Stack Developer <br />
							<span className="mt-4 block text-sm font-normal text-white/90 sm:text-lg md:text-xl lg:text-2xl">
								Creating impactful digital solutions with a focus on user
								experience, innovation, and results.
							</span>
						</h1>
					</motion.div>

					{/* Stats Cards */}
					<motion.div
						className="mb-6 grid grid-cols-2 gap-3 px-2 sm:mb-12 sm:grid-cols-2 lg:grid-cols-4"
						initial="hidden"
						animate="visible"
						variants={staggerContainer}
					>
						<motion.div variants={cardVariants}>
							<Card className="glass glass-hover group relative overflow-hidden rounded-md border border-white/20 p-2 text-center transition-all duration-200 hover:scale-105 hover:shadow-xl sm:p-3">
								<div className="flex items-center justify-center space-x-2">
									<div className="text-base transition-transform duration-200 group-hover:scale-110 sm:text-lg">
										💻
									</div>
									<p className="text-xs font-medium text-white sm:text-sm">
										Web Development
									</p>
								</div>
							</Card>
						</motion.div>

						<motion.div variants={cardVariants}>
							<Card className="glass glass-hover group relative overflow-hidden rounded-md border border-white/20 p-2 text-center transition-all duration-200 hover:scale-105 hover:shadow-xl sm:p-3">
								<div className="flex items-center justify-center space-x-2">
									<div className="text-base transition-transform duration-200 group-hover:scale-110 sm:text-lg">
										📱
									</div>
									<p className="text-xs font-medium text-white sm:text-sm">
										Mobile Applications
									</p>
								</div>
							</Card>
						</motion.div>

						<motion.div variants={cardVariants}>
							<Card className="glass glass-hover group relative overflow-hidden rounded-md border border-white/20 p-2 text-center transition-all duration-200 hover:scale-105 hover:shadow-xl sm:p-3">
								<div className="flex items-center justify-center space-x-2">
									<div className="text-base transition-transform duration-200 group-hover:scale-110 sm:text-lg">
										🤖
									</div>
									<p className="text-xs font-medium text-white sm:text-sm">
										AI Integrations
									</p>
								</div>
							</Card>
						</motion.div>

						<motion.div variants={cardVariants}>
							<Card className="glass glass-hover group relative overflow-hidden rounded-md border border-white/20 p-2 text-center transition-all duration-200 hover:scale-105 hover:shadow-xl sm:p-3">
								<div className="flex items-center justify-center space-x-2">
									<div className="text-base transition-transform duration-200 group-hover:scale-110 sm:text-lg">
										🚀
									</div>
									<p className="text-xs font-medium text-white sm:text-sm">
										Process Improvement
									</p>
								</div>
							</Card>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Skip Link */}
			<motion.div
				className="absolute bottom-8 flex -translate-x-1/2 items-center justify-center sm:bottom-12"
				initial="hidden"
				animate="visible"
				variants={bounceVariants}
			>
				<button
					onClick={scrollToAbout}
					className="animate-smooth-bounce glass glass-hover group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/20 p-2 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl sm:h-12 sm:w-12 sm:p-3"
					aria-label="Skip to about section"
				>
					<ChevronDown className="h-4 w-4 text-white/90 transition-all duration-300 group-hover:text-white sm:h-5 sm:w-5" />
				</button>
			</motion.div>
		</section>
	);
}
