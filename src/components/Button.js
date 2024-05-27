// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Opcional, para estilos

const Button = ({ label, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: undefined,
  disabled: false,
};

export default Button;
