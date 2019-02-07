import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageStyle = styled.div`
  position: relative;
  & .image {
    background-color:#eaeaea;
  }
  & img {
    display: block;
    width: 100%;
  }
`;

const ImageLoader = ({ src, background, onLoad }) => {
  const [pending, setPending] = useState(true);
  let isMounted = false;

  useEffect(() => {
    isMounted = true;

    const downloadingImage = new Image();
    const imageUrl = src;

    downloadingImage.onload = () => {
      if (isMounted) {
        setPending(false);
        if (onLoad) {
          onLoad(imageUrl);
        }
      }
    };
    downloadingImage.src = imageUrl;

    return () => {
      isMounted = false;
    };
  });

  return (
    <ImageStyle background={background}>
      {background ? (
        <div className={`image ${!pending && 'done'}`} style={{ backgroundImage: `url(${src})` }} />
      ) : (
        <div className={`image ${!pending && 'done'}`}>
          <img src={src} alt="" />
        </div>
      )}
    </ImageStyle>
  );
};

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  background: PropTypes.bool,
  onLoad: PropTypes.func,
};

ImageLoader.defaultProps = {
  background: false,
  onLoad: undefined,
};

export default ImageLoader;
