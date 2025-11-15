'use client';

import { useEffect } from 'react';

const POINTER_MEDIA_QUERY = '(hover: hover) and (pointer: fine)';
const MIN_WIDTH_MEDIA_QUERY = '(min-width: 640px)';

const updateHoverClass = (classList: DOMTokenList, canHover: boolean) => {
	if (canHover) {
		classList.add('can-hover');
		classList.remove('avoid-hover');
	} else {
		classList.add('avoid-hover');
		classList.remove('can-hover');
	}
};

export function HoverCapabilityProvider() {
	useEffect(() => {
		const classList = document.documentElement.classList;
		const hoverQuery = window.matchMedia(POINTER_MEDIA_QUERY);
		const widthQuery = window.matchMedia(MIN_WIDTH_MEDIA_QUERY);

		const evaluate = () =>
			updateHoverClass(classList, hoverQuery.matches && widthQuery.matches);

		evaluate();

		const hoverHandler = () => evaluate();
		const widthHandler = () => evaluate();

		hoverQuery.addEventListener('change', hoverHandler);
		widthQuery.addEventListener('change', widthHandler);

		return () => {
			hoverQuery.removeEventListener('change', hoverHandler);
			widthQuery.removeEventListener('change', widthHandler);
		};
	}, []);

	return null;
}
