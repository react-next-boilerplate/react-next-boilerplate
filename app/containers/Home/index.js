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

      <div id="exampleGetApi">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eos, dolorum debitis recusandae fuga, ipsa ad
        incidunt cumque possimus ipsam ipsum maiores itaque, deserunt dignissimos ea, soluta reiciendis distinctio.
        Alias.
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, itaque deleniti quis, blanditiis facere
          asperiores dolore ipsa corrupti placeat alias eveniet ipsam earum! Repellendus ad a, nemo fuga ab perferendis.
        </div>
        <div>
          Impedit necessitatibus neque fugit quibusdam autem iste excepturi nihil, molestiae obcaecati mollitia aperiam
          voluptatibus officiis veniam consectetur quam omnis consequatur dolorum ducimus velit debitis voluptatem!
          Nulla nemo eligendi dolorem, molestiae.
        </div>
      </div>
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
