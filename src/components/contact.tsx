/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const contactRef = useRef(null);

	useEffect(() => {
		setMounted(true);
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
			}
		});
		if (contactRef.current) {
			observer.observe(contactRef.current);
		}

		return () => {
			if (contactRef.current) {
				observer.unobserve(contactRef.current);
			}
		};
	}, []);

	return (
		<section
			ref={contactRef}
			id="contact"
			className="container mx-auto max-w-6xl overflow-hidden px-6 py-8"
		>
			<div className={`${isVisible ? 'animate-slide-in-from-bottom' : ''}`}>
				<h1
					className={cn(
						'mb-6 text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl',
						mounted && theme === 'light' ? 'text-secondary' : 'text-foreground'
					)}
				>
					<span className="fancy-word">Contact</span>
				</h1>
				<Card className="bg-gradient-to-br from-primary/10 to-accent/10">
					<CardContent className="p-8">
						<div className="flex flex-col items-center gap-8">
							<p className="text-center text-lg leading-relaxed text-muted-foreground">
								Interested in working together or learning more? Feel free to
								reach out!
							</p>
							<p className="text-center text-xl leading-relaxed text-muted-foreground">
								johnnywrightiv@gmail.com
							</p>
							<div className="flex gap-8">
								<Button
									asChild
									variant="outline"
									className="group relative flex h-14 w-14 items-center justify-center rounded-full text-muted-foreground"
								>
									<Link href="mailto:johnnywrightiv@gmail.com">
										<FaEnvelope className="group-hover:scale-110" />
									</Link>
								</Button>

								<Button
									asChild
									variant="outline"
									className="group relative flex h-14 w-14 items-center justify-center rounded-full text-muted-foreground"
								>
									<Link
										href="https://www.linkedin.com/in/johnnywrightiv"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaLinkedin className="text-2xl group-hover:scale-110" />
									</Link>
								</Button>

								<Button
									asChild
									variant="outline"
									className="group relative flex h-14 w-14 items-center justify-center rounded-full text-muted-foreground"
								>
									<Link
										href="https://github.com/johnnywrightiv"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaGithub className="text-2xl group-hover:scale-110" />
									</Link>
								</Button>
							</div>
							<Button
								asChild
								variant="outline"
								className="flex items-center gap-2 px-8 py-6 text-lg text-muted-foreground"
							>
								<a
									target="_blank"
									href="https://drive.google.com/file/d/1t06yW2CGVeNjsdIN6pmxtpU-he1mR9WM/view?usp=sharing"
								>
									<FaFileAlt />
									View Resumé
								</a>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
