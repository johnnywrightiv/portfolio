'use client';

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const isHomePage = pathname === '/';

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 50;
			setIsScrolled(scrolled);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToSection = (id: string) => {
		if (!isHomePage) {
			window.location.href = `/#${id}`;
			return;
		}
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		setIsOpen(false);
	};

	return (
		<nav
			className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300`}
			role="navigation"
			aria-label="Main navigation"
		>
			<div className="container-full">
				<div
					className={`transition-all duration-300 ${
						isScrolled
							? 'glass rounded-2xl border border-border px-6 py-3 shadow-lg'
							: 'border border-transparent px-4 py-4 sm:px-6'
					}`}
				>
					<div className="flex items-center justify-between">
						<Link href="/" className="text-lg font-bold text-white sm:text-xl">
							Arturo Grande
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden items-center space-x-6 md:flex">
							{isHomePage ? (
								<>
									<button
										onClick={() => scrollToSection('home')}
										className="nav-item text-white/75 transition-colors hover:text-white"
									>
										Home
									</button>
									<button
										onClick={() => scrollToSection('about')}
										className="nav-item text-white/75 transition-colors hover:text-white"
									>
										About
									</button>
									<button
										onClick={() => scrollToSection('portfolio')}
										className="nav-item text-white/75 transition-colors hover:text-white"
									>
										Projects
									</button>
									<button
										onClick={() => scrollToSection('talks')}
										className="nav-item text-white/75 transition-colors hover:text-white"
									>
										Talks
									</button>
								</>
							) : (
								<Link
									href="/"
									className="nav-item text-white/75 transition-colors hover:text-white"
								>
									Home
								</Link>
							)}
							<Link
								href="/blog"
								className="nav-item text-white/75 transition-colors hover:text-white"
							>
								Blog
							</Link>
							<Link
								href="/music"
								className="nav-item text-white/75 transition-colors hover:text-white"
							>
								Music
							</Link>
							{isHomePage && (
								<button
									onClick={() => scrollToSection('contact')}
									className="nav-item text-white/75 transition-colors hover:text-white"
								>
									Contact
								</button>
							)}
						</div>

						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="text-white hover:bg-white/10 md:hidden"
									aria-label="Open menu"
								>
									<Menu size={24} />
								</Button>
							</SheetTrigger>
							<SheetContent className="w-full border-l border-white/10 bg-black/95 backdrop-blur-xl">
								<div className="mt-12 flex flex-col space-y-6">
									{isHomePage ? (
										<>
											<button
												onClick={() => scrollToSection('home')}
												className="text-left text-2xl text-white transition-colors hover:text-primary"
											>
												Home
											</button>
											<button
												onClick={() => scrollToSection('about')}
												className="text-left text-2xl text-white transition-colors hover:text-primary"
											>
												About
											</button>
											<button
												onClick={() => scrollToSection('portfolio')}
												className="text-left text-2xl text-white transition-colors hover:text-primary"
											>
												Projects
											</button>
											<button
												onClick={() => scrollToSection('talks')}
												className="text-left text-2xl text-white transition-colors hover:text-primary"
											>
												Talks
											</button>
										</>
									) : (
										<Link
											href="/"
											className="text-left text-2xl text-white transition-colors hover:text-primary"
											onClick={() => setIsOpen(false)}
										>
											Home
										</Link>
									)}
									<Link
										href="/blog"
										className="text-left text-2xl text-white transition-colors hover:text-primary"
										onClick={() => setIsOpen(false)}
									>
										Blog
									</Link>
									<Link
										href="/music"
										className="text-left text-2xl text-white transition-colors hover:text-primary"
										onClick={() => setIsOpen(false)}
									>
										Music
									</Link>
									{isHomePage && (
										<button
											onClick={() => scrollToSection('contact')}
											className="text-left text-2xl text-white transition-colors hover:text-primary"
										>
											Contact
										</button>
									)}
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
}
