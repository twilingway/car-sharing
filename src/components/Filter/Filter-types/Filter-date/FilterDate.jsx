/* eslint-disable react/prop-types */
import React from 'react';

import style from './filter-date.module.scss';

function FilterDate({ id, filterName, onChangeDate }) {
  const handleChangeData = (event) => {
    onChangeDate(event.target.value);
  };

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

  return (
    <section className={style.type}>
      <fieldset id={id} className={style.group} onChange={handleChangeData}>
        <div className={style.item}>
          <legend>{filterName}</legend>
          <span>С</span>
          <label htmlFor="input">
            <input
              type="datetime-local"
              name={filterName}
              defaultValue={showCurrentTime()}
            />
          </label>
        </div>
        <div className={style.item}>
          <span>По</span>
          <label htmlFor="input">
            <input type="datetime-local" name={filterName} />
          </label>
        </div>
      </fieldset>
    </section>
  );
}

export default FilterDate;
