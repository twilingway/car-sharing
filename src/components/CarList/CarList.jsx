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
import { selectCategory, setSelectedCategory } from '../../store/category';
import Car from '../Car';
import FilterRadiobox from '../Filter/Filter-types/Filter-radiobox';

import { ReactComponent as Ellipse } from '../../assets/ellipse.svg';
import style from './car-list.module.scss';

// eslint-disable-next-line react/prop-types
function CarList({ cars, onCarSelect }) {
  const [carSelect, setCarSelect] = useState(null);

  const categoryReducer = useSelector(selectCategory);
  const carLoadingReducer = useSelector(selectCarLoading);

  const dispatch = useDispatch();

  const handleCardSelect = (car) => {
    setCarSelect(car.id);
    onCarSelect(car);
  };

  const handleRadioChange = (radio) => {
    dispatch(setSelectedCategory(radio));
    if (radio !== 'Все') {
      dispatch(getCarByCategoryAsync(radio));
    } else {
      dispatch(getCarAsync());
    }
  };

  return (
    <>
      <div className={style.type}>
        <FilterRadiobox
          radios={categoryReducer}
          group="category"
          isAllRadio
          defaultChecked="Все"
          onChangeRadio={handleRadioChange}
        />
      </div>
      {!carLoadingReducer && (
        <section className={style.cars}>
          {cars &&
            cars.map((car) => (
              <Car
                isSelect={car.id === carSelect}
                key={car.id}
                car={car}
                onCarSelect={() => handleCardSelect(car)}
              />
            ))}
        </section>
      )}
      <span
        className={cn(style.loader, {
          [style.loading]: true,
        })}
      >
        {carLoadingReducer && <Ellipse />}
      </span>
    </>
  );
}

export default CarList;
