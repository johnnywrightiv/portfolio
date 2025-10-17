'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// List of Client/Employer Examples (get logos, etc.)
// Ravinia
// Live Nation
// House of Blues
// Music Dealers
// Digital Tour Bus
// Frey Design
// Navy Pier
// Audiotree
// Rolling Loud
// The Bright Pursuit
// Chicago Music Exchange
// Chicago International Film Festival
// UK Tech Metal Fest
// White Couch Productions
// Wire
// Happy Belly Vending
// The Araca Group
// Superfly
// Concord Music Hall
// Ravenswood Event Services
// At The Drive Inn
// Lakeshore Drive In
// etc...

const clients = [
	{ name: 'Frey Design', logo: '/images/clients/frey-design.png' },
	{ name: 'Live Nation', logo: '/images/clients/live-nation.png' },
	{ name: 'House of Blues', logo: '/images/clients/house-of-blues.png' },
	{ name: 'Music Dealers', logo: '/images/clients/music-dealers.png' },
	{ name: 'Digital Tour Bus', logo: '/images/clients/digital-tour-bus.png' },
	{
		name: 'Chicago Music Exchange',
		logo: '/images/clients/chicago-music-exchange.png',
	},
	{
		name: 'Chicago International Film Festival',
		logo: '/images/clients/chicago-international-film-festival.png',
	},
	{
		name: 'UK Tech Metal Fest',
		logo: '/images/clients/uk-tech-metal-fest.png',
	},
];

// Animation variants
const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut' as const },
	},
};

export default function TrustedBySection() {
	const [translateX, setTranslateX] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const [itemWidth, setItemWidth] = useState(0);

	useEffect(() => {
		const calculateItemWidth = () => {
			if (containerRef.current) {
				const firstItem = containerRef.current.querySelector('.logo-item');
				if (firstItem) {
					const rect = firstItem.getBoundingClientRect();
					const styles = window.getComputedStyle(firstItem);
					const marginLeft = Number.parseInt(styles.marginLeft);
					const marginRight = Number.parseInt(styles.marginRight);
					setItemWidth(rect.width + marginLeft + marginRight);
				}
			}
		};

		calculateItemWidth();
		window.addEventListener('resize', calculateItemWidth);

		return () => window.removeEventListener('resize', calculateItemWidth);
	}, []);

	useEffect(() => {
		if (itemWidth === 0) return;

		const animate = () => {
			if (!isPaused) {
				setTranslateX((prev) => {
					const newTranslateX = prev - 1; // Move 1px per frame
					const totalWidth = itemWidth * clients.length; // Width of one complete set

					// Reset to 0 when we've moved exactly one complete set width
					// This creates a seamless loop since we have duplicate content
					if (newTranslateX <= -totalWidth) {
						return 0;
					}
					return newTranslateX;
				});
			}
		};

		const intervalId = setInterval(animate, 16); // ~60fps

		return () => clearInterval(intervalId);
	}, [itemWidth, isPaused]);

	return (
		<section
			id="trusted-by"
			className="overflow-hidden bg-gradient-to-b from-background via-card to-background py-16"
		>
			<div className="container-section">
				<motion.div
					className="mb-12 text-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={fadeInUp}
				>
					<motion.h2
						className="mb-4 text-3xl font-bold text-white md:text-4xl"
						variants={fadeInUp}
					>
						Trusted by These Amazing Companies
					</motion.h2>
					<motion.p
						className="mx-auto max-w-2xl text-lg text-white/75"
						variants={fadeInUp}
					>
						I&apos;ve had the privilege of working with innovative teams and
						cutting-edge projects across various industries.
					</motion.p>
				</motion.div>

				<div
					className="relative overflow-hidden"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
					style={{
						maskImage:
							'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
						WebkitMaskImage:
							'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
					}}
				>
					<div
						ref={containerRef}
						className="flex transition-none"
						style={{ transform: `translateX(${translateX}px)` }}
					>
						{/* First set of logos */}
						{clients.map((client, index) => (
							<div
								key={`first-${index}`}
								className="logo-item mx-6 flex flex-shrink-0 items-center justify-center"
							>
								<div className="relative h-28 w-28 opacity-70 transition-all duration-300 hover:scale-110 hover:opacity-100 md:h-36 md:w-36 lg:h-40 lg:w-40">
									{client.logo && client.logo !== '/placeholder.svg' ? (
										<Image
											src={client.logo}
											alt={`${client.name} client logo - John Wright Full-Stack Developer project portfolio`}
											fill
											className="object-contain grayscale filter transition-all duration-300 hover:grayscale-0"
											loading="lazy"
										/>
									) : (
										<div className="flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed border-white/30 bg-white/5">
											<span className="text-xs font-medium text-white/60">
												{client.name}
											</span>
										</div>
									)}
								</div>
							</div>
						))}

						{/* Second set for seamless loop */}
						{clients.map((client, index) => (
							<div
								key={`second-${index}`}
								className="logo-item mx-6 flex flex-shrink-0 items-center justify-center"
							>
								<div className="relative h-28 w-28 opacity-70 transition-all duration-300 hover:scale-110 hover:opacity-100 md:h-36 md:w-36 lg:h-40 lg:w-40">
									{client.logo && client.logo !== '/placeholder.svg' ? (
										<Image
											src={client.logo}
											alt={`${client.name} client logo - John Wright Full-Stack Developer project portfolio`}
											fill
											className="object-contain grayscale filter transition-all duration-300 hover:grayscale-0"
											loading="lazy"
										/>
									) : (
										<div className="flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed border-white/30 bg-white/5">
											<span className="text-xs font-medium text-white/60">
												{client.name}
											</span>
										</div>
									)}
								</div>
							</div>
						))}

						{/* Third set for extra seamless loop */}
						{clients.map((client, index) => (
							<div
								key={`third-${index}`}
								className="logo-item mx-6 flex flex-shrink-0 items-center justify-center"
							>
								<div className="relative h-28 w-28 opacity-70 transition-all duration-300 hover:scale-110 hover:opacity-100 md:h-36 md:w-36 lg:h-40 lg:w-40">
									{client.logo && client.logo !== '/placeholder.svg' ? (
										<Image
											src={client.logo}
											alt={`${client.name} client logo - John Wright Full-Stack Developer project portfolio`}
											fill
											className="object-contain grayscale filter transition-all duration-300 hover:grayscale-0"
											loading="lazy"
										/>
									) : (
										<div className="flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed border-white/30 bg-white/5">
											<span className="text-xs font-medium text-white/60">
												{client.name}
											</span>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
