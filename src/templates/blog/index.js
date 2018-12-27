import React, { Fragment } from 'react';
import blogPostProps from '../../prop-types/templates/blog';
import Content from '../../components/Content';
import Navbar from '../../components/Navbar';
import Section from '../../components/Section';

const BlogPostTemplate = ({ title, content, contentComponent, helmet }) => {
  const PostContent = contentComponent || Content;

  return (
    <Fragment>
      {helmet || ''}
      <Navbar breadcrumbs={[{ path: '/blog', text: 'Blog' }]} />
      <Section level={1} title={title} content={<PostContent content={content} />} justify />
    </Fragment>
  );
};

BlogPostTemplate.propTypes = blogPostProps;

export default BlogPostTemplate;
