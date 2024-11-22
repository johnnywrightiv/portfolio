'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, MoonIcon, SunIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
	{ name: 'About', href: '#about' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' },
];

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        className="text-muted-foreground hover:text-primary bg-transparent transition-none hover:bg-transparent"
        size="icon"
        aria-label="Theme toggle placeholder"
      >
        <div className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      className="text-muted-foreground hover:text-primary bg-transparent transition-none hover:bg-transparent"
      size="icon"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'light' ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </Button>
  );
};

export default function Navbar() {
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
					<ThemeToggle />
				</div>

				{/* Mobile Navigation */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
					<SheetTrigger asChild className="md:hidden">
						<Button variant="ghost" size="icon">
							<Menu className="h-6 w-6" />
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="w-full max-w-full sm:max-w-sm">
          <SheetTitle className='hidden'>Navigation</SheetTitle>
          <SheetDescription className='hidden'>Mobile Navigation</SheetDescription>
						<div className="flex flex-col justify-center gap-6 pt-10 space-y-6">
							{navItems.map((item) => (
								<button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									className="hover:text-primary text-4xl font-semibold text-foreground transition-colors"
								>
									{item.name}
								</button>
              ))}
              <div className='text-center'>
							<ThemeToggle />
              </div>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
}