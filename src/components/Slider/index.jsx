import React, { useState } from 'react';
import classNames from 'classnames';

import slider1 from './assets/slider1.png';
import slider2 from './assets/slider2.png';
import slider3 from './assets/slider3.png';
import slider4 from './assets/slider4.png';

import arrowLeft from '../../assets/arrows-left.svg';
import arrowRight from '../../assets/arrows-right.svg';

import { ReactComponent as Dot } from '../../assets/dot.svg';

import style from './style.module.scss';
import Button from '../Button';

const SLIDER = [
  {
    id: 0,
    title: 'Бесплатная парковка',
    info:
      'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    img: slider1,
  },
  {
    id: 1,
    title: 'Страховка',
    info: 'Полная страховка страховка автомобиля',
    img: slider2,
  },
  {
    id: 2,
    title: 'Бензин',
    info: 'Полный бак на любой заправке города за наш счёт',
    img: slider3,
  },
  {
    id: 3,
    title: 'Обслуживание',
    info: 'Автомобиль проходит еженедельное ТО',
    img: slider4,
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  const handlePrevButton = () => {
    if (index === 0) {
      setIndex(SLIDER.length - 1);
    } else {
      setIndex((prevState) => prevState - 1);
    }
  };
  const handleNextButton = () => {
    if (index === 3) {
      setIndex(0);
    } else {
      setIndex((prevState) => prevState + 1);
    }
  };

  return (
    <section className={style.carousel}>
      <div className={style.slider}>
        <div className={style.container}>
          <div className={style.wrapper}>
            <div className={style.items}>
              {SLIDER.map(({ title, info, img, id }) => (
                <div
                  className={style.item}
                  key={id}
                  style={{ transform: `translateX(-${index}00%` }}
                >
                  <div className={style.content}>
                    <div className={style.title}>{title}</div>
                    <div className={style.info}>{info}</div>

                    <Button dataBackground={id} name="Подробнее" />
                  </div>

                  <img className={style.image} src={img} alt="Slider item" />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={style.prevBtn}
            onClick={handlePrevButton}
          >
            <img src={arrowLeft} alt="Arrow left" />
          </button>
          <button
            type="button"
            className={style.nextBtn}
            onClick={handleNextButton}
          >
            <img src={arrowRight} alt="Arrow right" />
          </button>
        </div>
        <div className={style.indicators}>
          <ul>
            {SLIDER.map(({ id }) => (
              <li key={id}>
                <Dot
                  className={classNames({ [style.active]: index === id })}
                  onClick={() => {
                    setIndex(id);
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Slider;
