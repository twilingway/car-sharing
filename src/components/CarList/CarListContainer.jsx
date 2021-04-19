import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarList from './CarList';
import {
  deleteOrderColor,
  deleteOrderDate,
  deleteOrderRate,
  deleteOrderService,
  // setOrderLatStepValidate,
  getOrderCarSelect,
  selectOrderSelectedCategory,
  setOrderCar,
  // checkLastStepValidate,
} from '../../store/order';

import { getCarAsync, getCarByCategoryAsync, selectCar } from '../../store/car';
import { getCategoryAsync } from '../../store/category';
import useStepValidator from '../../hooks/useStepValidator';

function CarListContainer() {
  const orderCar = useSelector(getOrderCarSelect);
  const dispatch = useDispatch();

  const { checkLastStepValidate } = useStepValidator();

  const carReducer = useSelector(selectCar);
  const selectedCategory = useSelector(selectOrderSelectedCategory);

  useEffect(() => {
    if (selectedCategory.id) {
      dispatch(getCarByCategoryAsync(selectedCategory.id));
    } else {
      dispatch(getCarAsync());
    }
    dispatch(getCategoryAsync());
  }, []);

  useEffect(() => {
    checkLastStepValidate();
  }, [orderCar]);

  const handleCarSelect = (car) => {
    dispatch(setOrderCar(car));
    dispatch(deleteOrderColor());
    dispatch(deleteOrderRate());
    dispatch(deleteOrderDate());
    dispatch(deleteOrderService());
  };
  return <CarList cars={carReducer.data} onCarSelect={handleCarSelect} />;
}

export default CarListContainer;
