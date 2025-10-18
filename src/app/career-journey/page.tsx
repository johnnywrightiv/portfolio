import type { Metadata } from 'next';
import CareerJourney from '@/components/CareerJourney';

export const metadata: Metadata = {
	title: 'Career Journey | John Wright',
	description:
		'From audio engineer to full-stack developer. My path through music production, UX research, and web development.',
	openGraph: {
		title: 'Career Journey | John Wright',
		description: 'From audio engineer to full-stack developer.',
	},
};

export default function MusicPage() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
			<div className="container-section py-section">
				<h1 className="sr-only mb-4 text-center text-4xl font-bold text-white">
					Career Journey
				</h1>
			</div>
			<CareerJourney />
		</main>
	);
}
