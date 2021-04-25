import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarList from './CarList';
import {
  selectOrderCar,
  selectOrderSelectedCategory,
} from '../../store/selectors/orderSelectors';
import {
  setOrderCar,
  setOrderSelectedCategory,
} from '../../store/reducers/orderReducer';

import { fetchCar, fetchCarById } from '../../store/thunks/carThunks';
import { selectCar } from '../../store/selectors/carSelectors';
import fetchCategory from '../../store/thunks/categoryThunks';
import useStepValidator from '../../hooks/useStepValidator';

function CarListContainer() {
  const orderCar = useSelector(selectOrderCar);
  const dispatch = useDispatch();

  const { checkLastStepValidate } = useStepValidator();

  const carReducer = useSelector(selectCar);
  const selectedCategory = useSelector(selectOrderSelectedCategory);

  const handleCarSelect = (car) => {
    dispatch(setOrderCar(car));
  };

  const handleRadioChange = (radio) => {
    dispatch(setOrderSelectedCategory(radio));
    if (radio.id) {
      dispatch(fetchCarById(radio.id));
    } else {
      dispatch(fetchCar());
    }
  };

  useEffect(() => {
    checkLastStepValidate();
  }, [orderCar]);

  useEffect(() => {
    if (selectedCategory.id) {
      dispatch(fetchCarById(selectedCategory.id));
    } else {
      dispatch(fetchCar());
    }
    dispatch(fetchCategory());
  }, []);

  return (
    <CarList
      cars={carReducer.data}
      onCarSelect={handleCarSelect}
      onRadioChange={handleRadioChange}
    />
  );
}

export default CarListContainer;
