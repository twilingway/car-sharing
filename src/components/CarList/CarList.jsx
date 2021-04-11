/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarAsync, getCarByCategoryAsync } from '../../store/car';
import { selectCategory, setSelectedCategory } from '../../store/category';
import Car from '../Car';
import FilterRadiobox from '../Filter/Filter-types/Filter-radiobox';

import style from './car-list.module.scss';

// eslint-disable-next-line react/prop-types
function CarList({ cars, onCarSelect }) {
  const [carSelect, setCarSelect] = useState(null);

  const categoryReducer = useSelector(selectCategory);

  const dispatch = useDispatch();

  const handleCardSelect = (car) => {
    // console.log('objectid :>> ', id);
    // console.log('objectname :>> ', name);
    setCarSelect(car.id);
    onCarSelect(car);
  };

  const handleRadioChange = (radio) => {
    console.log('objectradio :>> ', radio);
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
    </>
  );
}

export default CarList;
