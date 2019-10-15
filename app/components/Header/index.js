import React from 'react';

import styled from '@emotion/styled';

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
`;

const ListActions = styled('div')`
  display: flex;
`;

const Space = styled('div')`
  flex: 1 1 auto;
`;

function Header() {
  return (
    <HeaderRoot>
      <HeaderContainer>
        <NavRoot>
          <ListItem>
            <ItemLink href="">Feature</ItemLink>
            <ItemLink href="">Features</ItemLink>
          </ListItem>

          <Space />

          <ListActions>
            <SelectLanguages />
          </ListActions>
        </NavRoot>
      </HeaderContainer>
    </HeaderRoot>
  );
}

export default Header;
