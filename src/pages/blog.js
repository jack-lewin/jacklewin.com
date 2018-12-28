import React from 'react';
import { Link, graphql } from 'gatsby';
import blogPageProps from '../prop-types/pages/blog';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Section from '../components/Section';

const BlogPage = ({ data }) => {
  const posts = data.blogs.edges;

  return (
    <Layout>
      <Navbar />
      <Section
        level={1}
        title='Writing'
        content={
          <ul>
            {posts.map(({ node: { fields, frontmatter } = {} }) => (
              <li key={`blog-${fields.slug}`}>
                <Link to={fields.slug}>{frontmatter.blog_title}</Link>
              </li>
            ))}
          </ul>
        }
      />
    </Layout>
  );
};

BlogPage.propTypes = blogPageProps;

export default BlogPage;

export const query = graphql`
  query BlogQuery {
    blogs: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            blog_title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
