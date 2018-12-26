import React from 'react';
import previewTemplateProps from '../../prop-types/templates/preview-templates';
import BlogPostTemplate from '.';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate title={entry.getIn(['data', 'blog_title'])} content={widgetFor('body')} />
);

BlogPostPreview.propTypes = previewTemplateProps;

export default BlogPostPreview;
