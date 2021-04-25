/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import nocar from '../../images/nocar.png';
import style from './total.module.scss';

function Total({ order }) {
  const [isImgError, setIsImgError] = useState(false);

  const hangleOnLoadImgError = (event) => {
    setIsImgError(true);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.about}>
          <div className={style.carName}>{order.carId.name}</div>
          {order.carId.number && (
            <div className={style.carNumber}>{order.carId.number}</div>
          )}
          {order.isFullTank && (
            <div className={style.fuel}>
              <span>Топливо</span> 100%
            </div>
          )}
          <div className={style.available}>
            <span>Доступна с</span>{' '}
            {new Date(order.dateFrom).toLocaleString().slice(0, -3)}
          </div>
        </div>
        <div className={style.carImage}>
          <img
            loading="lazy"
            src={
              isImgError
                ? nocar
                : `${process.env.REACT_APP_BASE_URL}${order.carId.thumbnail?.path}`
            }
            alt={order.carId.name}
            onError={(event) => hangleOnLoadImgError(event)}
          />
        </div>
      </div>
    </div>
  );
}

export default Total;
