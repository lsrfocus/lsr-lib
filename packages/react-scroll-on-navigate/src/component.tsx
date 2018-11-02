import { Component } from 'react';

interface Props {
  // ESLint support for TS interfaces is still lacking...
  // eslint-disable-next-line no-restricted-globals
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
