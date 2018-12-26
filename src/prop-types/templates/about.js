import PropTypes from 'prop-types';

export default {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  helmet: PropTypes.object,
};
