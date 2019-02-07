import React from 'react';

import { Trans } from 'react-i18next';

import withI18next from 'utils/with-i18next';

class Index extends React.PureComponent {
  render() {
    return (
      <div>
        <Trans i18nKey="common:default" />
      </div>
    );
  }
}

export default withI18next()(Index);
