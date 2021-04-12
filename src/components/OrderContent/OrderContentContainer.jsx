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
} from '../../store/order';

import ExtraContainer from '../Extra';
import TotalContainer from '../Total';
// import Modal from '../Modal';
// import Button from '../Button';
// import OrderConfirmedContainer from '../OrderConfirmed';
import { getCityAsync, getPointsAsync, selectPoint } from '../../store/point';
import Points from '../Points';

// import requestHttp from '../../Api/http';

function OrderContentContainer() {
  // eslint-disable-next-line no-unused-vars

  // const orderRedux = useSelector(getOrderSelect);

  const orderStep = useSelector(getOrderStepSelect);

  const dispatch = useDispatch();

  const handleReturnClick = () => {
    // console.log('Return :>> ');
    // dispatch(setOrderLatStepValidate(4));
    // dispatch(setOrderStep(4));
  };

  return (
    <OrderContent>
      {orderStep === 1 && <Points />}
      {orderStep === 2 && <CarListContainer />}
      {orderStep === 3 && <ExtraContainer />}
      {orderStep === 4 && <TotalContainer />}
      {orderStep === 5 && (
        <>
          {/* <div className={style.carList}> */}
          {/* <Modal>
              <div className={style.confirm}>
                <div className={style.title}>Подтвердить заказ</div>
                <div className={style.buttons}>
                  <div className={style.buttonConfirm}>
                    <Button
                      name="Подтвердить"
                      onClickHandler={handleConfirmClick}
                    />
                  </div>
                  <div className={style.buttonReturn}>
                    <Button
                      name="Вернуться"
                      onClickHandler={handleReturnClick}
                    />
                  </div>
                </div>
              </div>
            </Modal> */}
          {/* </div> */}
        </>
      )}
      {orderStep === 6 && (
        <>
          {/* <div className={style.carList}> */}
          {/* <OrderConfirmedContainer /> */}
          {/* </div> */}
        </>
      )}
    </OrderContent>
  );
}

export default OrderContentContainer;
