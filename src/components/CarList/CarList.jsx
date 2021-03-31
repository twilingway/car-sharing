/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Car from '../Car';
import CarTypes from '../CarTypes';

import style from './car-list.module.scss';

// eslint-disable-next-line react/prop-types
function CarList({ cars }) {
  const [carSelect, setCarSelect] = useState(null);

  const handleCardSelect = (id) => {
    setCarSelect(id);
  };

  return (
    <>
      <div className={style.type}>
        <CarTypes />
      </div>
      <section className={style.cars}>
        {cars.map((car) => (
          <Car
            isSelect={car.id === carSelect}
            key={car.id}
            car={car}
            onCarSelect={handleCardSelect}
          />
        ))}
      </section>
    </>
  );
}

export default CarList;
