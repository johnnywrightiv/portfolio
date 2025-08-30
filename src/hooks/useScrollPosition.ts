import { useState, useEffect } from 'react';

export function useScrollPosition() {
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const heroSection = document.getElementById('hero');
			if (heroSection) {
				const heroTop = heroSection.offsetTop;
				const heroHeight = heroSection.offsetHeight;
				const triggerPoint = heroTop + heroHeight * 1.0; // 100% down the hero
				const scrollPosition = window.scrollY + 100; // Add some buffer
				setHasScrolled(scrollPosition > triggerPoint);
			}
		};

		// Initial check
		handleScroll();

		// Add scroll listener
		window.addEventListener('scroll', handleScroll, { passive: true });

		// Cleanup
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return hasScrolled;
}
