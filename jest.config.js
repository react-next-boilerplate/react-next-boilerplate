module.exports = {
  collectCoverageFrom: [
    'app/**/*.{js,jsx,mjs}',
    '!app/pages/_*.js',
    '!<rootDir>/app/pages/**',
    '!coverage/**',
    '!app/.next/**',
    '!server/**',
    '!app/utils/with-redux-store.js',
    '!<rootDir>/i18n.js',
    '!<rootDir>/next.config.js',
    '!app/utils/with-i18next.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/app/.next',
    '<rootDir>/node_modules/',
    '<rootDir>/next.config.js',
    '<rootDir>/coverage/',
    '<rootDir>/server/',
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  moduleDirectories: ['node_modules', 'app'],
  testRegex: 'tests/.*\\.test\\.js$',
  snapshotSerializers: [],
};
