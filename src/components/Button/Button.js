import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { red, blue } from '../Style/Mixin';

const BasicButton = styled.div`
  display: block;
  
  ${props => props.inline && css`
    display: inline-block;
    width: auto;
  `};

  button, a {
    box-sizing: border-box;
    display: block;
    width: 100%;
    min-width: 80px;
    height: ${props => props.size}px;
    padding: 0 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 13px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    line-height: ${props => props.size}px;
    transition: box-shadow .2s;
  
    &:hover {
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
    
    & span {
      box-sizing: border-box;
      position: relative;
    }
    
    ${props => props.theme === 'white' && css`
      background-color: #fff;
      border: 1px solid #ddd;
      color: #666;
    `};
    
    ${props => props.theme === 'red' && css`
      background-color: ${red};
      border: 1px solid ${red};
      color: #fff;
    `};
    
    ${props => props.theme === 'blue' && css`
      background-color: ${blue};
      border: 1px solid ${blue};
      color: #fff;
    `}
  }
`;

const Button = ({
  children, theme, size, inline, onClick,
}) => (
  <BasicButton theme={theme} size={size} inline={inline}>
    <button type="button" onClick={onClick}><span>{children}</span></button>
  </BasicButton>
);

Button.propTypes = {
  inline: PropTypes.bool,
  children: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['red', 'white', 'blue']),
  size: PropTypes.oneOf([30, 40, 50]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  theme: 'white',
  size: 40,
  inline: true,
  onClick: undefined,
};

export default Button;
