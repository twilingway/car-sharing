import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderSelect, setStep } from '../../store/order';

import Order from './Order';

import style from './order-container.module.scss';

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
    dispatch(setStep(id + 1));
  };

  return (
    <div className={style.wrapper}>
      <Order
        order={orderRedux}
        buttonName={BUTTONNAME}
        onClickHandler={handleOrderButtonClick}
      />
    </div>
  );
}

export default OrderContainer;
