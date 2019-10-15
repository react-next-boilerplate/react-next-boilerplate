import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'utils/with-i18next';

import Header from 'components/Header';
import Banner from 'components/Banner';

function Layout({ children, t }) {
  return (
    <>
      <Header />

      <Banner title={t('title')} subTitle={t('subTitle')} />

      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  t: PropTypes.func,
  children: PropTypes.node,
};

export default withTranslation('banner')(Layout);
