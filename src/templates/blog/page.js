import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import pageProps from '../../prop-types/templates/page';
import Layout from '../../components/Layout';
import { HTMLContent } from '../../components/Content';
import BlogPostTemplate from '.';

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        title={post.frontmatter.blog_title}
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate='%s &ndash; Jack Lewin'>
            <title>{`${post.frontmatter.blog_title}`}</title>
            <meta name='description' content={`${post.frontmatter.description}`} />
          </Helmet>
        }
      />
    </Layout>
  );
};

BlogPost.propTypes = pageProps;

export default BlogPost;

export const query = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        blog_title
        description
        tags
      }
    }
  }
`;
