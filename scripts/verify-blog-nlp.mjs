#!/usr/bin/env node
import { blogPosts } from '../src/data/blog/posts.generated.ts';

console.log('posts', blogPosts.length);
if (!blogPosts[0]) {
	console.log('ok (no posts)');
	process.exit(0);
}

const all = blogPosts.flatMap((p) =>
	p.translations.en.sections.flatMap((s) => s.paragraphs).concat([
		p.translations.en.intro,
		p.translations.en.title,
		p.translations.en.metaDescription,
	]),
);

const needles = ['${EXT', 'V-Bucks', 'Hammer AR', 'FNCS', 'Verdansk', 'EliteFN', 'GhostWare', 'CheatVault', 'Battle Pass', 'Item Shop'];
for (const n of needles) {
	const hits = all.filter((t) => t.includes(n));
	if (hits.length) console.log('LEFTOVER', n, hits.length);
}
console.log('ok');
