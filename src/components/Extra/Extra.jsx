import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterCheckbox from '../Filter/Filter-types/Filter-checkbox';
import FilterDate from '../Filter/Filter-types/Filter-date';
import FilterRadiobox from '../Filter/Filter-types/Filter-radiobox';

import {
  setAnything,
  setServices,
  getServicesSelect,
  getDateSelect,
  setDate,
  setLatStepValidate,
} from '../../store/order';

import style from './extra.module.scss';

const RADIOS = [
  {
    id: 0,
    name: 'Любой',
  },
  {
    id: 1,
    name: 'Красный',
  },
  {
    id: 2,
    name: 'Голубой',
  },
];

const TARIFF = [
  {
    id: 10,
    name: 'Поминутно, 7 ₽/мин',
  },
  {
    id: 11,
    name: 'На сутки, 1999 ₽/сутки',
  },
];

const SERVICES = [
  {
    id: 111,
    name: 'Полный бак',
    price: ', 500р',
  },
  {
    id: 222,
    name: 'Детское кресло',
    price: ', 200р',
  },
  {
    id: 333,
    name: 'Правый руль',
    price: ', 1600р',
  },
];

function Extra() {
  const orderServices = useSelector(getServicesSelect);
  const dateServices = useSelector(getDateSelect);
  const dispatch = useDispatch(setAnything);

  const handleRadioChange = (radio) => {
    dispatch(setAnything({ name: 'color', data: radio }));
  };

  const handleChangeDate = (date) => {
    console.log('date :>> ', date);
    dispatch(setDate({ name: 'dateEnd', data: date }));
  };

  const handleChangeServices = (services) => {
    dispatch(setServices({ name: services, data: !orderServices[services] }));
  };

  const handleSelectTariff = (tariff) => {
    dispatch(setAnything({ name: 'tariff', data: tariff }));
  };

  useEffect(() => {
    if (dateServices.dateEnd !== null && dateServices.dateEnd !== '') {
      dispatch(setLatStepValidate(3));
    } else {
      dispatch(setLatStepValidate(2));
    }
  }, [dateServices.dateEnd]);

  return (
    <div>
      <div className={style.color}>
        <FilterRadiobox
          id="sdas23123123asd"
          radios={RADIOS}
          onChangeRadio={handleRadioChange}
          groupName="Цвет"
          defaultChecked="Любой"
        />
      </div>
      <div className={style.date}>
        <FilterDate
          id="sdas23123123asd123"
          onChangeDate={handleChangeDate}
          filterName="Дата аренды"
        />
      </div>
      <div className={style.tariff}>
        <FilterRadiobox
          id="sdas23123123asd"
          radios={TARIFF}
          onChangeRadio={handleSelectTariff}
          groupName="Тариф"
          defaultChecked="На сутки, 1999 ₽/сутки"
          isColumn
        />
      </div>
      <div className={style.services}>
        <FilterCheckbox
          id="sdas23123123asd1231231"
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
