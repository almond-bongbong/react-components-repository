import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ title, value }) => (
  <option value={value}>{title}</option>
);

Option.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Option;
