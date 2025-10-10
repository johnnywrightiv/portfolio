import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Quicksand } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';

const poppins = Poppins({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-body',
});

const quicksand = Quicksand({
	weight: '500',
	subsets: ['latin'],
	variable: '--font-heading',
});

export const metadata: Metadata = {
	title: 'John Wright Portfolio',
	description:
		'Full-Stack Software Developer specializing in web and app development using React, Next.js, Tailwind CSS, MongoDB, Node.js, Python, AI integrations, Automation Workflows, and process improvements.',
	keywords: [
		'John Wright',
		'Chicago',
		'Remote',
		'Full-Stack Software Developer',
		'Web Developer',
		'App Developer',
		'Software Developer',
		'Software Engineer',
		'Software Architect',
		'Software Consultant',
		'Software Trainer',
		'AI Consultant',
		'React',
		'Next.js',
		'Tailwind CSS',
		'MongoDB',
		'Node.js',
		'Python',
		'AI integrations',
		'Automation Workflows',
		'process improvements',
		'music production',
		'audio engineering',
		'sound design',
		'music composition',
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang="en" className="dark">
			<body
				className={`${poppins.variable} ${quicksand.variable} font-body antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
					disableTransitionOnChange
				>
					<Navbar />
					<main>{children}</main>
				</ThemeProvider>
			</body>
			<footer className="footer fixed bottom-0 w-full border-t border-border bg-surface pb-4 pt-6 text-center text-sm text-muted-foreground/40">
				<div>
					&copy; {new Date().getFullYear()} John Wright. All rights reserved.
				</div>
			</footer>
		</html>
	);
}
