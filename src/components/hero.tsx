'use client';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
export default function HeroSection() {
	const scrollToAbout = () => {
		document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section
			id="home"
			className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16 md:pt-0"
		>
			<div
				className="absolute inset-0 opacity-10"
				style={{
					backgroundImage: 'url(/images/background.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			></div>

			<div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6">
				<div>
					{/* Profile Introduction */}
					<div className="mb-4 flex items-center justify-center sm:mb-8">
						<div className="glass mr-3 rounded-full p-1 sm:mr-4">
							<Image
								src="/images/profile.jpg"
								alt="Artu Grande - Vibecoder & Growth Strategist profile photo"
								width={40}
								height={40}
								className="rounded-full sm:h-[60px] sm:w-[60px]"
							/>
						</div>
						<div className="text-center">
							<p className="text-sm text-white/75 sm:text-lg">
								Welcome to my <strong>personal portfolio</strong> 👋
							</p>
						</div>
					</div>

					<div className="relative mb-6 sm:mb-12">
						<h1 className="mb-4 px-2 text-xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
							Vibecoder & Growth Strategist <br />
							<span className="mt-4 block text-sm font-normal text-white/90 sm:text-lg md:text-xl lg:text-2xl">
								I scale digital products people love, blending UX, Web3, and AI
							</span>
						</h1>

						{/* Figma icon - moved to top left, away from text */}
						<div className="animate-float-1 absolute -left-4 -top-8 rotate-12 transform sm:-left-8 sm:-top-12">
							<div className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-xl p-2 sm:h-16 sm:w-16 sm:rounded-2xl sm:p-4 md:h-20 md:w-20">
								<Image
									src="/images/figma.png"
									alt="Figma design tool - Artu Grande UX expertise"
									width={20}
									height={20}
									className="sm:h-[32px] sm:w-[32px] md:h-[40px] md:w-[40px]"
								/>
							</div>
						</div>

						<div className="animate-float-2 absolute -left-4 top-12 -rotate-6 transform sm:-left-8 sm:top-16">
							<div className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-xl p-2 sm:h-16 sm:w-16 sm:rounded-2xl sm:p-4 md:h-20 md:w-20">
								<Image
									src="/icons/v0logo.svg"
									alt="v0 AI development tool - Vibecoder expertise"
									width={20}
									height={20}
									className="sm:h-[32px] sm:w-[32px] md:h-[40px] md:w-[40px]"
								/>
							</div>
						</div>

						{/* Growth icon */}
						<div className="animate-float-3 absolute -right-4 -top-8 rotate-6 transform sm:-right-8 sm:-top-12">
							<div className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-xl p-2 sm:h-16 sm:w-16 sm:rounded-2xl sm:p-4 md:h-20 md:w-20">
								<Image
									src="/images/growth.png"
									alt="Growth strategy - Digital product scaling expertise"
									width={20}
									height={20}
									className="sm:h-[32px] sm:w-[32px] md:h-[40px] md:w-[40px]"
								/>
							</div>
						</div>

						{/* Vibecoding icon - moved below text, centered */}
						<div className="animate-float-1 absolute -bottom-12 left-1/2 -translate-x-1/2 rotate-3 transform sm:-bottom-16"></div>
					</div>

					{/* Stats Cards */}
					<div className="mb-6 grid grid-cols-1 gap-3 px-2 sm:mb-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
						<Card className="glass glass-hover group p-3 text-center sm:p-6">
							<div className="flex items-start justify-center space-x-2 sm:space-x-3">
								<div className="text-lg transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 sm:text-2xl">
									📱
								</div>
								<div>
									<p className="text-xs font-semibold text-white sm:text-base">
										Mobile Apps
									</p>
								</div>
							</div>
						</Card>

						<Card className="glass glass-hover group p-3 text-center sm:p-6">
							<div className="flex items-start justify-center space-x-2 sm:space-x-3">
								<div className="text-lg transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 sm:text-2xl">
									🤖
								</div>
								<div>
									<p className="text-xs font-semibold text-white sm:text-base">
										AI Integration
									</p>
								</div>
							</div>
						</Card>

						<Card className="glass glass-hover group p-3 text-center sm:p-6">
							<div className="flex items-start justify-center space-x-2 sm:space-x-3">
								<div className="text-lg transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 sm:text-2xl">
									🌍
								</div>
								<div>
									<p className="text-xs font-semibold text-white sm:text-base">
										Web3 Solutions
									</p>
								</div>
							</div>
						</Card>

						<Card className="glass glass-hover group p-3 text-center sm:p-6">
							<div className="flex items-start justify-center space-x-2 sm:space-x-3">
								<div className="text-lg transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 sm:text-2xl">
									🚀
								</div>
								<div>
									<p className="text-xs font-semibold text-white sm:text-base">
										Growth Strategy
									</p>
								</div>
							</div>
						</Card>
					</div>

					{/* Scroll Button */}
					<div className="flex justify-center">
						<Button
							variant="ghost"
							onClick={scrollToAbout}
							className="animate-gentle-bounce group transition-all duration-500 hover:scale-105"
						>
							<div className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full p-2 sm:h-16 sm:w-16 sm:p-4">
								<ChevronDown className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-white/80 sm:h-8 sm:w-8" />
							</div>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
