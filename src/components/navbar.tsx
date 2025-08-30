'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navItems = [
	{ name: 'Home', href: '#hero' },
	{ name: 'Projects', href: '#featured-work' },
	{ name: 'About', href: '#about-details' },
	{ name: 'Contact', href: '#about-contact' },
];

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const hasScrolled = useScrollPosition();

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			const navHeight = 64;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - navHeight;
			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<nav
			className={`fixed top-0 z-50 w-full transition-all duration-500 ${
				hasScrolled
					? 'border-b border-primary/10 bg-popover/40 backdrop-blur-md'
					: 'bg-transparent'
			}`}
		>
			<div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<Link
					href="/"
					className="flex-shrink-0 font-heading text-xl font-bold text-primary transition-opacity hover:opacity-80"
				>
					John Wright
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden items-center md:flex">
					{navItems.map((item) => (
						<Button
							key={item.name}
							variant="ghost"
							onClick={() => scrollToSection(item.href)}
							className="min-w-[90px] px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
						>
							{item.name}
						</Button>
					))}
				</div>

				{/* Mobile Menu Button */}
				<Button
					variant="ghost"
					size="icon"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className="p-2 text-text-secondary hover:text-primary md:hidden"
					aria-label="Toggle mobile menu"
				>
					{isMobileMenuOpen ? (
						<X className="h-5 w-5" />
					) : (
						<Menu className="h-5 w-5" />
					)}
				</Button>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="bg-popover/90 shadow-2xl backdrop-blur-sm transition-all duration-500 md:hidden">
					<div className="container mx-auto space-y-2 px-4 py-4">
						{navItems.map((item) => (
							<Button
								key={item.name}
								variant="ghost"
								onClick={() => scrollToSection(item.href)}
								className="w-full justify-start px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:text-primary"
							>
								{item.name}
							</Button>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
