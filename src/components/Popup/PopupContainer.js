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
  const scrollWidth = useRef();
  const escFunction = (event) => {
    if (event.keyCode === 27) closePopup();
  };

  useEffect(() => {
    scrollWidth.current = scrollWidth.current
      ? scrollWidth.current : window.innerWidth - document.documentElement.clientWidth;
    if (popup.openedPopups.length > 0) {
      document.addEventListener('keydown', escFunction, false);
    } else {
      document.removeEventListener('keydown', escFunction, false);
    }
    return () => document.removeEventListener('keydown', escFunction, false);
  });

  const isActivePopup = popup.openedPopups.length > 0;

  return (
    <>
      <BodyStyleForPopup isActivePopup={isActivePopup} scrollWith={scrollWidth.current} />
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
