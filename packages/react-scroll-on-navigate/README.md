# React Scroll on Navigate

Scroll to top automatically when the route changes.
Works well with [React Router](https://github.com/ReactTraining/react-router) and other similar tools.

See the [React Router guide](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md) for more details.

## Usage

```jsx
import ScrollToTopOnNavigate from 'react-scroll-on-navigate';

<div className="MyApp">
  <ScrollToTopOnNavigate location={location} />
  ...
</div>
```
