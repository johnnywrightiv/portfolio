'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';

import reviewsData from '@/data/client-reviews.json';

export default function ClientTestimonials() {
	// Create continuous array by duplicating items at the end
	const continuousData = [...reviewsData, ...reviewsData, ...reviewsData];
	const totalItems = reviewsData.length;

	const [currentIndex, setCurrentIndex] = useState(totalItems); // Start at first "real" set
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [dragOffset, setDragOffset] = useState(0);
	const [cardsPerView, setCardsPerView] = useState(1);

	// Update cards per view based on screen size
	useEffect(() => {
		const updateCardsPerView = () => {
			if (window.innerWidth < 768) {
				setCardsPerView(1);
			} else if (window.innerWidth < 1024) {
				setCardsPerView(2);
			} else {
				setCardsPerView(3);
			}
		};

		updateCardsPerView();
		window.addEventListener('resize', updateCardsPerView);
		return () => window.removeEventListener('resize', updateCardsPerView);
	}, []);

	// Handle seamless loop reset
	useEffect(() => {
		if (!isDragging) {
			if (currentIndex >= totalItems * 3) {
				// Reset to start of second set after transition
				const timer = setTimeout(() => {
					setCurrentIndex(totalItems);
				}, 500);
				return () => clearTimeout(timer);
			} else if (currentIndex < 0) {
				// Reset to end of second set after transition
				const timer = setTimeout(() => {
					setCurrentIndex(totalItems * 2 - 1);
				}, 500);
				return () => clearTimeout(timer);
			}
		}
	}, [currentIndex, isDragging, totalItems]);

	const nextSlide = useCallback(() => {
		setCurrentIndex((prev) => {
			const newIndex = prev + 1;
			// If we're at the end, wrap to the beginning seamlessly
			if (newIndex >= totalItems * 3) {
				return totalItems; // Jump to start of second set
			}
			return newIndex;
		});
	}, [totalItems]);

	const prevSlide = useCallback(() => {
		setCurrentIndex((prev) => {
			const newIndex = prev - 1;
			// If we're going below start, jump to end of second set
			if (newIndex < 0) {
				return totalItems * 2 - 1; // Jump to end of second set
			}
			return newIndex;
		});
	}, [totalItems]);

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
			<div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
				<motion.div
					className="mb-8 text-center sm:mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true, amount: 0.2 }}
				>
					<h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
						Client Testimonials
					</h2>
					<p className="mx-auto max-w-2xl text-sm text-white/75 sm:text-base">
						What clients say about working with me
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="mx-auto w-full max-w-5xl">
						<div className="relative flex items-center gap-1 md:gap-3">
							{/* Previous Button */}
							<Button
								variant="outline"
								size="icon"
								onClick={prevSlide}
								className="h-7 w-7 flex-shrink-0 rounded-full md:h-10 md:w-10"
							>
								<ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
								<span className="sr-only">Previous slide</span>
							</Button>

							{/* Carousel */}
							<div className="relative flex-1 overflow-hidden">
								<div
									className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-in-out'} select-none`}
									style={{
										transform: `translateX(calc(-${currentIndex * (100 / cardsPerView)}% + ${dragOffset}px))`,
										transition: isDragging
											? 'none'
											: 'transform 500ms ease-in-out',
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
											className="w-full flex-shrink-0 px-0.5 md:w-1/2 md:px-1 xl:w-1/3 xl:px-2"
										>
											<Card className="glass h-full border border-white/20">
												<CardContent className="flex h-full flex-col p-4 md:p-6">
													<div className="mb-3 flex items-center gap-3 md:gap-4">
														<div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full md:h-12 md:w-12">
															<Image
																src={testimonial.image || '/placeholder.svg'}
																alt={testimonial.name}
																fill
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
										</div>
									))}
								</div>
							</div>

							{/* Next Button */}
							<Button
								variant="outline"
								size="icon"
								onClick={nextSlide}
								className="h-7 w-7 flex-shrink-0 rounded-full md:h-10 md:w-10"
							>
								<ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
								<span className="sr-only">Next slide</span>
							</Button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
