import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects | John Wright',
	description:
		'Full-stack web applications built with React, Next.js, and TypeScript. AI integrations, UX-focused design, and creative solutions.',
	openGraph: {
		title: 'Projects | John Wright',
		description:
			'Full-stack web applications built with React, Next.js, and TypeScript.',
	},
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
