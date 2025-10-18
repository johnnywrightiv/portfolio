'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

import reviewsData from '@/data/client-reviews.json';

// Animation variants
const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

export default function ClientTestimonials() {
	return (
		<section id="testimonials" className="py-section">
			<div className="container-section">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={fadeIn}
				>
					<div className="mb-6 flex flex-col items-center justify-center gap-4 px-4 md:mb-12 min-[980px]:px-0">
						<motion.h2
							className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl"
							variants={fadeIn}
						>
							Client Testimonials
						</motion.h2>
						<motion.p
							className="mx-auto max-w-2xl text-center text-sm text-white/75 sm:text-base"
							variants={fadeIn}
						>
							What clients say about working with me
						</motion.p>
					</div>

					{/* Carousel Container */}
					<motion.div
						className="relative w-full px-4 min-[980px]:px-0"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={staggerContainer}
					>
						<Carousel
							opts={{
								align: 'start',
								loop: true,
							}}
							className="w-full"
						>
							<CarouselContent className="-ml-3 md:-ml-4">
								{reviewsData.map((testimonial) => (
									<CarouselItem
										key={testimonial.id}
										className="basis-full pl-3 md:basis-1/2 md:pl-4 lg:basis-1/3"
									>
										<Card className="glass h-full border border-white/20">
											<CardContent className="flex h-full flex-col p-4 md:p-6">
												<div className="mb-3 flex items-center gap-3 md:gap-4">
													<div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full md:h-12 md:w-12">
														<Image
															src={
																testimonial.image ||
																'/images/optimized/placeholder.webp'
															}
															alt={testimonial.name}
															fill
															loading="lazy"
															className="object-cover"
														/>
													</div>
													<div>
														<h4 className="text-sm font-semibold text-white md:text-base">
															{testimonial.name}
														</h4>
														<p className="text-xs text-white/60 md:text-sm">
															{testimonial.position}
														</p>
													</div>
												</div>
												<p className="mb-4 flex-grow text-sm text-white/75 md:text-base">
													&quot;{testimonial.content}&quot;
												</p>
												<div className="mt-auto">
													<div className="flex gap-1">
														{[1, 2, 3, 4, 5].map((star) => (
															<Star
																key={star}
																className={`h-4 w-4 md:h-5 md:w-5 ${
																	star <= testimonial.rating
																		? 'fill-primary text-primary'
																		: 'text-white/20'
																}`}
															/>
														))}
													</div>
												</div>
											</CardContent>
										</Card>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="absolute left-0 top-1/2 z-20 flex h-6 w-6 -translate-x-8 -translate-y-1/2 rounded-full border border-white/20 bg-black/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/95 hover:shadow-xl md:h-10 md:w-10 md:-translate-x-5" />
							<CarouselNext className="absolute right-0 top-1/2 z-20 flex h-6 w-6 -translate-y-1/2 translate-x-8 rounded-full border border-white/20 bg-black/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/95 hover:shadow-xl md:h-10 md:w-10 md:translate-x-5" />
						</Carousel>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
