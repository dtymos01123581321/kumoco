import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import iconList from './iconList';
import './Icon.scss';

const Icon = (props) => {
  const { icon, href, button, className, onClick, tabIndex } = props;

  if (href) {
    return (
      <Link to={href} className={className}>
        {React.createElement(iconList[icon])}
      </Link>
    );
  }

  if (button) {
    return (
      <button type="button" className={className} onClick={onClick} tabIndex={tabIndex}>
        {React.createElement(iconList[icon])}
      </button>
    );
  }

  return <span className={className}>{React.createElement(iconList[icon])}</span>;
};

Icon.defaultProps = {
  href: null,
  className: null,
  button: false,
  tabIndex: 1,
  onClick: () => {},
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string,
  button: PropTypes.bool,
  tabIndex: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
