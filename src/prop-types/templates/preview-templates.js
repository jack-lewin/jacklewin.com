import PropTypes from 'prop-types';

export default {
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }).isRequired,
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
};
