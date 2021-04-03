/* eslint-disable react/prop-types */

import React from 'react';
import Button from '../Button';

import style from './order.module.scss';

function Order({ order, buttonName, onClickHandler }) {
  const { point, model } = order;
  return (
    <div className={style.content}>
      <div className={style.yourOrder}>Ваш заказ:</div>
      <div className={style.params}>
        <span className={style.paramsName}>Пункт выдачи</span>
        <div className={style.empty}>{}</div>
        <div className={style.description}>
          <div className={style.city}>
            {point.city ? point.city : 'Выберите город'}
          </div>
          <div className={style.street}>
            {point.street ? point.street : 'Выберите пункт'}
          </div>
        </div>
      </div>

      {model && (
        <div className={style.params}>
          <span className={style.paramsName}>Модель</span>
          <div className={style.empty}>{}</div>
          <div className={style.description}>
            <div>{model}</div>
          </div>
        </div>
      )}

      <div className={style.params}>
        <span className={style.paramsName}>Цвет</span>
        <div className={style.empty}>{}</div>
        <div className={style.description}>
          <div>Голубой{}</div>
        </div>
      </div>
      <div className={style.params}>
        <span className={style.paramsName}>Длительность аренды</span>
        <div className={style.empty}>{}</div>
        <div className={style.description}>
          <div>1д 2ч{}</div>
        </div>
      </div>
      <div className={style.params}>
        <span className={style.paramsName}>Тариф</span>
        <div className={style.empty}>{}</div>
        <div className={style.description}>
          <div>На сутки{}</div>
        </div>
      </div>
      <div className={style.params}>
        <span className={style.paramsName}>Полный бак</span>
        <div className={style.empty}>{}</div>
        <div className={style.description}>
          <div>Да{}</div>
        </div>
      </div>

      <div className={style.price}>
        <span>
          <b>Цена:</b>
        </span>
        <span> от 8000 до 12000 &#x20bd;</span>
      </div>
      <div className={style.button}>
        {buttonName
          .filter((item) => item.id === order.step)
          .map((item) => (
            <Button
              key={item.id}
              name={item.name}
              disabled={order.lastStepValidate < item.id}
              onClickHandler={() => onClickHandler && onClickHandler(item.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default Order;
