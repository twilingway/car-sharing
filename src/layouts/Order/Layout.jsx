import React, { useState } from 'react';
import cn from 'classnames';
import BreadCrumbsContainer from '../../components/Breadcrumbs';
import Header from '../../components/Header';
import OrderInfoContainer from '../../components/OrderInfo';
import OrderContentContainer from '../../components/OrderContent';

import s from './layout.module.scss';
import Basket from '../../components/Basket';

function Layout() {
  const [isOrderInfoActive, setIsOrderInfoActive] = useState(false);
  return (
    <section className={s.body}>
      <div className={s.header}>
        <Header />
      </div>
      <div className={s.breadcrumbs}>
        <BreadCrumbsContainer />
      </div>

      <main className={s.main}>
        <section className={s.params}>
          <OrderContentContainer />
        </section>
        <section
          className={cn(s.info, {
            [s.orderInfoActive]: isOrderInfoActive === true,
          })}
        >
          <OrderInfoContainer />
        </section>
        <Basket
          onClick={() => setIsOrderInfoActive((prevState) => !prevState)}
        />
      </main>
    </section>
  );
}

export default Layout;
