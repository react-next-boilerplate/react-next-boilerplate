import React from 'react';

import configureStore from './configure-store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  if (isServer) {
    return configureStore(initialState);
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = configureStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

const AppWrapper = App => {
  return class Redux extends React.Component {
    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore({});

      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props) {
      super(props);
      // eslint-disable-next-line react/prop-types
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};

export default AppWrapper;
