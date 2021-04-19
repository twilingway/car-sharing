/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCarAsync,
  getCarByCategoryAsync,
  selectCarLoading,
} from '../../store/car';
import { selectCategory, selectCategoryLoading } from '../../store/category';
import Car from '../Car';
import FilterRadiobox from '../Filter/Filter-types/Filter-radiobox';

import { ReactComponent as Ellipse } from '../../assets/ellipse.svg';
import style from './car-list.module.scss';
import {
  getOrderCarSelect,
  selectOrderSelectedCategory,
  setOrderSelectedCategory,
} from '../../store/order';

function CarList({ cars, onCarSelect }) {
  const [carSelect, setCarSelect] = useState(null);

  const orderCar = useSelector(getOrderCarSelect);
  const categoryReducer = useSelector(selectCategory);
  const selectedCategory = useSelector(selectOrderSelectedCategory);
  const categoryIsLoading = useSelector(selectCategoryLoading);

  const carLoadingReducer = useSelector(selectCarLoading);

  const dispatch = useDispatch();

  const handleCardSelect = (car) => {
    setCarSelect(car.id);
    onCarSelect(car);
  };

  const handleRadioChange = (radio) => {
    dispatch(setOrderSelectedCategory(radio));
    if (radio.id) {
      dispatch(getCarByCategoryAsync(radio.id));
    } else {
      dispatch(getCarAsync());
    }
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
            onChangeRadio={handleRadioChange}
            // typeRadio="category"
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
      {carLoadingReducer && (
        <span
          className={cn(style.loader, {
            [style.loading]: true,
          })}
        >
          <Ellipse />
        </span>
      )}
    </>
  );
}

export default CarList;
