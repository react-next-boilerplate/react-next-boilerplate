const { setConfig } = require('next/config');
setConfig(require('../next.config'));

const express = require('express');
const next = require('next');
const { Signale } = require('signale');

const dev = process.env.NODE_ENV !== 'production';
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('../i18n');

const port = process.env.PORT || 3000;
const app = next({ dir: './app', dev });

const handle = app.getRequestHandler();

const options = {
  scope: 'app server',
};
const signale = new Signale(options);

(async () => {
  await app.prepare();
  const server = express();

  server.use(nextI18NextMiddleware(nextI18next));
  server.use('/static', express.static('static'));

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  signale.success(`<> Ready on localhost:${port}`);
})();
