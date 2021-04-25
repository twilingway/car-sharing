import React from 'react';
import { useSelector } from 'react-redux';
import { selectOrder } from '../../store/selectors/orderSelectors';

import OrderConfirmed from './OrderConfirmed';

function OrderConfirmedContainer() {
  const orderRedux = useSelector(selectOrder);
  return <OrderConfirmed order={orderRedux} />;
}

export default OrderConfirmedContainer;
