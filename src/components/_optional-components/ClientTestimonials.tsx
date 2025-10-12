'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, StarHalf } from 'lucide-react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

import reviewsData from '@/data/client-reviews.json';

export default function ClientTestimonials() {
	const renderStars = (rating: number) => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		for (let i = 0; i < fullStars; i++) {
			stars.push(
				<Star key={i} className="h-5 w-5 fill-primary text-primary" />
			);
		}

		if (hasHalfStar) {
			stars.push(
				<StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />
			);
		}

		return <div className="flex gap-1">{stars}</div>;
	};

	return (
		<section id="testimonials" className="py-section bg-black">
			<div className="container-section">
				<motion.div
					className="mb-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true, amount: 0.2 }}
				>
					<h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
						Client Testimonials
					</h2>
					<p className="mx-auto max-w-2xl text-white/75">
						What clients say about working with me
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true, amount: 0.2 }}
					className="px-4 md:px-0"
				>
					<Carousel className="mx-auto w-full max-w-5xl">
						<CarouselContent className="-ml-2 md:-ml-4">
							{reviewsData.map((testimonial) => (
								<CarouselItem
									key={testimonial.id}
									className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
								>
									<Card className="glass h-full border-border">
										<CardContent className="flex h-full flex-col p-6">
											<div className="mb-4 flex items-center gap-4">
												<div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
													<Image
														src={testimonial.image || '/placeholder.svg'}
														alt={testimonial.name}
														fill
														className="object-cover"
													/>
												</div>
												<div>
													<h4 className="font-semibold text-white">
														{testimonial.name}
													</h4>
													<p className="text-sm text-muted-foreground">
														{testimonial.position}
													</p>
												</div>
											</div>
											<p className="mb-4 flex-grow text-white/75">
												&quot;{testimonial.content}&quot;
											</p>
											<div className="mt-auto">
												{renderStars(testimonial.rating)}
											</div>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className="mt-8 flex justify-center gap-2">
							<CarouselPrevious className="static translate-y-0" />
							<CarouselNext className="static translate-y-0" />
						</div>
					</Carousel>
				</motion.div>
			</div>
		</section>
	);
}
