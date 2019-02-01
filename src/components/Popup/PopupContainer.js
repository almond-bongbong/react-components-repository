import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Popup from './Popup';
import * as popupActions from '../../modules/popup';

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

    return (
      <>
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
