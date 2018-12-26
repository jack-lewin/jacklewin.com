import React, { Fragment } from 'react';
import aboutPageProps from '../../prop-types/templates/about';
import Content from '../../components/Content';
import Navbar from '../../components/Navbar';
import Section from '../../components/Section';

const AboutPageTemplate = ({ title, content, contentComponent, helmet }) => {
  const PageContent = contentComponent || Content;

  return (
    <Fragment>
      {helmet || ''}
      <Navbar />
      <Section level={2} title={title} content={<PageContent content={content} />} />
    </Fragment>
  );
};

AboutPageTemplate.propTypes = aboutPageProps;

export default AboutPageTemplate;
