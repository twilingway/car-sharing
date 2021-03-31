/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
}) {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  const [selectedOption, setSelectedOption] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [isFakeClick, setIsFakeClick] = useState(false);

  const textInput = useRef(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOnOptionClick = (event) => {
    setSelectedOption(event.target.value);
    setIsComponentVisible(false);
    setIsFocus(false);
  };

  const handleOnCloseClick = () => {
    setSelectedOption('');
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
          {isFake && selectedOption === '' && !isFakeClick && (
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
          {isFake && selectedOption !== '' && !isFakeClick && (
            <span
              className={style.fake}
              role="button"
              tabIndex={0}
              onClick={() => setIsFakeClick(true)}
              onKeyDown={() => setIsFakeClick(true)}
            >
              {selectedOption}
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
            onFocus={() => setIsFocus(true)}
            value={selectedOption}
            ref={textInput}
          />

          {selectedOption !== '' && isFocus && (
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
              selectedOption === '' && selectedOption === null ? (
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
                  .includes(selectedOption.toLowerCase()) && (
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

export default Autocomplete;
