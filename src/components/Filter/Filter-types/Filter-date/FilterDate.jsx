/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { ReactComponent as X } from '../../../../assets/x.svg';

import style from './filter-date.module.scss';

function FilterDate({
  filterName,
  isDateFromDefault = true,
  dateFrom,
  dateTo,
  onChangeDateTo,
  onChangeDateFrom,
}) {
  const [dateFromDefault, setDateFromDefault] = useState('');
  const [dateToDefault, setDateToDefault] = useState('');

  function showCurrentTime() {
    const currDate = new Date();
    const year = currDate.getFullYear();
    let month = currDate.getMonth();
    let date = currDate.getDate();
    let hours = currDate.getHours();
    let minutes = currDate.getMinutes();
    let seconds = currDate.getSeconds();

    if (month <= 9) {
      month = `0${month}`;
    }
    if (date <= 9) {
      date = `0${date}`;
    }
    if (hours <= 9) {
      hours = `0${hours}`;
    }
    if (minutes <= 9) {
      minutes = `0${minutes}`;
    }
    if (seconds <= 9) {
      seconds = `0${seconds}`;
    }
    return `${year}-${month}-${date}T${hours}:${minutes}`;
  }

  const handleChangeDateFrom = (event) => {
    setDateFromDefault(event.target.value);
    onChangeDateFrom(event.target.value);
  };

  const handleChangeDateTo = (event) => {
    setDateToDefault(event.target.value);
    onChangeDateTo(event.target.value);
  };

  const handleClearDateFromClick = () => {
    setDateFromDefault('');
    onChangeDateFrom('');
  };
  const handleClearDateToClick = () => {
    setDateToDefault('');
    onChangeDateTo('');
  };

  useEffect(() => {
    if (isDateFromDefault) {
      if (dateFrom === '') {
        const date = showCurrentTime();
        setDateFromDefault(date);
        onChangeDateFrom(date);
      } else {
        setDateFromDefault(dateFrom);
      }
      setDateToDefault(dateTo);
    }
  }, []);

  return (
    <div className={style.type}>
      <div className={style.group}>
        <legend>{filterName}</legend>
        <div className={style.item}>
          <span>С</span>
          <div className={style.container}>
            <label htmlFor="input">
              <input
                type="datetime-local"
                name={filterName}
                value={dateFromDefault}
                onChange={handleChangeDateFrom}
              />

              {dateFromDefault !== '' && (
                <X
                  className={style.clearInput}
                  onClick={handleClearDateFromClick}
                />
              )}
            </label>
          </div>
        </div>
      </div>
      <div className={style.group}>
        <div className={style.item}>
          <span>По</span>
          <div className={style.container}>
            <label htmlFor="input">
              <input
                type="datetime-local"
                name={filterName}
                value={dateToDefault}
                onChange={handleChangeDateTo}
              />
              {dateToDefault !== '' && (
                <X
                  className={style.clearInput}
                  onClick={handleClearDateToClick}
                />
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterDate;
