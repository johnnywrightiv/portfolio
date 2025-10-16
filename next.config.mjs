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
		domains: [],
		remotePatterns: [],
	},
	// Experimental features for better performance
	experimental: {
		optimizePackageImports: ['lucide-react', 'react-icons'],
	},
};

export default nextConfig;
