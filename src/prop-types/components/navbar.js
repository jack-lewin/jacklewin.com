import PropTypes from 'prop-types';

export default {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

export const defaultProps = {
  breadcrumbs: [],
};
