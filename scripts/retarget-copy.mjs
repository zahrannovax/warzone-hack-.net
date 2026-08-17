import { readFileSync, writeFileSync, renameSync, existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');

const FILES = [
	'src/data/i18n/content.generated.ts',
	'src/data/i18n/locales.ts',
	'src/data/i18n/gallery-ui.ts',
	'src/data/i18n/simple-pages.ts',
	'src/data/i18n/routing.ts',
	'src/data/site.ts',
	'src/data/page-images.ts',
	'src/data/brand-sitemap.ts',
	'src/data/seo-cannibal-map.ts',
	'src/data/blog/helpers.ts',
	'src/components/LocalizedHome.astro',
	'src/components/LocalizedPage.astro',
	'src/components/CategoryRow.astro',
	'src/components/SiteFooter.astro',
	'src/components/react/HomeSeo.tsx',
	'src/components/react/HomeAbout.tsx',
	'src/pages/tarkov-esp/index.astro',
	'src/pages/tarkov-aimbot/index.astro',
	'scripts/i18n-data/pages-en.mjs',
	'scripts/i18n-data/pages-i18n.mjs',
	'scripts/i18n-data/phrases.mjs',
	'scripts/i18n-data/ui-strings.mjs',
	'scripts/i18n-data/ui-strings-part1.mjs',
	'scripts/i18n-data/ui-strings-part2.mjs',
	'scripts/i18n-data/image-alts.mjs',
	'scripts/i18n-data/constants.mjs',
	'scripts/generate-i18n-content.mjs',
	'scripts/validate-sitemaps.mjs',
	'src/data/sitemap-meta.ts',
	'public/locales/en/translation.json',
	'public/locales/es/translation.json',
];

const FOLDER_RENAMES = [
	['src/pages/tarkov-cheats', 'src/pages/warzone-cheats'],
	['src/pages/tarkov-esp', 'src/pages/warzone-esp'],
	['src/pages/tarkov-aimbot', 'src/pages/warzone-aimbot'],
	['src/pages/tarkov-radar-hack', 'src/pages/warzone-radar-hack'],
	['src/pages/tarkov-wallhack', 'src/pages/warzone-wallhack'],
	['src/pages/tarkov-cheats-2026', 'src/pages/warzone-cheats-2026'],
	['src/pages/undetected-tarkov-cheats', 'src/pages/undetected-warzone-cheats'],
	['src/pages/tarkov-mod-menu', 'src/pages/warzone-mod-menu'],
	['src/pages/tarkov-soft-aim', 'src/pages/warzone-soft-aim'],
	['src/pages/best-tarkov-cheats', 'src/pages/best-warzone-cheats'],
	['src/pages/tarkov-aimbot-hack', 'src/pages/warzone-aimbot-hack'],
	['src/pages/tarkov-esp-hack', 'src/pages/warzone-esp-hack'],
	['src/pages/tarkov-cheat-download', 'src/pages/warzone-cheat-download'],
	['src/pages/tarkov-unlock-all', 'src/pages/warzone-unlock-all'],
	['src/pages/battleye-bypass', 'src/pages/ricochet-bypass'],
];

function retarget(input) {
	const holds = [];
	const keep = (m) => {
		holds.push(m);
		return `__HOLD_${holds.length - 1}__`;
	};

	let s = input
		.replace(/https:\/\/zadeyo\.com[^"'\\\s]*/gi, keep)
		.replace(/from ['"][^'"]*tarkov['"]/g, keep)
		.replace(/tarkovImages/g, keep)
		.replace(/besttarkovcheats/gi, keep)
		.replace(/linkBattlEye/g, keep)
		.replace(/linkTarkovCheats/g, keep);

	s = s
		.replace(/https:\/\/www\.escapefromtarkov\.com\/support/gi, 'https://www.callofduty.com/warzone')
		.replace(/https:\/\/www\.escapefromtarkov\.com\/?/gi, 'https://www.callofduty.com/warzone')
		.replace(/https:\/\/www\.battleye\.com\/?/gi, 'https://www.callofduty.com')
		.replace(/support@tarkovcheats\.org/gi, 'support@warzonehack.net')
		.replace(/tarkovcheats\.org/gi, 'warzonehack.net')
		.replace(/escape-from-tarkov-cheats/g, 'warzone-cheats')
		.replace(/escape-from-tarkov/g, 'warzone')
		.replace(/Escape from Tarkov Support/g, 'Call of Duty Support')
		.replace(/Escape from Tarkov/g, 'Warzone')
		.replace(/Battlestate Games/g, 'Activision')
		.replace(/battleye-bypass/g, 'ricochet-bypass')
		.replace(/BattlEye Anti-Cheat/g, 'Ricochet')
		.replace(/BattlEye anti-cheat/g, 'Ricochet')
		.replace(/BattlEye/g, 'Ricochet')
		.replace(/battleye/g, 'ricochet')
		.replace(/tarkov-aimbot/g, 'warzone-aimbot')
		.replace(/tarkov-esp/g, 'warzone-esp')
		.replace(/tarkov-cheats/g, 'warzone-cheats')
		.replace(/tarkov-radar-hack/g, 'warzone-radar-hack')
		.replace(/tarkov-wallhack/g, 'warzone-wallhack')
		.replace(/tarkov-mod-menu/g, 'warzone-mod-menu')
		.replace(/tarkov-soft-aim/g, 'warzone-soft-aim')
		.replace(/tarkov-aimbot-hack/g, 'warzone-aimbot-hack')
		.replace(/tarkov-esp-hack/g, 'warzone-esp-hack')
		.replace(/tarkov-cheat-download/g, 'warzone-cheat-download')
		.replace(/tarkov-unlock-all/g, 'warzone-unlock-all')
		.replace(/Tarkov Cheats/g, 'Warzone Cheats')
		.replace(/tarkov cheats/g, 'warzone cheats')
		.replace(/Tarkov ESP/g, 'Warzone ESP')
		.replace(/Tarkov Aimbot/g, 'Warzone Aimbot')
		.replace(/Tarkov/g, 'Warzone')
		.replace(/tarkov/g, 'warzone')
		.replace(/PMC raids and scav-runs/g, 'Warzone and multiplayer matches')
		.replace(/raid and scav-run/g, 'Battle Royale and Resurgence')
		.replace(/scav-runs/g, 'Resurgence matches')
		.replace(/scav-run/g, 'Resurgence')
		.replace(/PMCs, Scavs, and loot/g, 'players, loot, and contracts')
		.replace(/PMCs, Scavs, loot/g, 'players, loot, and contracts')
		.replace(/PMCs and Scavs/g, 'players and squads')
		.replace(/checkout en Zadeyo/gi, 'checkout')
		.replace(/checkout via Zadeyo/gi, 'checkout')
		.replace(/checkout über Zadeyo/gi, 'checkout')
		.replace(/vía checkout Zadeyo/gi, 'vía checkout')
		.replace(/via checkout Zadeyo/gi, 'via checkout')
		.replace(/via Zadeyo checkout/gi, 'via checkout')
		.replace(/processed by Zadeyo checkout/gi, 'processed at checkout')
		.replace(/Zadeyo checkout/gi, 'checkout')
		.replace(/Zadeyo order references/gi, 'order references')
		.replace(/Zadeyo delivery/gi, 'digital delivery')
		.replace(/Instant Zadeyo Delivery/gi, 'Instant Digital Delivery')
		.replace(/Buy on Zadeyo/gi, 'Buy Warzone Cheats')
		.replace(/\bZadeyo\b/g, '')
		.replace(/\bzadeyo\b/g, '');

	s = s.replace(/__HOLD_(\d+)__/g, (_, i) => holds[Number(i)]);
	return s;
}

for (const rel of FILES) {
	const file = path.join(ROOT, rel);
	if (!existsSync(file)) {
		console.log('missing', rel);
		continue;
	}
	const before = readFileSync(file, 'utf8');
	const after = retarget(before);
	if (before !== after) {
		writeFileSync(file, after);
		console.log('updated', rel);
	} else {
		console.log('unchanged', rel);
	}
}

for (const [from, to] of FOLDER_RENAMES) {
	const src = path.join(ROOT, from);
	const dest = path.join(ROOT, to);
	if (existsSync(src) && !existsSync(dest)) {
		renameSync(src, dest);
		console.log('renamed', from, '→', to);
	} else if (!existsSync(src)) {
		console.log('skip rename (missing)', from);
	} else {
		console.log('skip rename (exists)', to);
	}
}
