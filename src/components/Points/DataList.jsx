/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import s from './points.module.scss';

const data = [
  {
    label: 'Владивосток',
    value: 'VVO',
  },
  {
    label: 'Анапа',
    value: 'MEM',
  },
  {
    label: 'Москва Внуково',
    value: 'VKO',
  },
  {
    label: 'Смоленск',
    value: 'LNX',
  },
  {
    label: 'Якутск',
    value: 'YKS',
  },
];

function DataList() {
  const [focus, setFocus] = useState(false);
  const [inputValue, setValue] = useState('');

  const checkLabel = (label) =>
    // eslint-disable-next-line no-unneeded-ternary
    label.toUpperCase().indexOf(inputValue.toUpperCase()) > -1 ? true : false;

  const handleClickOption = (label) => {
    setValue(label);
    setFocus(false);
  };

  return (
    <div className={s.datalistWrapper} onMouseLeave={() => setFocus(false)}>
      <p>
        <input
          type="search"
          list=""
          name="browsers"
          value={inputValue}
          onChange={(elem) => setValue(elem.target.value)}
          onFocus={() => setFocus(true)}
          onClick={() => setFocus(true)}
        />
      </p>
      <select id="browsers" className={focus && s.enable}>
        {data.map(
          (item) =>
            checkLabel(item.label) && (
              <option
                value={item.value}
                label={item.label}
                onClick={() => handleClickOption(item.label)}
              />
            ),
        )}
      </select>
    </div>
  );
}

export default DataList;
