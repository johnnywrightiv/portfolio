import { useEffect } from 'react';

function useIntersectionObserver({
	threshold = 0.2,
	rootMargin = '50px',
	targetClass = 'animate-on-scroll',
	animationClass = 'fade-in',
}) {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const element = entry.target;
						element.classList.add(animationClass); // Add animation
						observer.unobserve(element); // Stop observing
					}
				});
			},
			{ threshold, rootMargin }
		);

		const elements = document.querySelectorAll(`.${targetClass}`);
		elements.forEach((element) => {
			observer.observe(element);
		});

		return () => observer.disconnect(); // Cleanup
	}, [threshold, rootMargin, targetClass, animationClass]);
}

export default useIntersectionObserver;
