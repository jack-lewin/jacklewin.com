import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '.';

describe('NotFound', () => {
  it('should render as expected', () => {
    const element = shallow(<NotFound />);
    expect(element).toMatchSnapshot();
  });
});
