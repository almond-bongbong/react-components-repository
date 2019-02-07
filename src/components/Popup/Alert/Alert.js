import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../Button/Button';

const AlertStyle = styled.div`
  width: 250px;
  & .message {
    margin-bottom: 20px;
    color: #666;
    font-weight: 700;
    font-size: 16px;
  }
`;

const Alert = ({ data }) => (
  <AlertStyle>
    <div className="message">
      {data.message.split('\n').map(line => (
        <Fragment key={line}>
          {line}
          <br />
        </Fragment>
      ))}
    </div>
    <Button inline={false} onClick={data.callback}>확인</Button>
  </AlertStyle>
);

Alert.propTypes = {
  data: PropTypes.shape({
    message: PropTypes.string,
    callback: PropTypes.func,
  }).isRequired,
};

export default Alert;
