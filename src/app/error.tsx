'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
			<div className="container-section flex h-screen items-center justify-center">
				<div className="text-center">
					<h1 className="mb-4 text-4xl font-bold text-white">
						Oops, something went wrong!
					</h1>
					<p className="mb-8 text-white/75">
						<strong>Error:</strong> {error.message}
					</p>
					<nav className="flex justify-center">
						<Button
							className="glass glass-hover border border-white/20 px-6 py-3 text-white hover:border-white/40"
							onClick={() => reset()}
						>
							Try again
						</Button>
					</nav>
				</div>
			</div>
		</main>
	);
}
