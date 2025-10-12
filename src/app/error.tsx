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
		<div className="flex h-screen items-center justify-center">
			<div className="text-center">
				<h1 className="text-foreground mb-4 text-4xl font-bold">
					Oops, something went wrong!
				</h1>
				<p className="mb-8 text-muted-foreground">
					<strong>Error:</strong> {error.message}
				</p>
				<nav className="flex justify-center">
					<Button variant="outline" onClick={() => reset()}>
						Try again
					</Button>
				</nav>
			</div>
		</div>
	);
}
