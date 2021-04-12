/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import cn from 'classnames';
import nocar from '../../images/nocar.png';
import style from './car.module.scss';

// eslint-disable-next-line react/prop-types
function Car({ car, onCarSelect, isSelect }) {
  const [isImgError, setIsImgError] = useState(false);

  const hangleOnLoadImgError = (event) => {
    setIsImgError(true);
  };

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
        <img
          loading="lazy"
          src={isImgError ? nocar : car.thumbnail?.path}
          alt={car.name}
          onError={(event) => hangleOnLoadImgError(event)}
        />
      </div>
    </div>
  );
}

export default Car;
