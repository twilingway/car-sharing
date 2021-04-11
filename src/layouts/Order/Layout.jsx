import React from 'react';

import BreadCrumbsContainer from '../../components/Breadcrumbs';
import Header from '../../components/Header';
import OrderInfoContainer from '../../components/OrderInfo';
import OrderContentContainer from '../../components/OrderContent';

import style from './layout.module.scss';

function Layout() {
  return (
    <section className={style.body}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.breadcrumbs}>
        <BreadCrumbsContainer />
      </div>

      <main className={style.main}>
        <section className={style.orderContentContainer}>
          <OrderContentContainer />
        </section>
        <section className={style.orderContainer}>
          <OrderInfoContainer />
        </section>
      </main>
    </section>
  );
}

export default Layout;
