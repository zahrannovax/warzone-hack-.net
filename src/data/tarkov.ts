import { siteConfig } from './site';

/** Fallback when a page still needs a generic banner. */
const PLACEHOLDER = '/images/reviews-banner.png';

const PREVIEW_ESP = '/images/hack-preview-image-1.webp';
const PREVIEW_AIMBOT = '/images/hack-preview-image-2.webp';

const previewEsp = {
	src: PREVIEW_ESP,
	alt: 'Warzone ESP boxes, player names, and radar overlay from a rooftop',
} as const;

const previewAimbot = {
	src: PREVIEW_AIMBOT,
	alt: 'Warzone aimbot FOV circle while firing, with ESP boxes and radar',
} as const;

export const tarkovImages = {
	hero: '/images/hero-banner-new-1.png',
	espWallhack: PLACEHOLDER,
	aimbotCombat: PLACEHOLDER,
	aimbotSkeleton: PLACEHOLDER,
	playerEsp: PLACEHOLDER,
	cheatsCombat: PLACEHOLDER,
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases */
	cover: PLACEHOLDER,
	loadoutBuilder: PLACEHOLDER,
	squadFight: PLACEHOLDER,
	cheatsPackage: PLACEHOLDER,
	headerArt: PLACEHOLDER,
	battleRoyaleCombat: PLACEHOLDER,
	extractFight: PLACEHOLDER,
	rebootFight: PLACEHOLDER,
	scavRunCombat: PLACEHOLDER,
	scavRunMode: PLACEHOLDER,
	battleRoyaleIsland: PLACEHOLDER,
	raidMap: PLACEHOLDER,
	product: [previewEsp, previewAimbot],
	gallery: [previewEsp, previewAimbot],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 */
	sitemap: [],
} as const;
