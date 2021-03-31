import React from 'react';
import Button from '../Button';

import style from './order.module.scss';

function Order() {
  return (
    <div className={style.order}>
      <div className={style.wrap}>
        <div className={style.yourOrder}>Ваш заказ:</div>
        <div className={style.params}>
          <span className={style.paramsName}>Пункт выдачи</span>
          <div className={style.empty}>{}</div>
          <div className={style.description}>
            <div className={style.city}>Ульяновск{}</div>
            <div className={style.street}>Нариманова 42{}</div>
          </div>
        </div>
        <div className={style.params}>
          <span className={style.paramsName}>Модель</span>
          <div className={style.empty}>{}</div>
          <div className={style.description}>
            <div>Hyndai, i30 N{}</div>
          </div>
        </div>
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
          <Button name="Выбрать модель" disabled />
        </div>
      </div>
    </div>
  );
}

export default Order;
