import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/inject-saga';
import injectReducer from 'utils/inject-reducer';

import saga from './saga';
import reducer from './reducer';
import { getDataUsers } from './actions';
import { selectData } from './selectors';

export class Home extends React.Component {
  static propTypes = {
    getDataUsers: PropTypes.func,
    dataUsers: PropTypes.object,
  };

  componentDidMount() {
    const { getDataUsers } = this.props;

    getDataUsers();
  }

  render() {
    const { dataUsers } = this.props;

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
            </div>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dataUsers: selectData,
});

export function mapDispatchToProps(dispatch) {
  return { getDataUsers: () => dispatch(getDataUsers()) };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({ key: 'example', saga });
const withReducer = injectReducer({ key: 'example', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Home);
