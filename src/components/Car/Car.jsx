/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';
import style from './car.module.scss';

// eslint-disable-next-line react/prop-types
function Car({ car, onCarSelect, isSelect }) {
  return (
    <div
      className={cn(style.content, { [style.select]: isSelect === true })}
      tabIndex={0}
      role="button"
      onClick={() => {
        onCarSelect(car.id, car.name);
      }}
      onKeyDown={() => {
        onCarSelect(car.id, car.name);
      }}
    >
      <div className={style.name}>{car.name}</div>
      <div className={style.price}>{`${car.priceMin} - ${car.priceMax} ₽`}</div>
      <div className={style.image}>
        <img src={car.thumbnail?.path} alt={car.name} />
      </div>
    </div>
  );
}

export default Car;
