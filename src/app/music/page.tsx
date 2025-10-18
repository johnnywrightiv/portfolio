import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Music Production | John Wright',
	description:
		'Music production, audio engineering, and sound design work. How creative audio background enhances my development approach.',
	openGraph: {
		title: 'Music Production | John Wright',
		description: 'Music production and audio engineering background.',
	},
};

export default function MusicPage() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
			<div className="container-section py-section">
				<h1 className="mb-4 text-4xl font-bold text-white">Music</h1>
				<p className="text-white/75">Coming soon...</p>
			</div>
		</main>
	);
}
