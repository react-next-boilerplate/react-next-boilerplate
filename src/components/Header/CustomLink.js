import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'utils/with-i18next';
import styled from '@emotion/styled';

const ItemLink = styled.a`
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

const CustomLink = ({ href, name }) => (
  <Link href={href} passHref>
    <ItemLink
      href={href}
      css={{
        backgroundColor: '#fff',
        '&:hover': {
          color: 'rbg(217, 217, 217)',
        },
      }}>
      {name}
    </ItemLink>
  </Link>
);

CustomLink.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
};

export default CustomLink;
