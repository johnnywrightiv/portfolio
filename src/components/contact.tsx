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
	const [isVisible, setIsVisible] = useState(false);
	const contactRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
		);
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
						theme === 'light' ? 'text-secondary' : 'text-foreground'
					)}
				>
					<span className="fancy-word">Contact</span>
				</h1>
				<Card className="from-primary/10 to-accent/10 bg-gradient-to-br">
					<CardContent className="p-8">
						<div className="flex flex-col items-center gap-8">
							<p className="text-muted-foreground text-center text-lg leading-relaxed">
								Interested in working together or learning more? Feel free to
								reach out!
							</p>
							<p className="text-muted-foreground text-center text-xl leading-relaxed">
								johnnywrightiv@gmail.com
							</p>
							<div className="flex gap-8">
								<Button
									asChild
									variant="outline"
									className="text-muted-foreground group relative flex h-14 w-14 items-center justify-center rounded-full"
								>
									<Link href="mailto:example@example.com">
										<FaEnvelope className="group-hover:scale-110" />
									</Link>
								</Button>

								<Button
									asChild
									variant="outline"
									className="text-muted-foreground group relative flex h-14 w-14 items-center justify-center rounded-full"
								>
									<Link
										href="https://www.linkedin.com/in/yourprofile"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaLinkedin className="text-2xl group-hover:scale-110" />
									</Link>
								</Button>

								<Button
									asChild
									variant="outline"
									className="text-muted-foreground group relative flex h-14 w-14 items-center justify-center rounded-full"
								>
									<Link
										href="https://github.com/yourprofile"
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
								className="text-muted-foreground flex items-center gap-2 px-8 py-6 text-lg"
							>
								<a target='_blank' href="https://drive.google.com/file/d/1Wtz_DBp1dt-X8Sc6Vc0pvuBUAUKeYuHV/view?usp=share_link">
									<FaFileAlt />
									View Resume
								</a>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
