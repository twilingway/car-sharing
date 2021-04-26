import React from 'react';
import { useSelector } from 'react-redux';

import { selectOrder } from '../../store/selectors/orderSelectors';

import OrderInfo from './OrderInfo';

function OrderInfoContainer() {
  const orderRedux = useSelector(selectOrder);

  return (
    <>
      <OrderInfo order={orderRedux} />
    </>
  );
}

export default OrderInfoContainer;
