import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
`;

const Input = ({
  type, placeholder, value, size, onChange,
}) => (
  <BasicInputStyle size={size}>
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
  </BasicInputStyle>
);

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf([30, 40, 50]),
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  size: 40,
};

export default Input;
