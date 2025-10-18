import type { Metadata } from 'next';
import ClientTestimonials from '@/components/ClientTestimonials';

export const metadata: Metadata = {
	title: 'Testimonials | John Wright',
	description:
		'Client reviews and recommendations for full-stack development work, AI integrations, and web application projects.',
	openGraph: {
		title: 'Testimonials | John Wright',
		description: 'Client reviews and recommendations for development work.',
	},
};

export default function MusicPage() {
	return (
		<main className="bg-gradient-to-b from-gray-900 via-black to-gray-900">
			<div className="container-section py-section">
				<h1 className="sr-only mb-4 text-center text-4xl font-bold text-white">
					Client Testimonials
				</h1>
			</div>
			<ClientTestimonials />
		</main>
	);
}
