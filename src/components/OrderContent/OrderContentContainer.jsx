/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderContent from './OrderContent';
import Autocomplete from '../Autocomplete';
import YandexMapContainer from '../YandexMap';
import CarListContainer from '../CarList/CarListContainer';
import {
  getOrderCitySelect,
  getOrderPointSelect,
  setOrderPoint,
  setOrderLatStepValidate,
  getOrderSelect,
  // setOrderStep,
  setOrderCity,
  getOrderStepSelect,
  getOrderLastStepSelect,
  setOrderStep,
} from '../../store/order';

import ExtraContainer from '../Extra';
import TotalContainer from '../Total';
import Modal from '../Modal';
import Button from '../Button';
import OrderConfirmedContainer from '../OrderConfirmed';
import { getCityAsync, getPointsAsync, selectPoint } from '../../store/point';
import Points from '../Points';

// import requestHttp from '../../Api/http';

function OrderContentContainer() {
  // eslint-disable-next-line no-unused-vars

  // const orderRedux = useSelector(getOrderSelect);

  const orderStep = useSelector(getOrderStepSelect);
  const orderLastStep = useSelector(getOrderLastStepSelect);
  const dispatch = useDispatch();

  const handleReturnClick = () => {
    console.log('Return :>> ');
    dispatch(setOrderLatStepValidate(4));
    dispatch(setOrderStep(4));
  };

  const handleConfirmClick = () => {
    dispatch(setOrderLatStepValidate(5));
    dispatch(setOrderStep(6));
  };

  return (
    <OrderContent>
      {orderStep === 1 && <Points />}
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
          {/* <div className={style.carList}> */}
          <OrderConfirmedContainer />
          {/* </div> */}
        </>
      )}
    </OrderContent>
  );
}

export default OrderContentContainer;
