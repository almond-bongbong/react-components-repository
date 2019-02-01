import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import GlobalStyle from './Style/GlobalStyle';
import PopupContainer from './Popup/PopupContainer';
import store from '../store';

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <GlobalStyle />
    {children}

    <PopupContainer />
  </Provider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
