const SITE = 'https://warzonehack.net';

const checks = [
	{ name: 'Home', path: '/', expectStatus: 200 },
	{ name: 'Features', path: '/features/', expectStatus: 200 },
	{ name: 'Store', path: '/pricing/', expectStatus: 200 },
	{ name: 'Status', path: '/updates/', expectStatus: 200 },
];

const canonicalPages = [
	{ name: 'Home', path: '/', expected: `${SITE}/` },
	{ name: 'Features', path: '/features/', expected: `${SITE}/features/` },
	{ name: 'Store', path: '/pricing/', expected: `${SITE}/pricing/` },
	{ name: 'Status', path: '/updates/', expected: `${SITE}/updates/` },
];

let failed = 0;
const fail = (msg) => {
	console.error(`FAIL  ${msg}`);
	failed += 1;
};
const pass = (msg) => console.log(`PASS  ${msg}`);

console.log(`Warzone smoke test — ${SITE}\n`);

for (const { name, path, expectStatus } of checks) {
	const res = await fetch(`${SITE}${path}`, { redirect: 'manual' });
	if (res.status !== expectStatus) {
		fail(`${name} ${path} → HTTP ${res.status} (expected ${expectStatus})`);
	} else {
		pass(`${name} ${path} → HTTP ${res.status}`);
	}
}

console.log('');
for (const { name, path, expected } of canonicalPages) {
	const html = await (await fetch(`${SITE}${path}`)).text();
	const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
	if (!canonical) {
		fail(`${name} missing canonical tag`);
	} else if (canonical !== expected) {
		fail(`${name} canonical ${canonical} (expected ${expected})`);
	} else if (!canonical.endsWith('/')) {
		fail(`${name} canonical missing trailing slash: ${canonical}`);
	} else {
		pass(`${name} canonical ${canonical}`);
	}
}

console.log('');
const robots = await (await fetch(`${SITE}/robots.txt`)).text();
const last = robots.trimEnd().split(/\r?\n/).at(-1);
const expectedRobots = `Sitemap: ${SITE}/sitemap.xml`;
if (last !== expectedRobots) {
	fail(`robots.txt last line: ${last}`);
} else {
	pass(`robots.txt ends with ${expectedRobots}`);
}

console.log('');
if (failed > 0) {
	console.error(`Smoke test failed (${failed} issue(s)).`);
	process.exit(1);
}
console.log('Smoke test passed.');
