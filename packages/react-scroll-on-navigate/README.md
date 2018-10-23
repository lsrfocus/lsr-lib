# React Scroll on Navigate

Scroll to top automatically when the route changes.
Works well with [React Router](https://github.com/ReactTraining/react-router) and other similar tools.

See the [React Router guide](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md) for more details.

## Usage

Manually, passing in your router's `location` prop:

```jsx
import { ScrollToTopOnNavigate } from 'react-scroll-on-navigate';

<div className="MyApp">
  <ScrollToTopOnNavigate location={location} />
  ...
</div>
```

Or, using a decorator if you prefer:

```jsx
import { ScrollToTopOnNavigate as ScrollToTopWithoutRouter } from 'lsr-lib';
import { withRouter } from 'react-router';

const ScrollToTopOnNavigate = withRouter(ScrollToTopWithoutRouter);

<div className="MyApp">
  <ScrollToTopOnNavigate />
  ...
</div>
```
