import type { PageId } from './content.generated';
import { fillBrandTokens, seoDescription } from '../brand';
import { brandCopy, brandSeo, seoPageTitle } from '../site-core';

export type SimpleSection = {
	h2: string;
	paragraphs: string[];
	list?: string[];
};

export type SimplePageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
	sections: SimpleSection[];
};

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: seoPageTitle(copy.title),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

/** Short, plain-English overrides for key EN nav pages — meta from brand.seo */
export const simplePageCopy: Partial<Record<PageId, SimplePageCopy>> = {
	features: page({
		title: brandSeo.featuresTitle,
		description: brandSeo.featuresDescription,
		h1: 'Features',
		intro: brandCopy.featuresIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/pricing/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Aimbot',
				paragraphs: [
					'Aim assist you can tune to feel natural, including a humanizer for smoother tracking.',
					'Set keys, FOV, smoothness, target bone, and max distance before you drop.',
				],
				list: [
					'Enable, aim lock, and aim keys',
					'Aim priority, prediction, and visible check',
					'Ignore knocked and on-team filters',
					'Draw FOV, smooth, max distance, target bone',
					'Humanizer, min/max, miss factor, humanize smooth',
				],
			},
			{
				h2: 'ESP',
				paragraphs: [
					'See players through cover with boxes, skeletons, health, and distance.',
					'Tune thickness and max distance so the overlay stays readable in busy fights.',
				],
				list: [
					'Box, filled box, and skeleton',
					'Health bar, snap lines, nicknames',
					'Distance, weapons, and show team',
					'Box, line, and skeleton thickness',
					'Max distance filter',
				],
			},
			{
				h2: 'Loot ESP',
				paragraphs: [
					'Mark useful ground loot so you spend less time checking empty boxes.',
					'Filter by type and distance. Use custom colors if you want a cleaner screen.',
				],
				list: [
					'Armor plate and heavy armor',
					'Ammo, gas mask, weapon, and money',
					'Kill streak and crates',
					'Limit distance and custom colors',
				],
			},
			{
				h2: 'Radar, misc & cloud DMA',
				paragraphs: [
					'A radar and compass for threats outside your view. Misc tools cover stream proof, gamepad, and multi-game support.',
					'Cloud DMA on AWS is available if you want that option. Check Status after a {antiCheat} patch.',
				],
				list: [
					'Radar and compass with FOV, size, and max distance',
					'Show team and show distance',
					'Lobby stats, stream proof, gamepad support',
					'Multi-game support, regular updates, 24/7 support',
					'Cloud DMA (AWS) option',
				],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro: brandCopy.storeIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Full package access for Windows 10 / 11.',
					'Same aimbot, ESP, loot ESP, and radar on monthly and lifetime plans.',
				],
				list: ['Aimbot, ESP, loot ESP, and radar', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: ['Read the refund policy if you need it. Contact support with your order ID for help.'],
				list: [
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro: brandCopy.statusIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Warzone overview',
		ctaSecondaryHref: '/warzone-cheats/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of 17 Aug 2026 the package is online for {game} on Windows PC. We post a new note here when a game or {antiCheat} patch needs a rebuild.',
					'If Status is green, you can play. If we are rebuilding, wait for the next note.',
				],
				list: [
					'Check this page before every match after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Stay updated and use safe settings.'],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'Warzone Cheats',
		intro: brandCopy.previewIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'One license for {game} on Windows PC — also covers MW2, MW3, BO6, and BO7.',
				],
				list: [
					'Aimbot with humanizer',
					'ESP boxes, skeleton, and health',
					'Loot ESP and radar / compass',
					'{antiCheat} rebuilds after patches',
				],
			},
			{
				h2: 'Built for Warzone fights',
				paragraphs: [
					'Read enemies before you push, mark loot worth the risk, and stay aware of flanks. Tune humanizer and FOV so aim assist stays smooth.',
				],
				list: [
					'<a href="/warzone-esp/">ESP guide</a>',
					'<a href="/warzone-aimbot/">Aimbot controls</a>',
					'<a href="/warzone-radar-hack/">Radar overlay</a>',
					'<a href="/updates/">Live status</a>',
				],
			},
			{
				h2: 'How to start',
				paragraphs: ['Buy a plan, get your license by email, then follow setup. Check Status after every major patch.'],
				list: [
					'<a href="/pricing/">Open store</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Check status</a>',
				],
			},
		],
	}),
	'warzone-esp': page({
		title: '{game} ESP | {brand}',
		description:
			'{game} ESP for Windows PC — boxes, skeleton, health, distance, and loot filters. Part of the same {brand} license.',
		h1: 'ESP',
		intro: 'See players and loot through cover in {game}. Part of the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Warzone overview',
		ctaSecondaryHref: '/warzone-cheats/',
		galleryTitle: 'ESP in game',
		sections: [
			{
				h2: 'What ESP shows',
				paragraphs: ['Boxes, skeleton, health, nicknames, weapons, and distance. Loot ESP is separate if you want a cleaner player overlay.'],
				list: ['Box, filled box, skeleton', 'Health bar, snap lines, nicknames', 'Distance, weapons, show team'],
			},
			{
				h2: 'When to use it',
				paragraphs: ['Keep thickness and max distance low in close fights so the screen stays readable.'],
				list: ['Tune thickness', 'Filter max distance', 'Pair with radar'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['ESP is included with aimbot, loot ESP, and radar in one plan.'],
				list: [
					'<a href="/warzone-cheats/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	'warzone-aimbot': page({
		title: '{game} Aimbot | {brand}',
		description:
			'{game} aimbot with humanizer for Windows PC — FOV, smoothness, bone, prediction, and miss factor you can tune.',
		h1: 'Aimbot',
		intro: 'Aimbot with humanizer you can tune for {game}. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Warzone overview',
		ctaSecondaryHref: '/warzone-cheats/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: ['Set keys, FOV, smoothness, target bone, and max distance before you queue.'],
				list: ['Enable, lock, and aim keys', 'Priority, prediction, visible check', 'Humanizer min/max and miss factor'],
			},
			{
				h2: 'Play styles',
				paragraphs: ['Keep humanizer on for smoother tracking. Raise FOV only when you accept a stronger assist.'],
				list: ['Humanizer on', 'Ignore knocked', 'Works with ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Aimbot ships with ESP, loot ESP, and radar in one license.'],
				list: [
					'<a href="/warzone-cheats/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	radar: page({
		title: '{game} Radar | {brand}',
		description:
			'{game} radar and compass for Windows PC — flank cues without filling the whole screen.',
		h1: 'Radar',
		intro: 'A radar and compass for threats outside your view. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Warzone overview',
		ctaSecondaryHref: '/warzone-cheats/',
		galleryTitle: 'Radar overlay',
		sections: [
			{
				h2: 'What it shows',
				paragraphs: ['Nearby enemy cues with compass FOV, size, and max distance. Toggle team and distance labels.'],
				list: ['Radar and compass', 'Show team and distance', 'Adjustable size and range'],
			},
			{
				h2: 'With ESP',
				paragraphs: ['Use radar for threats you cannot see yet. Use ESP when you push.'],
				list: [
					'<a href="/warzone-esp/">ESP guide</a>',
					'<a href="/warzone-cheats/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro: brandCopy.setupIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Check status',
		ctaSecondaryHref: '/updates/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: ['Buy a plan first. You get a license by email.'],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: ['Run the loader as admin, paste your license, then launch {game}.'],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: ['Check Status after a patch. Email {email} with your order ID.'],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro: brandCopy.supportIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: '/faq/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: ['Email {email}. Include your order ID and a short note about the issue.'],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: ['Check FAQ and Status before you write. Many setup questions are already covered.'],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro: brandCopy.faqIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Support',
		ctaSecondaryHref: '/support/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: ['You get a digital license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: ['Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.'],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/updates/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: ['Read the refund policy before you buy if you need details.'],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
