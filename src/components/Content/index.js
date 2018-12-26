import React from 'react';
import contentProps from '../../prop-types/components/content';

export const HTMLContent = ({ content, className }) => (
  // eslint-disable-next-line react/no-danger
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }) => <div className={className}>{content}</div>;

Content.propTypes = contentProps;

HTMLContent.propTypes = Content.propTypes;

export default Content;
