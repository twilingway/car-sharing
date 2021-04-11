import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterCheckbox from '../Filter/Filter-types/Filter-checkbox';
import FilterDate from '../Filter/Filter-types/Filter-date';
import FilterRadiobox from '../Filter/Filter-types/Filter-radiobox';

import {
  setOrderDateTo,
  setOrderDateFrom,
  setOrderColor,
  setOrderRate,
  getOrderCarColorsSelect,
} from '../../store/order';

import { getRateAsync, selectRate } from '../../store/rate';

import style from './extra.module.scss';
import { getRateTypeAsync, selectRateType } from '../../store/rateType';
import { getOrderStatusAsync } from '../../store/orderStatus';

// const RADIOS = [
//   {
//     id: 0,
//     name: 'Любой',
//   },
//   {
//     id: 1,
//     name: 'Красный',
//   },
//   {
//     id: 2,
//     name: 'Голубой',
//   },
// ];

// const TARIFF = [
//   {
//     id: 10,
//     name: 'Поминутно, 7 ₽/мин',
//   },
//   {
//     id: 11,
//     name: 'На сутки, 1999 ₽/сутки',
//   },
// ];

const SERVICES = [
  {
    isFullTank: false,
    name: 'Полный бак',
    price: ', 500р',
  },
  {
    isNeedChildChair: false,
    name: 'Детское кресло',
    price: ', 200р',
  },
  {
    isRightWheel: false,
    name: 'Правый руль',
    price: ', 1600р',
  },
];

function Extra() {
  // const orderRedux = useSelector(getOrderSelect);
  const rateRedux = useSelector(selectRate);
  const rateTypeRedux = useSelector(selectRateType);

  const orderCarColors = useSelector(getOrderCarColorsSelect);

  const dispatch = useDispatch();

  const handleColorChange = (color) => {
    dispatch(setOrderColor(color));
  };

  const handleChangeDateTo = (date) => {
    dispatch(setOrderDateTo(date));
  };

  const handleChangeDateFrom = (date) => {
    dispatch(setOrderDateFrom(date));
  };

  const handleChangeServices = (services) => {
    console.log('services :>> ', services);
    // dispatch(setServices({ name: services, data: !orderServices[services] }));
  };

  const handleSelectRate = (rate) => {
    dispatch(setOrderRate(rate));
  };

  // useEffect(() => {
  //   if (dateServices.dateEnd !== null && dateServices.dateEnd !== '') {
  //     dispatch(setOrderLatStepValidate(3));
  //   } else {
  //     dispatch(setOrderLatStepValidate(2));
  //   }
  // }, [dateServices.dateEnd]);

  useEffect(() => {
    dispatch(getRateAsync());
    dispatch(getRateTypeAsync());
    dispatch(getOrderStatusAsync());
  }, []);

  return (
    <div>
      <div className={style.color}>
        <FilterRadiobox
          radios={orderCarColors}
          onChangeRadio={handleColorChange}
          groupName="Цвет"
          group="color"
          defaultChecked="Любой"
          isAllRadio
          allRadioText="Любой"
          typeRadio="color"
        />
      </div>
      <div className={style.date}>
        <FilterDate
          onChangeDateTo={handleChangeDateTo}
          onChangeDateFrom={handleChangeDateFrom}
          filterName="Дата аренды"
        />
      </div>
      <div className={style.tariff}>
        <FilterRadiobox
          radios={rateTypeRedux.data}
          rate={rateRedux.data}
          onChangeRadio={handleSelectRate}
          groupName="Тариф"
          group="rate"
          defaultChecked="На сутки"
          isColumn
        />
      </div>
      <div className={style.services}>
        <FilterCheckbox
          checkboxs={SERVICES}
          onChangeBox={handleChangeServices}
          groupName="Доп услуги"
          defaultChecked="Полный бак"
          isColumn
        />
      </div>
    </div>
  );
}

export default Extra;
