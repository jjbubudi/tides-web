import React from 'react';
import { AppLayout } from './AppLayout';
import { shallow } from 'enzyme';

it('should render children as is', () => {
  const appLayout = shallow(
    <AppLayout>
      <h1>Hello</h1>
      <h1>World</h1>
    </AppLayout>
  );
  expect(appLayout.contains([
    <h1>Hello</h1>,
    <h1>World</h1>
  ])).toBe(true);
});
