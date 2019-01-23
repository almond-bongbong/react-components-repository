import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SelectGroupStyle = styled.div`
  font-size: 0;
  
  ${props => props.type === 'inline' && css`
    & .sel_items {
      margin: -5px -10px;
    }
    & .sel_item {
      display: inline-block;
      padding: 5px 10px;
      vertical-align: top;
    }
  `}
  
  ${props => props.type === 'block' && css`
    & .sel_item {
      & + .sel_item {
        margin-top: 10px;
      }
    }
  `}
  
  ${props => props.type === 'grid' && css`
    & .sel_items {
      margin: -5px 0;
    }
    & .sel_item {
      display: inline-block;
      width: ${100 / props.grid}%;
      padding: 5px 0;
      vertical-align: top;
    }
  `}
`;

const SelectGroup = ({ type, grid, children }) => (
  <SelectGroupStyle type={type} grid={grid}>
    <div className="sel_items">
      {children.map(child => (
        <div key={child.props.id} className="sel_item">
          {child}
        </div>
      ))}
    </div>
  </SelectGroupStyle>
);

SelectGroup.propTypes = {
  type: PropTypes.oneOf(['inline', 'block', 'grid']),
  grid: PropTypes.number,
  children: PropTypes.node.isRequired,
};

SelectGroup.defaultProps = {
  type: 'inline',
  grid: 4,
};

export default SelectGroup;
