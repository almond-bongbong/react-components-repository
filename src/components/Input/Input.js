import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BasicInput = styled.div`
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
`;

const Input = ({
  type, placeholder, value, size, onChange,
}) => (
  <BasicInput size={size}>
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
  </BasicInput>
);

Input.propTypes = {
  /** type of input */
  type: PropTypes.oneOf(['text', 'password']),
  /** guide text */
  placeholder: PropTypes.string,
  /** value of input */
  value: PropTypes.string,
  /** size */
  size: PropTypes.oneOf([30, 40, 50]),
  /** onchange event */
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  size: 40,
};

export default Input;
