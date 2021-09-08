/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, forwardRef } from 'react';
import cn from 'classnames';
import nocar from '../../images/nocar.png';
import style from './car.module.scss';

// eslint-disable-next-line react/prop-types
function Car({ car, onCarSelect, isSelect, carRef }) {
  const [isImgError, setIsImgError] = useState(false);

  const hangleOnLoadImgError = (event) => {
    setIsImgError(true);
  };

  return (
    <div
      className={cn(style.content, { [style.select]: isSelect === true })}
      tabIndex={0}
      role="button"
      id={car.id}
      onClick={() => {
        onCarSelect(car.id, car.name);
      }}
      onKeyDown={() => {
        onCarSelect(car.id, car.name);
      }}
      ref={carRef}
    >
      <div className={style.name}>{car.name}</div>
      <div className={style.price}>{`${car.priceMin} - ${car.priceMax} ₽`}</div>
      <div className={style.image}>
        {/* <img
          loading="lazy"
          src={
            isImgError
              ? nocar
              : `${process.env.REACT_APP_BASE_URL}${car.thumbnail?.path}`
          }
          alt={car.name}
          onError={(event) => hangleOnLoadImgError(event)}
        /> */}
        <img
          loading="lazy"
          src={
            car.thumbnail?.path.includes('base64')
              ? car.thumbnail?.path
              : `${process.env.REACT_APP_BASE_URL}${car.thumbnail?.path}`
          }
          alt={car.name}
          // onError={(event) => hangleOnLoadImgError(event)}
        />
      </div>
    </div>
  );
}
export default Car;
// export default forwardRef(Car);
