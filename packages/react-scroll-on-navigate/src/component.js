// @flow

import { Component } from 'react';

type Props = {
  location: Object,
};

/**
 * Scroll to top when the route changes.
 *
 * See https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
 */
class ScrollToTopOnNavigate extends Component<Props> {

  componentDidUpdate(prevProps: Props) {
    const { location } = this.props;

    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }

}

export default ScrollToTopOnNavigate;
