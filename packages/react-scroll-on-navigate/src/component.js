// @flow

import { Component } from 'react';

type Props = {
  location: Object,
};

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
