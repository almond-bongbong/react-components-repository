import React from 'react';
import './App.css';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as popupActions from './modules/popup';
import { popupTypes } from './constants/popupData';

const App = ({ PopupActions }) => (
  <div className="App">
    <header className="App-header">
      <button type="button" onClick={() => PopupActions.openPopup(popupTypes.SAMPLE)}>popup!</button>
    </header>
  </div>
);

App.propTypes = {
  PopupActions: PropTypes.shape({}).isRequired,
};

export default connect(
  null,
  dispatch => ({
    PopupActions: bindActionCreators(popupActions, dispatch),
  }),
)(App);
