import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import newlineText from '../../lib/newlineText';
import { triangle } from '../Style/Mixin';

const TooltipStyle = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  font-size: 0;
  &:hover {
    & .message {
      visibility: visible;
      opacity: 1;
    }
  }
  & i {
    display: block;
    color: #999;
    font-size: 15px;
  }
  & .message {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    bottom: 30px;
    left: 50%;
    padding: 7px 10px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.2);
    color: #999;
    font-size: 13px;
    white-space: nowrap;
    transform: translateX(-50%);
    transition: visibility .3s, opacity .3s;
    &:after {
      ${triangle(16, 'down', '#dfdfdf')};
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      bottom: -8px;
      transform: translateX(-50%);
    }
  }
`;

const Tooltip = ({ children }) => (
  <TooltipStyle>
    <i><FontAwesomeIcon icon={faInfoCircle} /></i>
    <div className="message">
      {newlineText(children)}
    </div>
  </TooltipStyle>
);

Tooltip.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Tooltip;
