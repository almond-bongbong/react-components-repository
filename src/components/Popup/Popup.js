import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import ModalTypes from '../../constants/popupTypes';
import * as modalActions from '../../modules/popup';
import Alert from '../Alert/Alert';

const fadeIn = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

const ModalStyle = styled.div`
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
  }
`;

const Modal = ({ modal, modalClose }) => {
  const { type, data } = modal;
  let modalCont;

  switch (type) {
    case ModalTypes.ALERT: modalCont = <Alert message={data} />; break;
    default: modalCont = '선택된 모달 팝업이 없습니다.';
  }

  return (
    <>
      {modal.show && (
        <ModalStyle>
          <div
            className="mask"
            role="button"
            tabIndex="0"
            onClick={modalClose}
            title="닫기"
            onKeyPress={e => e.key === 'Enter' && modalClose()}
          />
          <div className="content">
            {modalCont}
          </div>
        </ModalStyle>
      )}
    </>
  );
};

Modal.propTypes = {
  ModalActions: PropTypes.shape({}).isRequired,
  modal: PropTypes.shape({
    show: PropTypes.bool,
    type: PropTypes.string,
    data: PropTypes.shape({}),
  }).isRequired,
};

export default connect(
  state => ({
    modal: state.modal,
  }),
  dispatch => ({
    modalClose: () => dispatch(modalActions.modalClose()),
  }),
)(Modal);
