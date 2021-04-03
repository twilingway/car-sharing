import React from 'react';
import style from './footer.module.scss';

function Footer() {
  return (
    <section className={style.container}>
      {/* <div className={style.container}> */}
      <div className={style.info}>
        <p>© 2016-2019 «Need for drive»</p>
      </div>
      <div className={style.phone}>
        <p>8 (495) 234-22-44</p>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Footer;
