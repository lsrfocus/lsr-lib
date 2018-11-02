import React, { Component } from 'react';

interface Props {
  location: Object;
}

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

export { ScrollToTopOnNavigate };
export default ScrollToTopOnNavigate;
