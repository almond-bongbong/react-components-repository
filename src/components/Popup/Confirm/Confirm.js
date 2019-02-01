import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../Button/Button';
import ButtonGroup from '../../ButtonGroup/ButtonGroup';

const ConfirmStyle = styled.div`
  & .message {
    margin-bottom: 20px;
    color: #666;
    font-weight: 700;
    font-size: 16px;
  }
`;

const Confirm = ({ id, data }) => (
  <ConfirmStyle>
    <div className="message">
      {data.message.split('\n').map(line => (
        <Fragment key={line}>
          {line}
          <br />
        </Fragment>
      ))}
    </div>

    <ButtonGroup>
      <Button inline={false} onClick={() => data.callback(false)}>취소</Button>
      <Button inline={false} onClick={() => data.callback(true)} theme="red">확인</Button>
    </ButtonGroup>
  </ConfirmStyle>
);

Confirm.propType = {
  id: PropTypes.string,
  message: PropTypes.string,
};

export default Confirm;
