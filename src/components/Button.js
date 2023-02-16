import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { value, hanldeClick } = props;
  return (
    <button type="button" className={`button btn-${value}`} onClick={hanldeClick}>{value}</button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  hanldeClick: PropTypes.func.isRequired,
};
export default Button;
