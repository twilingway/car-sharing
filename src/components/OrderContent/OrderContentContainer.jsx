import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderContent from './OrderContent';
import Autocomplete from '../Autocomplete';
import YandexMapContainer from '../YandexMap';
import CarListContainer from '../CarList/CarListContainer';
import {
  getCitySelect,
  setCity,
  getStreetSelect,
  setStreet,
  setLatStepValidate,
  getOrderSelect,
  setStep,
} from '../../store/order';

import style from './order-content-container.module.scss';
import ExtraContainer from '../Extra';
import TotalContainer from '../Total';
import Modal from '../Modal';
import Button from '../Button';
import OrderConfirmedContainer from '../OrderConfirmed';

const options2 = [
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
];

const STREET = [
  { value: 'Улица 1', label: 'Улица 1' },
  { value: 'Улица 2', label: 'Улица 2' },
  { value: 'Улица 2', label: 'Улица 2' },
];

function OrderContentContainer() {
  // eslint-disable-next-line no-unused-vars

  const orderCity = useSelector(getCitySelect);
  const orderStreet = useSelector(getStreetSelect);

  const orderRedux = useSelector(getOrderSelect);
  const { step, lastStepValidate } = orderRedux;

  const dispatch = useDispatch();

  const handleSelectCity = (city) => {
    dispatch(setCity(city));
  };

  const handleSelectStreet = (street) => {
    dispatch(setStreet(street));
  };

  const handleConfirmClick = () => {
    // console.log('handleConfirmClick :>> ');
    dispatch(setStep(6));
    dispatch(setLatStepValidate(5));
  };

  const handleReturnClick = () => {
    // console.log('Return :>> ');
    dispatch(setLatStepValidate(4));
    dispatch(setStep(4));
  };

  useEffect(() => {
    if (orderCity !== '' && orderStreet !== '') {
      if (lastStepValidate < step) {
        dispatch(setLatStepValidate(step));
      }
    } else if (orderCity === '' || orderStreet === '') {
      dispatch(setLatStepValidate(0));
    }
  }, [orderCity, orderStreet]);

  return (
    <section className={style.wrapper}>
      <OrderContent>
        {step === 1 && (
          <>
            <div className={style.autocomplete}>
              <div className={style.city}>
                <Autocomplete
                  options={options2}
                  label="Город"
                  placeholder="Выберите город"
                  isBorder
                  onOptionSelect={handleSelectCity}
                  defaultOption={orderCity}
                />
              </div>
              <div className={style.street}>
                <Autocomplete
                  options={STREET}
                  label="Пункт выдачи"
                  placeholder="Начните вводить пункт ..."
                  isBorder
                  onOptionSelect={handleSelectStreet}
                  defaultOption={orderStreet}
                />
              </div>
            </div>

            <YandexMapContainer />
          </>
        )}
        {step === 2 && (
          <>
            {/* <div className={style.carList}> */}
            <CarListContainer />
            {/* </div> */}
          </>
        )}
        {step === 3 && (
          <>
            {/* <div className={style.carList}> */}
            <ExtraContainer />
            {/* </div> */}
          </>
        )}
        {step === 4 && (
          <>
            {/* <div className={style.carList}> */}
            <TotalContainer />
            {/* </div> */}
          </>
        )}
        {step === 5 && (
          <>
            {/* <div className={style.carList}> */}
            <Modal>
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
            </Modal>
            {/* </div> */}
          </>
        )}
        {step === 6 && (
          <>
            {/* <div className={style.carList}> */}
            <OrderConfirmedContainer />
            {/* </div> */}
          </>
        )}
      </OrderContent>
    </section>
  );
}

export default OrderContentContainer;
