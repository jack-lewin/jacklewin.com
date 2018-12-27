import React from 'react';
import { shallow } from 'enzyme';
import Divider from '.';

describe('Divider', () => {
  it('should render as expected', () => {
    const element = shallow(<Divider />);
    expect(element).toMatchSnapshot();
  });
});
