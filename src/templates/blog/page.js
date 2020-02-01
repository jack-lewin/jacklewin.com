import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import pageProps from '../../prop-types/templates/page';
import Layout from '../../components/Layout';
import { HTMLContent } from '../../components/Content';
import BlogPostTemplate from '.';

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const title = post.frontmatter.blog_title;

  return (
    <Layout title={title}>
      <BlogPostTemplate
        title={title}
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate='%s &ndash; Jack Lewin'>
            <title>{title}</title>
            <meta name='description' content={post.frontmatter.description} />
            <meta property='og:title' content={title} />
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
