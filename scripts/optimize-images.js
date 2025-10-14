const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

const imagesToOptimize = [
	'cats-image.jpeg',
	'music-image.jpeg',
	'outdoors-image.jpeg',
	'outdoors-image2.jpeg',
	'music-image2.jpeg',
];

async function optimizeImage(inputPath, outputPath) {
	try {
		const stats = fs.statSync(inputPath);
		const originalSize = (stats.size / 1024 / 1024).toFixed(2);

		await sharp(inputPath)
			.resize(800, 800, {
				fit: 'inside',
				withoutEnlargement: true,
			})
			.jpeg({
				quality: 85,
				progressive: true,
				mozjpeg: true,
			})
			.toFile(outputPath);

		const newStats = fs.statSync(outputPath);
		const newSize = (newStats.size / 1024 / 1024).toFixed(2);
		const savings = (((stats.size - newStats.size) / stats.size) * 100).toFixed(
			1
		);

		console.log(
			`✅ ${path.basename(inputPath)}: ${originalSize}MB → ${newSize}MB (${savings}% reduction)`
		);
	} catch (error) {
		console.error(`❌ Error optimizing ${inputPath}:`, error.message);
	}
}

async function optimizeAllImages() {
	console.log('🚀 Starting image optimization...\n');

	for (const imageName of imagesToOptimize) {
		const inputPath = path.join(inputDir, imageName);
		const outputPath = path.join(outputDir, imageName);

		if (fs.existsSync(inputPath)) {
			await optimizeImage(inputPath, outputPath);
		} else {
			console.log(`⚠️  File not found: ${imageName}`);
		}
	}

	console.log('\n✨ Image optimization complete!');
	console.log(`📁 Optimized images saved to: ${outputDir}`);
}

optimizeAllImages().catch(console.error);
