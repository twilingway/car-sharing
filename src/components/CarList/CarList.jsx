/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCarLoading } from '../../store/selectors/carSelectors';

import {
  selectCategory,
  selectCategoryLoading,
} from '../../store/selectors/categorySelectors';
import Car from '../Car';
import FilterRadiobox from '../Filter/Filter-types/Filter-radiobox';

import {
  selectOrderCar,
  selectOrderSelectedCategory,
} from '../../store/selectors/orderSelectors';

import style from './car-list.module.scss';
import Loader from '../Loader';

function CarList({ cars, onCarSelect, onRadioChange }) {
  const [carSelect, setCarSelect] = useState(null);

  const orderCar = useSelector(selectOrderCar);
  const categoryReducer = useSelector(selectCategory);
  const selectedCategory = useSelector(selectOrderSelectedCategory);
  const categoryIsLoading = useSelector(selectCategoryLoading);

  const carLoadingReducer = useSelector(selectCarLoading);

  const handleCardSelect = (car) => {
    setCarSelect(car.id);
    onCarSelect(car);
  };

  const callbackRef = (node) => {
    if (node) {
      if (node.id === orderCar?.id) {
        node.focus();
      }
    }
  };

  return (
    <>
      {!categoryIsLoading && (
        <div className={style.type}>
          <FilterRadiobox
            radios={categoryReducer}
            group="category"
            isAllRadio
            defaultChecked={selectedCategory?.name ?? 'Все'}
            onChangeRadio={(radio) => onRadioChange(radio)}
          />
        </div>
      )}
      {!carLoadingReducer && (
        <section className={style.cars}>
          {cars &&
            cars.map((car) => (
              <Car
                isSelect={car.id === carSelect || car.id === orderCar.id}
                key={car.id}
                car={car}
                onCarSelect={() => handleCardSelect(car)}
                carRef={callbackRef}
              />
            ))}
        </section>
      )}
      {carLoadingReducer && <Loader />}
    </>
  );
}

export default CarList;
