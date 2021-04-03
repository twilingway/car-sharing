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
} from '../../store/order';

import style from './order-content-container.module.scss';

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
      </OrderContent>
    </section>
  );
}

export default OrderContentContainer;
