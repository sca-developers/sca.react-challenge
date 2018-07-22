import React from 'react';
import PropTypes from 'prop-types';

// Re-useable input component.
const Input = ({ type, onChange }) => (
  <input type={type} onChange={onChange} />
);

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  onChange: () => {},
};

export default Input;
