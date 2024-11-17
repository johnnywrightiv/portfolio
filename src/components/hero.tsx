'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
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
	};

	return (
		<section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
			<div className="absolute inset-0">
				<div className="from-primary/20 h-2/3 bg-gradient-to-b to-background" />
				<div className="h-1/3 bg-background" />
			</div>
			<div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center gap-8 text-center">
					<div className="relative">
						<div className="from-primary to-accent absolute -inset-1 rounded-full bg-gradient-to-r blur" />
						<Image
							src="/headshot.jpeg"
							alt="Profile"
							width={200}
							height={200}
							className="relative rounded-full border-4 border-background object-cover"
						/>
					</div>
					<div>
						<h1 className="text-secondary text-7xl font-extrabold dark:text-foreground">
							Hello I&apos;m John, <br></br>I build
							<span className="fancy-word"> websites</span>
						</h1>
						<p className="text-muted-foreground mt-4 text-xl">
							Building exceptional digital experiences with{' '}
							<span className="fancy-word">clean code</span> and thoughtful
							design
						</p>
					</div>
					<div className="flex gap-4">
						<Button
							className="from-primary to-accent bg-gradient-to-r text-lg hover:opacity-90 py-6"
							size="lg"
							onClick={() => scrollToSection('#projects')}
						>
							View Projects
						</Button>
						<Button
							variant="outline"
							className="border-primary hover:bg-primary/10 text-lg py-6"
							size="lg"
							onClick={() => scrollToSection('#contact')}
						>
							Contact Me
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
