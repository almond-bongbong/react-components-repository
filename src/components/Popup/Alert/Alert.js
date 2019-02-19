import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../Button/Button';
import newlineText from '../../../lib/newlineText';

const AlertStyle = styled.div`
  width: 250px;
  & .message {
    margin-bottom: 20px;
    color: #666;
    font-weight: 700;
    font-size: 16px;
  }
`;

const Alert = ({ data: { id, message } }) => (
  <AlertStyle>
    <div className="message">
      {newlineText(message)}
    </div>
    <Button inline={false} onClick={window.popupCallback[id]}>확인</Button>
  </AlertStyle>
);

Alert.propTypes = {
  data: PropTypes.shape({
    message: PropTypes.string,
    callback: PropTypes.func,
  }).isRequired,
};

export default Alert;
