/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import city from '../../assets/city.svg';
import Button from '../Button';
import style from './style.module.scss';

function Layout() {
  return (
    <div className={style.layout}>
      <header className={style.header}>
        <div className={style.logo}>Need for drive</div>
        <div className={style.city}>
          <img src={city} alt="City" />
          <p>Ульяновск</p>
        </div>
      </header>

      <main className={style.main}>
        <section className={style.title}>
          <div>Каршеринг</div>
          <div className={style.need}>Need for drive</div>
        </section>
        <section className={style.footer}>
          <div>Поминутная аренда авто твоего города</div>
          <Button name="Забронировать" />
        </section>
      </main>

      <footer className={style.footer}>
        <div className={style.info}>
          <p>© 2016-2019 «Need for drive»</p>
        </div>
        <div className={style.phone}>
          <p>8 (495) 234-22-44</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
