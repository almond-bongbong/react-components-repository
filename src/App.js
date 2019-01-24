import React from 'react';
import './App.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as alertActions from './modules/alert';
import Alert from './components/Alert/Alert';

const App = ({ AlertActions }) => (
  <div className="App">
    <header className="App-header">
      <button type="button" onClick={() => AlertActions.alertOpen('안녕하세요. \n 환영합니다.')}>alert!</button>
    </header>
    <Alert />
  </div>
);

App.propTypes = {
  AlertActions: PropTypes.shape({}).isRequired,
  alert: PropTypes.shape({
    show: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};

export default connect(
  state => ({
    alert: state.alert,
  }),
  dispatch => ({
    alertOpen: payload => dispatch(alertActions.alertOpen(payload)),
  }),
)(App);
