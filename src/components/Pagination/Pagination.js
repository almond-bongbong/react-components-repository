import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { blue } from '../Style/Mixin';

const PaginationStyle = styled.div`
  display: block;
  color: #888;
  font-size: 0;
  text-align: center;
  
  & button {
    display: inline-block;
    padding: 8px 10px;
    border: 0;
    outline: 0;
    background: #fff;
    font-size: 13px;
    cursor: pointer;
    vertical-align: middle;
    & span {
      position: relative;
    }
    & img {
      display: block;
      width: 13px;
      height: 13px;
      vertical-align: top;
    }
  }
`;

const NumberStyle = styled.button`
  & + & {
    margin-left: 5px;
  }
  
  ${props => props.active && css`
    color: ${blue};
    text-decoration: underline;
  `}
`;

const Pagination = ({
  current, displayItem, displayPage, total, onChange,
}) => {
  const numbers = [];
  const pageCount = Math.floor(total / displayItem);

  for (let i = 1; i <= displayPage; i += 1) {
    if (i > pageCount) break;
    numbers.push(
      <NumberStyle
        key={i}
        type="button"
        className="num"
        active={i === current}
        onClick={() => onChange(i)}
      >
        <span>{i}</span>
      </NumberStyle>,
    );
  }
  return (
    <PaginationStyle>
      <button type="button" onClick={() => onChange(1)}><span /></button>
      {numbers}
    </PaginationStyle>
  );
};

Pagination.propTypes = {
  current: PropTypes.number,
  displayItem: PropTypes.number,
  displayPage: PropTypes.number,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  current: 1,
  displayItem: 10,
  displayPage: 5,
  onChange: null,
};

export default Pagination;
