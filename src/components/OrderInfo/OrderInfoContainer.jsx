import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  setOrderStep,
  setOrderStatusId,
} from '../../store/reducers/orderReducer';
import { selectOrder } from '../../store/selectors/orderSelectors';
import { selectOrderStatus } from '../../store/selectors/orderStatusSelectors';
import { putOrder } from '../../store/thunks/orderThunks';

import OrderInfo from './OrderInfo';

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
  const history = useHistory();
  const orderRedux = useSelector(selectOrder);
  const orderStatusRedux = useSelector(selectOrderStatus);
  const dispatch = useDispatch();

  const handleOrderButtonClick = (id) => {
    if (orderStatusRedux.data.length > 0) {
      dispatch(
        setOrderStatusId(
          orderStatusRedux.data.find((item) => item.name === 'new')
        )
      );
    }
    if (id === 6) {
      const censelledOrder = {
        ...orderRedux,
        orderStatusId: orderStatusRedux.data.find(
          (item) => item.name === 'cancelled'
        ),
      };
      console.log('censelledOrder :>> ', censelledOrder);
      dispatch(putOrder(censelledOrder));

      localStorage.removeItem('orderId');
      history.replace('/order');
    } else {
      dispatch(setOrderStep(id + 1));
    }
  };

  return (
    <>
      <OrderInfo
        order={orderRedux}
        buttonName={BUTTONNAME}
        onClickHandler={handleOrderButtonClick}
      />
    </>
  );
}

export default OrderInfoContainer;
