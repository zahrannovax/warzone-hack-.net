import { siteConfig } from './site';
import { tarkovImages } from './tarkov';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

const PLACEHOLDER = tarkovImages.hero;
const PREVIEW_ESP = '/images/hack-preview-image-1.webp';
const PREVIEW_AIMBOT = '/images/hack-preview-image-2.webp';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [PREVIEW_ESP, PREVIEW_AIMBOT] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: tarkovImages.hero,
	'warzone-esp': PREVIEW_ESP,
	'warzone-aimbot': PREVIEW_AIMBOT,
	features: PLACEHOLDER,
	pricing: PLACEHOLDER,
	setup: PLACEHOLDER,
	updates: PLACEHOLDER,
	faq: PLACEHOLDER,
	support: PLACEHOLDER,
	undetected: PLACEHOLDER,
	wallhack: PREVIEW_ESP,
	radar: PLACEHOLDER,
	ricochet: PLACEHOLDER,
	'cheats-2026': PLACEHOLDER,
	hacks: PLACEHOLDER,
	'cheat-download': PLACEHOLDER,
	'mod-menu': PLACEHOLDER,
	'soft-aim': PREVIEW_AIMBOT,
	'best-cheats': PLACEHOLDER,
	'aimbot-hack': PREVIEW_AIMBOT,
	'esp-hack': PREVIEW_ESP,
	'unlock-all': PLACEHOLDER,
	privacy: PLACEHOLDER,
	refund: PLACEHOLDER,
	terms: PLACEHOLDER,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
