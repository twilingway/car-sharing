import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getOrderLastStepSelect,
  getOrderStepSelect,
  setOrderStep,
} from '../../store/order';
import BreadCrumbs from './BreadCrumbs';

const CRUMBS = [
  {
    id: 1,
    name: 'Местоположение',
  },
  {
    id: 2,
    name: 'Модель',
  },
  {
    id: 3,
    name: 'Дополнительно',
  },
  {
    id: 4,
    name: 'Итого',
  },
];

const orderNumber = [
  {
    id: 6,
    name: 'Заказ номер RU58491823',
  },
];

function BreadCrumbsContainer() {
  const lastStepValidate = useSelector(getOrderLastStepSelect);
  const step = useSelector(getOrderStepSelect);
  const dispatch = useDispatch();

  const handleSetStepClick = (id) => {
    dispatch(setOrderStep(id));
  };

  return (
    <BreadCrumbs
      crumbs={step === 6 ? orderNumber : CRUMBS}
      lastStep={lastStepValidate}
      step={step}
      onStepClick={handleSetStepClick}
    />
  );
}

export default BreadCrumbsContainer;
