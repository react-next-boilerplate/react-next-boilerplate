import React from 'react';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
{
  0%{
    transform: scale(0);
    opacity: 1;
  }
  100%{
    transform: scale(1.3);
    opacity: 0;
  }
}
`;

const SpinnerRoot = styled('div')`
  width: 100px;
  height: 100px;
  border-radius: 999px;
  margin: 0 auto;
  position: relative;
  margin-top: 50px;

  &:after,
  &:before {
    content: ' ';
    background: orangered;
    width: 100%;
    height: 100%;
    border-radius: 999px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  &:before {
    animation: ${pulse} 3s linear infinite;
  }
  &:after {
    animation: ${pulse} 2s linear 2.3s infinite;
  }
`;

function Spiner() {
  return <SpinnerRoot />;
}
export default Spiner;
