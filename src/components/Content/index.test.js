import React from 'react';
import { shallow } from 'enzyme';
import Content, { HTMLContent } from '.';

describe('Content', () => {
  const props = {
    content: <p>my safe jsx</p>,
    className: 'someClassName',
  };

  it('should render as expected', () => {
    const element = shallow(<Content {...props} />);
    expect(element).toMatchSnapshot();
  });
});

describe('HTMLContent', () => {
  const props = {
    content: '<p>my dangerous html</p>',
    className: 'someClassName',
  };

  it('should render as expected', () => {
    const element = shallow(<HTMLContent {...props} />);
    expect(element).toMatchSnapshot();
  });
});
