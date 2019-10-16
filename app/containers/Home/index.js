import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';

import Layout from 'components/Layout';
import Features from 'components/Features';

import saga from './saga';
import reducer from './reducer';
import { getDataUsers } from './actions';
import { makeSelectData } from './selectors';

export function Home({ getDataUsers }) {
  useInjectSaga({ key: 'example', saga });
  useInjectReducer({ key: 'example', reducer });

  useEffect(() => {
    getDataUsers();
  }, []);

  return (
    <Layout>
      <Features />
    </Layout>
  );
}

const mapStateToProps = createStructuredSelector({
  dataUsers: makeSelectData(),
});

export function mapDispatchToProps(dispatch) {
  return { getDataUsers: () => dispatch(getDataUsers()) };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

Home.propTypes = {
  dataUsers: PropTypes.object,
  getDataUsers: PropTypes.func,
};

export default compose(
  withConnect,
  memo
)(Home);
