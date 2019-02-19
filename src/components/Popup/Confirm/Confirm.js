import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../Button/Button';
import ButtonGroup from '../../ButtonGroup/ButtonGroup';
import newlineText from '../../../lib/newlineText';

const ConfirmStyle = styled.div`
  width: 250px;
  & .message {
    margin-bottom: 20px;
    color: #666;
    font-weight: 700;
    font-size: 16px;
  }
`;

const Confirm = ({ data: { id, message } }) => (
  <ConfirmStyle>
    <div className="message">
      {newlineText(message)}
    </div>

    <ButtonGroup>
      <Button inline={false} onClick={() => window.popupCallback[id](false)}>취소</Button>
      <Button inline={false} onClick={() => window.popupCallback[id](true)} theme="red">확인</Button>
    </ButtonGroup>
  </ConfirmStyle>
);

Confirm.propTypes = {
  data: PropTypes.shape({}),
};

Confirm.defaultProps = {
  data: undefined,
};

export default Confirm;
