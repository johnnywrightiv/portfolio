'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<motion.footer
			id="contact"
			className="py-section relative bg-gradient-to-t from-black to-gray-900"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<div className="container-section">
				<div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
					{/* Main Column - Let's Connect */}
					<div className="lg:col-span-8">
						<h3 className="mb-5 text-2xl font-bold text-white lg:text-3xl">
							Let&apos;s Connect
						</h3>
						<p className="mb-4 text-base text-white/75 lg:text-lg">
							Have a project in mind or want to collaborate?
						</p>
						<p className="mb-6 text-base text-white/75 lg:text-lg">
							johnnywrightit@gmail.com
						</p>

						<Button
							className="glass glass-hover mb-8 border border-white/20 px-6 py-3 font-medium text-white hover:border-white/40"
							asChild
						>
							<a
								href="https://wa.me/5491154000421?text=Hello!"
								target="_blank"
								rel="noopener noreferrer"
							>
								<MessageCircle className="mr-2 h-4 w-4" />
								Get in Touch
							</a>
						</Button>

						<div className="flex space-x-4">
							<Button
								size="icon"
								className="glass glass-hover h-12 w-12 rounded-full border border-white/20 hover:border-white/40"
								asChild
							>
								<a
									href="https://twitter.com/ArtuGrande"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Follow on X (Twitter)"
								>
									<Image src="/icons/x.svg" alt="X" width={20} height={20} />
								</a>
							</Button>
							<Button
								size="icon"
								className="glass glass-hover h-12 w-12 rounded-full border border-white/20 hover:border-white/40"
								asChild
							>
								<a
									href="https://www.instagram.com/artugrande/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Follow on Instagram"
								>
									<Image
										src="/icons/instagram.svg"
										alt="Instagram"
										width={20}
										height={20}
									/>
								</a>
							</Button>
							<Button
								size="icon"
								className="glass glass-hover h-12 w-12 rounded-full border border-white/20 hover:border-white/40"
								asChild
							>
								<a
									href="https://www.linkedin.com/in/arturo-grande/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Connect on LinkedIn"
								>
									<Image
										src="/icons/linkedin.svg"
										alt="LinkedIn"
										width={20}
										height={20}
									/>
								</a>
							</Button>
							<Button
								size="icon"
								className="glass glass-hover h-12 w-12 rounded-full border border-white/20 hover:border-white/40"
								asChild
							>
								<a
									href="https://medium.com/@infoarturogrande"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Read on Medium"
								>
									<Image
										src="/icons/medium.svg"
										alt="Medium"
										width={20}
										height={20}
									/>
								</a>
							</Button>
						</div>
					</div>

					{/* Quick Links */}
					<div className="lg:col-span-2">
						<h3 className="mb-5 text-xl font-bold text-white">Quick Links</h3>
						<div className="space-y-3">
							<button
								onClick={() => scrollToSection('about')}
								className="block text-base text-white/75 transition-colors hover:text-white"
							>
								About
							</button>
							<button
								onClick={() => scrollToSection('portfolio')}
								className="block text-base text-white/75 transition-colors hover:text-white"
							>
								Projects
							</button>
							<button
								onClick={() => scrollToSection('talks')}
								className="block text-base text-white/75 transition-colors hover:text-white"
							>
								Talks
							</button>
							<Link
								href="/blog"
								className="block text-base text-white/75 transition-colors hover:text-white"
							>
								Blog
							</Link>
						</div>
					</div>

					{/* Resources */}
					<div className="lg:col-span-2">
						<h3 className="mb-5 text-xl font-bold text-white">Resources</h3>
						<div className="space-y-3">
							<button
								onClick={() => scrollToSection('testimonials')}
								className="block text-base text-white/75 transition-colors hover:text-white"
							>
								Testimonials
							</button>
							<button
								onClick={() => scrollToSection('faq')}
								className="block text-base text-white/75 transition-colors hover:text-white"
							>
								FAQ
							</button>
							<Link
								href="/music"
								className="block text-base text-white/75 transition-colors hover:text-white"
							>
								Music
							</Link>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-white/10 pt-8">
					<div className="text-center text-sm text-white/60">
						<span>
							Made with <span className="text-red-500">♥</span> by John Wright
						</span>
						<br />
						<span className="mt-1 block">
							Copyright <sup>&copy;</sup> {new Date().getFullYear()} All Rights
							Reserved.
						</span>
					</div>
				</div>
			</div>
		</motion.footer>
	);
}
