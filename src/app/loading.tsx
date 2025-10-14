import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Loading() {
	return (
		<main className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-center">
			<div className="relative flex flex-col items-center gap-6">
				{/* Animated accent gradient ring */}
				<span className="animate-spin-slow absolute inline-flex h-32 w-32 rounded-full bg-gradient-to-tr from-white/20 via-white/10 to-white/20 opacity-40 blur-2xl" />
				{/* Themed spinner icon */}
				<Loader2
					className="z-1 drop-shadow-glow relative h-14 w-14 animate-spin text-white"
					aria-label="Loading"
				/>
				{/* Brand/title */}
				<span className="text-lg font-semibold tracking-wide text-primary"></span>
			</div>
		</main>
	);
}
