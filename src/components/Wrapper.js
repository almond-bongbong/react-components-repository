import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import GlobalStyle from './Style/GlobalStyle';
import Alert from './Alert/Alert';
import Confirm from './Confirm/Confirm';
import store from '../store';

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <GlobalStyle />
    {children}
    <Alert />
    <Confirm />
  </Provider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
