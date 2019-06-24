import React from 'react';

import { Trans } from 'react-i18next';

import Home from 'containers/Home';

import withI18next from 'utils/with-i18next';

class IndexPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Home />

        <span>
          <Trans i18nKey="common:default" />
        </span>
      </div>
    );
  }
}

export default withI18next()(IndexPage);
