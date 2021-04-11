/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import arrowLeft from '../../assets/arrows-left.svg';
import arrowRight from '../../assets/arrows-right.svg';

import { ReactComponent as Dot } from '../../assets/dot.svg';

import style from './slider.module.scss';
import Button from '../Button';

function Slider({ data }) {
  const [index, setIndex] = useState(0);

  const handlePrevButton = () => {
    if (index === 0) {
      setIndex(data.length - 1);
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
              {data &&
                data.map(({ title, info, img, id }) => (
                  <div
                    className={style.item}
                    // key={id}
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
            {data &&
              data.map(({ id }) => (
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

Slider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
};

Slider.defaultProps = {
  data: [],
};

export default Slider;
