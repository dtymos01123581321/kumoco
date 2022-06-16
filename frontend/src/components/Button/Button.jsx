import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {
  const { size, type, color, text, disabled, href, onClick } = props;

  const buttonClassNames = classNames('button', {
    [`btn-size-${size}`]: size,
    [`btn-color-${color}`]: color,
  });

  if (href) {
    return (
      <Link to={href} className="button">
        <button type={type} className={buttonClassNames} onClick={onClick} disabled={disabled}>
          {text}
        </button>
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClassNames} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  href: null,
  onClick: () => {
  },
};

Button.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['green', 'blue', 'gray', 'pink', 'green_transparent', 'pink_transparent', 'orange_transparent']).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  type: PropTypes.string.isRequired,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf(PropTypes.any)]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
