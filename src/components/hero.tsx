'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import HeroAnimation from '@/components/hero-animation';

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
			<HeroAnimation />
			<div className="absolute inset-0">
				<div className="from-primary/20 h-2/3 bg-gradient-to-b to-background" />
				<div className="h-1/3 bg-background" />
			</div>
			<div className="hero-fade-in container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center gap-8 text-center">
					<div className="relative">
						<div className="from-primary to-accent absolute -inset-1 rounded-full bg-gradient-to-r blur" />
						<Image
							src="/avatar.png"
							alt="Profile"
							width={200}
							height={200}
							priority
							className="relative rounded-full border-4 border-background object-cover"
						/>
					</div>
					<div>
						<h1 className="text-secondary text-4xl font-extrabold sm:text-7xl dark:text-foreground">
							Hello I&apos;m John, <br /> I build{' '}
							<TypeAnimation
								className="fancy-word"
								sequence={[
									`websites`,
									2000,
									`applications`,
									2000,
									`software`,
									2000,
									`products`,
									2000,
								]}
								wrapper="span"
								speed={20}
							/>
						</h1>
						<p className="text-muted-foreground mt-4 text-xl">
							Crafting beautiful digital experiences with{' '}
							<span className="fancy-word">user-friendly</span>, thoughtful
							design
						</p>
					</div>
					<div className="flex gap-4">
						<Button
							className="from-primary to-accent bg-gradient-to-r py-6 text-lg hover:opacity-90"
							size="lg"
							onClick={() => scrollToSection('#projects')}
						>
							View Projects
						</Button>
						<Button
							variant="outline"
							className="border-primary hover:bg-primary/10 py-6 text-lg"
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
