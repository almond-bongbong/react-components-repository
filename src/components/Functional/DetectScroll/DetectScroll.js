import { useEffect } from 'react';
import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';

const isBrowser = process.env.APP_ENV ? process.env.APP_ENV === 'browser' : true;

const DetectScroll = ({ onScrollEnd, endOffset }) => {
  let isEndScroll = false;

  const detectScrollEnd = (top) => {
    if (top > endOffset && !isEndScroll) {
      isEndScroll = true;
      onScrollEnd(isEndScroll);
    } else if (top <= endOffset && isEndScroll) {
      isEndScroll = false;
    }
  };

  const handleScrollFrame = () => {
    if (isBrowser) {
      const supportPageOffset = window.pageXOffset !== undefined;
      const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
      const frameHeight = window.innerHeight;
      let scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat;
      scrollTop = scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
      const { scrollHeight } = document.body;
      const top = (scrollTop + frameHeight) / scrollHeight;

      detectScrollEnd(top);
    }
  };

  const throttledScrollEvent = throttle(handleScrollFrame, 500);

  useEffect(() => {
    window.addEventListener('scroll', throttledScrollEvent, false);

    return () => {
      window.removeEventListener('scroll', throttledScrollEvent, false);
    };
  }, []);
  return null;
};

DetectScroll.propTypes = {
  onScrollEnd: PropTypes.func,
  endOffset: PropTypes.number,
};

DetectScroll.defaultProps = {
  onScrollEnd: undefined,
  endOffset: 0.9,
};

export default DetectScroll;
