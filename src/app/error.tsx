'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
	return (
		<div className="mb-2 bg-destructive p-4 text-end">
			<h1 className="text-destructive-foreground">
				Oops, something went wrong!
			</h1>
			<p>
				<strong>Error:</strong> {error.message}
			</p>
			<Button variant="secondary" className="mr-2 mt-8" onClick={() => reset()}>
				Try again
			</Button>
		</div>
	);
};

export default Error;
