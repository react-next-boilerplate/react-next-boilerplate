const get = require('lodash/get');

const NextI18Next = require('next-i18next').default;
const config = require('next/config').default();
const localeSubpaths = get(config, 'publicRuntimeConfig.localeSubpaths', 'none');

const path = require('path');

module.exports = new NextI18Next({
  otherLanguages: ['en', 'es'],
  localeSubpaths: { ...localeSubpaths },
  localePath: path.resolve('./public/static/locales'),
});
