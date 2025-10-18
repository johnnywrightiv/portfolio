import React from 'react';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function Loading() {
	return (
		<main className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-center">
			{/* Background pattern */}
			<div className="absolute inset-0 opacity-10">
				<div
					className="h-full w-full"
					style={{
						backgroundImage: 'url(/images/optimized/hero-background1.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						filter: 'blur(2px)',
					}}
				/>
			</div>

			<div className="relative z-10 flex flex-col items-center gap-6">
				{/* Profile image */}
				<div className="glass rounded-full p-2">
					<Image
						src="/images/optimized/profile-picture.jpg"
						alt="John Wright"
						width={60}
						height={60}
						className="rounded-full"
						priority
					/>
				</div>

				{/* Animated accent gradient ring */}
				<span className="animate-spin-slow absolute inline-flex h-32 w-32 rounded-full bg-gradient-to-tr from-white/20 via-white/10 to-white/20 opacity-40 blur-2xl" />

				{/* Themed spinner icon */}
				<Loader2
					className="z-1 drop-shadow-glow relative h-14 w-14 animate-spin text-primary"
					aria-label="Loading"
				/>

				{/* Brand/title */}
				<div className="space-y-2">
					<h1 className="text-xl font-bold text-white">John Wright</h1>
					<p className="text-sm text-white/70">Full-Stack Developer</p>
				</div>
			</div>
		</main>
	);
}
