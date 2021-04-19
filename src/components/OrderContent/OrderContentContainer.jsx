import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderContent from './OrderContent';

import CarListContainer from '../CarList/CarListContainer';
import {
  setOrderLatStepValidate,
  getOrderStepSelect,
  getOrderLastStepSelect,
  setOrderStep,
} from '../../store/order';

import ExtraContainer from '../Extra';
import TotalContainer from '../Total';
import Modal from '../Modal';
import OrderConfirmedContainer from '../OrderConfirmed';
import PointsContainer from '../Points';

function OrderContentContainer() {
  const orderStep = useSelector(getOrderStepSelect);
  const orderLastStep = useSelector(getOrderLastStepSelect);
  const dispatch = useDispatch();

  const handleReturnClick = () => {
    dispatch(setOrderLatStepValidate(4));
    dispatch(setOrderStep(4));
  };

  const handleConfirmClick = () => {
    dispatch(setOrderLatStepValidate(5));
    dispatch(setOrderStep(6));
  };

  return (
    <OrderContent>
      {orderStep === 1 && <PointsContainer />}
      {orderStep === 2 && <CarListContainer />}
      {orderStep === 3 && <ExtraContainer />}
      {(orderStep === 4 || orderStep === 5) && (
        <>
          <TotalContainer />
          {orderLastStep === 5 && (
            <Modal
              onConfirmClick={handleConfirmClick}
              onReturnClick={handleReturnClick}
            />
          )}
        </>
      )}

      {orderStep === 6 && (
        <>
          <OrderConfirmedContainer />
        </>
      )}
    </OrderContent>
  );
}

export default OrderContentContainer;
