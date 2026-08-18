import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const supportedLngs = [
	'en',
	'es',
	'fr',
	'de',
	'pt',
	'it',
	'nl',
	'pl',
	'ru',
	'tr',
	'ar',
	'ja',
	'ko',
	'zh',
	'hi',
	'id',
	'th',
	'vi',
	'uk',
	'cs',
	'ro',
	'sv',
];

const localeModules = import.meta.glob('./public/locales/*/translation.json', { eager: true });

const resources = {};
for (const [filePath, mod] of Object.entries(localeModules)) {
	const locale = filePath.match(/locales\/([^/]+)\/translation\.json/)?.[1];
	if (locale) {
		resources[locale] = { translation: mod.default };
	}
}

if (!i18n.isInitialized) {
	i18n
		.use(LanguageDetector)
		.use(initReactI18next)
		.init({
			resources,
			fallbackLng: 'en',
			supportedLngs,
			nonExplicitSupportedLngs: true,
			load: 'languageOnly',
			interpolation: {
				escapeValue: false,
			},
			detection: {
				order: ['cookie', 'navigator', 'htmlTag'],
				lookupCookie: 'fc_locale',
				caches: ['cookie'],
				cookieMinutes: 525600,
				cookieOptions: { path: '/', sameSite: 'lax' },
			},
			react: {
				useSuspense: false,
			},
		});
}

export default i18n;
