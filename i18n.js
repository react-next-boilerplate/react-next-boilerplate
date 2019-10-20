const NextI18Next = require('next-i18next').default;
const config = require('next/config').default();
const get = require('lodash/get');

const localeSubpaths = get(config, 'publicRuntimeConfig.localeSubpaths', 'none');

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
