import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { value, handleClick } = props;

  return (
    <button type="button" className={`button btn-${value}`} onClick={handleClick}>{value}</button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Button;
