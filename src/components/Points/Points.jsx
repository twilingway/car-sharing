/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Autocomplete from '../Autocomplete';

import YandexMapContainer from '../YandexMap';

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

function Points({
  pointRedux,
  orderCity,
  orderPoint,
  onSelectCity,
  onSelectPoint,
  onPointClick,
}) {
  const [focus, setFocus] = useState(false);
  const [inputValue, setValue] = useState('');
  console.log('inputValue :>> ', inputValue);

  const checkLabel = (label) =>
    // eslint-disable-next-line no-unneeded-ternary
    label.toUpperCase().indexOf(inputValue.toUpperCase()) > -1 ? true : false;

  const handleClickOption = (label) => {
    setValue(label);
    setFocus(false);
  };
  return (
    <>
      <div className={s.autocomplete}>
        <div className={s.city}>
          <Autocomplete
            label="Город"
            placeholder="Выберите город"
            value={
              !orderCity.id
                ? null
                : { value: orderCity.id, label: orderCity.name }
            }
            options={pointRedux?.city.map((item) => ({
              value: item.id,
              label: item.name,
            }))}
            onSelectCity={onSelectCity}
          />
        </div>
        <div className={s.point}>
          <Autocomplete
            label="Пункт выдачи"
            placeholder="Выберите пунк выдачи"
            value={
              !orderPoint.id
                ? null
                : { value: orderPoint.id, label: orderPoint.address }
            }
            isDisabled={!orderCity.id}
            options={
              orderCity.id &&
              pointRedux?.street.map((item) => ({
                value: item.id,
                label: item.address,
              }))
            }
            onSelectCity={onSelectPoint}
          />
        </div>
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
          <datalist id="browsers" className={focus && s.enable}>
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
          </datalist>
        </div>
      </div>
      {orderCity.name && (
        <YandexMapContainer
          city={orderCity.name}
          points={pointRedux?.street}
          selectedPoint={orderPoint}
          onPointClick={onPointClick}
        />
      )}
    </>
  );
}

export default Points;
