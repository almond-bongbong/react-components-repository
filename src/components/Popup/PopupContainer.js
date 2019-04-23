import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createGlobalStyle, css } from 'styled-components';
import Popup from './Popup';
import * as popupActions from '../../modules/popup';

const BodyStyleForPopup = createGlobalStyle`
  html {
    & body {
      ${props => props.isActivePopup && css`
        overflow: hidden;
        padding-right: ${props.scrollWith}px;
      `}
    }
  }
`;

const PopupContainer = ({ popup, closePopup }) => {
  const escFunction = (event) => {
    if (event.keyCode === 27) closePopup();
  };

  const refWindowWidth = useRef(0);

  useEffect(() => {
    if (popup.openedPopups.length > 0) {
      document.addEventListener('keydown', escFunction, false);
    } else {
      document.removeEventListener('keydown', escFunction, false);
    }
    return () => document.removeEventListener('keydown', escFunction, false);
  }, [popup.openedPopups]);

  const isActivePopup = popup.openedPopups.length > 0;
  const getScrollWidth = () => {
    const { openedPopups } = popup;
    let windowWidth = 0;

    if (openedPopups.length > 1 || (openedPopups.length > 0 && refWindowWidth.current)) {
      windowWidth = refWindowWidth.current;
    } else {
      windowWidth = window.innerWidth - document.documentElement.clientWidth;
    }
    refWindowWidth.current = windowWidth;
    return windowWidth;
  };

  return (
    <>
      <BodyStyleForPopup isActivePopup={isActivePopup} scrollWith={getScrollWidth()} />
      {popup.openedPopups.map(item => (
        <Popup
          key={item.type}
          popup={item}
          closePopup={closePopup}
        />
      ))}
    </>
  );
};

PopupContainer.propTypes = {
  closePopup: PropTypes.func.isRequired,
  popup: PropTypes.shape({
    openedPopups: PropTypes.array,
  }).isRequired,
};

export default connect(
  state => ({
    popup: state.popup,
  }),
  dispatch => ({
    closePopup: payload => dispatch(popupActions.closePopup(payload)),
  }),
)(PopupContainer);
