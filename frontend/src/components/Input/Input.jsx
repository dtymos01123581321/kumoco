import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Input.scss';

class Input extends React.PureComponent {
  state = {
    focus: false,
  };

  handleFocus = () => {
    const { activeInput } = this.props;
    this.setState({ focus: true });
    activeInput && activeInput(true);
  };

  handleBlur = () => {
    const { activeInput } = this.props;
    this.setState({ focus: false });
    activeInput && activeInput(false);
  };

  handleChange = (e) => {
    const { onChange } = this.props;
    const { value, name } = e.target;
    onChange(value, name);
  };

  handleClearInput = () => {
    const { onChange, name } = this.props;
    onChange('', name);
  };

  renderError = () => {
    const { isValid, value } = this.props;

    if (!isValid && value === '') {
      return <span className="inputHint error-hint">Required</span>;
    }

    return null;
  };

  renderLabel = (label) => {
    if (label !== '') {
      return (
        <span className="label">{label}</span>
      );
    }

    return null;
  };

  renderInput = (type, value) => {
    const { isValid, name, placeholder } = this.props;
    const { focus } = this.state;
    const inputClassName = classNames('input', { focus, 'error-input': !isValid });
    const commonProps = {
      name,
      value,
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
    };

    return (
      <Fragment>
        <input
          {...commonProps}
          className={inputClassName}
        />
        {
          value === ''
            ? <span className="placeholder">{placeholder}</span>
            : null
        }
      </Fragment>
    );
  };

  render() {
    const { type, value, label } = this.props;

    return (
      <div className="outerInputWrapper">
        {this.renderLabel(label)}
        <div className="innerInputWrapper">
          {this.renderInput(type, value)}
          {this.renderError(type)}
        </div>
      </div>
    );
  }
}

Input.defaultProps = {
  label: '',
  isValid: true,
  name: null,
  onChange: () => {},
  placeholder: '',
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Input;
