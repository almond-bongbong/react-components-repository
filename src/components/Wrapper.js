import React from 'react';
import PropTypes from 'prop-types';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import modules from '../modules';
import GlobalStyle from './Style/GlobalStyle';
import Alert from './Alert/Alert';

const store = createStore(
  modules,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <GlobalStyle />
    {children}
    <Alert />
  </Provider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
