'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

	useEffect(() => {
		if (!isLoading) return;

		// Cheeky loading messages based on progress - better timing and messages
		const loadingMessages = [
			{ text: 'Brewing coffee...', threshold: 0 },
			{ text: 'Polishing the pixels...', threshold: 30 },
			{ text: 'Debugging reality...', threshold: 60 },
			{
				text: `Connection lost \n Please wait - attempting to reestablish`,
				threshold: 90,
			},
		];

		// Simulate a more realistic loading sequence - slower for better readability
		const duration = 4500; // 4.5 seconds total for better readability
		const startTime = Date.now();

		const updateProgress = () => {
			const elapsed = Date.now() - startTime;
			const newProgress = Math.min((elapsed / duration) * 100, 100);
			setProgress(newProgress);

			// Update loading text based on progress
			const currentMessage = loadingMessages
				.slice()
				.reverse()
				.find((msg) => newProgress >= msg.threshold);

			if (currentMessage) {
				setLoadingText(currentMessage.text);
			}

			if (newProgress < 100) {
				requestAnimationFrame(updateProgress);
			} else {
				// Add a delay before completing so users can see the final message
				setTimeout(() => {
					onComplete();
				}, 1200);
			}
		};

		requestAnimationFrame(updateProgress);
	}, [isLoading, onComplete]);

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { duration: 0.2, ease: 'easeInOut' },
					}}
					exit={{
						opacity: 0,
						transition: { duration: 1.2, ease: 'easeInOut' },
					}}
					className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
				>
					{/* Minimalist background with subtle gradient */}
					<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

					{/* Main content - centered and minimal */}
					<div className="relative z-10 flex flex-col items-center space-y-8 text-center">
						{/* Profile image with subtle animation */}
						<motion.div
							initial={{ scale: 0.95 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.25, ease: 'easeOut', delay: 0.05 }}
							className="relative"
						>
							<div className="relative overflow-hidden rounded-full ring-2 ring-blue-400/30">
								<Image
									src="/images/profile-picture.jpg"
									alt="John Wright"
									width={120}
									height={120}
									className="rounded-full"
									priority
								/>
								{/* Subtle glow effect */}
								<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent" />
							</div>
						</motion.div>

						{/* Brand text with staggered animation */}
						<motion.div
							initial={{ y: 5 }}
							animate={{ y: 0 }}
							transition={{ duration: 0.25, ease: 'easeOut', delay: 0.1 }}
							className="space-y-2"
						>
							<h1 className="text-3xl font-bold text-white">John Wright</h1>
							<p className="text-gray-300">Full-Stack Developer</p>
						</motion.div>

						{/* Clean progress bar with cheeky text */}
						<motion.div
							initial={{ y: 5 }}
							animate={{ y: 0 }}
							transition={{ duration: 0.25, ease: 'easeOut', delay: 0.15 }}
							className="w-64 space-y-4"
						>
							<div className="h-1 w-full rounded-full bg-gray-700">
								<motion.div
									className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
									initial={{ width: 0 }}
									animate={{ width: `${progress}%` }}
									transition={{ duration: 0.05, ease: 'linear' }}
								/>
							</div>

							{/* Cheeky loading text */}
							<div className="flex flex-col items-center justify-center text-center">
								<div className="mb-1 flex items-center justify-center whitespace-pre text-sm font-medium text-white">
									{loadingText}
								</div>
								<div className="flex items-center justify-center whitespace-nowrap text-xs text-gray-400">
									{Math.round(progress)}%
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
