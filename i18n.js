const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;

const EN = 'en';
const ES = 'es';

const localeSubpathMapping = {
  none: {},
  en: EN,
  es: ES,
  all: {
    en: EN,
    es: ES,
  },
};

module.exports = new NextI18Next({
  defaultNS: 'common',
  defaultLanguage: 'es',
  otherLanguages: [EN, ES],
  localeSubpaths: localeSubpathMapping[localeSubpaths],
});
