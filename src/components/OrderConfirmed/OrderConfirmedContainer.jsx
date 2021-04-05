import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderSelect, setLatStepValidate } from '../../store/order';
import OrderConfirmed from './OrderConfirmed';

import style from './order-confirmed-container.module.scss';

function OrderConfirmedContainer() {
  const orderRedux = useSelector(getOrderSelect);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLatStepValidate(6));
  }, []);

  return (
    <div className={style.wrapper}>
      <OrderConfirmed order={orderRedux} />
    </div>
  );
}

export default OrderConfirmedContainer;
