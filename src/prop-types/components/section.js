import PropTypes from 'prop-types';

export default {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
