/**
 * Custom smooth scroll utility for consistent behavior across all browsers
 * Solves Safari's fast scroll-behavior issue
 */

interface SmoothScrollOptions {
	targetPosition: number;
	duration?: number;
	offset?: number;
}

/**
 * Smooth scroll to a specific position with easing
 */
export function smoothScrollTo({
	targetPosition,
	duration = 800,
	offset = 0,
}: SmoothScrollOptions): void {
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition - offset;
	let startTime: number | null = null;

	// Easing function for smooth deceleration
	const easeInOutCubic = (t: number): number => {
		return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
	};

	const animation = (currentTime: number) => {
		if (startTime === null) startTime = currentTime;
		const timeElapsed = currentTime - startTime;
		const progress = Math.min(timeElapsed / duration, 1);
		const ease = easeInOutCubic(progress);

		window.scrollTo(0, startPosition + distance * ease);

		if (progress < 1) {
			requestAnimationFrame(animation);
		}
	};

	requestAnimationFrame(animation);
}

/**
 * Smooth scroll to an element by ID
 */
export function smoothScrollToElement(
	elementId: string,
	options?: { duration?: number; offset?: number }
): void {
	const element = document.getElementById(elementId);
	if (!element) return;

	const targetPosition = element.offsetTop;
	smoothScrollTo({
		targetPosition,
		duration: options?.duration,
		offset: options?.offset,
	});
}

/**
 * Smooth scroll to an element with navbar offset
 */
export function smoothScrollToElementWithNav(elementId: string): void {
	const element = document.getElementById(elementId);
	if (!element) return;

	const navbar = document.querySelector('nav');
	const navbarHeight = navbar ? navbar.offsetHeight : 80;

	smoothScrollTo({
		targetPosition: element.offsetTop,
		offset: navbarHeight + 5,
		duration: 800,
	});
}
