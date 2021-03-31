import React from 'react';
import style from './Footer.module.scss';

function Footer() {
  return (
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
  );
}

export default Footer;
