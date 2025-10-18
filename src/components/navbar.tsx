'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { motion, AnimatePresence } from 'framer-motion';
import {
	smoothScrollToElementWithNav,
	smoothScrollToElement,
} from '@/lib/smooth-scroll';

// Animation variants
const navVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut' as const },
	},
};

const mobileMenuVariants = {
	hidden: { opacity: 0, x: '100%' },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.3, ease: 'easeOut' as const },
	},
	exit: {
		opacity: 0,
		x: '100%',
		transition: { duration: 0.3, ease: 'easeIn' as const },
	},
};

const linkVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3 },
	},
};

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isInitialized, setIsInitialized] = useState(false);
	const hasScrolled = useScrollPosition();

	const scrollToSection = (id: string) => {
		if (id === 'home') {
			// Check if we're on the homepage for home section
			if (window.location.pathname === '/') {
				smoothScrollToElement('home');
			} else {
				// Navigate to homepage
				window.location.href = '/';
			}
		} else if (id === 'contact') {
			// Always scroll to footer for contact with navbar offset
			const footer = document.querySelector('footer');
			if (footer) {
				smoothScrollToElementWithNav('contact');
			}
		} else if (id === 'projects') {
			// Check if we're on the homepage for projects section
			if (window.location.pathname === '/') {
				smoothScrollToElement('featured-projects');
			} else {
				// Navigate to projects page
				window.location.href = '/projects';
			}
		} else {
			// Check if we're on the homepage for other sections
			if (window.location.pathname === '/') {
				smoothScrollToElement(id);
			} else {
				// Navigate to homepage with hash
				window.location.href = `/#${id}`;
			}
		}
		setIsOpen(false);
	};

	// Initialize component
	useEffect(() => {
		setIsInitialized(true);
	}, []);

	// Auto-close mobile menu when expanding beyond mobile breakpoint
	useEffect(() => {
		if (!isInitialized) return;

		const checkMobile = () => {
			const mobile = window.innerWidth < 787; // 787px breakpoint (matches Tailwind lg:)
			if (!mobile && isOpen) {
				// Add small delay to prevent flash
				setTimeout(() => {
					setIsOpen(false);
				}, 100);
			}
		};

		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, [isOpen, isInitialized]);

	// Prevent page scroll when mobile menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<motion.nav
			className="fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-out"
			role="navigation"
			aria-label="Main navigation"
			initial="hidden"
			animate="visible"
			variants={navVariants}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div
					className={`transition-all duration-500 ease-out ${
						hasScrolled
							? 'mt-2 rounded-2xl border border-white/20 bg-white/5 px-4 py-3 shadow-lg backdrop-blur-md'
							: 'border border-transparent px-2 py-4'
					}`}
				>
					<div className="flex items-center justify-between">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<button
								onClick={() => scrollToSection('home')}
								className="-ml-1 whitespace-nowrap text-xl font-bold text-white transition-colors hover:text-white/80"
							>
								John Wright
							</button>
						</motion.div>

						{/* Desktop Navigation */}
						<motion.div
							className="hidden items-center space-x-8 lg:flex"
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<button
								onClick={() => scrollToSection('home')}
								className="text-white/75 transition-colors hover:text-white"
							>
								Home
							</button>
							<button
								onClick={() => scrollToSection('about')}
								className="text-white/75 transition-colors hover:text-white"
							>
								About
							</button>
							<button
								onClick={() => scrollToSection('projects')}
								className="text-white/75 transition-colors hover:text-white"
							>
								Projects
							</button>
							<button
								onClick={() => scrollToSection('contact')}
								className="text-white/75 transition-colors hover:text-white"
							>
								Contact
							</button>
						</motion.div>

						{/* Mobile Menu Button */}
						<motion.button
							onClick={() => setIsOpen(true)}
							className="rounded p-2 text-white hover:bg-white/10 lg:hidden"
							aria-label="Open menu"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3, delay: 0.4 }}
							whileTap={{ scale: 0.95 }}
						>
							<Menu size={24} />
						</motion.button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Sheet */}
			<AnimatePresence>
				{isOpen && isInitialized && (
					<div className="fixed inset-0 z-50 lg:hidden">
						{/* Backdrop */}
						<motion.div
							className="absolute inset-0 bg-black/50 backdrop-blur-sm"
							onClick={() => setIsOpen(false)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						/>

						{/* Sheet */}
						<motion.div
							className="absolute right-0 top-0 h-full w-full bg-gradient-to-br from-zinc-900 via-slate-900 to-black backdrop-blur-xl"
							variants={mobileMenuVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
						>
							<div className="flex h-full flex-col">
								{/* Close button positioned at top right */}
								<motion.div
									className="flex justify-end p-6"
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.2 }}
								>
									<button
										onClick={() => setIsOpen(false)}
										className="p-3 text-white transition-colors hover:text-primary"
										aria-label="Close menu"
									>
										<X size={32} />
									</button>
								</motion.div>

								{/* Navigation links with larger fonts and spacing */}
								<motion.div
									className="flex flex-1 flex-col items-center justify-start space-y-12 pt-24"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3, delay: 0.3 }}
								>
									<motion.div
										variants={linkVariants}
										initial="hidden"
										animate="visible"
									>
										<button
											onClick={() => scrollToSection('home')}
											className="text-3xl font-medium text-white transition-colors hover:text-primary"
										>
											Home
										</button>
									</motion.div>
									<motion.div
										variants={linkVariants}
										initial="hidden"
										animate="visible"
									>
										<button
											onClick={() => scrollToSection('about')}
											className="text-3xl font-medium text-white transition-colors hover:text-primary"
										>
											About
										</button>
									</motion.div>
									<motion.div
										variants={linkVariants}
										initial="hidden"
										animate="visible"
									>
										<button
											onClick={() => scrollToSection('projects')}
											className="text-3xl font-medium text-white transition-colors hover:text-primary"
										>
											Projects
										</button>
									</motion.div>
									<motion.div
										variants={linkVariants}
										initial="hidden"
										animate="visible"
									>
										<button
											onClick={() => scrollToSection('contact')}
											className="text-3xl font-medium text-white transition-colors hover:text-primary"
										>
											Contact
										</button>
									</motion.div>
								</motion.div>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
