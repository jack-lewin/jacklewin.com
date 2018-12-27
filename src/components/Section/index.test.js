import React from 'react';
import { shallow } from 'enzyme';
import Section from '.';

describe('Section', () => {
  const baseProps = {
    level: 3,
    title: 'Title goes here',
    content: '<p>my dangerous html</p>',
  };

  it('should render as expected', () => {
    const element = shallow(<Section {...baseProps} />);
    expect(element).toMatchSnapshot();
  });

  it('should apply a .heading class for h1', () => {
    const elementWithH1 = shallow(<Section {...baseProps} level={1} />);

    expect(elementWithH1.find('h1').props().className).toBe('heading');
  });

  it('should apply a .subheading class for h2 and below', () => {
    const elementWithH2 = shallow(<Section {...baseProps} level={2} />);
    const elementWithH3 = shallow(<Section {...baseProps} level={3} />);
    const elementWithH4 = shallow(<Section {...baseProps} level={4} />);
    const elementWithH5 = shallow(<Section {...baseProps} level={5} />);
    const elementWithH6 = shallow(<Section {...baseProps} level={6} />);

    expect(elementWithH2.find('h2').props().className).toBe('subheading');
    expect(elementWithH3.find('h3').props().className).toBe('subheading');
    expect(elementWithH4.find('h4').props().className).toBe('subheading');
    expect(elementWithH5.find('h5').props().className).toBe('subheading');
    expect(elementWithH6.find('h6').props().className).toBe('subheading');
  });

  it('should render a <HTMLContent /> component when raw HTML is passed', () => {
    const props = {
      ...baseProps,
      content: '<p>my dangerous html</p>',
    };
    const element = shallow(<Section {...props} />);

    expect(element.find('HTMLContent')).toHaveLength(1);
    expect(element.find('HTMLContent').props().content).toBe(props.content);
    expect(element.find('p')).toHaveLength(0);
  });

  it('should render the children it receives', () => {
    const props = {
      ...baseProps,
      content: <p>my safe jsx</p>,
    };
    const element = shallow(<Section {...props} />);

    expect(element.find('HTMLContent')).toHaveLength(0);
    expect(element.find('p')).toHaveLength(1);
    expect(element.find('p').props().children).toBe('my safe jsx');
  });
});
