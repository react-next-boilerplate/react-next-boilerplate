import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { translate, Trans } from 'react-i18next';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from '../../utils/inject-reducer';
import { useInjectSaga } from '../../utils/inject-saga';

import saga from './saga';
import reducer from './reducer';
import { getDataUsers } from './actions';
import { makeSelectData } from './selectors';

export function Home({ dataUsers, getDataUsers }) {
  useInjectSaga({ key: 'example', saga });
  useInjectReducer({ key: 'example', reducer });

  useEffect(() => {
    getDataUsers();
  }, []);

  return (
    <div>
      {dataUsers.loading ? (
        <span>Loading...</span>
      ) : (
        dataUsers.loadend &&
        dataUsers.users.data.map(user => (
          <div
            key={user.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '10px',
            }}>
            <img src={user.avatar} alt="" style={{ borderRadius: '50%' }} />
            <span>{`Full Name: ${user.first_name} ${user.last_name}`}</span>

            <Trans i18nKey="common:default" />
          </div>
        ))
      )}
    </div>
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
  memo,
  translate('common')
)(Home);
