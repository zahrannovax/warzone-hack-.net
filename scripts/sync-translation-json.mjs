#!/usr/bin/env node
/**
 * Generates public/locales/{locale}/translation.json for all 22 locales.
 * Run: node scripts/sync-translation-json.mjs (also via sync:brand / prebuild)
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES } from './i18n-data/constants.mjs';
import { allUiStrings } from './i18n-data/ui-strings.mjs';
import { buildLocaleExtra } from './i18n-data/translation-extra.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const EN_PATH = path.join(ROOT, 'public/locales/en/translation.json');

const HERO_LEDE =
	'Dominate Warzone, MW2, MW3, BO6, and BO7 with our premium multi-game COD cheats. Advanced aimbot with humanizer and comprehensive ESP.';

const WARZONE_IMAGES = {
	hero: 'Warzone Cheats hero — aimbot and ESP overlay in Warzone',
	espWallhack: 'ESP boxes and skeleton showing players through cover',
	aimbotCombat: 'Aimbot with humanizer overlay during a Warzone fight',
	squadFight: 'Warzone Cheats combat overlay during a squad fight',
	playerEsp: 'Player ESP boxes and distance readouts in Warzone',
	headerArt: 'Aimbot view and humanizer controls for Warzone',
	cheatsPackage: 'Radar and compass overlay for Warzone',
	rebootFight: 'Aimbot assist during a Warzone firefight',
	battleRoyale: 'Warzone Cheats in-match overview for Windows PC',
	battleRoyaleIsland: 'Loot ESP markers for plates, ammo, and crates in Warzone',
};

function deepMerge(base, patch) {
	const out = structuredClone(base);
	for (const [key, value] of Object.entries(patch)) {
		if (value && typeof value === 'object' && !Array.isArray(value) && typeof out[key] === 'object') {
			out[key] = deepMerge(out[key], value);
		} else if (value !== undefined) {
			out[key] = value;
		}
	}
	return out;
}

function buildFromUi(locale, ui, enTemplate) {
	const extra = buildLocaleExtra(locale, ui);
	const patch = {
		nav: {
			...ui.nav,
			...extra.nav,
		},
		hero: {
			...ui.hero,
			title: locale === 'en' ? 'Warzone Cheats' : extra.hero?.title ?? ui.hero.accentShort ?? 'Warzone Cheats',
			subtitle: locale === 'en' ? HERO_LEDE : extra.hero?.subtitle ?? ui.hero.subtitle,
			buyNow: extra.hero?.buyNow ?? ui.hero.buyNow,
			seeFeatures: ui.hero.seeFeatures,
			priceFrom: extra.hero?.priceFrom,
			imageAlt: '{{brand}} — Warzone aimbot and ESP overlay',
			chipEsp: extra.hero?.chipEsp,
			chipAim: extra.hero?.chipAim,
			chipRadar: extra.hero?.chipRadar,
			chipUpdates: extra.hero?.chipUpdates,
		},
		cta: extra.cta,
		trust: {
			...ui.trust,
			antiCheatShort: extra.trust?.antiCheatShort ?? ui.trust.antiCheatShort,
		},
		product: {
			...ui.product,
			...extra.product,
		},
		reviews: {
			...ui.reviews,
			...extra.reviews,
		},
		common: {
			...enTemplate.common,
			...ui.common,
			...extra.common,
		},
		footer: {
			...ui.footer,
			tagline: extra.footer?.tagline ?? ui.footer.tagline,
		},
		home: extra.home ?? enTemplate.home,
		homeSeo: extra.homeSeo ?? enTemplate.homeSeo,
		deals: extra.deals ?? enTemplate.deals,
		trustStrip: extra.trustStrip ?? enTemplate.trustStrip,
		categoryRow: extra.categoryRow ?? enTemplate.categoryRow,
		images: WARZONE_IMAGES,
		blog: extra.blog ?? enTemplate.blog,
		gallery: extra.gallery ?? enTemplate.gallery,
	};

	return deepMerge(enTemplate, patch);
}

function main() {
	const enTemplate = JSON.parse(readFileSync(EN_PATH, 'utf8'));
	enTemplate.hero.subtitle = HERO_LEDE;
	enTemplate.images = WARZONE_IMAGES;

	for (const locale of LOCALES) {
		const ui = allUiStrings[locale];
		if (!ui) throw new Error(`Missing ui strings for ${locale}`);

		const translation = locale === 'en' ? enTemplate : buildFromUi(locale, ui, enTemplate);
		const dir = path.join(ROOT, 'public/locales', locale);
		mkdirSync(dir, { recursive: true });
		writeFileSync(path.join(dir, 'translation.json'), `${JSON.stringify(translation, null, 2)}\n`, 'utf8');
	}

	console.log(`sync-translation-json: wrote ${LOCALES.length} locale files → public/locales/*/translation.json`);
}

main();
