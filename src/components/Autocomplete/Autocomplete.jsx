/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
  isFake = false,
  defaultOption,
  onOptionSelect,
}) {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  const [isFocus, setIsFocus] = useState(false);
  const [isFakeClick, setIsFakeClick] = useState(false);

  const textInput = useRef(null);

  const handleChange = (event) => {
    onOptionSelect(event.target.value);
  };

  const handleOnOptionClick = (event) => {
    onOptionSelect(event.target.value);
    setIsComponentVisible(false);
    setIsFocus(false);
  };

  const handleOnCloseClick = () => {
    onOptionSelect('');
  };

  useLayoutEffect(() => {
    if (!isComponentVisible) {
      setIsFocus(false);
      setIsFakeClick(false);
    }
  }, [isComponentVisible]);

  useEffect(() => {
    if (isFakeClick) {
      setIsComponentVisible(true);
      textInput.current.focus();
    }
  }, [isFakeClick]);

  return (
    <div className={style.autocomplete}>
      <span className={style.label}>{label}</span>
      <div className={style.container} ref={ref}>
        <label htmlFor="input">
          {isFake && defaultOption === '' && !isFakeClick && (
            <span
              className={style.fake}
              role="button"
              tabIndex={0}
              onClick={() => setIsFakeClick(true)}
              onKeyDown={() => setIsFakeClick(true)}
            >
              {placeholder}
            </span>
          )}
          {isFake && defaultOption !== '' && !isFakeClick && (
            <span
              className={style.fake}
              role="button"
              tabIndex={0}
              onClick={() => setIsFakeClick(true)}
              onKeyDown={() => setIsFakeClick(true)}
            >
              {defaultOption}
            </span>
          )}

          <input
            className={cn(style.input, {
              [style.hidden]: isFakeClick === false && isFake === true,
              [style.border]: isBorder === true,
              [style.focus]: isFocus === true,
            })}
            type="text"
            autoComplete="off"
            placeholder={placeholder}
            onChange={handleChange}
            onClick={() => setIsComponentVisible(true)}
            onKeyDown={() => setIsComponentVisible(true)}
            onFocus={() => setIsFocus(true)}
            value={defaultOption}
            ref={textInput}
          />

          {defaultOption !== '' && isFocus && (
            <X className={style.clearInput} onClick={handleOnCloseClick} />
          )}
        </label>

        {isComponentVisible && (
          <datalist
            className={cn(style.datalist, {
              [style.display]: isComponentVisible,
            })}
          >
            {options.map((item, index) =>
              defaultOption ? (
                <option
                  key={index}
                  className={style.option}
                  onClick={handleOnOptionClick}
                  value={item.label}
                >
                  {item.label}
                </option>
              ) : (
                item.value
                  .toLowerCase()
                  .includes(defaultOption.toLowerCase()) && (
                  <option
                    key={index}
                    className={style.option}
                    onClick={handleOnOptionClick}
                    value={item.label}
                  >
                    {item.label}
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
  isFake: PropTypes.bool,
  defaultOption: PropTypes.string,
  onOptionSelect: PropTypes.func.isRequired,
};

Autocomplete.defaultProps = {
  label: '',
  placeholder: '',
  isBorder: false,
  isFake: false,
  defaultOption: '',
};

export default Autocomplete;
