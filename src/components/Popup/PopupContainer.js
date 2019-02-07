import React, { Component } from 'react';
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


class PopupContainer extends Component {
  componentDidUpdate() {
    const { popup } = this.props;

    if (popup.openedPopups.length > 0) {
      document.addEventListener('keydown', this.escFunction, false);
    } else {
      document.removeEventListener('keydown', this.escFunction, false);
    }
  }

  escFunction = (event) => {
    const { closePopup } = this.props;
    if (event.keyCode === 27) closePopup();
  };

  render() {
    const { popup, closePopup } = this.props;
    const scrollWith = window.innerWidth - document.documentElement.clientWidth;
    const isActivePopup = popup.openedPopups.length > 0;

    return (
      <>
        <BodyStyleForPopup isActivePopup={isActivePopup} scrollWith={scrollWith} />
        {popup.openedPopups.map(item => (
          <Popup
            key={item.type}
            popup={item}
            closePopup={closePopup}
          />
        ))}
      </>
    );
  }
}

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
