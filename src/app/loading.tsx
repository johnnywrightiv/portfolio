import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Loading() {
	return (
		<main className="flex h-screen w-full flex-col items-center justify-center bg-background text-center">
			<div className="relative flex flex-col items-center gap-6">
				{/* Animated accent gradient ring */}
				<span className="animate-spin-slow absolute inline-flex h-32 w-32 rounded-full bg-gradient-to-tr from-primary via-accent to-secondary opacity-40 blur-2xl" />
				{/* Themed spinner icon */}
				<Loader2
					className="z-1 drop-shadow-glow relative h-14 w-14 animate-spin text-primary"
					aria-label="Loading"
				/>
				{/* Brand/title */}
				<span className="text-foreground font-heading text-lg font-semibold tracking-wide">
					Loading portfolio...
				</span>
			</div>
		</main>
	);
}
