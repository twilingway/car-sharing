/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStepValidator from '../../hooks/useStepValidator';
import {
  deleteOrderCity,
  deleteOrderPoint,
  // deleteOrderCity,
  getOrderCitySelect,
  getOrderPointSelect,
  setOrderCity,
  setOrderPoint,
} from '../../store/order';
import { getCityAsync, getPointsAsync, selectPoint } from '../../store/point';
import Autocomplete from '../Autocomplete';
import YandexMapContainer from '../YandexMap';

import s from './points.module.scss';

function Points() {
  const orderCity = useSelector(getOrderCitySelect);
  const orderPoint = useSelector(getOrderPointSelect);

  const { checkLastStepValidate } = useStepValidator();

  const pointRedux = useSelector(selectPoint);
  const dispatch = useDispatch();

  const handleSelectCity = (city) => {
    if (city.id) {
      dispatch(setOrderCity(city));
      dispatch(getPointsAsync(city.id));
    } else {
      dispatch(deleteOrderCity());
    }
  };

  const handleSelectPoint = (point) => {
    if (point.id) {
      dispatch(setOrderPoint(point));
    } else {
      dispatch(deleteOrderPoint());
    }
  };

  useEffect(() => {
    checkLastStepValidate();
  }, [orderCity, orderPoint]);

  useEffect(async () => {
    dispatch(getCityAsync());
  }, []);

  return (
    <>
      <div className={s.autocomplete}>
        <div className={s.city}>
          <Autocomplete
            options={pointRedux.city}
            label="Город"
            placeholder="Выберите город"
            isBorder
            onOptionSelect={handleSelectCity}
            defaultValue={orderCity.name}
            searchKey="name"
          />
        </div>
        <div className={s.point}>
          <Autocomplete
            options={pointRedux?.street}
            label="Пункт выдачи"
            placeholder="Начните вводить пункт выдачи"
            isBorder
            onOptionSelect={handleSelectPoint}
            defaultValue={orderPoint.address}
            searchKey="address"
          />
        </div>
      </div>

      <YandexMapContainer
        city={orderCity?.name}
        points={pointRedux?.street}
        selectedPoint={orderPoint}
      />
    </>
  );
}

export default Points;
