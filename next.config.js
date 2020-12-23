const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  en: 'en',
  es: 'es',
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
