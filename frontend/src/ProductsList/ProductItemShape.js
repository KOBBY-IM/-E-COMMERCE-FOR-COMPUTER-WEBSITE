import PropTypes from 'prop-types';

export const ProductItemShape = {
  id: PropTypes.number.isRequired,
  img: PropTypes.any,
  title: PropTypes.string,
  proc: PropTypes.string,
  memory: PropTypes.number,
  memoryType: PropTypes.string,
  ram: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};