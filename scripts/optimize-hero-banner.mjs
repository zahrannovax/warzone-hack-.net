import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const source = path.resolve('public/images/hero-banner-new-1.png');
const outDir = path.resolve('public/images');
const widths = [640, 960, 1400, 1672];

const meta = await sharp(source).metadata();
console.log(`Source ${meta.width}×${meta.height}`);

for (const width of widths) {
	if (meta.width && width > meta.width) continue;
	const quality = width <= 640 ? 80 : width <= 960 ? 84 : 88;
	const file = `hero-banner-new-1-${width}w.webp`;
	const buffer = await sharp(source)
		.resize({ width, withoutEnlargement: true })
		.webp({ quality, effort: 6 })
		.toBuffer();
	await writeFile(path.join(outDir, file), buffer);
	console.log(`Wrote ${file} (${(buffer.length / 1024).toFixed(1)} KiB, q=${quality})`);
}

const full = await sharp(source).webp({ quality: 88, effort: 6 }).toBuffer();
await writeFile(path.join(outDir, 'hero-banner-new-1.webp'), full);
console.log(`Wrote hero-banner-new-1.webp (${(full.length / 1024).toFixed(1)} KiB)`);
