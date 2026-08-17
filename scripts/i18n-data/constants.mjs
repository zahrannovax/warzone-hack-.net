/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'warzone-esp', 'warzone-aimbot', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'ricochet',
	'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
];

/** Hero image per page — placeholder until Warzone screenshots are added. */
const PLACEHOLDER_HERO = '/images/reviews-banner.png';
export const HERO_IMAGES = {
	home: PLACEHOLDER_HERO,
	'warzone-esp': PLACEHOLDER_HERO,
	'warzone-aimbot': PLACEHOLDER_HERO,
	features: PLACEHOLDER_HERO,
	pricing: PLACEHOLDER_HERO,
	setup: PLACEHOLDER_HERO,
	updates: PLACEHOLDER_HERO,
	faq: PLACEHOLDER_HERO,
	support: PLACEHOLDER_HERO,
	undetected: PLACEHOLDER_HERO,
	wallhack: PLACEHOLDER_HERO,
	radar: PLACEHOLDER_HERO,
	ricochet: PLACEHOLDER_HERO,
	'cheats-2026': PLACEHOLDER_HERO,
	hacks: PLACEHOLDER_HERO,
	'cheat-download': PLACEHOLDER_HERO,
	'mod-menu': PLACEHOLDER_HERO,
	'soft-aim': PLACEHOLDER_HERO,
	'best-cheats': PLACEHOLDER_HERO,
	'aimbot-hack': PLACEHOLDER_HERO,
	'esp-hack': PLACEHOLDER_HERO,
	'unlock-all': PLACEHOLDER_HERO,
	privacy: PLACEHOLDER_HERO,
	refund: PLACEHOLDER_HERO,
	terms: PLACEHOLDER_HERO,
};

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
\t\theaderArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
\t};
};
export type PageId = 'home' | 'warzone-esp' | 'warzone-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'ricochet' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`;

/** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) {
	if (s.length <= 60) return s;
	const trimmed = s.slice(0, 60);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 60);
}

export function clampDesc(s) {
	if (s.length <= 160) return s;
	const trimmed = s.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

/** Remove  from meta title/description strings only. */
export function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout\.?/gi, '.')
		.replace(/\s*with checkout\.?/gi, '.')
		.replace(/\s*via checkout\.?/gi, '.')
		.replace(/\s*checkout\.?/gi, '')
		.replace(/\s*checkout,?\s*/gi, ' ')
		.replace(/\s*digital delivery\.?/gi, ' instant digital delivery.')
		.replace(/\s*and digital delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant digital delivery/g, '| Instant Digital Delivery')
		.replace(/Buy Warzone Cheats/g, 'Buy Warzone Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

/** Build a page section. Pass 2+ paragraph strings; optional trailing string[] becomes list. */
export function section(h2, ...args) {
	let list;
	const paragraphs = [...args];
	if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) {
		list = paragraphs.pop();
	}
	if (paragraphs.length < 2) {
		throw new Error(`section "${h2}" needs at least 2 paragraphs`);
	}
	const sec = { h2, paragraphs };
	if (list?.length) sec.list = list;
	return sec;
}

/** Authoritative external citation helpers (open in new tab). */
export const EXT = {
	activision:
		'<a href="https://www.callofduty.com/warzone" target="_blank" rel="noopener noreferrer">Warzone</a>',
	warzone:
		'<a href="https://www.callofduty.com/warzone" target="_blank" rel="noopener noreferrer">Warzone</a>',
	status:
		'<a href="https://www.callofduty.com/warzone" target="_blank" rel="noopener noreferrer">Call of Duty Support</a>',
	ricochet:
		'<a href="https://www.callofduty.com" target="_blank" rel="noopener noreferrer">Ricochet</a>',
};
