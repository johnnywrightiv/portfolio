'use client';

import { motion } from 'framer-motion';
import { useMobile } from '@/hooks/use-mobile';
import careerData from '@/data/career-experience.json';

interface CareerExperience {
	title: string;
	company: string;
	period: string;
	description: string;
	icon?: string;
}

export default function CareerJourney() {
	const isMobile = useMobile();
	const experiences = careerData as CareerExperience[];

	return (
		<section id="career" className="py-section">
			<div className="container-section">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
						Career Journey
					</h2>
					<p className="mx-auto max-w-2xl text-white/75">
						My professional journey and key milestones
					</p>
				</div>

				{isMobile ? (
					<div className="relative space-y-6">
						{/* Vertical line behind cards */}
						<div className="absolute bottom-0 left-4 top-0 -z-10 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

						{experiences.map((experience, index) => (
							<motion.div
								key={index}
								className="relative"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true, amount: 0.3 }}
							>
								{/* Full-width content card with icon integrated */}
								<div className="glass glass-hover rounded-xl border border-white/20 p-4">
									<div className="flex items-start gap-3">
										{/* Icon as part of the card */}
										<motion.div
											className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center"
											initial={{ scale: 0 }}
											whileInView={{ scale: 1 }}
											transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
											viewport={{ once: true, amount: 0.3 }}
										>
											<div className="absolute inset-0 -z-10 h-11 w-11 -translate-x-0.5 -translate-y-0.5 rounded-full bg-amber-200 shadow-sm ring-1 ring-amber-300/70"></div>
											<div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-base text-white transition-all duration-300 hover:rotate-12 hover:scale-110">
												{experience.icon || '•'}
											</div>
										</motion.div>
										<div className="flex-1">
											<h3 className="text-lg font-bold text-white">
												{experience.title}
											</h3>
											<div className="mb-2 text-sm text-white/60">
												{experience.company} | {experience.period}
											</div>
											<p className="text-sm text-white/75">
												{experience.description}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				) : (
					<div className="relative space-y-12 before:absolute before:inset-0 before:left-1/2 before:z-0 before:ml-0 before:h-full before:-translate-x-px before:border-l-2 before:border-white/20">
						{experiences.map((experience, index) => (
							<div
								key={index}
								className={`relative z-10 flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
							>
								<motion.div
									className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}
									initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
									viewport={{ once: true, amount: 0.3 }}
								>
									<div className="glass glass-hover rounded-xl border border-white/20 p-6">
										<h3 className="text-xl font-bold text-white">
											{experience.title}
										</h3>
										<div className="mb-4 text-white/60">
											{experience.company} | {experience.period}
										</div>
										<p className="text-white/75">{experience.description}</p>
									</div>
								</motion.div>

								<div className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center">
									<motion.div
										className="relative z-10 flex items-center justify-center"
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
										viewport={{ once: true, amount: 0.3 }}
									>
										<div className="absolute h-11 w-11 rounded-full bg-amber-200 shadow-sm ring-1 ring-amber-300/70"></div>
										<div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-lg text-white transition-all duration-300 hover:rotate-12 hover:scale-110">
											{experience.icon || '•'}
										</div>
									</motion.div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
