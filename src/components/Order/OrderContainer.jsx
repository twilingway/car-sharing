import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderSelect, setStep } from '../../store/order';

import Order from './Order';

const BUTTONNAME = [
  {
    id: 1,
    name: 'Выбрать модель',
  },
  {
    id: 2,
    name: 'Дополнительно',
  },
  {
    id: 3,
    name: 'Итого',
  },
  {
    id: 4,
    name: 'Заказать',
  },
];

function OrderContainer() {
  const orderRedux = useSelector(getOrderSelect);
  const dispatch = useDispatch();

  const handleOrderButtonClick = (id) => {
    console.log('object id:>> ', id);
    dispatch(setStep(id + 1));
  };

  return (
    <Order
      order={orderRedux}
      buttonName={BUTTONNAME}
      onClickHandler={handleOrderButtonClick}
    />
  );
}

export default OrderContainer;
