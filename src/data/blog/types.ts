import type { LocaleCode } from '../i18n/locales';

export type BlogImageKey =
	| 'hero'
	| 'espWallhack'
	| 'aimbotCombat'
	| 'aimbotSkeleton'
	| 'squadFight'
	| 'headerArt'
	| 'cheatsPackage'
	| 'playerEsp'
	| 'rebootFight'
	| 'battleRoyaleCombat'
	| 'battleRoyaleIslandMap'
	| 'allGames'
	| 'hackPreviewEsp'
	| 'hackPreviewAimbot'
	| 'warzoneBlog1'
	| 'warzoneBlog2'
	| 'warzoneBlog3'
	| 'warzoneBlog4'
	| 'bo6Blog1'
	| 'bo6Blog2'
	| 'bo6Blog3'
	| 'bo6Blog4'
	| 'bo7Blog1'
	| 'bo7Blog2'
	| 'bo7Blog3'
	| 'mw2Blog1'
	| 'mw3Blog1'
	| 'mw3Blog2';

export type BlogSection = {
	h2: string;
	paragraphs: string[];
};

export type BlogTranslation = {
	slug: string;
	title: string;
	metaDescription: string;
	h1: string;
	intro: string;
	keywords: string[];
	imageAlt: string;
	sections: BlogSection[];
};

export type BlogPostDefinition = {
	id: string;
	imageKey: BlogImageKey;
	published: string;
	updated: string;
	category: string;
	featured?: boolean;
	/** Prefer full locale map; helpers clone `en` into any missing locales. */
	translations: Partial<Record<LocaleCode, BlogTranslation>> & { en: BlogTranslation };
};

export type ResolvedBlogPost = BlogPostDefinition & {
	locale: LocaleCode;
	translation: BlogTranslation;
	imageSrc: string;
	canonicalPath: string;
};
