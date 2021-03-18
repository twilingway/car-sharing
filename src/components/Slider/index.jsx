/* eslint-disable react/button-has-type */
import React from 'react';

import slider1 from './assets/slider1.png';
import slider2 from './assets/slider2.png';
import slider3 from './assets/slider3.png';
import slider4 from './assets/slider4.png';

import arrowLeft from '../../assets/arrows-left.svg';
import arrowRight from '../../assets/arrows-right.svg';

import style from './style.module.scss';

const SLIDER = [
  {
    id: 1,
    title: 'Бесплатная парковка',
    info:
      'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    img: slider1,
    background: 'linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)',
  },
  {
    id: 2,
    title: 'Страховка',
    info: 'Полная страховка страховка автомобиля',
    img: slider2,
    background: 'linear-gradient(90deg, #132949 0%, #0C7B67 100%)',
  },
  {
    id: 3,
    title: 'Бензин',
    info: 'Полный бак на любой заправке города за наш счёт',
    img: slider3,
    background: 'linear-gradient(90deg, #493013 0%, #7B0C3B 100%)',
  },
  {
    id: 4,
    title: 'Обслуживание',
    info: 'Автомобиль проходит еженедельное ТО',
    img: slider4,
    background: 'linear-gradient(90deg, #281349 0%, #720C7B 100%)',
  },
];

function Slider() {
  return (
    <section className={style.slider}>
      {SLIDER.map(({ title, info, img }) => (
        <div className={style.slide}>
          <div className={style.content}>
            <div className={style.title}>{title}</div>
            <div className={style.info}>{info}</div>
            <button>Подробнее</button>
          </div>

          <img className={style.image} src={img} alt="Slider item" />
        </div>
      ))}
      <button
        className={style.prevBtn}
        // onClick={() => setIndex(index - 1)}
      >
        <img src={arrowLeft} alt="Arrow left" />
      </button>
      <button
        className={style.nextBtn}
        // onClick={() => setIndex(index - 1)}
      >
        <img src={arrowRight} alt="Arrow right" />
      </button>
    </section>
  );
}

export default Slider;
