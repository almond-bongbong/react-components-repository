import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageStyle = styled.div`
  position: relative;
`;

// TODO hook 이용 하여 구현 해보자

const Image = ({ src, background, imagePending = false }) => (
  <ImageStyle background={background}>
    {background ? (
      <div className={`image ${!imagePending && 'done'}`} style={{ backgroundImage: `url(${src})` }} />
    ) : (
      <div className={`image ${!imagePending && 'done'}`}>
        <img src={src} alt="" />
      </div>
    )}
  </ImageStyle>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  background: PropTypes.bool,
};

Image.defaultProps = {
  background: false,
};

export default Image;
