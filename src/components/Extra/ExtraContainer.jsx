import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStepValidator from '../../hooks/useStepValidator';
import {
  getOrderCarColorsSelect,
  getOrderSelect,
  setOrderColor,
  setOrderDateFrom,
  setOrderDateTo,
  setOrderRate,
  setOrderService,
} from '../../store/order';
import { getOrderStatusAsync } from '../../store/orderStatus';
import { getRateAsync, selectRate } from '../../store/rate';
import { getRateTypeAsync, selectRateType } from '../../store/rateType';
import Extra from './Extra';

function ExtraContainer() {
  const dispatch = useDispatch();
  const orderRedux = useSelector(getOrderSelect);
  const rateRedux = useSelector(selectRate);
  const rateTypeRedux = useSelector(selectRateType);

  const orderCarColors = useSelector(getOrderCarColorsSelect);

  const { checkLastStepValidate } = useStepValidator();

  const handleFilterStartPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const handleFilterEndPassedTime = (time) => {
    const selectedDate = new Date(time);
    return orderRedux.dateFrom?.getTime() < selectedDate.getTime();
  };

  const handleColorChange = (color) => {
    if (color.name) {
      dispatch(setOrderColor(color.name));
    } else {
      dispatch(setOrderColor(color));
    }
  };

  const handleChangeDateFrom = (date) => {
    const currentDate = new Date();

    if (date && currentDate > date) {
      dispatch(setOrderDateFrom(currentDate));
    } else {
      dispatch(setOrderDateFrom(date));
    }

    if (
      (orderRedux?.dateFrom?.getTime() || currentDate) >=
      orderRedux?.dateTo?.getTime()
    ) {
      dispatch(setOrderDateTo(null));
    }
    if (!date) {
      dispatch(setOrderDateTo(null));
    }
  };

  const handleChangeDateTo = (date) => {
    if (date && orderRedux?.dateFrom > date) {
      dispatch(setOrderDateTo(orderRedux?.dateFrom));
    } else {
      dispatch(setOrderDateTo(date));
    }
  };

  const handleChangeServices = (services) => {
    dispatch(setOrderService(services));
  };

  const handleSelectRate = (rate) => {
    dispatch(setOrderRate(rate));
  };

  useEffect(() => {
    dispatch(getRateAsync());
    dispatch(getRateTypeAsync());
    dispatch(getOrderStatusAsync());
  }, []);

  useEffect(() => {
    checkLastStepValidate();

    // TODO Сделать калькулятор цены

    // const date1 = new Date(orderRedux.dateFrom);
    // const date2 = new Date(orderRedux.dateTo);
    // const diff = date2 - date1;
    // const milliseconds = diff;

    // const seconds = milliseconds / 1000;

    // const minutes = seconds / 60;

    // const hours = minutes / 60;

    // const days = hours / 24;

    // console.log('date1 :>> ', date1);
    // console.log('date2 :>> ', date2);
    // console.log('date2 - date1 :>> ', `${days}д ${Math.ceil(hours % 24)}ч`);
  }, [orderRedux.dateFrom, orderRedux.dateTo]);

  return (
    <Extra
      orderRedux={orderRedux}
      rateRedux={rateRedux}
      rateTypeRedux={rateTypeRedux}
      orderCarColors={orderCarColors}
      onColorChange={handleColorChange}
      onFilterStartPassedTime={handleFilterStartPassedTime}
      onFilterEndPassedTime={handleFilterEndPassedTime}
      onChangeDateFrom={handleChangeDateFrom}
      onChangeDateTo={handleChangeDateTo}
      onSelectRate={handleSelectRate}
      onChangeServices={handleChangeServices}
    />
  );
}

export default ExtraContainer;
