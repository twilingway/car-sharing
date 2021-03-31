import React from 'react';

import BreadCrumbsContainer from '../../components/Breadcrumbs';
import HeaderContainer from '../../components/Header';
import OrderContainer from '../../components/Order';
import OrderContentContainer from '../../components/OrderContent';

import style from './layout.module.scss';

function Layout() {
  return (
    <section className={style.body}>
      <HeaderContainer />
      <BreadCrumbsContainer />

      <main className={style.main}>
        <OrderContentContainer />
        <OrderContainer />
      </main>
    </section>
  );
}

export default Layout;
