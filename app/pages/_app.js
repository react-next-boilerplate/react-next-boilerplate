import React from 'react';

import { Provider } from 'react-redux';

import Head from 'next/head';
import App from 'next/app';

import withReduxStore from 'utils/with-redux-store';

class Srr extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <>
        <Head>
          <title>react-next-boilerplate</title>
        </Head>

        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withReduxStore(Srr);
