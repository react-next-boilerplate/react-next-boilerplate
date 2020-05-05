import React from 'react';

import { Provider } from 'react-redux';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import Head from 'next/head';
import App from 'next/app';

import withReduxStore from 'utils/with-redux-store';
import { appWithTranslation } from 'utils/with-i18next';

import 'typeface-metropolis';
import '@typefaces-pack/typeface-inter';

class Srr extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <React.StrictMode>
        <Head>
          <title>React Next Boilerplate</title>
        </Head>

        <Provider store={reduxStore}>
          <CacheProvider value={cache}>
            <Component {...pageProps} />
          </CacheProvider>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default appWithTranslation(withReduxStore(Srr));
