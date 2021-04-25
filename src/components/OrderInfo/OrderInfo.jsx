/* eslint-disable react/prop-types */
import React from 'react';
import style from './order.module.scss';
import StepButtonContainer from '../StepButton';

function OrderInfo({ order, onClickHandler }) {
  const {
    cityId,
    pointId,
    carId,
    dateTo,
    color,
    rateId,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
    price,
  } = order;
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.yourOrder}>Ваш заказ:</div>
        <div className={style.params}>
          <span className={style.paramsName}>Пункт выдачи</span>
          <div className={style.empty}>{}</div>
          <div className={style.description}>
            <div className={style.city}>
              {cityId.name ? cityId.name : 'Выберите город'}
            </div>
            <div className={style.street}>
              {pointId.address ? pointId.address : 'Выберите пункт'}
            </div>
          </div>
        </div>
        {carId.id && (
          <div className={style.params}>
            <span className={style.paramsName}>Модель</span>
            <div className={style.empty} />
            <div className={style.description}>
              <div>{carId.name}</div>
            </div>
          </div>
        )}
        {color && (
          <div className={style.params}>
            <span className={style.paramsName}>Цвет</span>
            <div className={style.empty} />
            <div className={style.description}>
              <div>{color}</div>
            </div>
          </div>
        )}
        {dateTo && (
          <div className={style.params}>
            <span className={style.paramsName}>Длительность аренды</span>
            <div className={style.empty}>{}</div>
            <div className={style.description}>
              <div>1д 2ч{}</div>
            </div>
          </div>
        )}
        {rateId?.id && (
          <div className={style.params}>
            <span className={style.paramsName}>Тариф</span>
            <div className={style.empty}>{}</div>
            <div className={style.description}>
              <div>{rateId.name}</div>
            </div>
          </div>
        )}
        {isFullTank && (
          <div className={style.params}>
            <span className={style.paramsName}>Полный бак</span>
            <div className={style.empty}>{}</div>
            <div className={style.description}>
              <div>Да</div>
            </div>
          </div>
        )}

        {isNeedChildChair && (
          <div className={style.params}>
            <span className={style.paramsName}>Детское кресло</span>
            <div className={style.empty}>{}</div>
            <div className={style.description}>
              <div>Да</div>
            </div>
          </div>
        )}

        {isRightWheel && (
          <div className={style.params}>
            <span className={style.paramsName}>Правый руль</span>
            <div className={style.empty}>{}</div>
            <div className={style.description}>
              <div>Да</div>
            </div>
          </div>
        )}

        {carId?.priceMin && (
          <div className={style.price}>
            <span>
              <b>Цена:</b>
            </span>
            {price ? (
              <span> {Math.ceil(price)} &#x20bd;</span>
            ) : (
              <span>
                от {carId.priceMin} до {carId.priceMax} &#x20bd;
              </span>
            )}
          </div>
        )}
        <StepButtonContainer onClickHandler={onClickHandler} order={order} />
      </div>
    </div>
  );
}

export default OrderInfo;
