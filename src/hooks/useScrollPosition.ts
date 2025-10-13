import { useState, useEffect } from 'react';

export function useScrollPosition() {
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setHasScrolled(scrollPosition > 50); // Trigger after 50px scroll
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
