/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Hyndai from '../../images/hundai.png';

import style from './total.module.scss';

function Total({ order }) {
  return (
    <div className={style.content}>
      <div className={style.about}>
        <div className={style.carName}>{order.model}</div>
        <div className={style.carNumber}>К 761 НА 73</div>
        <div className={style.fuel}>
          <span>Топливо</span> 100%
        </div>
        <div className={style.available}>
          <span>Доступна с</span> 12.06.2019 12:00
        </div>
      </div>
      <div className={style.carImage}>
        <img src={Hyndai} alt={order.model} />
      </div>
    </div>
  );
}

export default Total;
