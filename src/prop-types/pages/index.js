import PropTypes from 'prop-types';

const blog = PropTypes.shape({
  node: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: PropTypes.shape({
      blog_title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}).isRequired;

const aboutSection = PropTypes.shape({
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        html: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
}).isRequired;

export default {
  data: PropTypes.shape({
    blogs: PropTypes.shape({
      edges: PropTypes.arrayOf(blog).isRequired,
    }).isRequired,
    aboutSectionsTop: aboutSection,
    aboutSectionsBottom: aboutSection,
  }).isRequired,
};
