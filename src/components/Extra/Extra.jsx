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
  setOrderService,
  getOrderSelect,
} from '../../store/order';

import { getRateAsync, selectRate } from '../../store/rate';

import style from './extra.module.scss';
import { getRateTypeAsync, selectRateType } from '../../store/rateType';
import { getOrderStatusAsync } from '../../store/orderStatus';
import useStepValidator from '../../hooks/useStepValidator';

function Extra() {
  // const orderRedux = useSelector(getOrderSelect);
  const rateRedux = useSelector(selectRate);
  const rateTypeRedux = useSelector(selectRateType);

  const orderCarColors = useSelector(getOrderCarColorsSelect);

  const orderRedux = useSelector(getOrderSelect);

  const dispatch = useDispatch();

  const { checkLastStepValidate } = useStepValidator();

  const handleColorChange = (color) => {
    dispatch(setOrderColor(color.id));
  };

  const handleChangeDateTo = (date) => {
    dispatch(setOrderDateTo(date));
  };

  const handleChangeDateFrom = (date) => {
    dispatch(setOrderDateFrom(date));
  };

  const handleChangeServices = (services) => {
    console.log('services :>> ', services);
    dispatch(setOrderService(services));
  };

  const handleSelectRate = (rate) => {
    console.log('rate :>> ', rate);
    dispatch(setOrderRate(rate));
  };

  useEffect(() => {
    checkLastStepValidate();
    const date1 = new Date(orderRedux.dateFrom);
    const date2 = new Date(orderRedux.dateTo);
    const diff = date2 - date1;

    const milliseconds = diff;

    const seconds = milliseconds / 1000;

    const minutes = seconds / 60;

    const hours = minutes / 60;

    const days = hours / 24;

    console.log('date1 :>> ', date1);
    console.log('date2 :>> ', date2);
    console.log('date2 - date1 :>> ', `${days}д ${Math.ceil(hours % 24)}ч`);
  }, [orderRedux.dateFrom, orderRedux.dateTo]);

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
          defaultChecked={orderRedux.color ?? 'Любой'}
          isAllRadio
          allRadioText="Любой"
          typeRadio="color"
        />
      </div>
      <div className={style.date}>
        <FilterDate
          onChangeDateTo={handleChangeDateTo}
          dateFrom={orderRedux.dateFrom}
          dateTo={orderRedux.dateTo}
          onChangeDateFrom={handleChangeDateFrom}
          filterName="Дата аренды"
        />
      </div>
      <div className={style.tariff}>
        {!rateTypeRedux.isLoading && (
          <FilterRadiobox
            radios={rateTypeRedux.data}
            rate={rateRedux.data}
            onChangeRadio={handleSelectRate}
            groupName="Тариф"
            group="rate"
            defaultChecked={orderRedux.rateId.name ?? 'На сутки'}
            isColumn
          />
        )}
      </div>
      <div className={style.services}>
        <FilterCheckbox
          checkboxs={[
            {
              id: 'isFullTank',
              isFullTank: orderRedux.isFullTank,
              name: 'Полный бак',
              price: ', 500р',
            },
            {
              id: 'isNeedChildChair',
              isNeedChildChair: orderRedux.isNeedChildChair,
              name: 'Детское кресло',
              price: ', 200р',
            },
            {
              id: 'isRightWheel',
              isRightWheel: orderRedux.isRightWheel,
              name: 'Правый руль',
              price: ', 1600р',
            },
          ]}
          onChangeBox={handleChangeServices}
          groupName="Доп услуги"
          defaultChecked={orderRedux.isFullTank === null && 'Полный бак'}
          isColumn
        />
      </div>
    </div>
  );
}

export default Extra;
