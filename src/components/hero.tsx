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
				<div className="h-2/3 bg-gradient-to-b from-primary/20 to-background" />
				<div className="h-1/3 bg-background" />
			</div>
			<div className="hero-fade-in container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center gap-8 text-center">
					<div className="relative">
						<div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent blur" />
						<Image
							src="/avatar.jpg"
							alt="Profile"
							width={200}
							height={200}
							priority
							className="relative rounded-full border-4 border-background object-cover"
						/>
					</div>
					<div>
						<h1 className="text-4xl font-extrabold text-secondary dark:text-foreground sm:text-7xl">
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
								cursor={false}
								speed={20}
							/>
						</h1>
						<p className="mt-4 text-xl text-muted-foreground">
							Crafting beautiful digital experiences with{' '}
							<span className="fancy-word">user-friendly</span>, thoughtful
							design
						</p>
					</div>
					<div className="flex gap-4">
						<Button
							className="bg-gradient-to-r from-primary to-accent py-6 text-lg hover:opacity-90"
							size="lg"
							onClick={() => scrollToSection('#projects')}
						>
							View Projects
						</Button>
						<Button
							variant="outline"
							className="border-primary py-6 text-lg hover:bg-primary/10"
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
