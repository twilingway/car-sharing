import React from 'react';
import Slider from './Slider';

import slider1 from '../../assets/slider/slider1.png';
import slider2 from '../../assets/slider/slider2.png';
import slider3 from '../../assets/slider/slider3.png';
import slider4 from '../../assets/slider/slider4.png';

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

function SliderContainer() {
  return <Slider data={SLIDER} />;
}

export default SliderContainer;
