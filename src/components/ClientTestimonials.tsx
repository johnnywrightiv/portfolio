'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, StarHalf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useCallback } from 'react';

import reviewsData from '@/data/client-reviews.json';

export default function ClientTestimonials() {
	// Create continuous array by duplicating items at the end
	const continuousData = [...reviewsData, ...reviewsData, ...reviewsData];
	const totalItems = reviewsData.length;

	const [currentIndex, setCurrentIndex] = useState(totalItems); // Start at first "real" set
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [dragOffset, setDragOffset] = useState(0);

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

	const nextSlide = useCallback(() => {
		setCurrentIndex((prev) => {
			const newIndex = prev + 1;
			// If we're at the end, wrap to the beginning
			if (newIndex >= continuousData.length) {
				return 0;
			}
			return newIndex;
		});
	}, [continuousData.length]);

	const prevSlide = useCallback(() => {
		setCurrentIndex((prev) => {
			const newIndex = prev - 1;
			// If we're going below 0, wrap to the end
			if (newIndex < 0) {
				return continuousData.length - 1;
			}
			return newIndex;
		});
	}, [continuousData.length]);

	// Drag/swipe functionality
	const handleMouseDown = (e: React.MouseEvent) => {
		setIsDragging(true);
		setStartX(e.clientX);
		setDragOffset(0);
		e.preventDefault();
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging) return;
		const currentX = e.clientX;
		const diffX = currentX - startX;
		setDragOffset(diffX);
		e.preventDefault();
	};

	const handleMouseUp = (e: React.MouseEvent) => {
		if (!isDragging) return;

		const diffX = e.clientX - startX;
		const threshold = 80; // Minimum distance to trigger slide change

		if (Math.abs(diffX) > threshold) {
			if (diffX > 0) {
				prevSlide();
			} else {
				nextSlide();
			}
		}

		setIsDragging(false);
		setDragOffset(0);
	};

	// Touch events for mobile
	const handleTouchStart = (e: React.TouchEvent) => {
		setIsDragging(true);
		setStartX(e.touches[0].clientX);
		setDragOffset(0);
		e.preventDefault();
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging) return;
		const currentX = e.touches[0].clientX;
		const diffX = currentX - startX;
		setDragOffset(diffX);
		e.preventDefault();
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		if (!isDragging) return;

		const diffX = e.changedTouches[0].clientX - startX;
		const threshold = 80;

		if (Math.abs(diffX) > threshold) {
			if (diffX > 0) {
				prevSlide();
			} else {
				nextSlide();
			}
		}

		setIsDragging(false);
		setDragOffset(0);
	};

	return (
		<section id="testimonials" className="py-section">
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
					<div className="mx-auto w-full max-w-5xl">
						<div className="relative flex items-center gap-4">
							{/* Previous Button */}
							<Button
								variant="outline"
								size="icon"
								onClick={prevSlide}
								className="h-10 w-10 flex-shrink-0 rounded-full"
							>
								<ArrowLeft className="h-4 w-4" />
								<span className="sr-only">Previous slide</span>
							</Button>

							{/* Carousel */}
							<div className="relative flex-1 overflow-hidden">
								<div
									className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-in-out'} select-none`}
									style={{
										transform: `translateX(calc(-${currentIndex * (100 / 3)}% + ${dragOffset}px))`,
									}}
									onMouseDown={handleMouseDown}
									onMouseMove={handleMouseMove}
									onMouseUp={handleMouseUp}
									onMouseLeave={handleMouseUp}
									onTouchStart={handleTouchStart}
									onTouchMove={handleTouchMove}
									onTouchEnd={handleTouchEnd}
								>
									{continuousData.map((testimonial, index) => (
										<div
											key={`${testimonial.id}-${index}`}
											className="w-1/3 flex-shrink-0 px-2 md:px-4"
										>
											<Card className="glass h-full border border-white/20">
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
															<p className="text-sm text-white/60">
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
										</div>
									))}
								</div>
							</div>

							{/* Next Button */}
							<Button
								variant="outline"
								size="icon"
								onClick={nextSlide}
								className="h-10 w-10 flex-shrink-0 rounded-full"
							>
								<ArrowRight className="h-4 w-4" />
								<span className="sr-only">Next slide</span>
							</Button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
