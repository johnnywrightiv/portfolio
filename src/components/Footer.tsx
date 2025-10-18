'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Footer() {
	const router = useRouter();

	const handleScrollToSection = (sectionId: string) => {
		// Contact section exists on all pages (footer), so always scroll directly with navbar offset
		if (sectionId === 'contact') {
			const element = document.getElementById(sectionId);
			if (element) {
				const navbar = document.querySelector('nav');
				const navbarHeight = navbar ? navbar.offsetHeight : 80; // fallback to 80px
				const elementPosition = element.offsetTop - navbarHeight - 20; // extra 20px padding

				window.scrollTo({
					top: elementPosition,
					behavior: 'smooth',
				});
			}
			return;
		}

		// For other sections, check if we're on the homepage
		if (window.location.pathname === '/') {
			// If on homepage, just scroll to section
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			// If not on homepage, navigate to homepage with hash
			router.push(`/#${sectionId}`);
		}
	};

	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'easeOut' as const },
		},
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.1,
			},
		},
	};

	const linkVariants = {
		hidden: { opacity: 0, x: -10 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.3 },
		},
	};

	return (
		<footer
			id="contact"
			className="py-section relative bg-gradient-to-t from-black via-gray-900 to-gray-900"
		>
			{/* Very subtle dot pattern overlay for seamless transition */}
			<div
				className="absolute inset-0 opacity-15"
				style={{
					backgroundImage:
						'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
					backgroundSize: '20px 20px',
				}}
			/>

			<div className="container-section relative z-10">
				<motion.div
					className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
					variants={staggerContainer}
				>
					{/* Main Column - Let's Connect */}
					<motion.div
						className="md:col-span-6 lg:col-span-8"
						variants={fadeInUp}
					>
						<motion.h3
							className="mb-5 text-2xl font-bold text-white lg:text-3xl"
							variants={fadeInUp}
						>
							Contact Me
						</motion.h3>
						<motion.p
							className="mb-4 max-w-sm text-base text-white/75 lg:text-lg"
							variants={fadeInUp}
						>
							Have a project in mind or want to collaborate? I&apos;d love to
							chat!
						</motion.p>
						<motion.p
							className="mb-6 text-base text-white/75"
							variants={fadeInUp}
						>
							johnnywrightiv@gmail.com
						</motion.p>

						<motion.div variants={fadeInUp}>
							<Button
								className="glass glass-hover mb-8 border border-white/20 px-6 py-3 font-medium text-white hover:border-white/40"
								asChild
								size="sm"
							>
								<a
									href="mailto:johnnywrightiv@gmail.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Mail className="mr-2 h-4 w-4" />
									Get in Touch
								</a>
							</Button>
						</motion.div>

						<motion.div className="flex space-x-4" variants={staggerContainer}>
							<motion.div variants={linkVariants}>
								<Button
									size="icon"
									className="glass glass-hover h-12 w-12 rounded-full border border-white/20 hover:border-white/40"
									asChild
								>
									<a
										href="https://www.linkedin.com/in/johnnywrightiv/"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Connect with me on LinkedIn"
									>
										<Image
											src="/icons/linkedin.svg"
											alt="LinkedIn"
											width={20}
											height={20}
										/>
									</a>
								</Button>
							</motion.div>
							<motion.div variants={linkVariants}>
								<Button
									size="icon"
									className="glass glass-hover h-12 w-12 rounded-full border border-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40"
									asChild
								>
									<a
										href="https://github.com/johnnywrightiv"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Follw me on GitHub"
									>
										<Image
											src="/icons/github.svg"
											alt="Medium"
											width={20}
											height={20}
										/>
									</a>
								</Button>
							</motion.div>
							<motion.div variants={linkVariants}>
								<Button
									size="icon"
									className="glass glass-hover h-12 w-12 rounded-full border border-white/20 hover:border-white/40"
									asChild
								>
									<a
										href="https://www.instagram.com/johnnywrightiv/"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Follow me on Instagram"
									>
										<Image
											src="/icons/instagram.svg"
											alt="Instagram"
											width={20}
											height={20}
										/>
									</a>
								</Button>
							</motion.div>
						</motion.div>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						className="md:col-span-3 lg:col-span-2"
						variants={fadeInUp}
					>
						<motion.h3
							className="mb-5 whitespace-nowrap text-xl font-bold text-white"
							variants={fadeInUp}
						>
							Quick Links
						</motion.h3>
						<motion.div className="space-y-3" variants={staggerContainer}>
							<motion.button
								onClick={() => handleScrollToSection('about')}
								className="block whitespace-nowrap text-base text-white/75 transition-colors hover:text-white"
								variants={linkVariants}
							>
								About
							</motion.button>
							<motion.button
								onClick={() => handleScrollToSection('contact')}
								className="block whitespace-nowrap text-base text-white/75 transition-colors hover:text-white"
								variants={linkVariants}
							>
								Contact
							</motion.button>
							<motion.div variants={linkVariants}>
								<Link
									href="/projects"
									className="block whitespace-nowrap text-base text-white/75 transition-colors hover:text-white"
								>
									All Projects
								</Link>
							</motion.div>
							<motion.button
								onClick={() => handleScrollToSection('featured-projects')}
								className="block whitespace-nowrap text-base text-white/75 transition-colors hover:text-white"
								variants={linkVariants}
							>
								Featured Work
							</motion.button>
						</motion.div>
					</motion.div>

					{/* More Info */}
					<motion.div
						className="pr-0 md:col-span-3 lg:col-span-2 lg:pr-12"
						variants={fadeInUp}
					>
						<motion.h3
							className="mb-5 whitespace-nowrap text-xl font-bold text-white"
							variants={fadeInUp}
						>
							More Info
						</motion.h3>
						<motion.div className="space-y-3" variants={staggerContainer}>
							<motion.div variants={linkVariants}>
								<Link
									href="/faq"
									className="block whitespace-nowrap text-base text-white/75 transition-colors hover:text-white"
								>
									FAQ
								</Link>
							</motion.div>
							<motion.div variants={linkVariants}>
								<Link
									href="/testimonials"
									className="block whitespace-nowrap text-base text-white/75 transition-colors hover:text-white"
								>
									Testimonials
								</Link>
							</motion.div>
							<motion.div variants={linkVariants}>
								<Link
									href="/career-journey"
									className="block whitespace-nowrap text-base text-white/75 transition-colors hover:text-white"
								>
									Career Journey
								</Link>
							</motion.div>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Copyright */}
				<motion.div
					className="border-t border-white/10 pt-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true, amount: 0.1 }}
				>
					<motion.div
						className="text-center text-sm text-white/60"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						viewport={{ once: true, amount: 0.1 }}
					>
						<span>
							Made with <span className="text-red-500">♥</span> by John Wright
						</span>
						<br />
						<span className="mt-1 block">
							Copyright <sup>&copy;</sup> {new Date().getFullYear()} All Rights
							Reserved.
						</span>
					</motion.div>
				</motion.div>
			</div>
		</footer>
	);
}
