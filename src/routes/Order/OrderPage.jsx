import React from 'react';
import Layout from '../../layouts/Order';

import style from './order-page.module.scss';

function OrderPage() {
  return (
    <section className={style.container}>
      <Layout />
    </section>
  );
}

export default OrderPage;
