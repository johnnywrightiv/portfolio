import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
			<div className="container-section flex h-screen items-center justify-center">
				<div className="text-center">
					<h1 className="mb-4 text-4xl font-bold text-white">
						404 Error: Page Not Found
					</h1>
					<p className="mb-8 text-white/75">
						Sorry, the page you&#39;re looking for doesn&#39;t exist or has been
						moved.
					</p>
					<nav className="flex justify-center">
						<Button
							className="glass glass-hover border border-white/20 px-6 py-3 text-white hover:border-white/40"
							asChild
						>
							<Link href="/">Back to Home</Link>
						</Button>
					</nav>
				</div>
			</div>
		</main>
	);
}
