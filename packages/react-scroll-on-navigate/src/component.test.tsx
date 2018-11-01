import React from 'react';
import renderer from 'react-test-renderer';

import Component from './component';

it('renders', () => {
  const tree = renderer.create(<Component location={{}} />);
  expect(tree.toJSON()).toMatchSnapshot();
});
