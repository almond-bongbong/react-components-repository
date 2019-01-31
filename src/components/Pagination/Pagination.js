import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { blue } from '../Style/Mixin';

const PaginationStyle = styled.div`
  display: block;
  color: #888;
  font-size: 0;
  text-align: center;
  
  & .arrow {
    color: #999;
    font-size: 14px;
  }
  
  & .numbers {
    margin: 0 10px;
  }
  
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
  ${props => props.active && css`
    color: ${blue};
    text-decoration: underline;
  `}
`;

const Pagination = ({
  current, displayItem, displayPage, total, onChange,
}) => {
  const numbers = [];
  const pageCount = Math.ceil(total / displayItem);
  const displayStartPage = Math.floor((current - 1) / displayPage) * displayPage + 1;
  const displayEndPage = displayStartPage + displayPage - 1;
  const prevPage = displayStartPage > 1 ? displayStartPage - 1 : 1;
  const nextPage = displayEndPage < pageCount ? displayEndPage + 1 : pageCount;

  console.log('total item : ', total);
  console.log('total page : ', pageCount);
  console.log(`${displayStartPage} - ${displayEndPage}`);

  for (let i = displayStartPage; i <= displayEndPage; i += 1) {
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
      <button type="button" className="arrow" onClick={() => onChange(1)}><span><FontAwesomeIcon icon={faAngleDoubleLeft} /></span></button>
      <button type="button" className="arrow" onClick={() => onChange(prevPage)}><span><FontAwesomeIcon icon={faAngleLeft} /></span></button>
      <span className="numbers">{numbers}</span>
      <button type="button" className="arrow" onClick={() => onChange(nextPage)}><span><FontAwesomeIcon icon={faAngleRight} /></span></button>
      <button type="button" className="arrow" onClick={() => onChange(pageCount)}><span><FontAwesomeIcon icon={faAngleDoubleRight} /></span></button>
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
