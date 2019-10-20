import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import styled from '@emotion/styled';

import { withTranslation } from 'utils/with-i18next';

import SelectLanguages from './SelectLanguages';

const HeaderRoot = styled(`header`)`
  left: 0;
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0px;
  z-index: 1000;
`;

const HeaderContainer = styled('div')`
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
`;

const NavRoot = styled('nav')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  height: 64px;
  max-width: 1024px;
`;

const ListItem = styled('div')`
  display: flex;
`;

const ItemLink = styled('a')`
  color: #757575;
  text-decoration: none;
  margin-left: -5px;
  margin-right: 2rem;
  padding: 5px;

  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

const ListActions = styled('div')`
  display: flex;
`;

const Space = styled('div')`
  flex: 1 1 auto;
`;

export function Header({ t }) {
  return (
    <HeaderRoot>
      <HeaderContainer>
        <NavRoot>
          <ListItem>
            <Link href="#features">
              <ItemLink>{t('phrases.features')}</ItemLink>
            </Link>

            <Link href="#exampleGetApi">
              <ItemLink>{t('phrases.apiExample')}</ItemLink>
            </Link>
          </ListItem>

          <Space />

          <ListActions>
            <SelectLanguages t={t} />
          </ListActions>
        </NavRoot>
      </HeaderContainer>
    </HeaderRoot>
  );
}

Header.propTypes = {
  t: PropTypes.func,
};

export default withTranslation('common')(Header);
