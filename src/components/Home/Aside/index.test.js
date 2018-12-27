import React from 'react';
import { shallow } from 'enzyme';
import Aside from '.';

describe('Aside', () => {
  const props = {
    children: [<p key={1}>some</p>, <p key={2}>children</p>],
  };

  it('should render as expected', () => {
    const element = shallow(<Aside {...props} />);
    expect(element).toMatchSnapshot();
  });
});
