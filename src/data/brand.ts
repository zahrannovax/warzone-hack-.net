/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Warzone Cheats',
	/** Short product label if needed */
	shortName: 'Warzone',
	/** Canonical origin — no trailing slash */
	url: 'https://warzonehack.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@warzonehack.net',
	checkoutUrl: 'https://zadeyo.com/go/ZAHRAN?to=%2Fproducts%2Fwarzone',

	/** Game this template instance targets */
	game: 'Warzone',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Ricochet',

	logo: '/images/warzone-logo.webp',
	logoRaster: '/images/warzone-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Warzone Cheats logo',
	defaultOgImage: '/images/hero-banner-new-1.png',
	heroImage: '/images/hero-banner-new-1.png',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#2d03ff',
		bg: '#0b0c10',
		soft: '#9d00ff',
		deep: '#1c00a6',
		hover: '#5f02ff',
		panel: '#15161a',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'warzone cheats',
		list: [
			'warzone cheats',
			'warzone hacks',
			'best bo7 cheats',
			'best bo6 cheats',
			'warzone aimbot',
			'warzone esp',
			'bo6 cheats',
			'bo7 cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /warzone-cheats/ owns the head term. */
		homeTitle: 'Warzone Cheats | Official Windows PC Site',
		homeDescription:
			'Official Warzone Cheats site for Windows PC. Compare features, store plans, and live status — then buy aimbot, ESP, and radar in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — aimbot with humanizer, ESP, loot ESP, radar, and {antiCheat} updates. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same aimbot, ESP, and radar on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue on Windows PC today.',
		/** Money page meta — primary target for "warzone cheats". */
		previewTitle: 'Warzone Cheats | Undetected Aimbot & ESP',
		previewDescription:
			'Buy undetected {primaryKeyword} for {game} on Windows PC. Aimbot, ESP, loot ESP, and radar with {antiCheat} updates. Instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can drop faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for {game} — delivery, setup, {antiCheat} updates, refunds, and Windows PC notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — aimbot, ESP, loot ESP, radar, and patch updates for {game} on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — loadout tips, ESP, aimbot, and {antiCheat} update coverage for Windows PC players who drop.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — aimbot, ESP, and radar for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes aimbot with humanizer, ESP, loot ESP, and radar, with {antiCheat} maintenance after patches.',
		heroLede:
			'Dominate Warzone, MW2, MW3, BO6, and BO7 with our premium multi-game COD cheats. Advanced aimbot with humanizer and comprehensive ESP.',
		blogLabel: '{game} Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro:
			'{brand} for {game} — aimbot with humanizer, ESP, loot ESP, radar, and {antiCheat} rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — aimbot, ESP, loot ESP, radar, and support.',
		chipEsp: 'ESP',
		chipAim: 'Humanizer',
		chipRadar: 'Radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-13',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/hero-banner-new-1.png',
				title: 'Warzone Cheats hero',
				caption: 'Warzone Cheats homepage banner for Windows PC',
			},
			{
				src: '/images/all-games.png',
				title: 'Unified Call of Duty titles',
				caption: 'One license across Warzone, MW2, MW3, BO6, and BO7',
			},
			{
				src: '/images/hack-preview-image-1.webp',
				title: 'Warzone ESP overlay',
				caption: 'ESP boxes, names, and radar in Warzone on PC',
			},
			{
				src: '/images/hack-preview-image-2.webp',
				title: 'Warzone aimbot overlay',
				caption: 'Aimbot FOV circle with ESP and radar in Warzone',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
