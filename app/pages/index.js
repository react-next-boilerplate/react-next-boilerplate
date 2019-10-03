import React from 'react';
import PropTypes from 'prop-types';

import Home from 'containers/Home';
import { i18n, withTranslation } from 'utils/with-i18next';

class IndexPage extends React.PureComponent {
  render() {
    const { t } = this.props;

    return (
      <div>
        <button type="button" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}>
          {t('change-locale')}
        </button>

        <span>{t('default')}</span>

        <Home />
      </div>
    );
  }
}

IndexPage.propTypes = {
  t: PropTypes.func,
};

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(IndexPage);
