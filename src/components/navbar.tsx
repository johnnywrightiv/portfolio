'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isInitialized, setIsInitialized] = useState(false);
	const pathname = usePathname();
	const hasScrolled = useScrollPosition();

	const isHomePage = pathname === '/';

	const scrollToSection = (id: string) => {
		if (!isHomePage) {
			window.location.href = `/#${id}`;
			return;
		}
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
		<nav
			className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
			role="navigation"
			aria-label="Main navigation"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div
					className={`transition-all duration-300 ${
						hasScrolled
							? 'mt-2 rounded-2xl border border-white/20 bg-white/5 px-5 py-3 shadow-lg backdrop-blur-md'
							: 'border border-transparent px-4 py-4'
					}`}
				>
					<div className="flex items-center justify-between">
						<Link
							href="/"
							className="whitespace-nowrap text-xl font-bold text-white"
						>
							Arturo Grande
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden items-center space-x-8 lg:flex">
							{isHomePage ? (
								<>
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
										onClick={() => scrollToSection('portfolio')}
										className="text-white/75 transition-colors hover:text-white"
									>
										Projects
									</button>
									<button
										onClick={() => scrollToSection('talks')}
										className="text-white/75 transition-colors hover:text-white"
									>
										Talks
									</button>
								</>
							) : (
								<Link
									href="/"
									className="text-white/75 transition-colors hover:text-white"
								>
									Home
								</Link>
							)}
							<Link
								href="/blog"
								className="text-white/75 transition-colors hover:text-white"
							>
								Blog
							</Link>
							<Link
								href="/music"
								className="text-white/75 transition-colors hover:text-white"
							>
								Music
							</Link>
							{isHomePage && (
								<button
									onClick={() => scrollToSection('contact')}
									className="text-white/75 transition-colors hover:text-white"
								>
									Contact
								</button>
							)}
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(true)}
							className="rounded p-2 text-white hover:bg-white/10 lg:hidden"
							aria-label="Open menu"
						>
							<Menu size={24} />
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Sheet */}
			{isOpen && isInitialized && (
				<div className="fixed inset-0 z-50 lg:hidden">
					{/* Backdrop */}
					<div
						className="absolute inset-0 bg-black/50 backdrop-blur-sm"
						onClick={() => setIsOpen(false)}
					/>

					{/* Sheet */}
					<div className="absolute right-0 top-0 h-full w-full bg-black/95 backdrop-blur-xl">
						<div className="flex h-full flex-col">
							{/* Header with close button */}
							<div className="flex items-center justify-between border-b border-white/10 p-6">
								<h2 className="text-lg font-semibold text-white">Menu</h2>
								<button
									onClick={() => setIsOpen(false)}
									className="p-2 text-white transition-colors hover:text-primary"
									aria-label="Close menu"
								>
									<X size={24} />
								</button>
							</div>

							{/* Navigation links */}
							<div className="flex flex-1 flex-col items-center justify-center space-y-8">
								{isHomePage ? (
									<>
										<button
											onClick={() => scrollToSection('home')}
											className="text-2xl text-white transition-colors hover:text-primary"
										>
											Home
										</button>
										<button
											onClick={() => scrollToSection('about')}
											className="text-2xl text-white transition-colors hover:text-primary"
										>
											About
										</button>
										<button
											onClick={() => scrollToSection('portfolio')}
											className="text-2xl text-white transition-colors hover:text-primary"
										>
											Projects
										</button>
										<button
											onClick={() => scrollToSection('talks')}
											className="text-2xl text-white transition-colors hover:text-primary"
										>
											Talks
										</button>
									</>
								) : (
									<Link
										href="/"
										className="text-2xl text-white transition-colors hover:text-primary"
										onClick={() => setIsOpen(false)}
									>
										Home
									</Link>
								)}
								<Link
									href="/blog"
									className="text-2xl text-white transition-colors hover:text-primary"
									onClick={() => setIsOpen(false)}
								>
									Blog
								</Link>
								<Link
									href="/music"
									className="text-2xl text-white transition-colors hover:text-primary"
									onClick={() => setIsOpen(false)}
								>
									Music
								</Link>
								{isHomePage && (
									<button
										onClick={() => scrollToSection('contact')}
										className="text-2xl text-white transition-colors hover:text-primary"
									>
										Contact
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
