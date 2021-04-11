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

  // const handleConfirmClick = () => {
  //   // console.log('handleConfirmClick :>> ');
  //   dispatch(setOrderStep(6));
  //   dispatch(setOrderLatStepValidate(5));

  //   const body = {
  //     orderStatusId: {
  //       name: 'temp',
  //       id: '607069ad2aed9a0b9b7e5530',
  //     },
  //     cityId: {
  //       name: 'Ульяновск',
  //       id: '5e26a128099b810b946c5d87',
  //     },

  //     pointId: {
  //       address: 'Нариманова 1, корп.2',
  //       name: 'База 007',
  //       id: '5e26a148099b810b946c5d88',
  //     },
  //     carId: {
  //       name: 'Hyundai, Tucson',
  //       id: '5ea16821099b810b946c62b8',
  //     },
  //     color: 'Любой',
  //     dateFrom: 0,
  //     dateTo: 0,
  //     rateId: {
  //       price: 1999,
  //       id: '5e26a0e2099b810b946c5d86',
  //     },
  //     price: 5000,
  //     isFullTank: true,
  //     isNeedChildChair: true,
  //     isRightWheel: true,
  //   };

  //   const data = requestHttp(
  //     'https://api-factory.simbirsoft1.com/api/db/order',
  //     'POST',
  //     body
  //   ).then((res) => console.log('dataRes :>> ', res));
  //   console.log('data :>> ', data);
  // };

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
