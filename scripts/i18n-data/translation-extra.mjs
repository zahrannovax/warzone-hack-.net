import { PAGE_META_HOME } from './pages-i18n.mjs';

/** Nav labels not in ui-strings-part1. */
const NAV_PATCH = {
	en: { preview: 'Cheats', store: 'Store', status: 'Status', reviews: 'Reviews', primaryAria: 'Primary', mobileAria: 'Mobile', openMenu: 'Open menu', closeMenu: 'Close menu' },
	es: { preview: 'Trucos', store: 'Tienda', status: 'Estado', reviews: 'Reseñas', primaryAria: 'Principal', mobileAria: 'Móvil', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú' },
	fr: { preview: 'Triches', store: 'Boutique', status: 'Statut', reviews: 'Avis', primaryAria: 'Principal', mobileAria: 'Mobile', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu' },
	de: { preview: 'Cheats', store: 'Store', status: 'Status', reviews: 'Reviews', primaryAria: 'Primär', mobileAria: 'Mobil', openMenu: 'Menü öffnen', closeMenu: 'Menü schließen' },
	pt: { preview: 'Cheats', store: 'Loja', status: 'Status', reviews: 'Avaliações', primaryAria: 'Principal', mobileAria: 'Móvel', openMenu: 'Abrir menu', closeMenu: 'Fechar menu' },
	it: { preview: 'Trucchi', store: 'Negozio', status: 'Stato', reviews: 'Recensioni', primaryAria: 'Principale', mobileAria: 'Mobile', openMenu: 'Apri menu', closeMenu: 'Chiudi menu' },
	nl: { preview: 'Cheats', store: 'Store', status: 'Status', reviews: 'Reviews', primaryAria: 'Primair', mobileAria: 'Mobiel', openMenu: 'Menu openen', closeMenu: 'Menu sluiten' },
	pl: { preview: 'Cheaty', store: 'Sklep', status: 'Status', reviews: 'Opinie', primaryAria: 'Główna', mobileAria: 'Mobilna', openMenu: 'Otwórz menu', closeMenu: 'Zamknij menu' },
	ru: { preview: 'Читы', store: 'Магазин', status: 'Статус', reviews: 'Отзывы', primaryAria: 'Основная', mobileAria: 'Мобильная', openMenu: 'Открыть меню', closeMenu: 'Закрыть меню' },
	tr: { preview: 'Hileler', store: 'Mağaza', status: 'Durum', reviews: 'Yorumlar', primaryAria: 'Ana', mobileAria: 'Mobil', openMenu: 'Menüyü aç', closeMenu: 'Menüyü kapat' },
	ar: { preview: 'Cheats', store: 'Store', status: 'Status', reviews: 'Reviews', primaryAria: 'Primary', mobileAria: 'Mobile', openMenu: 'Open menu', closeMenu: 'Close menu' },
	ja: { preview: 'Cheats', store: 'Store', status: 'Status', reviews: 'Reviews', primaryAria: 'Primary', mobileAria: 'Mobile', openMenu: 'Open menu', closeMenu: 'Close menu' },
	ko: { preview: 'Cheats', store: 'Store', status: 'Status', reviews: 'Reviews', primaryAria: 'Primary', mobileAria: 'Mobile', openMenu: 'Open menu', closeMenu: 'Close menu' },
	zh: { preview: 'Cheats', store: 'Store', status: 'Status', reviews: 'Reviews', primaryAria: 'Primary', mobileAria: 'Mobile', openMenu: 'Open menu', closeMenu: 'Close menu' },
	hi: { preview: 'Cheats', store: 'Store', status: 'Status', reviews: 'Reviews', primaryAria: 'Primary', mobileAria: 'Mobile', openMenu: 'Open menu', closeMenu: 'Close menu' },
	id: { preview: 'Cheats', store: 'Toko', status: 'Status', reviews: 'Ulasan', primaryAria: 'Utama', mobileAria: 'Mobile', openMenu: 'Buka menu', closeMenu: 'Tutup menu' },
	th: { preview: 'Cheats', store: 'Store', status: 'Status', reviews: 'Reviews', primaryAria: 'Primary', mobileAria: 'Mobile', openMenu: 'Open menu', closeMenu: 'Close menu' },
	vi: { preview: 'Cheats', store: 'Cửa hàng', status: 'Trạng thái', reviews: 'Đánh giá', primaryAria: 'Chính', mobileAria: 'Di động', openMenu: 'Mở menu', closeMenu: 'Đóng menu' },
	uk: { preview: 'Чіти', store: 'Магазин', status: 'Статус', reviews: 'Відгуки', primaryAria: 'Головна', mobileAria: 'Мобільна', openMenu: 'Відкрити меню', closeMenu: 'Закрити меню' },
	cs: { preview: 'Cheaty', store: 'Obchod', status: 'Stav', reviews: 'Recenze', primaryAria: 'Hlavní', mobileAria: 'Mobil', openMenu: 'Otevřít menu', closeMenu: 'Zavřít menu' },
	ro: { preview: 'Cheats', store: 'Magazin', status: 'Status', reviews: 'Recenzii', primaryAria: 'Principal', mobileAria: 'Mobil', openMenu: 'Deschide meniul', closeMenu: 'Închide meniul' },
	sv: { preview: 'Cheats', store: 'Butik', status: 'Status', reviews: 'Recensioner', primaryAria: 'Primär', mobileAria: 'Mobil', openMenu: 'Öppna menyn', closeMenu: 'Stäng menyn' },
};

const HOME_P1_TAIL = {
	es: ' También cubre MW2, MW3, BO6 y BO7. Compare planes en la Tienda y revise el Estado antes de jugar.',
	fr: ' Couvre aussi MW2, MW3, BO6 et BO7. Comparez les plans sur la Boutique, puis consultez le Statut avant de jouer.',
	de: ' Deckt auch MW2, MW3, BO6 und BO7 ab. Vergleichen Sie Pläne im Store und prüfen Sie den Status vor dem Spielen.',
	pt: ' Também cobre MW2, MW3, BO6 e BO7. Compare planos na Loja e verifique o Status antes de jogar.',
	it: ' Copre anche MW2, MW3, BO6 e BO7. Confronta i piani nello Store e controlla lo Status prima di giocare.',
	nl: ' Ondersteunt ook MW2, MW3, BO6 en BO7. Vergelijk plannen in de Store en check Status voordat je speelt.',
	pl: ' Obejmuje też MW2, MW3, BO6 i BO7. Porównaj plany w Sklepie i sprawdź Status przed grą.',
	ru: ' Также поддерживает MW2, MW3, BO6 и BO7. Сравните планы в Store и проверьте Status перед игрой.',
	tr: ' MW2, MW3, BO6 ve BO7 desteği de vardır. Oynamadan önce Mağaza planlarını karşılaştırın ve Durumu kontrol edin.',
	ar: ' Also covers MW2, MW3, BO6, and BO7. Compare plans on Store, then check Status before you queue.',
	ja: ' MW2、MW3、BO6、BO7にも対応。プレイ前にStoreでプランを比較し、Statusを確認してください。',
	ko: ' MW2, MW3, BO6, BO7도 지원합니다. 플레이 전 Store에서 플랜을 비교하고 Status를 확인하세요.',
	zh: ' 同时支持 MW2、MW3、BO6 和 BO7。游玩前请在 Store 对比方案并查看 Status。',
	hi: ' MW2, MW3, BO6, and BO7 are included too. Compare plans on Store, then check Status before you queue.',
	id: ' Juga mencakup MW2, MW3, BO6, dan BO7. Bandingkan paket di Store, lalu cek Status sebelum bermain.',
	th: ' รองรับ MW2, MW3, BO6 และ BO7 ด้วย เปรียบเทียบแพ็กใน Store แล้วตรวจ Status ก่อนเล่น',
	vi: ' Cũng hỗ trợ MW2, MW3, BO6 và BO7. So sánh gói trên Store và kiểm tra Status trước khi chơi.',
	uk: ' Також підтримує MW2, MW3, BO6 і BO7. Порівняйте плани в Store і перевірте Status перед грою.',
	cs: ' Pokrývá také MW2, MW3, BO6 a BO7. Porovnejte plány v Store a před hrou zkontrolujte Status.',
	ro: ' Acoperă și MW2, MW3, BO6 și BO7. Compară planurile în Store și verifică Status înainte de joc.',
	sv: ' Täcker även MW2, MW3, BO6 och BO7. Jämför planer i Store och kontrollera Status innan du spelar.',
};

const HOME_BLOCK = {
	es: {
		aboutTitle: 'Trucos indetectables de Warzone para Call of Duty',
		aboutP2Before: 'Empieza por el',
		aboutPillar: 'pilar de trucos de Warzone',
		aboutEsp: 'guía de ESP',
		aboutAimbot: 'controles de aimbot',
		aboutUndetected: 'estado indetectable',
		aboutP2Mid: ', ',
		aboutP2Or: ', o ',
		aboutP2After: ' si aún estás comparando herramientas.',
	},
	fr: {
		aboutTitle: 'Triches Warzone indétectables pour Call of Duty',
		aboutP2Before: 'Commencez par le',
		aboutPillar: 'pilier triches Warzone',
		aboutEsp: 'guide ESP',
		aboutAimbot: 'contrôles aimbot',
		aboutUndetected: 'statut indétectable',
		aboutP2Mid: ', ',
		aboutP2Or: ', ou ',
		aboutP2After: ' si vous comparez encore les outils.',
	},
	de: {
		aboutTitle: 'Undetected Warzone Cheats für Call of Duty',
		aboutP2Before: 'Starten Sie mit dem',
		aboutPillar: 'Warzone-Cheats-Pillar',
		aboutEsp: 'ESP-Guide',
		aboutAimbot: 'Aimbot-Einstellungen',
		aboutUndetected: 'Undetected-Status',
		aboutP2Mid: ', ',
		aboutP2Or: ', oder ',
		aboutP2After: ' wenn Sie noch Tools vergleichen.',
	},
};

function buildHome(locale) {
	if (locale === 'en') return undefined;
	const meta = PAGE_META_HOME[locale];
	const block = HOME_BLOCK[locale];
	if (!meta || !block) return undefined;
	return {
		...block,
		aboutP1: `${meta.intro}${HOME_P1_TAIL[locale] ?? HOME_P1_TAIL.en ?? ''}`,
	};
}

function buildHomeSeo(locale, ui) {
	if (locale === 'en') return undefined;
	const labels = {
		es: {
			eyebrow: 'Guías', title: 'Explorar por categoría', lede: 'Enlaces rápidos a funciones, estado, tienda y ayuda.',
			catFeaturesHint: 'Qué incluye', catStatusHint: 'Antes de jugar', catStoreHint: 'Compra y planes', catHelpHint: '¿Necesitas una mano?',
			linkAllFeatures: 'Todas las funciones', linkLiveStatus: 'Estado en vivo', linkUndetected: 'Indetectable',
			linkPlans: 'Planes', linkWarzoneCheats: 'Trucos de Warzone', linkSetupGuide: 'Guía de instalación', linkRefunds: 'Reembolsos',
			faqEyebrow: 'FAQ', faqTitle: 'Antes de comprar', faqLede: 'Entrega, estado de detección y qué incluye.',
			allAnswers: 'Todas las respuestas', openFullPage: 'Abrir página completa',
		},
		fr: {
			eyebrow: 'Guides', title: 'Parcourir par catégorie', lede: 'Liens rapides vers fonctions, statut, boutique et aide.',
			catFeaturesHint: 'Ce qui est inclus', catStatusHint: 'Avant de jouer', catStoreHint: 'Achat et plans', catHelpHint: 'Besoin d\'aide',
			linkAllFeatures: 'Toutes les fonctions', linkLiveStatus: 'Statut en direct', linkUndetected: 'Indétectable',
			linkPlans: 'Forfaits', linkWarzoneCheats: 'Triches Warzone', linkSetupGuide: 'Guide d\'installation', linkRefunds: 'Remboursements',
			faqEyebrow: 'FAQ', faqTitle: 'Avant d\'acheter', faqLede: 'Livraison, statut de détection et contenu inclus.',
			allAnswers: 'Toutes les réponses', openFullPage: 'Ouvrir la page complète',
		},
		de: {
			eyebrow: 'Guides', title: 'Nach Kategorie stöbern', lede: 'Kurze Links zu Features, Status, Store und Hilfe.',
			catFeaturesHint: 'Was enthalten ist', catStatusHint: 'Vor dem Spielen', catStoreHint: 'Kauf & Pläne', catHelpHint: 'Hilfe nötig',
			linkAllFeatures: 'Alle Features', linkLiveStatus: 'Live-Status', linkUndetected: 'Undetected',
			linkPlans: 'Pläne', linkWarzoneCheats: 'Warzone Cheats', linkSetupGuide: 'Setup-Anleitung', linkRefunds: 'Erstattungen',
			faqEyebrow: 'FAQ', faqTitle: 'Vor dem Kauf', faqLede: 'Lieferung, Erkennungsstatus und Inhalt.',
			allAnswers: 'Alle Antworten', openFullPage: 'Ganze Seite öffnen',
		},
	};
	const l = labels[locale];
	if (!l) {
		return {
			catFeatures: ui.nav.features,
			catStatus: NAV_PATCH[locale]?.status ?? ui.nav.updates,
			catStore: NAV_PATCH[locale]?.store ?? ui.nav.pricing,
			catHelp: ui.nav.faq,
			linkEsp: ui.nav.esp,
			linkAimbot: ui.nav.aimbot,
			linkFaq: ui.nav.faq,
			linkSetup: ui.nav.setup,
			linkPlans: ui.nav.pricing,
			linkReviews: NAV_PATCH[locale]?.reviews ?? 'Reviews',
		};
	}
	return {
		eyebrow: l.eyebrow,
		title: l.title,
		lede: l.lede,
		catFeatures: ui.nav.features,
		catFeaturesHint: l.catFeaturesHint,
		catStatus: NAV_PATCH[locale]?.status ?? ui.nav.updates,
		catStatusHint: l.catStatusHint,
		catStore: NAV_PATCH[locale]?.store ?? ui.nav.pricing,
		catStoreHint: l.catStoreHint,
		catHelp: ui.nav.faq,
		catHelpHint: l.catHelpHint,
		linkAllFeatures: l.linkAllFeatures,
		linkEsp: ui.nav.esp,
		linkAimbot: ui.nav.aimbot,
		linkRadar: 'Radar',
		linkLiveStatus: l.linkLiveStatus,
		linkUndetected: l.linkUndetected,
		linkRicochet: 'Ricochet',
		linkSetup: ui.nav.setup,
		linkPlans: l.linkPlans,
		linkReviews: NAV_PATCH[locale]?.reviews ?? 'Reviews',
		linkWarzoneCheats: l.linkWarzoneCheats,
		linkFaq: ui.nav.faq,
		linkSupport: ui.nav.faq,
		linkSetupGuide: l.linkSetupGuide,
		linkBlog: 'Blog',
		linkRefunds: l.linkRefunds,
		faqEyebrow: l.faqEyebrow,
		faqTitle: l.faqTitle,
		faqLede: l.faqLede,
		allAnswers: l.allAnswers,
		openFullPage: l.openFullPage,
	};
}

const HERO_PATCH = {
	en: {
		title: 'Warzone Cheats',
		chipEsp: 'ESP',
		chipAim: 'Humanizer',
		chipRadar: 'Radar',
		chipUpdates: 'Patch updates',
		priceFrom: 'from',
		buyNow: 'Get Access',
	},
	es: {
		title: 'Warzone Cheats',
		chipEsp: 'ESP',
		chipAim: 'Humanizer',
		chipRadar: 'Radar',
		chipUpdates: 'Actualizaciones',
		priceFrom: 'desde',
	},
	fr: { chipEsp: 'ESP', chipAim: 'Humanizer', chipRadar: 'Radar', chipUpdates: 'Mises à jour', priceFrom: 'dès' },
	de: { chipEsp: 'ESP', chipAim: 'Humanizer', chipRadar: 'Radar', chipUpdates: 'Patch-Updates', priceFrom: 'ab' },
};

const CTA_PATCH = {
	en: { buy: 'Get Access', buyShort: 'Buy' },
	es: { buy: 'Obtener acceso', buyShort: 'Comprar' },
	fr: { buy: 'Obtenir l\'accès', buyShort: 'Acheter' },
	de: { buy: 'Zugang erhalten', buyShort: 'Kaufen' },
	pt: { buy: 'Obter acesso', buyShort: 'Comprar' },
	it: { buy: 'Ottieni accesso', buyShort: 'Acquista' },
};

const PRODUCT_PATCH = {
	en: { days30: '30 days', oneTime: 'One-time', plans: 'Plans', perMonth: '/ month', once: ' once', buyMonthly: 'Buy monthly', buyLifetime: 'Buy lifetime' },
	es: { days30: '30 días', oneTime: 'Pago único', plans: 'Planes', perMonth: '/ mes', once: ' una vez', buyMonthly: 'Comprar mensual', buyLifetime: 'Comprar de por vida' },
	fr: { days30: '30 jours', oneTime: 'Paiement unique', plans: 'Forfaits', perMonth: '/ mois', once: ' une fois', buyMonthly: 'Acheter mensuel', buyLifetime: 'Acheter à vie' },
	de: { days30: '30 Tage', oneTime: 'Einmalig', plans: 'Pläne', perMonth: '/ Monat', once: ' einmal', buyMonthly: 'Monatlich kaufen', buyLifetime: 'Lifetime kaufen' },
};

const REVIEWS_PATCH = {
	en: { eyebrow: 'Reviews', homeTitle: 'Warzone Cheats reviews', buyerReviews: '{{count}} buyer reviews', averageAria: '{{rating}} average from {{count}} reviews', outOfFiveAria: '{{rating}} out of 5', readAll: 'Read all reviews →' },
	es: { eyebrow: 'Reseñas', homeTitle: 'Reseñas de Warzone Cheats', buyerReviews: '{{count}} reseñas de compradores', averageAria: '{{rating}} de media entre {{count}} reseñas', outOfFiveAria: '{{rating}} de 5', readAll: 'Ver todas las reseñas →' },
	fr: { eyebrow: 'Avis', homeTitle: 'Avis Warzone Cheats', buyerReviews: '{{count}} avis acheteurs', averageAria: '{{rating}} moyenne sur {{count}} avis', outOfFiveAria: '{{rating}} sur 5', readAll: 'Voir tous les avis →' },
	de: { eyebrow: 'Bewertungen', homeTitle: 'Warzone Cheats Bewertungen', buyerReviews: '{{count}} Käuferbewertungen', averageAria: '{{rating}} Durchschnitt aus {{count}} Bewertungen', outOfFiveAria: '{{rating}} von 5', readAll: 'Alle Bewertungen →' },
};

const FOOTER_PATCH = {
	en: { tagline: 'Undetected Warzone cheats for PC.\nAimbot, ESP, loot ESP & radar.' },
	es: { tagline: 'Trucos Warzone indetectables para PC.\nAimbot, ESP, loot ESP y radar.' },
	fr: { tagline: 'Triches Warzone indétectables pour PC.\nAimbot, ESP, loot ESP et radar.' },
	de: { tagline: 'Undetected Warzone Cheats für PC.\nAimbot, ESP, Loot-ESP und Radar.' },
};

export function buildLocaleExtra(locale, ui) {
	return {
		nav: NAV_PATCH[locale] ?? {},
		hero: HERO_PATCH[locale] ?? {},
		cta: CTA_PATCH[locale] ?? CTA_PATCH.en,
		trust: locale === 'en' ? { antiCheatShort: 'Ricochet anti-cheat supported' } : {},
		product: PRODUCT_PATCH[locale] ?? {},
		reviews: REVIEWS_PATCH[locale] ?? {},
		common: locale === 'en' ? {} : {
			selectLanguage: ui.common.language,
			englishOfficial: ui.common.officialLanguageNote?.includes('official') ? undefined : undefined,
		},
		footer: FOOTER_PATCH[locale] ?? FOOTER_PATCH.en,
		home: buildHome(locale),
		homeSeo: buildHomeSeo(locale, ui),
	};
}
