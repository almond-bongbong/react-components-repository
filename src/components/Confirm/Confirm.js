import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import * as confirmActions from '../../modules/confirm';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

const fadeIn = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

const ConfirmStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  animation: ${fadeIn} .3s ease-in-out;
  & .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
  }
  & .content {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    padding: 20px;
    border-radius: 6px;
    background-color:#fff;
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.2);
    text-align: center;
    transform: translate(-50%, -50%);
    & .message {
      margin-bottom: 20px;
      color: #666;
      font-weight: 700;
      font-size: 16px;
    }
  }
`;

const Confirm = ({ confirm, confirmClose }) => (
  <>
    {confirm.show && (
      <ConfirmStyle>
        <div
          className="mask"
          role="button"
          tabIndex="0"
          onClick={confirmClose}
          title="닫기"
          onKeyPress={e => e.key === 'Enter' && confirmClose()}
        />
        <div className="content">
          <div className="message">
            {confirm.message.split('\n').map(line => (
              <Fragment key={line}>
                {line}
                <br />
              </Fragment>
            ))}
          </div>

          <ButtonGroup>
            <Button inline={false} onClick={() => confirm.callback(false)}>취소</Button>
            <Button inline={false} onClick={() => confirm.callback(true)} theme="red">확인</Button>
          </ButtonGroup>
        </div>
      </ConfirmStyle>)
    }
  </>
);

Confirm.propType = {
  ConfirmActions: PropTypes.shape({}).isRequired,
  confirm: PropTypes.shape({
    show: PropTypes.bool,
    message: PropTypes.string,
    callback: PropTypes.func,
  }).isRequired,
};

export default connect(
  state => ({
    confirm: state.confirm,
  }),
  dispatch => ({
    confirmClose: () => dispatch(confirmActions.confirmClose()),
  }),
)(Confirm);
