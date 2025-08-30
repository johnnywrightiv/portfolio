import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut' as const },
	},
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
		},
	},
};

export default function AboutContact() {
	return (
		<section
			id="about-contact"
			// Flexible height that adapts to content, especially on mobile
			className="about-contact bg-gradient-about-contact relative flex min-h-screen w-full items-center py-16"
		>
			{/* Enhanced accent gradient overlay */}
			<div className="bg-accent-gradient-3 absolute inset-0" />

			{/* Subtle pattern overlay for visual interest */}
			<div className="bg-pattern-grid absolute inset-0 opacity-20" />

			{/* Additional floating gradient orbs for depth */}
			<div
				className="from-secondary/8 to-primary/4 absolute right-1/4 top-1/3 h-56 w-56 animate-pulse rounded-full bg-gradient-to-br blur-2xl"
				style={{ animationDuration: '10s' }}
			/>
			<div
				className="from-primary/6 to-secondary/3 absolute bottom-1/3 left-1/4 h-40 w-40 animate-pulse rounded-full bg-gradient-to-br blur-xl"
				style={{ animationDuration: '14s' }}
			/>

			<div
				// Padding applied to the inner container to control overall content spacing
				className="container relative z-10 mx-auto flex flex-col px-4 lg:px-8 xl:px-12 2xl:px-16"
				style={{ maxWidth: '1400px' }}
			>
				{/* Section Header */}
				<motion.div
					className="mb-8 text-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={fadeIn}
				>
					<h2 className="mb-4 font-heading text-4xl font-bold text-text-primary md:text-5xl">
						Let&apos;s Work Together
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-text-secondary">
						Ready to bring your vision to life? I&apos;d love to hear about your
						project and explore how we can create something amazing together.
					</p>

					{/* Anchor for About section scroll target on mobile */}
					<div id="about-details" className="pt-2" />

					<h3 className="mt-8 text-left font-heading text-2xl font-semibold text-text-primary md:text-3xl">
						About Me
					</h3>
				</motion.div>

				{/* Main Content Grid */}
				<motion.div
					// Default to single column (for sm/md), switch to two columns on 'lg' and up
					className="grid items-start gap-12 lg:grid-cols-2"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={staggerContainer}
				>
					{/* Left: About Me with consistent image wrapping */}
					<motion.div
						className="about-content flex h-full flex-col lg:col-span-1"
						variants={fadeIn}
					>
						<div className="flex-1 text-left">
							<div className="text-base leading-relaxed text-text-secondary">
								<Image
									src="/headshot.jpeg"
									alt="Johnny Wright - Full Stack Developer"
									width={200}
									height={200}
									// Consistent image sizing and floating across all breakpoints
									className="float-left mb-4 mr-4 h-36 w-36 rounded-lg object-cover shadow-2xl sm:h-40 sm:w-40 md:h-48 md:w-48"
								/>
								<p className="mb-4">
									I&apos;m a full-stack developer and design strategist with 5+
									years of experience helping businesses create thoughtful
									digital products. Currently working with a premier agency, I
									specializes in translating complex business requirements into
									intuitive user experiences.
								</p>
								<p className="mb-4">
									My background spans development, design, product management,
									and team leadership. I believe the best digital products come
									from understanding both the technical possibilities and the
									human needs they serve.
								</p>
								<p>
									When I&apos;m not building products, you&apos;ll find me
									exploring emerging technologies, mentoring junior developers,
									or contributing to open-source projects that make the web more
									accessible and inclusive.
								</p>
							</div>
						</div>
						<div className="clear-left mt-8 flex flex-col items-center py-6 sm:mt-8 lg:mt-0">
							<h4 className="align-items-end mb-2 text-lg font-semibold text-text-primary">
								Connect With Me
							</h4>
							<Button
								asChild
								variant="link"
								size="sm"
								className="mb-4 text-sm text-text-primary md:mb-2"
							>
								<Link
									href="mailto:johnnywrightiv@gmail.com"
									className="flex items-center justify-center gap-3"
								>
									<FaEnvelope size={18} className="text-primary" />
									<span>johnnywrightiv@gmail.com</span>
								</Link>
							</Button>
							{/* Button container: always horizontal, bigger buttons on mobile for better UX */}
							<div className="flex w-full flex-row justify-center gap-x-3 gap-y-0 sm:gap-x-4 md:gap-x-3 lg:justify-center">
								<Button
									asChild
									variant="outline"
									size="sm"
									className="group flex-shrink-0 rounded-xl border-border bg-surface/50 px-4 py-4 text-base text-text-primary shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-surface hover:shadow-md md:px-8 md:py-5 md:text-lg lg:px-6 lg:py-3 lg:text-sm"
								>
									<Link
										href="https://www.linkedin.com/in/johnnywrightiv"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-3"
									>
										<FaLinkedin size={18} className="text-primary" />
										<span>LinkedIn</span>
									</Link>
								</Button>
								<Button
									asChild
									variant="outline"
									size="sm"
									className="group flex-shrink-0 rounded-xl border-border bg-surface/50 px-4 py-4 text-base text-text-primary shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-surface hover:shadow-md md:px-8 md:py-5 md:text-lg lg:px-6 lg:py-3 lg:text-sm"
								>
									<Link
										href="https://github.com/johnnywrightiv"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-3"
									>
										<FaGithub size={18} className="text-primary" />
										<span>GitHub</span>
									</Link>
								</Button>
								<Button
									asChild
									variant="outline"
									size="sm"
									className="group flex-shrink-0 rounded-xl border-border bg-surface/50 px-4 py-4 text-base text-text-primary shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-surface hover:shadow-md md:px-8 md:py-5 md:text-lg lg:px-6 lg:py-3 lg:text-sm"
								>
									<Link
										href="/John-Wright-Resume.pdf"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-3"
									>
										<FaFileAlt size={18} className="text-primary" />
										<span>Resume</span>
									</Link>
								</Button>
							</div>
						</div>

						{/* Mobile Contact Form - Now positioned AFTER socials section */}
						<div className="mt-8 block lg:hidden">
							<div className="rounded-xl bg-gradient-to-br from-surface/90 to-surface/60 p-4 shadow-md backdrop-blur-sm">
								<h3 className="mb-4 text-center font-heading text-xl font-semibold text-text-primary">
									Get In Touch
								</h3>
								<form className="space-y-4">
									<div className="space-y-2">
										<label
											htmlFor="mobile-name"
											className="block text-xs font-medium text-text-secondary"
										>
											Name
										</label>
										<input
											type="text"
											id="mobile-name"
											name="name"
											className="w-full rounded-lg border border-border bg-background/80 p-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
											placeholder="Your Name"
											autoComplete="name"
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="mobile-email"
											className="block text-xs font-medium text-text-secondary"
										>
											Email
										</label>
										<input
											type="email"
											id="mobile-email"
											name="email"
											className="w-full rounded-lg border border-border bg-background/80 p-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
											placeholder="name@example.com"
											autoComplete="email"
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="mobile-message"
											className="block text-xs font-medium text-text-secondary"
										>
											Message
										</label>
										<textarea
											id="mobile-message"
											name="message"
											rows={4}
											className="w-full resize-none rounded-lg border border-border bg-background/80 p-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
											placeholder="Tell me about your project!"
										/>
									</div>
									<Button
										type="submit"
										size="sm"
										className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:scale-[1.02]"
									>
										Send Message
									</Button>
								</form>
							</div>
						</div>
					</motion.div>

					{/* Right: Contact Form - Hidden on sm, shown as full width on lg, two-column on lg */}
					<motion.div
						className="contact-content hidden lg:col-span-1 lg:block" // Hidden on sm, block from lg, takes 1 column
						variants={fadeIn}
					>
						<div className="rounded-2xl bg-gradient-to-br from-surface/80 to-surface/40 p-6 shadow-xl backdrop-blur-sm">
							<h3 className="mb-6 text-center font-heading text-2xl font-semibold text-text-primary md:text-3xl">
								Get In Touch
							</h3>
							<form className="space-y-6">
								<div className="space-y-2">
									<label
										htmlFor="name"
										className="block text-sm font-medium text-text-secondary"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="w-full rounded-xl border border-border bg-background/80 p-4 text-text-primary transition-all duration-300 placeholder:text-text-secondary/60 focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
										placeholder="Your Name"
										autoComplete="name"
									/>
								</div>
								<div className="space-y-2">
									<label
										htmlFor="email"
										className="block text-sm font-medium text-text-secondary"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full rounded-xl border border-border bg-background/80 p-4 text-text-primary transition-all duration-300 placeholder:text-text-secondary/60 focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
										placeholder="name@example.com"
										autoComplete="email"
									/>
								</div>
								<div className="space-y-2">
									<label
										htmlFor="message"
										className="block text-sm font-medium text-text-secondary"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows={5}
										className="w-full resize-none rounded-xl border border-border bg-background/80 p-4 text-text-primary transition-all duration-300 placeholder:text-text-secondary/60 focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
										placeholder="Tell me about your project: timelines, budgets, ideas, and any specific requirements!"
									/>
								</div>
								<Button
									type="submit"
									size="lg"
									className="w-full rounded-xl bg-gradient-to-r from-primary to-secondary py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus:scale-[1.02]"
								>
									Send Message
								</Button>
							</form>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
