/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Autocomplete from './Autocomplete';
import style from './autocompleteContainer.module.scss';

const options2 = [
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
];

function AutocompleteContainer({
  label,
  placeholder,
  isBorder,
  isFake,
  options,
}) {
  return (
    <div className={style.autocompleteContainer}>
      <Autocomplete
        options={options2}
        label={label}
        placeholder={placeholder}
        isBorder={isBorder}
        isFake={isFake}
      />
    </div>
  );
}

export default AutocompleteContainer;
