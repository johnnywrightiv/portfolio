import sharp from 'sharp';
import { existsSync, mkdirSync, statSync } from 'fs';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, '../public/images');
const outputDir = join(__dirname, '../public/images/optimized');

// Create optimized directory if it doesn't exist
if (!existsSync(outputDir)) {
	mkdirSync(outputDir, { recursive: true });
}

const imagesToOptimize = [
	// About page images (only used ones)
	{ input: 'cats-image.jpeg', maxWidth: 800, quality: 88 },
	{ input: 'music-image.jpeg', maxWidth: 800, quality: 88 },
	{ input: 'outdoors-image.jpeg', maxWidth: 800, quality: 88 },
	// Hero backgrounds (only used ones, higher quality for full-screen)
	{
		input: 'hero-background1.jpg',
		output: 'hero-background1.jpg',
		maxWidth: 1920,
		quality: 85,
	},
	{
		input: 'hero-background3.jpg',
		output: 'hero-background3.jpg',
		maxWidth: 1920,
		quality: 85,
	},
	// Profile images (higher quality for main images)
	{
		input: 'profile-picture.jpg',
		output: 'profile-picture.jpg',
		maxWidth: 1200,
		quality: 92,
	},
	{
		input: 'profile-picture2.jpg',
		output: 'profile-picture2.jpg',
		maxWidth: 800,
		quality: 90,
	},
	// Project images (convert to WebP for better compression)
	{
		input: 'projects/QuickTix.png',
		output: 'projects/QuickTix.webp',
		maxWidth: 1200,
		quality: 88,
	},
	{
		input: 'projects/TreHej.png',
		output: 'projects/TreHej.webp',
		maxWidth: 1200,
		quality: 88,
	},
	{
		input: 'projects/Harmony-App.png',
		output: 'projects/Harmony-App.webp',
		maxWidth: 1200,
		quality: 88,
	},
	{
		input: 'projects/Portfolio.png',
		output: 'projects/Portfolio.webp',
		maxWidth: 1200,
		quality: 88,
	},
	{
		input: 'projects/Recipe-App.png',
		output: 'projects/Recipe-App.webp',
		maxWidth: 1200,
		quality: 88,
	},
	{
		input: 'projects/Workout-App.png',
		output: 'projects/Workout-App.webp',
		maxWidth: 1200,
		quality: 88,
	},
	{
		input: 'projects/Audiotree.png',
		output: 'projects/Audiotree.webp',
		maxWidth: 1200,
		quality: 88,
	},
	{
		input: 'projects/U2CanQue.png',
		output: 'projects/U2CanQue.webp',
		maxWidth: 1200,
		quality: 88,
	},
	// Placeholder
	{
		input: 'placeholder.png',
		output: 'placeholder.webp',
		maxWidth: 400,
		quality: 82,
	},
];

async function optimizeImage(inputPath, outputPath, maxWidth, quality) {
	try {
		const stats = statSync(inputPath);
		const originalSize = (stats.size / 1024 / 1024).toFixed(2);

		const outputExt = extname(outputPath).toLowerCase();
		const sharpPipeline = sharp(inputPath).resize(maxWidth, maxWidth, {
			fit: 'inside',
			withoutEnlargement: true,
		});

		// Choose format based on output extension
		if (outputExt === '.webp') {
			await sharpPipeline
				.webp({
					quality: quality,
				})
				.toFile(outputPath);
		} else if (outputExt === '.jpg' || outputExt === '.jpeg') {
			await sharpPipeline
				.jpeg({
					quality: quality,
					progressive: true,
					mozjpeg: true,
				})
				.toFile(outputPath);
		} else if (outputExt === '.png') {
			await sharpPipeline
				.png({
					quality: quality,
					compressionLevel: 9,
				})
				.toFile(outputPath);
		}

		const newStats = statSync(outputPath);
		const newSize = (newStats.size / 1024 / 1024).toFixed(2);
		const savings = (((stats.size - newStats.size) / stats.size) * 100).toFixed(
			1
		);

		console.log(
			`✅ ${basename(inputPath)}: ${originalSize}MB → ${newSize}MB (${savings}% reduction)`
		);
	} catch (error) {
		console.error(`❌ Error optimizing ${inputPath}:`, error.message);
	}
}

async function optimizeAllImages() {
	console.log('🚀 Starting image optimization...\n');

	for (const imageConfig of imagesToOptimize) {
		const inputPath = join(inputDir, imageConfig.input);
		const outputPath = join(
			imageConfig.output?.includes('/') ? inputDir : outputDir,
			imageConfig.output || imageConfig.input
		);

		// Create subdirectories if needed
		const outputDirPath = dirname(outputPath);
		if (!existsSync(outputDirPath)) {
			mkdirSync(outputDirPath, { recursive: true });
		}

		if (existsSync(inputPath)) {
			await optimizeImage(
				inputPath,
				outputPath,
				imageConfig.maxWidth,
				imageConfig.quality
			);
		} else {
			console.log(`⚠️  File not found: ${imageConfig.input}`);
		}
	}

	console.log('\n✨ Image optimization complete!');
	console.log(
		`📁 Optimized images saved to: ${outputDir} and in-place updates`
	);
}

optimizeAllImages().catch(console.error);
