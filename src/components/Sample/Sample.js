import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as popupActions from '../../modules/popup';
import Button from '../Button/Button';

const Sample = ({ openConfirm }) => (
  <div>
    <Button onClick={openConfirm('테스트')}>테스트 팝업</Button>
  </div>
);

Sample.propTypes = {
  openConfirm: PropTypes.func.isRequired,
  popup: PropTypes.shape({
    show: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};

export default connect(
  null,
  dispatch => ({
    openConfirm: payload => dispatch(popupActions.openConfirm(payload)),
  }),
)(Sample);
