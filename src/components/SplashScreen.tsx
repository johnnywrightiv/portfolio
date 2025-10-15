'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

interface SplashScreenProps {
	isLoading: boolean;
	onComplete: () => void;
}

export default function SplashScreen({
	isLoading,
	onComplete,
}: SplashScreenProps) {
	const [progress, setProgress] = useState(0);
	const [loadingText, setLoadingText] = useState('Initializing...');
	const [fadeOpacity, setFadeOpacity] = useState(1);

	useEffect(() => {
		if (!isLoading) return;

		const loadingSteps = [
			{ text: 'Initializing portfolio...', progress: 15 },
			{ text: 'Loading animations...', progress: 35 },
			{ text: 'Preparing tech icons...', progress: 55 },
			{ text: 'Setting up physics engine...', progress: 75 },
			{ text: 'Optimizing performance...', progress: 90 },
			{ text: 'Almost ready...', progress: 100 },
		];

		let currentStep = 0;
		let targetProgress = 0;
		let currentProgress = 0;
		let progressSpeed = 2; // Progress units per frame

		const interval = setInterval(() => {
			// Update progress towards current target
			if (currentProgress < targetProgress) {
				currentProgress = Math.min(
					currentProgress + progressSpeed,
					targetProgress
				);
			}

			// Check if we need to move to next step
			if (
				currentStep < loadingSteps.length - 1 &&
				currentProgress >= loadingSteps[currentStep].progress
			) {
				currentStep++;
				targetProgress = loadingSteps[currentStep].progress;
				setLoadingText(loadingSteps[currentStep].text);
			}

			setProgress(currentProgress);

			// Update fade opacity - starts at 1 (full color) and fades to 0.4 (opacity)
			const fadeProgress = Math.min(currentProgress / 100, 1);
			const newFadeOpacity = 1 - fadeProgress * 0.6; // Fade from 1 to 0.4
			setFadeOpacity(newFadeOpacity);

			// Complete when we reach 100%
			if (currentProgress >= 100) {
				clearInterval(interval);
				setTimeout(() => {
					onComplete();
				}, 300);
			}
		}, 50);

		// Start the first step
		targetProgress = loadingSteps[0].progress;
		setLoadingText(loadingSteps[0].text);

		return () => clearInterval(interval);
	}, [isLoading, onComplete]);

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black"
				>
					{/* Background pattern with dynamic fade effect */}
					<div className="absolute inset-0">
						<div
							className="h-full w-full transition-opacity duration-100"
							style={{
								backgroundImage: 'url(/images/hero-background1.jpg)',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								filter: 'blur(2px)',
								opacity: fadeOpacity * 0.4, // Starts at 0.4, fades to 0.16
							}}
						/>
						{/* Dynamic gradient overlay that fades from full color to opacity */}
						<div
							className="absolute inset-0 transition-opacity duration-100"
							style={{
								background: `linear-gradient(135deg, rgba(0,0,0,${fadeOpacity * 0.9}) 0%, rgba(15,23,42,${fadeOpacity * 0.7}) 50%, rgba(0,0,0,${fadeOpacity * 0.9}) 100%)`,
							}}
						/>
					</div>

					{/* Main content */}
					<div className="relative z-10 flex flex-col items-center space-y-6 text-center">
						{/* Profile image - immediate display */}
						<div className="relative">
							<div className="glass rounded-full p-2">
								<Image
									src="/images/profile-picture.jpg"
									alt="John Wright"
									width={80}
									height={80}
									className="rounded-full"
									priority
								/>
							</div>
						</div>

						{/* Loading spinner - immediate display */}
						<div className="relative">
							<div className="relative h-16 w-16">
								<div className="absolute inset-0 rounded-full border-4 border-white/20" />
								<Loader2 className="absolute inset-0 m-auto h-6 w-6 animate-spin text-primary" />
							</div>
						</div>

						{/* Progress bar - immediate display */}
						<div className="w-64 space-y-3">
							<div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
								<motion.div
									className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
									style={{ width: `${progress}%` }}
									transition={{ duration: 0.2, ease: 'easeOut' }}
								/>
							</div>
							<div className="text-sm font-medium text-white/80">
								{loadingText}
							</div>
							<div className="text-xs text-white/60">
								{Math.round(progress)}%
							</div>
						</div>

						{/* Brand text - immediate display */}
						<div className="space-y-2">
							<h1 className="text-2xl font-bold text-white">John Wright</h1>
							<p className="text-sm text-white/70">Full-Stack Developer</p>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
