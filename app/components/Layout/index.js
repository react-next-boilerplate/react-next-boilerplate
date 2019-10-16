import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Banner from 'components/Banner';

function Layout({ children }) {
  return (
    <>
      <Header />

      <main>
        <Banner />

        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
