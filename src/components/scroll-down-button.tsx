// 'use client';

import { useEffect, useState } from 'react';

interface ScrollDownButtonProps {
	targetId: string;
	label?: string;
}

export function ScrollDownButton({
	targetId,
	label = 'Scroll Down',
}: ScrollDownButtonProps) {
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const section = document.getElementById(targetId);
			if (section) {
				const top = section.offsetTop;
				const height = section.offsetHeight;
				const scrollPos = window.scrollY + 100;
				setHidden(scrollPos > top + height);
			}
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [targetId]);

	const handleClick = () => {
		const section = document.getElementById(targetId);
		if (section) {
			const offset = section.offsetTop + section.offsetHeight - 48;
			window.scrollTo({ top: offset, behavior: 'smooth' });
		}
	};

	return (
		<div
			className={`relative mt-16 hidden w-full flex-col items-center justify-center text-xs text-text-secondary opacity-80 transition-opacity duration-500 md:flex ${hidden ? 'pointer-events-none opacity-0' : 'animate-bounce'}`}
		>
			<button
				onClick={handleClick}
				className="flex flex-col items-center focus:outline-none"
				aria-label={label}
			>
				<span>{label}</span>
				<div className="bg-gradient-primary-to-b mt-2 h-6 w-1 rounded-full" />
			</button>
		</div>
	);
}
