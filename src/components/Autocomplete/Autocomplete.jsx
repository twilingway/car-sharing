/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { ReactComponent as X } from '../../assets/x.svg';
import useComponentVisible from '../../hooks/useComponentVisible';

import style from './autocomplete.module.scss';

function Autocomplete({
  options,
  label,
  placeholder,
  isBorder,
  defaultValue,
  onOptionSelect,
  searchKey,
}) {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    onOptionSelect(event.target.value);
    setInputValue(event.target.value);
  };

  const handleOnOptionClick = (option) => {
    onOptionSelect(option);
    setIsComponentVisible(false);
  };

  const handleOnCloseClick = () => {
    onOptionSelect('');
    setInputValue('');
  };

  useLayoutEffect(() => {
    if (defaultValue) {
      setInputValue(defaultValue);
    }
  }, [defaultValue]);

  useLayoutEffect(() => {
    if (defaultValue) {
      setInputValue(defaultValue);
    }
  }, []);

  return (
    <div className={style.autocomplete}>
      <span className={style.label}>{label}</span>
      <div className={style.container} ref={ref}>
        <label htmlFor="input">
          <input
            className={cn(style.input, {
              [style.border]: isBorder === true,
            })}
            type="text"
            autoComplete="off"
            placeholder={placeholder}
            onChange={handleChange}
            onClick={() => setIsComponentVisible(true)}
            onKeyDown={() => setIsComponentVisible(true)}
            value={inputValue}
          />

          {defaultValue && (
            <X className={style.clearInput} onClick={handleOnCloseClick} />
          )}
        </label>

        {isComponentVisible && (
          <datalist
            className={cn(style.datalist, {
              [style.display]: isComponentVisible,
            })}
          >
            {options?.map((option) =>
              inputValue.length < 3 ? (
                <option
                  key={option.id}
                  className={style.option}
                  onClick={() => handleOnOptionClick(option)}
                  value={option.name}
                >
                  {option[searchKey]}
                </option>
              ) : (
                inputValue.length >= 3 &&
                option[searchKey]
                  .toLowerCase()
                  .includes(inputValue.toLowerCase()) && (
                  <option
                    key={option.id}
                    className={style.option}
                    onClick={() => handleOnOptionClick(option)}
                    value={option.name}
                  >
                    {option[searchKey]}
                  </option>
                )
              )
            )}
          </datalist>
        )}
      </div>
    </div>
  );
}

Autocomplete.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isBorder: PropTypes.bool,
  defaultValue: PropTypes.string,
  onOptionSelect: PropTypes.func.isRequired,
  searchKey: PropTypes.string.isRequired,
};

Autocomplete.defaultProps = {
  label: '',
  placeholder: '',
  isBorder: false,
  defaultValue: '',
};

export default Autocomplete;
