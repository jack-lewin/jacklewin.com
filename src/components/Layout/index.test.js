import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutComponent } from '.';

describe('Layout', () => {
  const props = {
    children: [<p key={1}>some</p>, <p key={2}>content</p>],
  };

  const data = {
    site: {
      siteMetadata: {
        title: 'site title',
        description: 'site description',
      },
    },
  };

  it('should render as expected', () => {
    const element = renderer.create(<LayoutComponent data={data} {...props} />).toJSON();
    expect(element).toMatchSnapshot();
  });
});
