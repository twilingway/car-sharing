import React from 'react';

import style from './car-type.module.scss';

function CarTypes() {
  return (
    <section className={style.type}>
      <fieldset id="group1" className={style.group}>
        <input type="radio" name="group1" />
        <span>Все</span>
        <input type="radio" name="group1" />
        <span>Эконом</span>
        <input type="radio" name="group1" />
        <span>Премиум</span>
      </fieldset>
    </section>
  );
}

export default CarTypes;
