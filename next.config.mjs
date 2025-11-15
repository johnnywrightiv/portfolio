/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {},
	// Performance optimizations
	compress: true,
	poweredByHeader: false,
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		unoptimized: false,
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		domains: [],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.dicebear.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'media.licdn.com',
				pathname: '/**',
			},
		],
	},
	// Experimental features for better performance
	experimental: {
		optimizePackageImports: ['lucide-react', 'react-icons'],
	},
};

export default nextConfig;
