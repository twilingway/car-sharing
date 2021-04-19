/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';

import Autocomplete from '../Autocomplete';

import YandexMapContainer from '../YandexMap';

import s from './points.module.scss';

function Points({
  pointRedux,
  orderCity,
  orderPoint,
  onSelectCity,
  onSelectPoint,
  onPointClick,
}) {
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
