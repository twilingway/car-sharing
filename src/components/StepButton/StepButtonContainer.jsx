/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setBasketStatus } from '../../store/reducers/basketReducer';
import {
  setOrderStatusId,
  setOrderStep,
} from '../../store/reducers/orderReducer';
import { selectOrderStatus } from '../../store/selectors/orderStatusSelectors';
import { putOrder } from '../../store/thunks/orderThunks';
import StepButton from './StepButton';

function StepButtonContainer({ order }) {
  const history = useHistory();
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
        ...order,
        orderStatusId: orderStatusRedux.data.find(
          (item) => item.name === 'cancelled'
        ),
      };

      dispatch(putOrder(censelledOrder));

      localStorage.removeItem('orderId');
      history.replace('/order');
    } else {
      dispatch(setOrderStep(id + 1));
      dispatch(setBasketStatus(false));
    }
  };

  return <StepButton onClickHandler={handleOrderButtonClick} order={order} />;
}

export default StepButtonContainer;
