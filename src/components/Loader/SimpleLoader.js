import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { red } from '../Style/Mixin';
import hexToRgb from '../../lib/hexToRgb';

const rotation = keyframes`
  from {
    transform: translateZ(0) rotate(0deg);
  }
  to {
    transform: translateZ(0) rotate(360deg);
  }
`;

const SimpleLoaderStyle = styled.div`
  position: relative;
  .circle-loader {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    margin: 0 auto;
    border: 2px solid transparent;
    border-radius: 50%;
    color: ${red};
    animation: ${rotation} .8s ease infinite;
    ${props => props.theme === 'red' && css`
      border-top-color: rgb(${hexToRgb(red)});
      border-bottom-color: rgb(${hexToRgb(red)});
    `}
    ${props => props.theme === 'blue' && css`
      border-top-color: rgba(100,181,246,1);
      border-bottom-color: rgba(100,181,246,1);
    `}
    ${props => props.theme === 'white' && css`
      border-top-color: rgba(255,255,255,0.9);
      border-bottom-color: rgba(255,255,255,0.9);
    `}
  }
`;

const SimpleLoader = ({ theme, size }) => (
  <SimpleLoaderStyle theme={theme} size={size}>
    <div className="circle-loader" />
  </SimpleLoaderStyle>
);

SimpleLoader.propTypes = {
  theme: PropTypes.oneOf(['red', 'blue', 'white']),
  size: PropTypes.number,
};

SimpleLoader.defaultProps = {
  theme: 'red',
  size: 60,
};

export default SimpleLoader;
