import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'gatsby';
import Navbar from '.';

describe('Navbar', () => {
  const baseProps = {
    breadcrumbs: [],
  };

  it('should render as expected', () => {
    const element = shallow(<Navbar {...baseProps} />);
    expect(element).toMatchSnapshot();
  });

  it('should render breadcrumbs correctly', () => {
    const props = {
      ...baseProps,
      breadcrumbs: [{ path: '/blog', text: 'Blog' }],
    };
    const element = shallow(<Navbar {...props} />);

    const links = element.find(Link);
    const dividers = element.find('.divider');

    expect(links).toHaveLength(2);
    expect(dividers).toHaveLength(1);

    expect(links.at(0).props().children).toBe('Jack Lewin');
    expect(links.at(0).props().to).toBe('/');
    expect(links.at(1).props().children).toBe('Blog');
    expect(links.at(1).props().to).toBe('/blog');
  });
});
