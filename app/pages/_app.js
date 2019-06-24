import React from 'react';

import { Provider } from 'react-redux';

import Head from 'next/head';
import NextApp, { Container } from 'next/app';

import withReduxStore from 'utils/with-redux-store';

class Srr extends NextApp {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Head>
          <title>My page</title>
        </Head>

        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(Srr);
