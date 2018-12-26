import PropTypes from 'prop-types';

export default {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};
