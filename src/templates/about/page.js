import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import pageProps from '../../prop-types/templates/page';
import Layout from '../../components/Layout';
import { HTMLContent } from '../../components/Content';
import AboutPageTemplate from '.';

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        content={post.html}
        helmet={
          <Helmet titleTemplate='%s &ndash; Jack Lewin'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta name='description' content={`${post.frontmatter.description}`} />
          </Helmet>
        }
      />
    </Layout>
  );
};

AboutPage.propTypes = pageProps;

export default AboutPage;

export const query = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
