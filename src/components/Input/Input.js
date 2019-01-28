import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const BasicInputStyle = styled.div`
  display: block;
  border-radius: 3px;
  
  & > input {
    box-sizing: border-box;
    display: block;    
    width: 100%;
    height: ${props => props.size}px;
    padding: 0 15px;
    border: 1px solid #ddd;
    font-size: 13px;
    line-height: ${props => props.size}px;
  }
  
  ${props => props.theme === 'line' && css`
    & > input {
      border: 0;
      border-bottom: 1px solid #ddd;
    }
  `}
`;

const Input = ({
  type, theme, placeholder, value, size, onChange,
}) => (
  <BasicInputStyle size={size} theme={theme}>
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
  </BasicInputStyle>
);

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  theme: PropTypes.oneOf(['line']),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf([30, 40, 50]),
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  theme: '',
  placeholder: '',
  value: '',
  size: 40,
};

export default Input;
