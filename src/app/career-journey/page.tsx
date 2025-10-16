import CareerJourney from '@/components/CareerJourney';
import { Alert } from '@/components/ui/alert';

export default function MusicPage() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
			<div className="container-section py-section">
				<div className="mb-8 flex justify-center">
					<Alert
						message="Content under construction"
						linkText="contact me"
						linkHref="#contact"
						className="max-w-md"
					/>
				</div>
				<h1 className="sr-only mb-4 text-center text-4xl font-bold text-white">
					Career Journey
				</h1>
				<CareerJourney />
			</div>
		</main>
	);
}
