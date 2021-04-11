import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderSelect, setOrderStep } from '../../store/order';

import OrderInfo from './OrderInfo';

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
  {
    id: 5,
    name: 'Заказать',
  },
  {
    id: 6,
    name: 'Отменить',
  },
];

function OrderInfoContainer() {
  const orderRedux = useSelector(getOrderSelect);
  const dispatch = useDispatch();

  const handleOrderButtonClick = (id) => {
    dispatch(setOrderStep(id + 1));
  };

  return (
    <div className={style.wrapper}>
      <OrderInfo
        order={orderRedux}
        buttonName={BUTTONNAME}
        onClickHandler={handleOrderButtonClick}
      />
    </div>
  );
}

export default OrderInfoContainer;
