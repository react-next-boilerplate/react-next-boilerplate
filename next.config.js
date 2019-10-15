const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    modules: true,
    camelCase: true,
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  publicRuntimeConfig: {
    localeSubpaths: 'all',
  },
});
