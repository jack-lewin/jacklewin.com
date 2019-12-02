import React from 'react';
import { Link, graphql } from 'gatsby';
import homepageProps from '../prop-types/pages/index';
import Aside from '../components/Home/Aside';
import Row from '../components/Home/Row';
import Section from '../components/Section';
import Divider from '../components/Divider';
import Layout from '../components/Layout';

const IndexPage = ({ data }) => {
  const posts = data.blogs.edges;
  const top = data.aboutSectionsTop.edges;
  const bottom = data.aboutSectionsBottom.edges;

  return (
    <Layout>
      <Row>
        <Section level={1} title={top[0].node.frontmatter.title} content={top[0].node.html} />

        <Aside>
          {top
            .filter(section => !section.node.frontmatter.hidden)
            .slice(1)
            .map(section => (
              <Section
                key={section.node.frontmatter.title}
                title={section.node.frontmatter.title}
                content={section.node.html}
                level={3}
              />
            ))}
        </Aside>
      </Row>

      <Divider />

      <Row>
        <Section
          level={3}
          title='Writing'
          content={
            <ul>
              {posts
                .filter(post => !post.node.frontmatter.hidden)
                .map(({ node: { fields, frontmatter } = {} }) => (
                  <li key={`blog-${fields.slug}`}>
                    <Link to={fields.slug}>{frontmatter.blog_title}</Link>
                  </li>
                ))}
            </ul>
          }
        />

        <Aside>
          {bottom
            .filter(section => !section.node.frontmatter.hidden)
            .map(section => (
              <Section
                key={section.node.frontmatter.title}
                title={section.node.frontmatter.title}
                content={section.node.html}
                level={3}
              />
            ))}
        </Aside>
      </Row>
    </Layout>
  );
};

IndexPage.propTypes = homepageProps;

export default IndexPage;

export const query = graphql`
  query IndexQuery {
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
            hidden
          }
        }
      }
    }
    aboutSectionsTop: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___sortOrder] }
      filter: { frontmatter: { templateKey: { eq: "about" }, section: { eq: "top" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            hidden
          }
        }
      }
    }
    aboutSectionsBottom: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___sortOrder] }
      filter: { frontmatter: { templateKey: { eq: "about" }, section: { eq: "bottom" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            hidden
          }
        }
      }
    }
  }
`;
