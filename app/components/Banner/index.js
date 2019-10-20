import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import { withTranslation } from 'utils/with-i18next';

const BannerRoot = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Title = styled('h1')`
  font-size: 45px;
`;

const SubTitle = styled('h2')`
  font-size: 20px;
  margin: 0;
  font-weight: 300;
`;

const Logo = styled('img')`
  width: 110px;
`;

export function Banner({ t }) {
  return (
    <BannerRoot>
      <Logo src="/static/images/reac-next-boilerplate-logo.svg" alt="react-next-boilerplate" />

      <Title>{t('title')}</Title>

      <SubTitle>{t('subTitle')}</SubTitle>
    </BannerRoot>
  );
}

Banner.propTypes = {
  t: PropTypes.func,
};

export default withTranslation('banner')(Banner);
