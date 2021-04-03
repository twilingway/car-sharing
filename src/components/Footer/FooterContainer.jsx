import React from 'react';
import Footer from './Footer';

import style from './footer-container.module.scss';

function FooterContainer() {
  return (
    <footer className={style.wrapper}>
      <Footer />
    </footer>
  );
}

export default FooterContainer;
