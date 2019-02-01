import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { getPopupComponent } from '../../constants/popupData';

const fadeIn = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

const PopupStyle = styled.div`
  & .mask {
    overflow: scroll;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;
    background-color: rgba(0,0,0,0.4);
    animation: ${fadeIn} .3s ease-in-out;
  }
  & .content {
    display: block;
    width: 300px;
    padding: 20px;
    border-radius: 6px;
    background-color:#fff;
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.2);
    text-align: center;
    
    ${props => (props.scrolling ? css`
      position: relative;
      margin: 50px auto 50px;
    ` : css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `)}
  }
`;

class Popup extends Component {
  state = {
    scrolling: false,
  };

  componentDidMount() {
    if (this.cont) {
      const windowHeight = window.innerHeight;
      const height = this.cont.clientHeight;
      const margin = 50;
      if (windowHeight - margin < height) {
        this.setState({ scrolling: true });
      }
    }
  }

  handleClose = (e) => {
    const { popup, closePopup } = this.props;
    if (e.target.classList.value === 'mask') {
      closePopup(popup.id);
    }
  };

  render() {
    const { popup, closePopup } = this.props;
    const { scrolling } = this.state;

    return (
      <PopupStyle
        scrolling={scrolling ? 1 : 0}
      >
        <div
          className="mask"
          role="button"
          tabIndex="0"
          onClick={this.handleClose}
          onKeyPress={e => e.key === 'Enter' && closePopup(popup.id)}
          title="닫기"
        >
          <div className="content" ref={(ref) => { this.cont = ref; }}>
            {getPopupComponent(popup)}
          </div>
        </div>
      </PopupStyle>
    );
  }
}

Popup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  popup: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    data: PropTypes.shape({}),
  }).isRequired,
};

export default Popup;