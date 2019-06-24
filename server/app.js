const express = require('express');

const next = require('next');

const { Signale } = require('signale');
const Backend = require('i18next-node-fs-backend');
const i18nextMiddleware = require('i18next-express-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './app', dev });
const handle = app.getRequestHandler();

const { i18nInstance } = require('../app/utils/i18n');

const port = parseInt(process.env.PORT, 10) || 3000;
const options = {
  scope: 'app server',
};
const signale = new Signale(options);

i18nInstance
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(
    {
      fallbackLng: 'es',
      preload: ['en', 'es'],
      ns: ['common'],
      backend: {
        loadPath: 'static/locales/{{lng}}/{{ns}}.json',
        addPath: 'static/locales/{{lng}}/{{ns}}.missing.json',
      },
    },
    () => {
      app.prepare().then(() => {
        const server = express();

        server.use(i18nextMiddleware.handle(i18nInstance));

        // path of server instance
        server.use('/locales', express.static('static/locales'));

        // path of server instance
        server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18nInstance));

        server.get('*', (req, res) => handle(req, res));

        server.listen(port, err => {
          if (err) {
            signale.error('error server', err);
            throw err;
          }
          signale.success(`<> Ready on localhost:${port}`);
        });
      });
    }
  );
