import React from 'react';
import { useHistory } from 'react-router-dom';

import HeaderContainer from '../../components/Header';
import FooterContainer from '../../components/Footer';
import Button from '../../components/Button';

import style from './startscreen.module.scss';

function StartScreenLayout() {
  const history = useHistory();

  const handleOnClick = () => {
    history.push('/order');
  };
  return (
    <div className={style.layout}>
      <HeaderContainer />

      <main className={style.main}>
        <section className={style.title}>
          <div>Каршеринг</div>
          <div className={style.need}>Need for drive</div>
        </section>
        <section className={style.info}>
          <div>Поминутная аренда авто твоего города</div>
        </section>
        <section className={style.footers}>
          <Button name="Забронировать" onClickHandler={handleOnClick} />
        </section>
      </main>

      <FooterContainer />
    </div>
  );
}

export default StartScreenLayout;
