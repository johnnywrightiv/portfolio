import { useEffect, useState } from 'react';

function useIntersectionObserver() {
	// Add mounted state to ensure we're running client-side
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const element = entry.target;
						const animation = element.dataset.animation || 'fade-in';
						// Remove the initial opacity-0
						element.classList.remove('opacity-0');
						// Add the animation class
						element.classList.add('animate-' + animation);
						observer.unobserve(element);
					}
				});
			},
			{
				threshold: 0.2,
				rootMargin: '50px',
			}
		);

		// Only observe elements once mounted
		if (mounted) {
			const elements = document.querySelectorAll('[data-animate="true"]');
			elements.forEach((element) => observer.observe(element));
		}

		return () => observer.disconnect();
	}, [mounted]);

	return mounted;
}

export default useIntersectionObserver;
