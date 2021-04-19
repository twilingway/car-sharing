/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Points from './Points';

import useStepValidator from '../../hooks/useStepValidator';
import {
  deleteOrderCity,
  deleteOrderPoint,
  getOrderCitySelect,
  getOrderPointSelect,
  setOrderCity,
  setOrderPoint,
} from '../../store/order';
import { getCityAsync, getPointsAsync, selectPoint } from '../../store/point';

function PointContainer() {
  const orderCity = useSelector(getOrderCitySelect);
  const orderPoint = useSelector(getOrderPointSelect);

  const pointRedux = useSelector(selectPoint);

  const { checkLastStepValidate } = useStepValidator();

  const dispatch = useDispatch();

  const handleSelectCity = (city) => {
    if (city?.value) {
      dispatch(setOrderCity(city));
      dispatch(deleteOrderPoint());
      dispatch(getPointsAsync(city.value));
    } else {
      dispatch(deleteOrderCity());
      dispatch(deleteOrderPoint());
    }
  };

  const handleSelectPoint = (point) => {
    if (point?.value) {
      dispatch(setOrderPoint(point));
    } else {
      dispatch(deleteOrderPoint());
    }
  };
  const handlePointClick = (point) => {
    dispatch(
      setOrderCity({ value: point.cityId.id, label: point.cityId.name })
    );
    dispatch(
      setOrderPoint({ value: point.id, name: point.name, label: point.address })
    );
  };

  useEffect(() => {
    checkLastStepValidate();
  }, [orderCity, orderPoint]);

  useEffect(async () => {
    dispatch(getCityAsync());
  }, []);

  return (
    <Points
      pointRedux={pointRedux}
      orderCity={orderCity}
      orderPoint={orderPoint}
      onSelectCity={handleSelectCity}
      onSelectPoint={handleSelectPoint}
      onPointClick={handlePointClick}
    />
  );
}

export default PointContainer;
