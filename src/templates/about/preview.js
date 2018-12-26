import React from 'react';
import previewTemplateProps from '../../prop-types/templates/preview-templates';
import AboutPageTemplate from '.';

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

AboutPagePreview.propTypes = previewTemplateProps;

export default AboutPagePreview;
