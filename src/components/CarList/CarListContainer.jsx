import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarList from './CarList';
import {
  // setOrderLatStepValidate,
  getOrderCarSelect,
  setOrderCar,
  // checkLastStepValidate,
} from '../../store/order';

import { getCarAsync, selectCar } from '../../store/car';
import { getCategoryAsync } from '../../store/category';
import useStepValidator from '../../hooks/useStepValidator';

function CarListContainer() {
  const orderCar = useSelector(getOrderCarSelect);
  const dispatch = useDispatch();

  const { checkLastStepValidate } = useStepValidator();

  const carReducer = useSelector(selectCar);

  useEffect(() => {
    dispatch(getCarAsync());
    dispatch(getCategoryAsync());
  }, []);

  useEffect(() => {
    checkLastStepValidate();
  }, [orderCar]);

  const handleCarSelect = (car) => {
    dispatch(setOrderCar(car));
  };
  return <CarList cars={carReducer.data} onCarSelect={handleCarSelect} />;
}

export default CarListContainer;
