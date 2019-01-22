import { Component } from 'react';
import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';

const isBrowser = process.env.APP_ENV ? process.env.APP_ENV === 'browser' : true;

class DetectScroll extends Component {
  constructor(props) {
    super(props);

    this.isEndScroll = false;
    this.trottledScrollEvent = throttle(this.handleScrollFrame, 500);
  }

  componentDidMount() {
    if (isBrowser) {
      window.addEventListener('scroll', this.trottledScrollEvent, false);
    }
  }

  componentWillUnmount() {
    if (isBrowser) {
      window.removeEventListener('scroll', this.trottledScrollEvent, false);
    }
  }

  detectScrollEnd = (top) => {
    const { onScrollEnd, endOffset } = this.props;

    if (top > endOffset && !this.isEndScroll) {
      this.isEndScroll = true;
      onScrollEnd(this.isEndScroll);
    } else if (top <= endOffset && this.isEndScroll) {
      this.isEndScroll = false;
    }
  };

  handleScrollFrame = () => {
    if (isBrowser) {
      const supportPageOffset = window.pageXOffset !== undefined;
      const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
      const frameHeight = window.innerHeight;
      let scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat;
      scrollTop = scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
      const { scrollHeight } = document.body;
      const top = (scrollTop + frameHeight) / scrollHeight;

      this.detectScrollEnd(top);
    }
  };

  render() {
    return null;
  }
}

DetectScroll.propTypes = {
  /** scroll end event */
  onScrollEnd: PropTypes.func,
  /** end point, max 1.0 */
  endOffset: PropTypes.number,
};

DetectScroll.defaultProps = {
  onScrollEnd: undefined,
  endOffset: 0.9,
};

export default DetectScroll;
