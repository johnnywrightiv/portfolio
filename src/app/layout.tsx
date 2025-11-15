import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Quicksand } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LoadingProvider } from '@/contexts/LoadingContext';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import { HoverCapabilityProvider } from '@/components/HoverCapabilityProvider';

const poppins = Poppins({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-body',
	display: 'swap',
});

const quicksand = Quicksand({
	weight: '500',
	subsets: ['latin'],
	variable: '--font-heading',
	display: 'swap',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://johnnywrightiv.com'),
	title:
		'John Wright | Full-Stack Developer • React • Next.js • AI Integration',
	description:
		'Chicago-based remote full-stack developer specializing in React, Next.js, and AI integrations. Music producer bringing creative UX perspective to web development.',
	keywords: [
		'React developer',
		'Next.js developer',
		'TypeScript developer',
		'full-stack developer',
		'AI integration',
		'MongoDB developer',
		'Chicago developer',
		'remote developer',
	],
	authors: [{ name: 'John Wright' }],
	creator: 'John Wright',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://johnnywrightiv.com',
		title:
			'John Wright | Full-Stack Developer • React • Next.js • AI Integration',
		description:
			'Chicago-based remote full-stack developer specializing in React, Next.js, and AI integrations. Music producer bringing creative UX perspective to web development.',
		siteName: 'John Wright Portfolio',
		images: [
			{
				url: '/images/optimized/profile-picture.jpg',
				width: 1200,
				height: 630,
				alt: 'John Wright - Full-Stack Developer',
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	category: 'technology',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'John Wright',
		jobTitle: 'Full-Stack Developer',
		url: 'https://johnnywrightiv.com',
		sameAs: [
			'https://github.com/johnnywrightiv',
			'https://www.linkedin.com/in/johnnywrightiv',
		],
		knowsAbout: [
			'React',
			'Next.js',
			'TypeScript',
			'MongoDB',
			'AI Integration',
			'Process Optimization',
			'User Experience',
			'Music Production',
		],
		description:
			'Chicago-based remote full-stack developer specializing in React, Next.js, and AI integrations. Music producer bringing creative UX perspective to web development.',
	};

	return (
		<html suppressHydrationWarning lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body
				className={`${poppins.variable} ${quicksand.variable} font-body antialiased`}
			>
				<HoverCapabilityProvider />
				<Analytics />
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
					disableTransitionOnChange
				>
					<LoadingProvider>
						<Navbar />
						<main>{children}</main>
					</LoadingProvider>
				</ThemeProvider>
				<Footer />
			</body>
		</html>
	);
}
