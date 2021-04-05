import React from 'react';

import style from './car-type.module.scss';

function CarTypes() {
  return (
    <section className={style.type}>
      <fieldset id="group1" className={style.group}>
        <label htmlFor="input">
          <input type="radio" name="group1" value="Все" defaultChecked />
          <span>Все</span>
        </label>
        <input type="radio" name="group1" value="Эконом" />
        <span>Эконом</span>
        <input type="radio" name="group1" value="Премиум" />
        <span>Премиум</span>
      </fieldset>
    </section>
  );
}

export default CarTypes;
