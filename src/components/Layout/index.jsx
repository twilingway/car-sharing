import React, { useState } from 'react';
import cityIcon from '../../assets/city.svg';
import Button from '../Button';
import { ReactComponent as X } from '../../assets/x.svg';
import style from './style.module.scss';

function Layout() {
  const [city, setCity] = useState('');

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className={style.layout}>
      <header className={style.header}>
        <div className={style.logo}>Need for drive</div>
        <div className={style.city}>
          <img src={cityIcon} alt="City" />
          <input
            type="text"
            name="city"
            id="city"
            autoComplete="off"
            placeholder="Укажите город"
            value={city}
            onChange={handleChangeCity}
          />
          {city && <X className={style.clear} onClick={() => setCity('')} />}
        </div>
      </header>

      <main className={style.main}>
        <section className={style.title}>
          <div>Каршеринг</div>
          <div className={style.need}>Need for drive</div>
        </section>
        <section className={style.info}>
          <div>Поминутная аренда авто твоего города</div>
        </section>
        <section className={style.footers}>
          <Button name="Забронировать" />
        </section>
      </main>

      <footer className={style.footer}>
        <div className={style.container}>
          <div className={style.info}>
            <p>© 2016-2019 «Need for drive»</p>
          </div>
          <div className={style.phone}>
            <p>8 (495) 234-22-44</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
