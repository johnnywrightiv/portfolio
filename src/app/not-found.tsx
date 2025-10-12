import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="text-center">
				<h1 className="text-foreground mb-4 text-4xl font-bold">
					404 Error: Page Not Found
				</h1>
				<p className="mb-8 text-muted-foreground">
					Sorry, the page you&#39;re looking for doesn&#39;t exist or has been
					moved.
				</p>
				<nav className="flex justify-center">
					<Button variant="outline" asChild>
						<Link href="/">Back to Home</Link>
					</Button>
				</nav>
			</div>
		</div>
	);
}
