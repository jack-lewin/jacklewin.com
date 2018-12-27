import React from 'react';
import { shallow } from 'enzyme';
import Row from '.';

describe('Row', () => {
  const props = {
    children: [<p key={1}>some</p>, <p key={2}>children</p>],
  };

  it('should render as expected', () => {
    const element = shallow(<Row {...props} />);
    expect(element).toMatchSnapshot();
  });
});
