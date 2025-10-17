import ClientTestimonials from '@/components/ClientTestimonials';

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
