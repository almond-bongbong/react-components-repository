import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import * as alertActions from '../../modules/alert';
import Button from '../Button/Button';

const fadeIn = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

const AlertStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  background-color: rgba(0,0,0,0.4);
  animation: ${fadeIn} .3s ease-in-out;
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

const Alert = ({ alert, alertClose }) => (
  <>
    {alert.show && (
      <AlertStyle>
        <div className="content">
          <div className="message">
            {alert.message.split('\n').map(line => (
              <Fragment key={line}>
                {line}
                <br />
              </Fragment>
            ))}
          </div>
          <Button inline={false} onClick={alertClose}>확인</Button>
        </div>
      </AlertStyle>)
    }
  </>
);

Alert.propType = {
  AlertActions: PropTypes.shape({}).isRequired,
  alert: PropTypes.shape({
    show: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};

export default connect(
  state => ({
    alert: state.alert,
  }),
  dispatch => ({
    alertClose: () => dispatch(alertActions.alertClose()),
  }),
)(Alert);
