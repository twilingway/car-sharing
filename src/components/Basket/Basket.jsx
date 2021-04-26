/* eslint-disable react/prop-types */
import React from 'react';
import BasketPNG from '../../assets/basket.png';
import s from './basket.module.scss';

function Basket({ onClick }) {
  return (
    <section
      role="button"
      tabIndex={0}
      className={s.basket}
      onClick={onClick}
      onKeyPress={onClick}
    >
      <img src={BasketPNG} alt="Корзина" />
    </section>
  );
}

export default Basket;
