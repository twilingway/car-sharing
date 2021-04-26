/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OrderContent from './OrderContent';

import CarListContainer from '../CarList/CarListContainer';
import {
  selectOrderStep,
  selectOrderLastStep,
  selectOrder,
} from '../../store/selectors/orderSelectors';
import {
  setOrderLatStepValidate,
  setOrderStep,
} from '../../store/reducers/orderReducer';

import ExtraContainer from '../Extra';
import TotalContainer from '../Total';
import Modal from '../Modal';
import OrderConfirmedContainer from '../OrderConfirmed';
import PointsContainer from '../Points';
import postOrder from '../../store/thunks/orderThunks';

function OrderContentContainer() {
  const history = useHistory();
  const orderReducer = useSelector(selectOrder);
  const orderStep = useSelector(selectOrderStep);
  const orderLastStep = useSelector(selectOrderLastStep);
  const dispatch = useDispatch();

  const handleReturnClick = () => {
    dispatch(setOrderLatStepValidate(4));
    dispatch(setOrderStep(4));
  };

  const handleConfirmClick = () => {
    dispatch(postOrder(orderReducer));
  };

  useEffect(() => {
    if (orderReducer.id && orderReducer.orderStatusId.name === 'new') {
      localStorage.setItem('orderId', orderReducer.id);
      history.push(`/order/${orderReducer.id}`);
      dispatch(setOrderStep(6));
      dispatch(setOrderLatStepValidate(6));
    }
  }, [orderReducer.id]);

  useEffect(() => {
    if (orderReducer.isError) {
      dispatch(setOrderLatStepValidate(0));
      dispatch(setOrderStep(1));
    }
  }, [orderReducer.isError]);

  function selectStep() {
    switch (orderStep) {
      case 1:
        return <PointsContainer />;
      case 2:
        return <CarListContainer />;
      case 3:
        return <ExtraContainer />;
      case 4:
      case 5:
        return (
          <>
            <TotalContainer />
            {orderStep === 5 && (
              <Modal
                onConfirmClick={handleConfirmClick}
                onReturnClick={handleReturnClick}
              />
            )}
          </>
        );
      case 6:
        return orderReducer.id && <OrderConfirmedContainer />;
      default:
        return null;
    }
  }

  return <OrderContent>{selectStep()}</OrderContent>;
}

export default OrderContentContainer;
