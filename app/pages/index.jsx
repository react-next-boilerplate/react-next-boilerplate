import React from 'react';

import { Trans } from 'react-i18next';

import withI18next from 'utils/with-i18next';

import Home from 'containers/Home';

class Index extends React.PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Trans i18nKey="common:default" />
      </div>
    );
  }
}

export default withI18next()(Index);
