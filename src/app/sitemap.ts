import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://johnnywrightiv.com';

	return [
		{
			url: baseUrl,
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${baseUrl}/projects`,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/career-journey`,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/testimonials`,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/music`,
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		{
			url: `${baseUrl}/faq`,
			changeFrequency: 'monthly',
			priority: 0.5,
		},
	];
}
