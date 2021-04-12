/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Hyndai from '../../images/hundai.png';

import style from './total.module.scss';

function Total({ order }) {
  return (
    <div className={style.content}>
      <div className={style.about}>
        <div className={style.carName}>{order.carId.name}</div>
        <div className={style.carNumber}>{order.carId.number}</div>
        {order.isFullTank && (
          <div className={style.fuel}>
            <span>Топливо</span> 100%
          </div>
        )}
        <div className={style.available}>
          <span>Доступна с</span> {new Date(order.dateFrom).toLocaleString()}
        </div>
      </div>
      <div className={style.carImage}>
        <img src={Hyndai} alt={order.model} />
      </div>
    </div>
  );
}

export default Total;
