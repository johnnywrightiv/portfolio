'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function AboutSection() {
	const [isVisible, setIsVisible] = useState(false);

	const renderBioWithLinks = (text: string) => {
		// Replace link placeholders with actual JSX links
		const processedText = text
			.replace(
				/\[Eluter\]/g,
				'<a href="https://www.eluter.com/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">Eluter</a>'
			)
			.replace(
				/\[DESAFIA\]/g,
				'<a href="https://desafia.tech/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">DESAFIA</a>'
			)
			.replace(
				/\[Polkadot Blockchain Academy\]/g,
				'<a href="https://pbax.polkadot.academy/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">Polkadot Blockchain Academy</a>'
			)
			.replace(
				/\[Devconnect\]/g,
				'<a href="https://devconnect.org/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">Devconnect</a>'
			);

		// Process bold text
		const parts = processedText.split(/(\*.*?\*)/g);
		return parts.map((part, index) => {
			if (part.startsWith('*') && part.endsWith('*')) {
				const boldContent = part.slice(1, -1);
				return (
					<strong
						key={index}
						className="font-semibold text-white"
						dangerouslySetInnerHTML={{ __html: boldContent }}
					/>
				);
			}
			return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
		});
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.15 } // Reduced threshold from 0.3 to 0.15 for earlier animation trigger
		);

		const element = document.getElementById('about');
		if (element) observer.observe(element);

		return () => observer.disconnect();
	}, []);

	return (
		<section id="about" className="py-section relative">
			<div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

			<div className="container-section relative z-10">
				<div
					className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
				>
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
						{/* Profile Image */}
						<div className="flex justify-center lg:justify-start">
							<div className="group relative">
								<div className="glass absolute -inset-4 rounded-full opacity-30 transition-opacity group-hover:opacity-50"></div>
								<Image
									src="/images/profile.jpg"
									alt="Artu Grande - Vibecoder & Growth Strategist professional headshot"
									width={400}
									height={400}
									className="relative rounded-full border-4 border-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
								/>
							</div>
						</div>

						{/* About Content */}
						<div className="space-y-6 text-center lg:text-left">
							<h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">
								About Me – Artu Grande
							</h2>

							<div className="space-y-4 leading-relaxed text-white/75">
								<p>
									{renderBioWithLinks(
										"Hi! I'm *Artu Grande*, a Vibecoder & Growth Strategist from Argentina. I specialize in scaling digital products that people genuinely love, combining UX design, Web3 technologies, and AI integration."
									)}
								</p>
								<p>
									{renderBioWithLinks(
										"I'm a graduate of the [Polkadot Blockchain Academy] and a scholar from [Devconnect] ARG, where I've been actively contributing to the Ethereum community. My journey includes working with innovative projects like [Eluter] and [DESAFIA], where I've helped build user-centric digital experiences."
									)}
								</p>
								<p>
									{renderBioWithLinks(
										"When I'm not coding or designing, you'll find me exploring new technologies, contributing to open-source projects, and always looking for the next challenge that can make a real impact in people's lives."
									)}
								</p>
							</div>

							<div className="mt-8 flex items-center justify-center gap-6 lg:justify-start">
								<a
									href="https://pbax.polkadot.academy/"
									target="_blank"
									rel="noopener noreferrer"
									className="transition-opacity hover:opacity-80"
								>
									<Image
										src="/icons/polkadot.svg"
										alt="Polkadot Blockchain Academy - Artu Grande graduate"
										width={240}
										height={240}
										className="transition-transform duration-300 hover:scale-105"
									/>
								</a>
								<a
									href="https://devconnect.org/"
									target="_blank"
									rel="noopener noreferrer"
									className="transition-opacity hover:opacity-80"
								>
									<Image
										src="/icons/devconnect.svg"
										alt="Devconnect ARG Ethereum Community Organizers - Artu Grande Scholar"
										width={240}
										height={240}
										className="transition-transform duration-300 hover:scale-105"
									/>
								</a>
							</div>

							<div className="flex justify-center lg:justify-start">
								<Button
									className="glass glass-hover group mt-8 border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10"
									onClick={() =>
										window.open(
											'https://wa.me/5491154000421?text=Hola%2C%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F',
											'_blank'
										)
									}
								>
									<MessageCircle className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
									Let&apos;s Connect
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
