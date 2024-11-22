import React, { useEffect, useRef } from 'react';

const HeroAnimation = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;

		// Check if canvas exists before accessing its properties
		if (canvas) {
			const ctx = canvas.getContext('2d');

			if (ctx) {
				const setCanvasSize = () => {
					const pixelRatio = window.devicePixelRatio || 1;
					canvas.width = window.innerWidth * pixelRatio;
					canvas.height = window.innerHeight * pixelRatio;
					canvas.style.width = `${window.innerWidth}px`;
					canvas.style.height = `${window.innerHeight}px`;
					ctx.scale(pixelRatio, pixelRatio);
				};

				setCanvasSize();
				window.addEventListener('resize', setCanvasSize);

				// Create fewer, more deliberately placed stars
				const stars = Array.from({ length: 150 }, () => ({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					size: Math.random() * 1.5,
					speed: Math.random() * 0.2 + 0.1, // Slower movement
					opacity: Math.random() * 0.5 + 0.2, // More consistent opacity
					direction: Math.random() * Math.PI * 2,
					pulse: Math.random() * Math.PI, // For slight twinkling
				}));

				const animate = () => {
					// Subtle fade instead of full clear
					ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
					ctx.fillRect(0, 0, canvas.width, canvas.height);

					// Draw and update stars
					stars.forEach((star) => {
						// More subtle movement
						star.x += Math.cos(star.direction) * star.speed;
						star.y += Math.sin(star.direction) * star.speed;

						// Wrap around screen
						if (star.x < 0) star.x = canvas.width;
						if (star.x > canvas.width) star.x = 0;
						if (star.y < 0) star.y = canvas.height;
						if (star.y > canvas.height) star.y = 0;

						// Gentler twinkling effect
						star.pulse += 0.02;
						const twinkle = Math.sin(star.pulse) * 0.3 + 0.7;

						// Draw star with soft edges
						ctx.beginPath();
						const gradient = ctx.createRadialGradient(
							star.x,
							star.y,
							0,
							star.x,
							star.y,
							star.size * 2
						);
						gradient.addColorStop(
							0,
							`rgba(255, 255, 255, ${star.opacity * twinkle})`
						);
						gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
						ctx.fillStyle = gradient;
						ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
						ctx.fill();
					});

					// Draw two subtle nebula clouds
					const drawNebula = (
						x: number,
						y: number,
						size: number,
						hue: number
					) => {
						const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);

						gradient.addColorStop(0, `hsla(${hue}, 70%, 60%, 0.015)`);
						gradient.addColorStop(0.5, `hsla(${hue}, 70%, 50%, 0.01)`);
						gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

						ctx.fillStyle = gradient;
						ctx.fillRect(0, 0, canvas.width, canvas.height);
					};

					// Draw two overlapping nebulae with different colors
					drawNebula(
						canvas.width * 0.7,
						canvas.height * 0.3,
						canvas.width * 0.5,
						270
					); // Purple
					drawNebula(
						canvas.width * 0.3,
						canvas.height * 0.7,
						canvas.width * 0.4,
						230
					); // Blue

					requestAnimationFrame(animate);
				};

				animate();

				return () => {
					window.removeEventListener('resize', setCanvasSize);
				};
			}
		}
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="absolute inset-0 -z-10 h-full w-full"
			style={{
				background:
					'linear-gradient(to bottom, rgba(0,0,0,0.97), rgba(0,0,0,1))',
			}}
		/>
	);
};

export default HeroAnimation;
