import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Quicksand } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';

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
	description: 'Full-stack developer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang="en">
			<body
				className={`${poppins.variable} ${quicksand.variable} font-body antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main>{children}</main>
				</ThemeProvider>
				<footer className="pb-4">
					<div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
						<p>&copy; {new Date().getFullYear()} John Wright</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
