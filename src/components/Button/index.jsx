import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ReactComponent as Ellipse } from '../../assets/ellipse.svg';

import style from './style.module.scss';

function Button({ name, disabled, loading }) {
  return (
    <button
      type="button"
      className={classNames(style.button, {
        [style.disable]: disabled,
        [style.loading]: loading,
      })}
      disabled={disabled}
    >
      <span
        className={classNames(style.text, {
          [style.loading]: loading,
        })}
      >
        {loading ? <Ellipse /> : name}
      </span>
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  loading: false,
};
export default Button;
