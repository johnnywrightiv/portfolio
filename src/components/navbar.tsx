'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, MoonIcon, SunIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
	{ name: 'About', href: '#about' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' },
];

export default function Navbar() {
	const { setTheme, theme } = useTheme();
	const [isSheetOpen, setIsSheetOpen] = useState(false);

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
		setIsSheetOpen(false);
	};

	return (
		<nav className="bg-background/80 fixed top-0 z-50 flex w-full justify-center border-b backdrop-blur-sm">
			<div className="container flex h-16 w-full items-center justify-between px-4">
				<Link
					href="/"
					className="text-muted-foreground flex-shrink-0 text-xl font-bold"
				>
					John Wright
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden flex-grow items-center justify-end md:flex md:gap-6">
					{navItems.map((item) => (
						<button
							key={item.name}
							onClick={() => scrollToSection(item.href)}
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							{item.name}
						</button>
					))}
					<Button
						className="text-muted-foreground hover:text-primary bg-transparent transition-none hover:bg-transparent"
						size="icon"
						onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
					>
						{theme === 'light' ? (
							<MoonIcon className="h-5 w-5" />
						) : (
							<SunIcon className="h-5 w-5" />
						)}
					</Button>
				</div>

				{/* Mobile Navigation */}
				<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
					<SheetTrigger asChild className="md:hidden">
						<Button variant="ghost" size="icon">
							<Menu className="h-6 w-6" />
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="w-full max-w-full sm:max-w-sm">
						<div className="flex flex-col gap-6 pt-10">
							{navItems.map((item) => (
								<button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									className="hover:text-primary text-2xl font-semibold text-foreground transition-colors"
								>
									{item.name}
								</button>
							))}
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
								className="self-start"
							>
								{theme === 'light' ? (
									<MoonIcon className="h-6 w-6" />
								) : (
									<SunIcon className="h-6 w-6" />
								)}
							</Button>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
}
