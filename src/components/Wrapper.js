import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import GlobalStyle from './Style/GlobalStyle';
import Popup from './Popup/Popup';
import store from '../store';

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <GlobalStyle />
    {children}

    <Popup />
  </Provider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
