// theirs
import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Button(props) {
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
}

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
