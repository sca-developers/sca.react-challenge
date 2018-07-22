import React from 'react';
import PropTypes from 'prop-types';

// Re-useable button component. Can be displayed in two styles, disable and enable.
const Button = (props) => {
  const { disable, callback, text } = props;
  return (
    <button
      type="button"
      className={disable ? 'disable button' : 'enable button'}
      onClick={callback || null}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  disable: PropTypes.bool,
  callback: PropTypes.func,
};

Button.defaultProps = {
  text: 'button',
  disable: false,
  callback: () => {},
};

export default Button;
